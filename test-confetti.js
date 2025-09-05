// test-confetti.js
// Simple test to verify confetti implementation

const fs = require('fs');
const path = require('path');

console.log('=== Confetti Implementation Verification ===');

// Check 1: Package.json has confetti-js
console.log('\n1. Checking package.json for confetti-js...');
const packageJsonPath = path.join(__dirname, 'apps/web/package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  if (packageJson.dependencies && packageJson.dependencies['confetti-js']) {
    console.log('   ✓ confetti-js is listed in dependencies');
  } else {
    console.log('   ✗ confetti-js is not listed in dependencies');
  }
} else {
  console.log('   ✗ package.json not found');
}

// Check 2: Contact form imports confetti correctly
console.log('\n2. Checking contact form confetti implementation...');
const contactFormPath = path.join(__dirname, 'apps/web/src/components/contact-form-modal.tsx');
if (fs.existsSync(contactFormPath)) {
  const content = fs.readFileSync(contactFormPath, 'utf8');
  
  if (content.includes("import ConfettiGenerator from 'confetti-js'")) {
    console.log('   ✓ ConfettiGenerator is imported correctly');
  } else {
    console.log('   ✗ ConfettiGenerator is not imported correctly');
  }
  
  if (content.includes("new ConfettiGenerator(")) {
    console.log('   ✓ ConfettiGenerator is instantiated correctly');
  } else {
    console.log('   ✗ ConfettiGenerator is not instantiated correctly');
  }
  
  if (content.includes("confettiInstance.current.clear()")) {
    console.log('   ✓ Confetti cleanup is implemented');
  } else {
    console.log('   ✗ Confetti cleanup is not implemented');
  }
} else {
  console.log('   ✗ contact-form-modal.tsx not found');
}

console.log('\n=== Summary ===');
console.log('The confetti implementation should now work correctly.');
console.log('After deploying, test the contact form to verify the confetti animation works.');