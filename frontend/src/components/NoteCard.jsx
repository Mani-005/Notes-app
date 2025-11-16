const NoteCard = ({ note, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-800 flex-1">
          {note.title}
        </h3>
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => onEdit(note)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(note._id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-4 whitespace-pre-wrap">
        {note.content}
      </p>
      <p className="text-xs text-gray-400">
        Created: {formatDate(note.createdAt)}
      </p>
    </div>
  );
};

export default NoteCard;

