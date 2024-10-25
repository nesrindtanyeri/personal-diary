const StorageHandler = {
  /**
   * gets the complete list from local storage
   * @returns {Array} the complete list
   */
  getList: () => {
    let list = JSON.parse(localStorage.getItem("personalDiary")) || [];
    list.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < b.date) {
        return 1;
      }
    });
    return list;
  },

  /**
   * adds an item to the local storage
   * @param {Object} item the object containing the item's data
   */
  addItem: (item) => {
    // a random ID for the entry
    const id = StorageHandler.createRandomID();
    // a date object with the current time
    const timestamp = Date.now();
    // add id & timestamp to the item
    item = { ...item, id: id, timestamp: timestamp };
    const list = JSON.parse(localStorage.getItem("personalDiary")) || [];
    list.push(item);
    localStorage.setItem("personalDiary", JSON.stringify(list));
  },

  /**
   * removes an item from local storage by ID
   * @param {Number} itemId the id of the item to remove
   */
  removeItem: (itemId) => {
    const list = JSON.parse(localStorage.getItem("personalDiary")) || [];
    const filteredList = list.filter((item) => item.id !== itemId);
    localStorage.setItem("personalDiary", JSON.stringify(filteredList));
  },

  /**
   * updates an existing item
   * @param {Object} item 
   */
  updateItem: (item) => {
    console.log("Updating item:", item);

    // TODO: chenge the item
    const list = JSON.parse(localStorage.getItem("personalDiary")) || [];
    const objIndex = list.findIndex(obj => obj.timestamp == item.timestamp);
    list[objIndex].title = item.title;
    list[objIndex].content = item.content;
    localStorage.setItem("personalDiary", JSON.stringify(list));
  },

  /**
   * removes an item from local storage by timestamp
   * @param {Number} itemId the id of the item to remove
   */
  removeItemByTimestamp: (itemTimesamp) => {
    const list = JSON.parse(localStorage.getItem("personalDiary")) || [];
    const filteredList = list.filter((item) => item.timestamp !== itemTimesamp);
    localStorage.setItem("personalDiary", JSON.stringify(filteredList));
  },

  /**
   * gets today's entry from localStorage
   * @returns {Object} today's entry
   */
  getTodaysEntry: () => {
    const list = JSON.parse(localStorage.getItem("personalDiary")) || [];
    const found = list.find((item) => {
      const today = new Date();
      const todayDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
      return (
        item.date === todayDate
      );
    });
    return found;
  },

  hasEntryAtDate: (date) => {
    const list = JSON.parse(localStorage.getItem("personalDiary")) || [];
    const found = list.find((item) => item.date === date);
    return !!found;
  },

  /**
   * creates a random (unique) id to be used for the entries
   * @returns {String} a random id
   */
  createRandomID: () => {
    return crypto.randomUUID();
  },

  /**
   * saves the theme to localStorage
   * @param {String} theme
   */
  saveTheme: (theme) => {
    localStorage.setItem("theme", theme);
  },

  /**
   * gets the saved theme from localStorage
   * @returns {String}  the theme from localStorage
   */
  getTheme: () => {
    return localStorage.getItem("theme");
  },
};

export default StorageHandler;
