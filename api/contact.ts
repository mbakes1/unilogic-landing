import { neon } from '@neondatabase/serverless';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, department, message } = req.body;

      // Basic validation
      if (!firstName || !lastName || !email || !department || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }

      // Get DATABASE_URL from environment variables
      const DATABASE_URL = process.env.DATABASE_URL;
      
      if (!DATABASE_URL) {
        console.error('DATABASE_URL is not set in the environment variables');
        return res.status(500).json({ message: 'Server configuration error: DATABASE_URL not set' });
      }

      // Log the connection attempt (without exposing sensitive data)
      console.log('Attempting to connect to database...');
      
      const sql = neon(DATABASE_URL);

      // Create the table if it doesn't exist (this will only run once)
      try {
        console.log('Creating contact_submissions table if it does not exist...');
        await sql`
          CREATE TABLE IF NOT EXISTS contact_submissions (
            id SERIAL PRIMARY KEY,
            "firstName" VARCHAR(255),
            "lastName" VARCHAR(255),
            email VARCHAR(255),
            department VARCHAR(255),
            message TEXT,
            "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
        `;
        console.log('Table creation check completed');
      } catch (tableError) {
        console.error('Error creating table:', tableError);
        // Continue even if table creation fails, as it might already exist
      }

      // Insert the data into the table
      console.log('Inserting contact submission data...');
      const result = await sql`
        INSERT INTO contact_submissions ("firstName", "lastName", email, department, message)
        VALUES (${firstName}, ${lastName}, ${email}, ${department}, ${message})
        RETURNING id;
      `;

      if (result.length > 0) {
        console.log('Form submitted successfully with ID:', result[0].id);
        res.status(200).json({ 
          message: 'Form submitted successfully',
          id: result[0].id
        });
      } else {
        throw new Error('Insert operation did not return expected result');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Handle specific database errors
      if (error instanceof Error) {
        if (error.message.includes('duplicate key')) {
          return res.status(409).json({ message: 'Duplicate submission detected' });
        }
        
        // Check for connection errors
        if (error.message.includes('connect') || error.message.includes('database')) {
          return res.status(500).json({ message: 'Database connection error' });
        }
      }
      
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
