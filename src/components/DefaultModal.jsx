const DefaultModal = ({ selectedItem, handleEdit, handleDelete }) => {
  return (
    <dialog id="default-modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl relative">
        <div className="card image-full max-h-96">
          {selectedItem.image && (
            <figure>
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full object-cover" />
            </figure>
          )}
          <div className="card-body">
            <p>
              {selectedItem.date}{" "}
              <span className="text-sm">timestamp: {selectedItem.timestamp}</span>
            </p>
            <h2 className="card-title">{selectedItem.title}</h2>
            <p>{selectedItem.content}</p>
          </div>
        </div>

        {/* Edit and Delete buttons */}
        <div className="flex justify-between mt-4">
          <button 
            className="btn btn-secondary" 
            onClick={() => handleEdit(selectedItem)}
          >
            Edit
          </button>
          <button 
            className="btn btn-error" 
            onClick={() => handleDelete(selectedItem)}
          >
            Delete
          </button>
        </div>

        {/* Close button */}
        <button 
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById("default-modal").close()} // Close modal on click
        >
          ✕
        </button>
      </div>
    </dialog>
  );
};

export default DefaultModal;

