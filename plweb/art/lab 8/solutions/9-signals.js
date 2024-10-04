import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN


function getFreeDomainsCount(emails) {
  return emails.reduce((acc, email) => {
    const domain = email.split('@')[1];
    if (freeEmailDomains.includes(domain)) {
      const count = _.get(acc, domain, 0);
      _.set(acc, domain, count + 1);
    }
    return acc;
  }, {});
}

export default getFreeDomainsCount;
// END