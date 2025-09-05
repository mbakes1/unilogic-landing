// test-contact-api.js
// Simple script to test the contact API endpoint

const testData = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  department: 'Test Department',
  message: 'This is a test message'
};

async function testContactAPI() {
  try {
    console.log('Testing contact API endpoint...');
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log('API test successful!', result);
    } else {
      console.error('API test failed:', result);
    }
  } catch (error) {
    console.error('Error testing API:', error);
  }
}

testContactAPI();