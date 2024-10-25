import { useEffect, useState } from "react";

const DefaultModal = ({ selectedItem, handleEdit, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(selectedItem);

  const saveEdit = () => {
    handleEdit(editedEntry); // Pass the edited entry to the handleEdit function
    setIsEditing(false); // Exit editing mode
  };

  const confirmDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this memory?");
    if (confirmDelete) {
      handleDelete(selectedItem); // Delete the selected item
    }
  };

  useEffect(()=>{
    setEditedEntry(selectedItem);
  },[selectedItem])

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
              {selectedItem.date}
            </p>
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={editedEntry.title}
                  onChange={(e) => setEditedEntry({ ...editedEntry, title: e.target.value })}
                  className="input input-bordered w-full mt-2 mb-2"
                />
                <textarea
                  value={editedEntry.content}
                  onChange={(e) => setEditedEntry({ ...editedEntry, content: e.target.value })}
                  className="textarea textarea-bordered w-full"
                />
                <button className="btn btn-primary mt-2" onClick={saveEdit}>
                  Save
                </button>
              </div>
            ) : (
              <>
                <h2 className="card-title">{selectedItem.title}</h2>
                <p>{selectedItem.content}</p>
              </>
            )}
          </div>
        </div>

        {/* Edit and Delete buttons */}
        <div className="flex justify-between mt-4">
          <button 
            className="btn btn-secondary" 
            onClick={() => setIsEditing(!isEditing)} // Toggle editing mode
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          <button 
            className="btn btn-error" 
            onClick={confirmDelete} // Confirm deletion
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
