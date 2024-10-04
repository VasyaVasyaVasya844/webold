// BEGIN
function convert(...dates) {
    if (dates.length === 0) {
      return [];
    }
    
    const result = dates.map(dateArr => {
      const [year, month, day] = dateArr;
      const dateObj = new Date(year, month - 1, day);
      return dateObj.toDateString();
    });
  
    return result;
  }
  
  export default convert;
// END