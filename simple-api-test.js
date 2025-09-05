// simple-api-test.js
// Simple test to verify API structure

const fs = require('fs');
const path = require('path');

console.log('=== API Structure Verification ===');

// Check 1: API directory exists in web app
const apiDir = path.join(__dirname, 'apps', 'web', 'api');
console.log('1. Checking if API directory exists...');
if (fs.existsSync(apiDir)) {
  console.log('   ✓ PASS: API directory exists');
} else {
  console.log('   ✗ FAIL: API directory does not exist');
  process.exit(1);
}

// Check 2: contact.ts file exists
const contactFile = path.join(apiDir, 'contact.ts');
console.log('2. Checking if contact.ts exists...');
if (fs.existsSync(contactFile)) {
  console.log('   ✓ PASS: contact.ts file exists');
} else {
  console.log('   ✗ FAIL: contact.ts file does not exist');
  process.exit(1);
}

// Check 3: vercel.json configuration
const vercelConfig = path.join(__dirname, 'vercel.json');
console.log('3. Checking vercel.json configuration...');
if (fs.existsSync(vercelConfig)) {
  console.log('   ✓ PASS: vercel.json exists');
  
  try {
    const config = JSON.parse(fs.readFileSync(vercelConfig, 'utf8'));
    
    if (config.rootDirectory === 'apps/web') {
      console.log('   ✓ PASS: rootDirectory is correctly set to apps/web');
    } else {
      console.log('   ✗ FAIL: rootDirectory is not set to apps/web');
      console.log('   Expected: apps/web');
      console.log('   Actual:', config.rootDirectory);
    }
    
    if (config.rewrites && config.rewrites.length > 0) {
      console.log('   ✓ PASS: rewrites are configured');
    } else {
      console.log('   ✗ FAIL: rewrites are not configured');
    }
  } catch (error) {
    console.log('   ✗ FAIL: Could not parse vercel.json:', error.message);
  }
} else {
  console.log('   ✗ FAIL: vercel.json does not exist');
}

console.log('\n=== Summary ===');
console.log('All checks completed. If all tests passed, your API structure should be correct for Vercel deployment.');