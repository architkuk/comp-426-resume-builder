https://github.com/architkuk/comp-426-resume-builder-server/blob/main/server.js

**Get User**
----
  Returns json data about a single user from database.

* **URL**

  `/`

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `email=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{MongoDB User Document}`
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** `{ error : "GET error" }`

* **Sample Call:**

  ```javascript
    axios
	.get('http://localhost:8080', { params: { name: 'Bob Dylan' } })
	.then((res) => {
		console.log(res);
	});
  ```
  
  **Add User**
----
  Adds user into MongoDB database from json data.

* **URL**

  `/`

* **Method:**

  `GET`
  
*  **Request Bodys**

{email: 'www.email.com', other fields...}

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{MongoDB User Document}`
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** `{ error : "GET error" }`

* **Sample Call:**

  ```javascript
    axios
	.get('http://localhost:8080', { params: { name: 'Bob Dylan' } })
	.then((res) => {
		console.log(res);
	});
  ```
