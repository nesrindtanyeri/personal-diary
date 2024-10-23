import { useState } from 'react';
import StorageHandler from './StorageHandler';

const AddDiaryEntry = ({ addEntry }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 

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

  const handleBrowseClick = () => {
    setIsModalOpen(true); 
  };

  const handleImageSelect = (url) => {
    setImage(url); 
    setIsModalOpen(false); 
  };

  return (
    <form className="add-entry-form" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Add New Diary Entry</h2>

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
        <label>Image URL:</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="button" className="bg-gray-300 px-4 py-2 mt-2" onClick={handleBrowseClick}>
          Browse Images
        </button>
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

      {}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg w-96 h-96 overflow-auto">
            <h2 className="text-lg font-bold mb-4">Select an Image</h2>
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>

            {/* Random Photos */}
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/200?random=${i}`}
                  alt="Random"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleImageSelect(`https://picsum.photos/200?random=${i}`)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default AddDiaryEntry;
