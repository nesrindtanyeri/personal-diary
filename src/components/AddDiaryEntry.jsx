import { useState } from "react";
import StorageHandler from "./StorageHandler";

const AddDiaryEntry = ({ addAlert, updateList }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !content) {
      addAlert("warning", "Please fill in all the fields");
      return;
    }
    // one entry per day only
    if (StorageHandler.hasEntryAtDate(date)) {
      addAlert("warning", "Just one entry per day please!");
      return;
    }

    const newEntry = { title, date, image, content };
    StorageHandler.addItem(newEntry);

    setTitle("");
    setDate("");
    setImage("");
    setContent("");

    addAlert("success", "Entry saved");
    updateList();
    document.getElementById("DairyEntryModal").close();
  };

  const handleBrowseClick = () => {
    setIsModalOpen(true);
  };

  const handleImageSelect = (url) => {
    setImage(url);
    setIsModalOpen(false);
  };

  return (
    <form
      className="add-entry-form max-w-lg mx-auto p-6 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-5 text-center">Enter Your Memory</h2>

      <div className="mb-4 flex items-center justify-between">
        <label className="mr-4 font-medium">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 input input-bordered"
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <label className="mr-4 font-medium">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="flex-1 input input-bordered"
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <label className="mr-4 font-medium">Image URL:</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="flex-1 input input-bordered"
        />
        <button
          type="button"
          className="btn btn-primary ml-1"
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
          className="w-full textarea textarea-bordered"
        ></textarea>
      </div>

      <button type="submit" className="w-full btn btn-primary">
        Add Entry
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
          style={{
            backgroundImage: "url(https://picsum.photos/600/900)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg w-96 h-96 overflow-auto relative">
            <h2 className="text-lg text-pink-400 text-center font-bold mb-4">
              Select an Image
            </h2>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>

            {/* Random Photos */}
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => {
                const randomId = Math.floor(Math.random() * 100);

                return (
                  <img
                    key={i}
                    src={`https://picsum.photos/id/${randomId}/500/300`}
                    alt="Random"
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() =>
                      handleImageSelect(
                        `https://picsum.photos/id/${randomId}/500/300`
                      )
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default AddDiaryEntry;
