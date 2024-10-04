// BEGIN
const getChildren = (users) => {
  return users.reduce((children, user) => children.concat(user.children), []);
};

export default getChildren;

// END