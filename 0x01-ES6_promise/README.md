## ES6 Promises

- 0. Keep every promise you make and only make promises you can keep
- 1. Don't make a promise...if you know you can't keep it
- 2. Catch me if you can!
- 3. Handle multiple successful promises
- 4. Simple promise
- 5. Reject the promises
- 6. Handle multiple promises
- 7. Load balancer
- 8. Throw error / try catch
- 9. Throw an error

### Advanced to epxlore soon.....

0. **Keep every promise you make and only make promises you can keep**: Return a Promise using the following prototype function `getResponseFromAPI()`

    - Redirect to file: [0-promise.js](./0-promise.js)

1. **Don't make a promise...if you know you can't keep it**: Return a promise with resolving and rejecting conditions based on a boolean parameter.

- Redirect to file: [1-promise.js](./1-promise.js)

2. **Catch me if you can!**: Append handlers to a function prototype that returns an object when the promise resolves or an empty Error object when it rejects.

- Redirect to file: [2-then.js](./2-then.js)

3. **Handle multiple successful promises**: Call two functions that return promises and log specific values from their resolutions.

- Redirect to file: [3-all.js](./3-all.js)

4. **Simple promise**: Write a function that returns a resolved promise with specific object attributes.

- Redirect to file: [4-user-promise.js](./4-user-promise.js)

5. **Reject the promises**: Write a function that returns a promise rejecting with a specific error message.

- Redirect to file: [5-photo-reject.js](./5-photo-reject.js)

6. **Handle multiple promises** Call two functions that return promises, and return an array with the results of both promises.

- Redirect to file: [6-final-user.js](./6-final-user.js)

7. **Load balancer**: Write a function that accepts two promises and returns the result of the promise that resolves first.

- Redirect to file: [7-load_balancer.js](./7-load_balancer.js)

8. **Throw error / try catch**: Write a function that divides two numbers and throws an error if the denominator is 0.

- Redirect to file: [8-try.js](./8-try.js)

9. **Throw an error**: Write a function that executes a math function and appends the result or error message to an array.

- Redirect to file: [9-try.js](./9-try.js)

### Advanced Tasks:

10. **Await / Async**: Call two async functions and return an object with their responses. If one of the functions fails, return an empty object.

- Redirect to file: [100-await.js](./100-await.js)

---