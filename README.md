# 📝 MERN Notes Taking Web Application

A complete full-stack Notes Taking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled with Tailwind CSS.

## 🚀 Features

- ✅ Create, Read, Update, and Delete notes (Full CRUD operations)
- ✅ Clean and responsive UI with Tailwind CSS
- ✅ Real-time note management
- ✅ Loading and error states
- ✅ Modal-based form for adding/editing notes
- ✅ RESTful API backend
- ✅ MongoDB database integration

## 📁 Project Structure

```
note/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── noteController.js  # Note CRUD operations
│   ├── models/
│   │   └── Note.js            # Note schema/model
│   ├── routes/
│   │   └── noteRoutes.js      # API routes
│   ├── server.js              # Express server
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx     # Navigation component
│   │   │   ├── NoteCard.jsx   # Individual note card
│   │   │   └── NoteModal.jsx  # Add/Edit note modal
│   │   ├── pages/
│   │   │   └── NotesPage.jsx  # Main notes page
│   │   ├── services/
│   │   │   └── api.js         # API service functions
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # React entry point
│   │   └── index.css          # Tailwind CSS imports
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md
```

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** account (MongoDB Atlas recommended for cloud database)

## 📦 Installation & Setup

### 1. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
# Add your MongoDB connection string and port
```

**Create `backend/.env` file:**
```env
MONGO_URI=mongodb+srv://manitejasai123:<t9v!byt5^X8u7/3>@cluster0.8bvvp.mongodb.net/?appName=Cluster0
PORT=5000
```

**Important Notes:**
- Replace the MongoDB URI with your own connection string
- **URL-encode special characters** in your password (e.g., `!` becomes `%21`, `@` becomes `%40`, `/` becomes `%2F`, `^` becomes `%5E`)
- If your password is `<t9v!byt5^X8u7/3>`, the URL-encoded version would be: `%3Ct9v%21byt5%5EX8u7%2F3%3E`
- Remove the angle brackets `< >` from the password in the connection string
- Example: `mongodb+srv://username:encoded_password@cluster.mongodb.net/database`

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

## 🚀 Running the Application

### Start Backend Server

```bash
# From backend directory
npm start

# Or for development with auto-reload
npm run dev
```

The backend server will run on `http://localhost:5000`

### Start Frontend Development Server

```bash
# From frontend directory
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

## 🔌 API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a single note by ID |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

### Example API Requests

**Create Note:**
```bash
POST http://localhost:5000/api/notes
Content-Type: application/json

{
  "title": "My First Note",
  "content": "This is the content of my note"
}
```

**Get All Notes:**
```bash
GET http://localhost:5000/api/notes
```

**Update Note:**
```bash
PUT http://localhost:5000/api/notes/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content"
}
```

**Delete Note:**
```bash
DELETE http://localhost:5000/api/notes/:id
```

## 🔗 Frontend-Backend Integration

The frontend connects to the backend through the API service located at `frontend/src/services/api.js`.

**API Base URL Configuration:**
- Default: `http://localhost:5000/api`
- To change the API URL, update the `API_BASE_URL` constant in `frontend/src/services/api.js`

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

For production, update this to your deployed backend URL.

## 🗄️ Database Schema

The Note model has the following structure:

```javascript
{
  title: String (required),
  content: String (required),
  createdAt: Date (default: Date.now)
}
```

## 🎨 Technologies Used

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## 📝 Usage

1. **Start both servers** (backend and frontend)
2. **Open your browser** and navigate to the frontend URL (usually `http://localhost:5173`)
3. **Click "Add New Note"** to create a note
4. **Click "Edit"** on any note card to modify it
5. **Click "Delete"** to remove a note (with confirmation)

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Update API URL** in `frontend/src/services/api.js` to your deployed backend URL

5. **Environment Variables:** No environment variables needed for frontend

### Backend Deployment (Render)

1. **Create a new Web Service** on Render
2. **Connect your GitHub repository**
3. **Build Command:** `cd backend && npm install`
4. **Start Command:** `cd backend && npm start`
5. **Add Environment Variables:**
   - `MONGO_URI`: Your MongoDB connection string
   - `PORT`: 5000 (or let Render assign it)

6. **Update CORS** in `backend/server.js` to allow your frontend domain:
   ```javascript
   app.use(cors({
     origin: 'https://your-frontend-domain.vercel.app'
   }));
   ```

### Environment Variables Setup

**Backend (.env):**
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

**Frontend (if needed):**
Update `API_BASE_URL` in `frontend/src/services/api.js` to your deployed backend URL.

## 🐛 Troubleshooting

### Backend Issues

- **MongoDB Connection Error:** Check your `MONGO_URI` in `.env` file
- **Port Already in Use:** Change `PORT` in `.env` or kill the process using that port
- **CORS Error:** Make sure CORS is enabled in `server.js`

### Frontend Issues

- **API Connection Error:** Verify backend is running and `API_BASE_URL` is correct
- **Build Errors:** Make sure all dependencies are installed with `npm install`
- **Tailwind Not Working:** Check `tailwind.config.js` content paths

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author
MANI TEJA 

Created  a complete MERN stack application example.

---

**Happy Note Taking! 📝**

