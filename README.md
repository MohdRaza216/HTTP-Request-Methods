This project demonstrates the use of various HTTP request methods in JavaScript, along with their backend functionality.

**Overview:**
This program serves as an educational tool to demonstrate the different HTTP request methods and their purposes in a client-server architecture. It showcases how to:
Send requests from the frontend using JavaScript.
Handle the requests on the backend.
Understand responses, status codes, and payload handling for each HTTP method.

**Features**
Examples for HTTP methods: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD.
Easy-to-understand code for beginners.
Live interaction between frontend (JavaScript) and backend (Node.js/Express or any backend framework of your choice).
Display of request results (status codes, responses) in a friendly UI.

**Technologies Used**
Frontend: HTML, CSS, JavaScript
Backend: Node.js with Express (or any backend framework)
HTTP Client: Fetch API / Axios (for making HTTP requests)

**Usage**
Start the backend server: Make sure the backend is running on http://localhost:3000 (or the configured port).

Open the frontend: In the browser, interact with the provided buttons or input fields to send HTTP requests.

View the Results: Check the response status codes, messages, and data returned by each request directly in the UI.

**HTTP Methods Explained**
1. GET
Purpose: Retrieve data from the server.
Example: Fetch a list of users from /api/users.
2. POST
Purpose: Create new resources on the server.
Example: Send form data to /api/users to create a new user.
3. PUT
Purpose: Update an entire resource on the server.
Example: Update all user details with /api/users/1.
4. PATCH
Purpose: Partially update a resource.
Example: Modify only the user’s email at /api/users/1.
5. DELETE
Purpose: Delete a resource.
Example: Remove a user at /api/users/1.
6. OPTIONS
Purpose: Discover what HTTP methods are supported on a server endpoint.
7. HEAD
Purpose: Retrieve response headers without the body.

It provides practical examples of how HTTP methods like GET, POST, PUT, DELETE, PATCH, and others work within a frontend-backend communication setup.
