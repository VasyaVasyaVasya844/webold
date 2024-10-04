const run = (text) => {
    // BEGIN
    function takeLast(str, n) {
      if (str.length < n) {
        return null;
      }
      
      return str.slice(-n).split('').reverse().join('');
    }
    
    function run(str) {
      if (str === '' || str.length < 2) {
        return null;
      }
      
      return takeLast(str, 4);
    }
    
    // END
  
    return takeLast(text, 4);
  };
  
export default run;