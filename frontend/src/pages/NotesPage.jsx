import { useState, useEffect } from 'react';
import NoteCard from '../components/NoteCard';
import NoteModal from '../components/NoteModal';
import { getAllNotes, createNote, updateNote, deleteNote } from '../services/api';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllNotes();
      setNotes(data || []);
    } catch (err) {
      const errorMessage = err.message || 'Failed to load notes. Please try again.';
      setError(errorMessage);
      console.error('Error fetching notes:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNote = () => {
    setEditingNote(null);
    setIsModalOpen(true);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleSaveNote = async (noteData) => {
    try {
      setError(null);
      if (editingNote) {
        // Update existing note
        const updatedNote = await updateNote(editingNote._id, noteData);
        setNotes(notes.map((note) => (note._id === editingNote._id ? updatedNote : note)));
      } else {
        // Create new note
        const newNote = await createNote(noteData);
        setNotes([newNote, ...notes]);
      }
      setIsModalOpen(false);
      setEditingNote(null);
    } catch (err) {
      setError(editingNote ? 'Failed to update note.' : 'Failed to create note.');
      console.error('Error saving note:', err);
    }
  };

  const handleDeleteNote = async (noteId) => {
    if (!window.confirm('Are you sure you want to delete this note?')) {
      return;
    }

    try {
      setError(null);
      await deleteNote(noteId);
      setNotes(notes.filter((note) => note._id !== noteId));
    } catch (err) {
      setError('Failed to delete note.');
      console.error('Error deleting note:', err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">My Notes</h2>
        <button
          onClick={handleAddNote}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg font-semibold"
        >
          + Add New Note
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : notes.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl mb-4">No notes yet. Create your first note!</p>
          <button
            onClick={handleAddNote}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Create Note
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onEdit={handleEditNote}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>
      )}

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingNote(null);
        }}
        onSave={handleSaveNote}
        note={editingNote}
      />
    </div>
  );
};

export default NotesPage;

