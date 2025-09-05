import { neon } from '@neondatabase/serverless';

// This is a test script to verify the database connection
// Run this with: npx ts-node test-db-connection.ts

async function testDatabaseConnection() {
  try {
    console.log('Testing database connection...');
    
    // Get DATABASE_URL from environment variables
    const DATABASE_URL = process.env.DATABASE_URL;
    
    if (!DATABASE_URL) {
      console.error('DATABASE_URL is not set in the environment variables');
      process.exit(1);
    }

    console.log('Creating neon client...');
    const sql = neon(DATABASE_URL);

    console.log('Testing connection with a simple query...');
    const result = await sql`SELECT NOW() as now`;
    
    console.log('Database connection successful!');
    console.log('Current time from database:', result[0].now);
    
    console.log('Testing table creation...');
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions_test (
        id SERIAL PRIMARY KEY,
        test_field VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    console.log('Table creation test successful!');
    
    console.log('Testing data insertion...');
    const insertResult = await sql`
      INSERT INTO contact_submissions_test (test_field)
      VALUES ('test')
      RETURNING id;
    `;
    
    console.log('Data insertion test successful! Inserted ID:', insertResult[0].id);
    
    console.log('Testing data retrieval...');
    const selectResult = await sql`
      SELECT * FROM contact_submissions_test WHERE id = ${insertResult[0].id};
    `;
    
    console.log('Data retrieval test successful!', selectResult[0]);
    
    console.log('Cleaning up test data...');
    await sql`DELETE FROM contact_submissions_test WHERE id = ${insertResult[0].id};`;
    
    console.log('All tests passed!');
  } catch (error) {
    console.error('Database connection test failed:', error);
    process.exit(1);
  }
}

testDatabaseConnection();