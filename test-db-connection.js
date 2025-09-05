// test-db-connection.js
// Simple JavaScript script to test database connection

const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

async function testDatabaseConnection() {
  try {
    console.log('Testing database connection...');
    
    // Get DATABASE_URL from environment variables
    const DATABASE_URL = process.env.DATABASE_URL;
    
    if (!DATABASE_URL) {
      console.error('DATABASE_URL is not set in the environment variables');
      process.exit(1);
    }

    // Check if the DATABASE_URL has the correct format
    if (DATABASE_URL.startsWith("psql '")) {
      console.error('DATABASE_URL has incorrect format. It should not start with "psql \'".');
      console.error('Current value:', DATABASE_URL);
      process.exit(1);
    }

    console.log('DATABASE_URL format check passed');
    
    // Show the database host (without credentials)
    try {
      const url = new URL(DATABASE_URL);
      console.log('Database host:', url.hostname);
      console.log('Database name:', url.pathname.substring(1));
    } catch (urlError) {
      console.error('Could not parse DATABASE_URL:', urlError);
    }

    console.log('Creating neon client...');
    const sql = neon(DATABASE_URL);

    console.log('Testing connection with a simple query...');
    const result = await sql`SELECT NOW() as now`;
    
    console.log('Database connection successful!');
    console.log('Current time from database:', result[0].now);
    
    console.log('All tests passed!');
  } catch (error) {
    console.error('Database connection test failed:', error);
    
    // Provide more specific error information
    if (error instanceof Error) {
      if (error.message.includes('ENOTFOUND')) {
        console.error('DNS lookup failed - check if the database host is correct');
      } else if (error.message.includes('ECONNREFUSED')) {
        console.error('Connection refused - check if the database is accepting connections');
      } else if (error.message.includes('authentication')) {
        console.error('Authentication failed - check username and password');
      } else if (error.message.includes('SSL')) {
        console.error('SSL connection error - check SSL configuration');
      }
    }
    
    process.exit(1);
  }
}

testDatabaseConnection();