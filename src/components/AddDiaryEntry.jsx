import { useState } from 'react';
import StorageHandler from './StorageHandler';

const AddDiaryEntry = ({ addAlert, updateList}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !content) {
      addAlert('error','Please fill in all the fields');
      return;
    }
    // one entry per day only
    if(StorageHandler.hasEntryAtDate(date)){
      addAlert('error','Just one entry per day please!');
      return
    }

    const newEntry = { title, date, image, content };
    StorageHandler.addItem(newEntry);

    setTitle('');
    setDate('');
    setImage('');
    setContent('');

    addAlert('success','Entry saved');
    updateList();
    document.getElementById('DairyEntryModal').close();
  };

  const handleBrowseClick = () => {
    setIsModalOpen(true); 
  };

  const handleImageSelect = (url) => {
    setImage(url); 
    setIsModalOpen(false); 
  };

  return (
<form className="add-entry-form max-w-lg mx-auto bg-black p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}  >
  <h2 className="text-2xl font-bold mb-5 text-center">Add New</h2>

  <div className="mb-4 flex items-center justify-between">
    <label className="mr-4 font-medium">Title:</label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="flex-1 p-2 border rounded-md"
    />
  </div>

  <div className="mb-4 flex items-center justify-between">
    <label className="mr-4 font-medium">Date:</label>
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="flex-1 p-2 border rounded-md"
    />
  </div>

  <div className="mb-4 flex items-center justify-between">
    <label className="mr-4 font-medium">Image URL:</label>
    <input
      type="url"
      value={image}
      onChange={(e) => setImage(e.target.value)}
      className="flex-1 p-2 border rounded-md"
    />
    <button
      type="button"
      className="bg-pink-400 text-black font-bold px-4 py-2 ml-4 rounded-md"
      onClick={handleBrowseClick}
    >
      Browse
    </button>
  </div>

  <div className="mb-4">
    <label className="font-medium">Notes:</label>
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="w-full p-2 border rounded-md mt-2"
    ></textarea>
  </div>

  <button type="submit" className="w-full bg-pink-400 text-black font-bold py-2 px-4 mt-4 rounded-md">
    Add Entry
  </button>

  {/* Modal */}
  {isModalOpen && (
  <div
    className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
    style={{
      backgroundImage: 'url(https://picsum.photos/600/900)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="bg-white p-4 rounded-lg shadow-lg w-96 h-96 overflow-auto relative">
      <h2 className="text-lg text-pink-400 text-center font-bold mb-4">Select an Image</h2>
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={() => setIsModalOpen(false)}
      >
        X
      </button>

        {/* Random Photos */}
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <img
              key={i}
              src={`https://picsum.photos/500/300?random=${i}`}
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
