module.exports = {
    format_date: (date) => {
        const dateString =date.toString()
      return dateString.substring(0, 16);
    },

   now: () => {
    const today = new Date().toString()
   return today.substring(0,16);

}
  };
  