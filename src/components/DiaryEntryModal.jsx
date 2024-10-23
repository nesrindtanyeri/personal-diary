import AddDiaryEntry from "./AddDiaryEntry";
const DiaryEntryModal = () => {
    return (
      <dialog id="DairyEntryModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">I did this.</h3>
          <p className="py-4">Dont press this button!</p>
          <AddDiaryEntry />
    
        </div>
      </dialog>
    );
  };
  
  export default DiaryEntryModal;