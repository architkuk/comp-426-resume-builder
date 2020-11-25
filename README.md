See api code: https://github.com/architkuk/comp-426-resume-builder-server/blob/main/server.js
Resume templates obtained from Google Docs and Microsoft word
<br />
material-ui template used to help develop templates page
<br />
Please click 'add template' and add a template before attempting to generate a resume

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
  
*  **Request Body**

{email: 'www.email.com', other fields...}

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{MongoDB User Document}`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Database Error" }`

* **Sample Call:**

  ```javascript
    axios
	.get('http://localhost:8080', { email : "Bob@email.com", "First" : "Bob", "Last" : "Jones" })
	.then((res) => {
		console.log(res);
	});
  ```

**Delete User**
----
  Delete user from MongoDB database with json data.

* **URL**

  `/`

* **Method:**

  `DELETE`
  
*  **Request Bodys**

{email: 'www.email.com', other fields...}

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `success`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Database Error" }`

* **Sample Call:**

  ```javascript
    axios.delete('http://localhost:8080', {
		name: 'Bob Dylan',
	})
	.then((res) => {
		console.log(res);
	});
  ```
  
**Update User**
----
  Update user fields from MongoDB database with json data.

* **URL**

  `/`

* **Method:**

  `PUT`
  
*  **Request Bodys**

{email: 'www.email.com', other fields...}

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `success`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Database Error" }`

* **Sample Call:**

  ```javascript
    axios.put('https://comp426-resume-builder.herokuapp.com/' {
	searchProperty: value,
	data: {'json of data to add'}
    });
  ```
  
**Copy Document**
----
  Creates a copy of document in Drive specified by documentId using Google Drive API.

* **URL**

  `/copy`

* **Method:**

  `POST`
  
*  **Request Bodys**

{templateId: 'Google template ID', name: 'FirstName'}

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `ID of newly created document`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ error : "Copy Error" }`

* **Sample Call:**

  ```javascript
    axios.put('https://comp426-resume-builder.herokuapp.com/copy' {
	{'json of data to add'});
  ```
  
**Update Document**
----
  Updates content in Google Docs specified by documentId using Google Docs API.

* **URL**

  `/update`

* **Method:**

  `PUT`
  
*  **Request Bodys**

{'json of data to write in doc'}

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `ID of newly created document`
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{BatchUpdate Error}`

* **Sample Call:**

  ```javascript
    axios.put('https://comp426-resume-builder.herokuapp.com/copy' {
	{'json of data to add'});
  ```
