# 🚀 Quick Setup Guide

Follow these steps to get your MERN Notes App running quickly!

## Step 1: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file (copy env.example)
# Windows:
copy env.example .env

# Mac/Linux:
cp env.example .env
```

**Edit `.env` file and add your MongoDB connection string:**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=5000
```

**⚠️ Important:** If your MongoDB password contains special characters, you MUST URL-encode them:
- `!` → `%21`
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `^` → `%5E`
- `&` → `%26`
- `*` → `%2A`
- `(` → `%28`
- `)` → `%29`
- `/` → `%2F`
- `<` → `%3C`
- `>` → `%3E`

**Example:**
- Original password: `P@ssw0rd!`
- URL-encoded: `P%40ssw0rd%21`
- Connection string: `mongodb+srv://user:P%40ssw0rd%21@cluster.mongodb.net/db`

## Step 2: Start Backend Server

```bash
# From backend directory
npm start

# Or for development (auto-reload)
npm run dev
```

✅ Backend should be running on `http://localhost:5000`

## Step 3: Frontend Setup

```bash
# Open a new terminal
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install
```

## Step 4: Start Frontend Server

```bash
# From frontend directory
npm run dev
```

✅ Frontend should be running on `http://localhost:5173`

## Step 5: Open in Browser

Open your browser and go to: **http://localhost:5173**

You should see the Notes App! 🎉

## Troubleshooting

### Backend won't start
- Check if MongoDB connection string is correct
- Make sure port 5000 is not in use
- Verify `.env` file exists in `backend/` folder

### Frontend can't connect to backend
- Make sure backend is running on port 5000
- Check `frontend/src/services/api.js` - `API_BASE_URL` should be `http://localhost:5000/api`
- Check browser console for CORS errors

### MongoDB connection error
- Verify your MongoDB Atlas cluster is running
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure password is URL-encoded correctly
- Remove angle brackets `< >` from password if present

## Next Steps

- Create your first note!
- Edit and delete notes
- Customize the UI colors in Tailwind config
- Deploy to production (see README.md)

Happy coding! 🚀

