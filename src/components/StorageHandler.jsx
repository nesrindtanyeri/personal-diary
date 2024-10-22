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
};

export default StorageHandler;
