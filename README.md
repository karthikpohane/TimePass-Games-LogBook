![image](https://github.com/user-attachments/assets/666318bc-3d70-48f4-9939-a44493a1fc64)

# TimePass-Games-LogBook

**TimePass-Games-LogBook** is a full-stack web application designed to manage a collection of games. It allows users to **Create**, **Read**, **Update**, and **Delete** (CRUD) game entries using a simple and user-friendly interface.

The application is split into a **React** frontend and an **Express** + **MongoDB** backend, providing a seamless experience for managing game data. This project is structured to demonstrate practical understanding of full-stack development, RESTful APIs, component architecture, and database operations.
---

## ✨ Key Features

* **Add New Game**: Submit game details such as name, URL, author, and publish date.
* **View Games List**: Display all games in a structured and readable list.
* **Edit Existing Game**: Update details of any previously added game.
* **Delete Game**: Remove games permanently from the database.
* **Search Games**: Quickly filter games by name.

---

## ⚙️ Tech Stack Overview

### 🔹 Frontend

* **React** – Building component-based UI
* **Axios** – Handling API requests
* **CSS** – Styling the UI

### 🔹 Backend

* **Node.js + Express** – Building RESTful APIs
* **MongoDB + Mongoose** – Data persistence and modeling
* **Cors** – Managing cross-origin requests

### 🔹 Dev Tools

* **dotenv** – Managing environment variables
* **nodemon** – Auto-reloading backend during development

---

## 🔍 How It Works

The application consists of two main parts: the **frontend** and the **backend**.

### 🖼️ Frontend

* Located in the `frontend/` folder.
* Built with **React** and organized into reusable components:

  * `GameForm.jsx`: Form for adding/editing games.
  * `GameList.jsx`: Displays the list of games.
  * `GameSearch.jsx`: Search bar to filter games.
* The main app is rendered from `Home.jsx` via `App.jsx`.
* Axios is used to send API requests to the backend.

### 🛠️ Backend

* Located in the `backend/` folder.
* Built using **Express.js**, with routes and controllers separated for scalability.
* **Mongoose** connects the app to a **MongoDB** database and defines the schema in `gameModel.js`.
* Routes (`/api/games`) handle all game operations.
* Centralized error handling is provided via custom middleware.

---

## 🗂️ Folder Structure

```
TimePass-Games-LogBook/
├── backend/
│   ├── config/db.js               # MongoDB connection
│   ├── controllers/gameController.js
│   ├── middleware/errorHandler.js
│   ├── models/gameModel.js
│   ├── routes/gameRoutes.js
│   ├── index.js                   # Server entry point
│   └── .env                       # Environment config (MONGO_URI, PORT)
│
├── frontend/
│   ├── public/index.html
│   └── src/
│       ├── api/axios.js
│       ├── components/
│       │   ├── GameForm.jsx
│       │   ├── GameList.jsx
│       │   └── GameSearch.jsx
│       ├── pages/Home.jsx
│       ├── App.jsx
│       ├── index.js
│       └── index.css
│
└── README.md
```

---

## 🌐 API Overview

The backend exposes the following RESTful endpoints:

### 1. `GET /api/games`

Returns all games from the database.

### 2. `GET /api/games/:id`

Returns a single game by its ID.

### 3. `POST /api/games`

Creates a new game.

#### Request Body:

```json
{
  "name": "Game Name",
  "url": "https://game-url.com",
  "author": "Author Name",
  "publishedDate": "YYYY-MM-DD"
}
```

### 4. `PUT /api/games/:id`

Updates a game by its ID.

### 5. `DELETE /api/games/:id`

Deletes a game by its ID.

### 6. `GET /api/games/search?name=gameName`

Searches games by their name.

---

## ❗ Error Handling

The backend handles common error scenarios:

* **404 Not Found**: If a game with the given ID doesn't exist.
* **500 Server Error**: For unexpected failures or invalid operations.

All errors return meaningful messages to help with debugging or user feedback.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

If you have any questions or feedback regarding the project, feel free to reach out:

**Karthik Pohane** – [kartikpohane0612@gmail.com](mailto:kartikpohane0612@gmail.com)

