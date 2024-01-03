// File: 0-promise.js

export default function getResponseFromAPI() {
    // Create and return a Promise here
    return new Promise((resolve, reject) => {
      // You can resolve the Promise immediately or handle asynchronous operations
      // For simplicity, let's resolve it with a sample response
      const response = {
        status: 200,
        body: 'Sample response from API',
      };
      resolve(response);
    });
  }
  