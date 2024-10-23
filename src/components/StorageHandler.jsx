const StorageHandler = {
  /**
   * gets the complete list from local storage
   * @returns {Array} the complete list
   */
  getList: () => {
    return JSON.parse(localStorage.getItem("personalDiary")) || [];
  },

  /**
   * adds an item to the local storage
   * @param {Object} item the object containing the item's data
   */
  addItem: (item) => {
    // a random ID for the entry
    const id = this.createRandomID();
    // a date object with the current time
    const timestamp = Date.now();
    // add id & timestamp to the item
    item = { ...item, id: id, timestamp: timestamp };
    const list = JSON.parse(localStorage.getItem("personalDiary")) || [];
    list.unshift(item);
    localStorage.setItem("personalDiary", JSON.stringify(list));
  },

  /**
   * removes an item from local storage
   * @param {Number} itemId the id of the item to remove
   */
  removeItem: (itemId) => {
    const list = JSON.parse(localStorage.getItem("personalDiary")) || [];
    const filteredList = list.filter((item) => item.id !== itemId);
    localStorage.setItem("personalDiary", JSON.stringify(filteredList));
  },

  getTodaysEntry: () => {
    const list = JSON.parse(localStorage.getItem("personalDiary")) || [];
    const found = list.find((item) => {
      const today = new Date();
      const itemDate = new Date(item.timestamp);
      return (
        itemDate.getDate() == today.getDate() &&
        itemDate.getMonth() == today.getMonth() &&
        itemDate.getFullYear() == today.getFullYear()
      );
    });
    return found;
  },

  /**
   * creates a random (unique) id to be used for the entries
   * @returns {String} a random id
   */
  createRandomID: () => {
    return crypto.randomUUID();
  },
};

export default StorageHandler;
