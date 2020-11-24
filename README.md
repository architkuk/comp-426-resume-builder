**Get User**
----
  Returns json data about a single user.

* **URL**

  /

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
  
  **Get User**
----
  Returns json data about a single user.

* **URL**

  /

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
