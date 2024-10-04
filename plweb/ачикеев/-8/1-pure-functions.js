// BEGIN
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const sayPrimeOrNot = (num) => {
  if (isPrime(num)) {
    console.log('yes');
  } else {
    console.log('no');
  }
};

export default sayPrimeOrNot;


// END