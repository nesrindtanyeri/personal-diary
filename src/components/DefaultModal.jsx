const DefaultModal = ({ selectedItem }) => {
  return (
    <dialog id="default-modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Title: {selectedItem.title}</h3>
        <p className="py-4">timestamp: {selectedItem.timestamp}</p>
        <p className="py-4">Date: {selectedItem.date}</p>
        <p className="py-4">Image: {selectedItem.image}</p>
        <p className="py-4">Content: {selectedItem.content}</p>
      </div>
    </dialog>
  );
};

export default DefaultModal;
