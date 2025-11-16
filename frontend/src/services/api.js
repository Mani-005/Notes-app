import axios from 'axios';

// Update this URL to match your backend server
// For production, set VITE_API_URL environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get all notes
export const getAllNotes = async () => {
  try {
    const response = await api.get('/notes');
    return response.data.data;
  } catch (error) {
    console.error('API Error Details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      url: error.config?.url
    });
    
    if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
      throw new Error('Cannot connect to server. Make sure the backend is running on port 5000.');
    }
    
    throw new Error(error.response?.data?.message || error.message || 'Failed to fetch notes');
  }
};

// Get single note by ID
export const getNoteById = async (id) => {
  try {
    const response = await api.get(`/notes/${id}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch note');
  }
};

// Create a new note
export const createNote = async (noteData) => {
  try {
    const response = await api.post('/notes', noteData);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create note');
  }
};

// Update a note
export const updateNote = async (id, noteData) => {
  try {
    const response = await api.put(`/notes/${id}`, noteData);
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update note');
  }
};

// Delete a note
export const deleteNote = async (id) => {
  try {
    const response = await api.delete(`/notes/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete note');
  }
};

export default api;

