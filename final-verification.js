// final-verification.js
// Final verification of the project structure for Vercel deployment

const fs = require('fs');
const path = require('path');

console.log('=== Final Project Structure Verification ===');

let allTestsPassed = true;

// Check 1: Project structure
console.log('\n1. Verifying project structure...');
const requiredPaths = [
  'apps/web',
  'apps/web/api',
  'apps/web/api/contact.ts',
  'apps/web/src',
  'apps/web/package.json',
  'vercel.json'
];

for (const requiredPath of requiredPaths) {
  const fullPath = path.join(__dirname, requiredPath);
  if (fs.existsSync(fullPath)) {
    console.log(`   ✓ ${requiredPath} exists`);
  } else {
    console.log(`   ✗ ${requiredPath} does not exist`);
    allTestsPassed = false;
  }
}

// Check 2: Vercel configuration
console.log('\n2. Verifying vercel.json configuration...');
const vercelConfigPath = path.join(__dirname, 'vercel.json');
if (fs.existsSync(vercelConfigPath)) {
  try {
    const config = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8'));
    
    // Check for forbidden properties
    const forbiddenProperties = ['rootDirectory'];
    let hasForbiddenProperties = false;
    
    for (const prop of forbiddenProperties) {
      if (config[prop] !== undefined) {
        console.log(`   ✗ vercel.json contains forbidden property: ${prop}`);
        hasForbiddenProperties = true;
        allTestsPassed = false;
      }
    }
    
    if (!hasForbiddenProperties) {
      console.log('   ✓ vercel.json does not contain forbidden properties');
    }
    
    // Check for required properties
    if (config.rewrites && Array.isArray(config.rewrites)) {
      console.log('   ✓ vercel.json has rewrites configuration');
    } else {
      console.log('   ✗ vercel.json is missing rewrites configuration');
      allTestsPassed = false;
    }
  } catch (error) {
    console.log(`   ✗ Could not parse vercel.json: ${error.message}`);
    allTestsPassed = false;
  }
} else {
  console.log('   ✗ vercel.json does not exist');
  allTestsPassed = false;
}

// Check 3: API route content
console.log('\n3. Verifying API route content...');
const contactApiPath = path.join(__dirname, 'apps/web/api/contact.ts');
if (fs.existsSync(contactApiPath)) {
  const content = fs.readFileSync(contactApiPath, 'utf8');
  
  const requiredImports = ['@neondatabase/serverless', '@vercel/node'];
  const requiredFunctions = ['handler'];
  
  let contentValid = true;
  
  for (const importName of requiredImports) {
    if (content.includes(importName)) {
      console.log(`   ✓ API includes required import: ${importName}`);
    } else {
      console.log(`   ✗ API missing required import: ${importName}`);
      contentValid = false;
      allTestsPassed = false;
    }
  }
  
  for (const functionName of requiredFunctions) {
    if (content.includes(functionName)) {
      console.log(`   ✓ API includes required function: ${functionName}`);
    } else {
      console.log(`   ✗ API missing required function: ${functionName}`);
      contentValid = false;
      allTestsPassed = false;
    }
  }
  
  if (contentValid) {
    console.log('   ✓ API route content is valid');
  }
} else {
  console.log('   ✗ API route file does not exist');
  allTestsPassed = false;
}

console.log('\n=== Final Summary ===');
if (allTestsPassed) {
  console.log('✓ All verification tests passed!');
  console.log('\nYour project structure is now correctly configured for Vercel deployment.');
  console.log('\nImportant deployment notes:');
  console.log('- In your Vercel project settings, set the Root Directory to "apps/web"');
  console.log('- Ensure the DATABASE_URL environment variable is set in Vercel');
  console.log('- The contact form should now work correctly after deployment');
}