const DefaultModal = ({ selectedItem }) => {
  return (
    <dialog id="default-modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="card image-full max-h-96">
          {selectedItem.image &&
          <figure>
            <img src={selectedItem.image} alt={selectedItem.title} className="w-full object-cover" />
          </figure>
          }
          <div className="card-body">
            <p>{selectedItem.date} <span className="text-sm">timestamp: {selectedItem.timestamp}</span></p>
            <h2 className="card-title">{selectedItem.title}</h2>
            <p>{selectedItem.content}</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div> */}
          </div>
        </div>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

      </div>
    </dialog>
  );
};

export default DefaultModal;
