import _ from 'lodash';

// BEGIN
function takeOldest(users, n = 1) {
    return users.sort((a, b) => (new Date(a.birthday) - new Date(b.birthday))).slice(0, n);
  }
  
  export default takeOldest;
// END