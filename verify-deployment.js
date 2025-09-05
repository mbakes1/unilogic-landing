// verify-deployment.js
// Script to verify deployment configuration

const fs = require('fs');
const path = require('path');
const { neon } = require('@neondatabase/serverless');

console.log('=== Deployment Configuration Verification ===');

// Check 1: Environment files
console.log('\n1. Checking environment files...');
const envFiles = [
  '.env',
  '.env.local',
  'apps/web/.env',
  'apps/web/.env.local'
];

for (const envFile of envFiles) {
  const fullPath = path.join(__dirname, envFile);
  if (fs.existsSync(fullPath)) {
    console.log(`   ✓ ${envFile} exists`);
    
    // Check for DATABASE_URL
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes('DATABASE_URL')) {
      console.log(`     ✓ Contains DATABASE_URL`);
      
      // Check format
      const match = content.match(/DATABASE_URL=(.*)/);
      if (match && match[1]) {
        const dbUrl = match[1].trim();
        if (dbUrl.startsWith("psql '")) {
          console.log(`     ✗ Incorrect format: starts with "psql '"`);
        } else {
          console.log(`     ✓ Correct format`);
        }
      }
    } else {
      console.log(`     - No DATABASE_URL found`);
    }
  } else {
    console.log(`   - ${envFile} does not exist`);
  }
}

// Check 2: API route
console.log('\n2. Checking API route...');
const apiRoute = 'apps/web/api/contact.ts';
const apiPath = path.join(__dirname, apiRoute);
if (fs.existsSync(apiPath)) {
  console.log(`   ✓ ${apiRoute} exists`);
  
  const content = fs.readFileSync(apiPath, 'utf8');
  if (content.includes('process.env.DATABASE_URL')) {
    console.log(`   ✓ Uses process.env.DATABASE_URL`);
  } else {
    console.log(`   ✗ Does not use process.env.DATABASE_URL`);
  }
} else {
  console.log(`   ✗ ${apiRoute} does not exist`);
}

// Check 3: Vercel configuration
console.log('\n3. Checking Vercel configuration...');
const vercelConfig = 'vercel.json';
const vercelPath = path.join(__dirname, vercelConfig);
if (fs.existsSync(vercelPath)) {
  console.log(`   ✓ ${vercelConfig} exists`);
  
  const content = fs.readFileSync(vercelPath, 'utf8');
  try {
    const config = JSON.parse(content);
    
    if (config.rewrites) {
      console.log(`   ✓ Contains rewrites configuration`);
    } else {
      console.log(`   - No rewrites configuration`);
    }
  } catch (error) {
    console.log(`   ✗ Could not parse ${vercelConfig}: ${error.message}`);
  }
} else {
  console.log(`   - ${vercelConfig} does not exist`);
}

console.log('\n=== Summary ===');
console.log('To fix the database connection error in production:');
console.log('1. Go to your Vercel project settings');
console.log('2. Navigate to the "Environment Variables" section');
console.log('3. Add a new environment variable:');
console.log('   - Name: DATABASE_URL');
console.log('   - Value: postgresql://neondb_owner:npg_rP2EXKRzh8oA@ep-proud-breeze-a24g1jyx-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
console.log('   - Make sure it does NOT start with "psql \'" and has no extra quotes');
console.log('4. Redeploy your application');

console.log('\nNote: The database credentials in this repository are for testing only.');
console.log('For production, you should use secure credentials and consider using Vercel\'s secret management.');