<p align="center">
<img src ="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F029a1497-45bd-4b48-af71-c2ab8a918091%2F7ecfdb21-d985-4ba4-8d36-367a6409584e%2F82692897e15d9f03256f.jpg?table=block&spaceId=029a1497-45bd-4b48-af71-c2ab8a918091&id=63581603-821f-41e4-bdce-f4bb66b24360&width=2000&userId=9d08c749-75eb-439d-ad10-2a83e114a53b&cache=v2">
</p>

---

<h2> NodeJS Basics </h2>

- This project focuses on NodeJS basics, emphasizing back-end development using JavaScript and ExpressJS. Participants will learn to run JavaScript with NodeJS, use modules, read files, access command line arguments, and create HTTP servers. The tasks include building simple and advanced servers, handling routes, and implementing ES6 features. The project also involves organizing code structure, utilizing Babel-node, and employing Nodemon for faster development. The end goal is to create functional HTTP servers that can handle various endpoints and read data from a CSV file.

---

<h2> Resources </h2>

- [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

---

<h2> Requirements</h2>

- [`database.csv`](./database.csv): where we will store some values, to simulate a database.
- `package.json`: It specifies packages (dependencies and devDependencies) required for testing, linting, running the server, and other development tasks. Running npm install installs these dependencies.
- `babel.config.js`: In this project, it is used to preset the environment for Node.js so that you can use modern JavaScript syntax, including ES6 features.
- `.eslintrc.js`: contains ESLint configurations for the project, specifying rules for code style and potential errors. It helps maintain a consistent and high-quality codebase by enforcing coding standards.

---

<h2> Tasks </h2>

**0. Executing basic javascript with Node JS**

- **Task:** Create a function named `displayMessage` in `0-console.js` that prints the provided string argument to STDOUT.
- **File:** [0-console.js](./0-console.js)

**1. Using Process stdin**

- **Task:** Develop a program `1-stdin.js` that prompts the user with "Welcome to Holberton School, what is your name?" and displays the input along with a closing message.
- **File:** [1-stdin.js](./1-stdin.js)

**2. Reading a file synchronously with Node JS**

- **Task:** Implement `countStudents` in `2-read_file.js` to read the `database.csv` file synchronously, log the number of students in each field, and display the list of first names.
- **File:** [2-read_file.js](./2-read_file.js)

**3. Reading a file asynchronously with Node JS**

- **Task:** Create `countStudents` in `3-read_file_async.js` to read the `database.csv` file asynchronously, returning a promise. Log the number of students in each field and display the list of first names.
- **File:** [3-read_file_async.js](./3-read_file_async.js)

**4. Create a small HTTP server using Node's HTTP module**

- **Task:** Develop a small HTTP server in `4-http.js` using the http module, listening on port 1245 and displaying "Hello Holberton School!" for any endpoint.
- **File:** [4-http.js](./4-http.js)

**5. Create a more complex HTTP server using Node's HTTP module**

- **Task:** Enhance the HTTP server in `5-http.js` to display "Hello Holberton School!" for the root path and list students for the /students path using data from `3-read_file_async.js`.
- **File:** [5-http.js](./5-http.js)

**6. Create a small HTTP server using Express**

- **Task:** Install Express and create an HTTP server in `6-http_express.js`. It should display "Hello Holberton School!" for the root path and handle 404 errors for other paths.
- **File:** [6-http_express.js](./6-http_express.js)

**7. Create a more complex HTTP server using Express**

- **Task:** Expand the Express server in `7-http_express.js` to display "Hello Holberton School!" for the root path and list students for the /students path using data from `3-read_file_async.js`.
- **File:** [7-http_express.js](./7-http_express.js)

**8. Organize a complex HTTP server using Express**

- **Task:** Create a full server structure in the `full_server` directory. Implement controllers for App and Students, define routes, and create a server in `full_server/server.js`. Utilize `babel-node` and `readDatabase` from `full_server/utils.js`.
- **Files:** [full_server/utils.js](./full_server/utils.js), [full_server/controllers/AppController.js](./full_server/controllers/AppController.js), [full_server/controllers/StudentsController.js](./full_server/controllers/StudentsController.js), [full_server/routes/index.js](./full_server/routes/index.js), [full_server/server.js](./full_server/server.js)

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
