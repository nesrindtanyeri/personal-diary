import { useState } from 'react';

const AddDiaryEntry = ({ addEntry }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !content) {
      alert('Please fill in all the fields.');
      return;
    }

    const newEntry = { title, date, image, content };
    addEntry(newEntry);

    setTitle('');
    setDate('');
    setImage('');
    setContent('');
  };

  return (
    <form className="add-entry-form" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Add New Entry</h2>

      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label>Image URL (Optional):</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 mt-4">
        Add Entry
      </button>
    </form>
  );
};

export default AddDiaryEntry;
