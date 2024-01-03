
export default function getResponseFromAPI() {
    return new Promise((resolve) => {
      // Assuming a successful API response with status 200 and body 'Success'
      resolve({ status: 200, body: 'Success' });
    });
  }
  