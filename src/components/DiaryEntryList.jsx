import { useEffect, useState } from "react";
import StorageHandler from "./StorageHandler";
import Card from "./Card";

const DiaryEntryList = ({setSelectedItem}) => {
  const [entryList, setEntryList] = useState(null);

  useEffect(() => {
    setEntryList(StorageHandler.getList());
  }, []);

  return <div className="py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-3 gap-6">
   {entryList &&
        entryList.map((entry) => (
          <Card key={entry.id} entry={entry} setSelectedItem={setSelectedItem} />
        ))}
  </div>;
};

export default DiaryEntryList;
