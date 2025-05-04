![image](https://github.com/user-attachments/assets/666318bc-3d70-48f4-9939-a44493a1fc64)

# TimePass-Games-LogBook

**TimePass-Games-LogBook** is a full-stack web application designed to manage a collection of games. It allows users to **Create**, **Read**, **Update**, and **Delete** (CRUD) game entries using a simple and user-friendly interface.

The application is divided into a **React** frontend and an **Express** + **MongoDB** backend. Additionally, it now includes **Swagger API documentation** for easily exploring and testing the backend endpoints.

---

## 🚀 Live Demo

The **TimePass-Games-LogBook** is fully deployed and ready to use!

### 🌐 Deployed Links

* **Frontend**: [https://timepass-games-logbook-frontend.onrender.com](https://timepass-games-logbook-frontend.onrender.com)
* **Backend**: [https://timepass-games-logbook-backend.onrender.com](https://timepass-games-logbook-backend.onrender.com)
* **API Docs (Swagger UI)**: [View Interactive Docs](https://timepass-games-logbook-backend.onrender.com/api-docs)
![image](https://github.com/user-attachments/assets/25a98c0d-5046-4ad7-90a9-697e2be5d6e8)



### 🧩 Database

The backend uses **MongoDB Atlas**, a cloud-based NoSQL database service, for storing all game-related data securely and reliably.
---


## ✨ Key Features

* **Add New Game**: Submit game details such as name, URL, author, and publish date.
* **View Games List**: Display all games in a structured and readable list.
* **Edit Existing Game**: Update details of any previously added game.
* **Delete Game**: Remove games permanently from the database.
* **Search Games**: Quickly filter games by name.
* **Interactive API Docs**: Explore the API through an integrated Swagger UI.

---

## ⚙️ Tech Stack Overview

### 🔹 Frontend

* **React** – Component-based UI
* **Axios** – Making API requests
* **CSS** – Styling and layout

### 🔹 Backend

* **Node.js + Express** – RESTful API server
* **MongoDB + Mongoose** – NoSQL database & data modeling
* **Swagger** – API documentation and testing interface
* **Cors** – Cross-origin resource sharing

### 🔹 Dev Tools

* **dotenv** – Manage environment variables
* **nodemon** – Auto-restart development server

---

## 🔍 How It Works

### 🖼️ Frontend

* Located in the `frontend/` folder.
* Composed of modular React components:

  * `GameForm.jsx`: Add or edit games.
  * `GameList.jsx`: View all games.
  * `GameSearch.jsx`: Search for games.
* Uses **Axios** to interact with the backend.

### 🛠️ Backend

* Located in the `backend/` folder.
* Built with Express and Mongoose.
* Uses **Swagger** to auto-generate and serve interactive API documentation.
* Game-related logic resides in:

  * `gameController.js` for core logic
  * `gameRoutes.js` for route setup
* All API documentation is available via Swagger at:

  👉 **[https://timepass-games-logbook-backend.onrender.com/api-docs](https://timepass-games-logbook-backend.onrender.com/api-docs)**

---

## 🗂️ Folder Structure

```
TimePass-Games-LogBook/
├── backend/
│   ├── config/db.js
│   ├── controllers/gameController.js
│   ├── middleware/errorHandler.js
│   ├── models/gameModel.js
│   ├── routes/gameRoutes.js
│   ├── index.js
│   └── .env
│
├── frontend/
│   ├── public/
│   │   └── index.html
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
└── README.md
```

---

## 🌐 API Overview

The API is documented and testable via Swagger at:

📘 **[https://timepass-games-logbook-backend.onrender.com/api-docs](https://timepass-games-logbook-backend.onrender.com/api-docs)**

### REST Endpoints

| Method | Endpoint                     | Description          |
| ------ | ---------------------------- | -------------------- |
| GET    | `/api/games`                 | Get all games        |
| GET    | `/api/games/:id`             | Get a game by ID     |
| POST   | `/api/games`                 | Add a new game       |
| PUT    | `/api/games/:id`             | Update a game by ID  |
| DELETE | `/api/games/:id`             | Delete a game by ID  |
| GET    | `/api/games/search?name=xyz` | Search games by name |

Example `POST` request:

```json
{
  "name": "Chess Online",
  "url": "https://play.chess.com",
  "author": "Chess Inc.",
  "publishedDate": "2023-09-01"
}
```

---

## 📘 Swagger Documentation Setup

![image](https://github.com/user-attachments/assets/af38eb8c-17c6-40d8-a5c5-52d63abd2cc8)

Swagger is integrated using `swagger-jsdoc` and `swagger-ui-express`.

Access the API docs:

🔗 **[https://timepass-games-logbook-backend.onrender.com/api-docs](https://timepass-games-logbook-backend.onrender.com/api-docs)**

Located inside `gameRoutes.js`, Swagger annotations are used to auto-generate documentation from route comments.

---

## ❗ Error Handling

The backend handles common errors gracefully:

* **404 Not Found** – Game not found
* **500 Internal Server Error** – Database or server error
* Errors are returned with informative JSON messages for easy debugging.

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 📬 Contact

**Karthik Pohane**
📧 [kartikpohane0612@gmail.com](mailto:kartikpohane0612@gmail.com)

