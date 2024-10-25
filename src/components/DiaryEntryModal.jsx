import AddDiaryEntry from "./AddDiaryEntry";
const DiaryEntryModal = ({addAlert, updateList}) => {
const imgUrl = new URL('../assets/img/reminder1.jpg', import.meta.url).href;
  return (
    <dialog
  id="DairyEntryModal"
  className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
>
  <div className="modal-box relative flex flex-col items-center justify-center bg-cover" style={{
      backgroundImage:`url(${imgUrl})`,
    }}>
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
    </form>
    <h3 className="font-bold text-lg">Welcome back!</h3>
    <p className="py-4">Let's create a new memory</p>
    <AddDiaryEntry addAlert={addAlert} updateList={updateList} />
  </div>
</dialog>
  );
};

export default DiaryEntryModal;
