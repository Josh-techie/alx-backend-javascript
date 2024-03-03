<p align="center">
<img src ="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F029a1497-45bd-4b48-af71-c2ab8a918091%2F26509893-0a01-4abe-965b-8eeaf4f90d1c%2F90f79a666e174e6c4ffc.jpg?table=block&id=2fa620ff-f4ed-4150-863d-2d244b56dcaa&spaceId=029a1497-45bd-4b48-af71-c2ab8a918091&width=2000&userId=9d08c749-75eb-439d-ad10-2a83e114a53b&cache=v2">
</p>

---

<h2> Unittests in JS </h2>

- This project revolves around mastering the fundamentals of NodeJS, with a primary focus on back-end development using JavaScript and ExpressJS. Participants delve into running JavaScript with NodeJS, leveraging modules, reading files, accessing command line arguments, and crafting HTTP servers. The tasks span from constructing basic to advanced servers, managing routes, and incorporating ES6 features. The project emphasizes code structure organization, the use of Babel-node, and harnessing Nodemon for efficient development. The ultimate objective is to construct robust HTTP servers capable of handling diverse endpoints and reading data from a CSV file.

---

<h2> Resources </h2>

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/api/)
- [Sinon](https://sinonjs.org/releases/v7.5.0/)
- [Express](https://expressjs.com/en/guide/routing.html)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

---

<h2> Tasks </h2>

**0. Basic test with Mocha and Node assertion library**

- **Task:** Install Mocha using npm, set up a script to run Mocha, create a function named `calculateNumber` in `0-calcul.js`, and write test cases for it in `0-calcul.test.js`.
- **Files:** 
  - [0-calcul.js](./0x06-unittests_in_js/0-calcul.js)
  - [0-calcul.test.js](./0x06-unittests_in_js/0-calcul.test.js)

**1. Combining descriptions**

- **Task:** Upgrade the `calculateNumber` function by adding a 'type' argument. Implement SUM, SUBTRACT, and DIVIDE functionalities based on the type. Write corresponding test cases in `1-calcul.test.js`.
- **Files:**
  - [1-calcul.js](./0x06-unittests_in_js/1-calcul.js)
  - [1-calcul.test.js](./0x06-unittests_in_js/1-calcul.test.js)

**2. Basic test using Chai assertion library**

- **Task:** Install Chai with npm, copy and modify files for Chai integration, and rewrite the test suite using Chai's expect in `2-calcul_chai.test.js`.
- **Files:**
  - [2-calcul_chai.js](./0x06-unittests_in_js/2-calcul_chai.js)
  - [2-calcul_chai.test.js](./0x06-unittests_in_js/2-calcul_chai.test.js)

**3. Spies**

- **Task:** Install Sinon with npm, create a Utils module with a calculateNumber property, create a function `sendPaymentRequestToApi` using Utils.calculateNumber, and use sinon.spy to validate the function's behavior.
- **Files:**
  - [utils.js](./0x06-unittests_in_js/utils.js)
  - [3-payment.js](./0x06-unittests_in_js/3-payment.js)
  - [3-payment.test.js](./0x06-unittests_in_js/3-payment.test.js)

**4. Stubs**

- **Task:** Create files mirroring 3-payment.js and 3-payment.test.js, stub Utils.calculateNumber to always return the same number (10), verify the stub's call with specific parameters, and add a spy to validate console.log messages.
- **Files:**
  - [4-payment.js](./0x06-unittests_in_js/4-payment.js)
  - [4-payment.test.js](./0x06-unittests_in_js/4-payment.test.js)

**5. Hooks**

- **Task:** Create files mirroring 4-payment.js and 4-payment.test.js, implement hooks (beforeEach and afterEach) for testing `sendPaymentRequestToApi`.
- **Files:**
  - [5-payment.js](./0x06-unittests_in_js/5-payment.js)
  - [5-payment.test.js](./0x06-unittests_in_js/5-payment.test.js)

**6. Async tests with done**

- **Task:** Create files 6-payment_token.js and 6-payment_token.test.js, implement async testing for `getPaymentTokenFromAPI` using done callback.
- **Files:**
  - [6-payment_token.js](./0x06-unittests_in_js/6-payment_token.js)
  - [6-payment_token.test.js](./0x06-unittests_in_js/6-payment_token.test.js)

**7. Skip**

- **Task:** Use 7-skip.test.js to demonstrate skipping failing tests. Maintain the it descriptions while making the suite pass without fixing the failing test.
- **File:**
  - [7-skip.test.js](./0x06-unittests_in_js/7-skip.test.js)

**8. Basic Integration testing**

- **Task:** In the 8-api folder, create an ExpressJS server (api.js) with an index route. Write integration tests (api.test.js) for the index route.
- **Files:**
  - [8-api/package.json](./0x06-unittests_in_js/8-api/package.json)
  - [8-api/api.js](./0x06-unittests_in_js/8-api/api.js)
  - [8-api/api.test.js](./0x06-unittests_in_js/8-api/api.test.js)

**9. Regex integration testing**

- **Task:** In the 9-api folder, modify api.js to include a new endpoint (/cart/:id) with number validation. Write tests for the new endpoint in api.test.js.
- **Files:**
  - [9-api/api.js](./0x06-unittests_in_js/9-api/api.js)
  - [9-api/api.test.js](./0x06-unittests_in_js/9-api/api.test.js)

**10. Deep equality & Post integration testing**

- **Task:** In the 10-api folder, add two new endpoints (/available_payments and /login) to api.js. Write test suites for both endpoints in api.test.js, emphasizing deep equality.
- **Files:**
  - [10-api/api.js](./0x06-unittests_in_js/10-api/api.js)
  - [10-api/api.test.js](./0x06-unittests_in_js/10-api/api.test.js)

---

<h2>  Author </h2>

- [`Josh-techie`](https://github.com/Josh-techie) | Software Engineer Student

  > Reach out to me if you need any help or have any questions.

  <a href="mailto:youssef.abouyahia@e-polytechnique.ma">
  	<img alt="Feel free to contact me" src="https://img.shields.io/badge/-Ask_me_anything-blue?style=flat&logo=Gmail&logoColor=white&link=mailto:youssef.abouyahia@e-polytechnique.ma&color=3d85c6" />
  </a>
  <span> | </span>
    <a href="https://www.linkedin.com/in/youssef-abouyahia/">
        <img alt="Linkedin Profile" src="https://img.shields.io/badge/-Linkedin-0072b1?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/youssef-abouyahia/" />
    </a>
    <span> | </span>
    <a href="https://twitter.com/JoesephAb">
        <img alt="Twitter Profile" src="https://img.shields.io/badge/-Twitter-0072b1?style=flat&logo=Twitter&logoColor=white&link=https://twitter.com/JoesephAb&color=1DA1F2" />
    </a>
