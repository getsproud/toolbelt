const { getObjectId, getObjectIds } = require('mongo-seeding')

const titles = [
  'JSConf Europe 2021',
  'FOSSDEM 2021',
  'React Next Europe 2021',
]

const descriptions = [
  'June 1st & 2nd 2019 — Berlin, Germany. JSConf EU is the labour-of-love conference for the JavaScript community in Europe.',
  'The World\'s Largest Developer & Engineering Technology Conference & Expo. Labour-of-love conference for the JavaScript.',
  'The World\'s Largest Developer & Engineering Technology Conference & Expo. June 1st & 2nd 2019 — Berlin, Germany.',
]

const urls = [
  'https://2019.jsconf.eu/',
  'https://fosdem.org/2021/',
  'https://www.react-next.com/'
]

const randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

const trainings = new Array(3).fill(1).map((e,i) => ({
  _id: getObjectId(`training-${i+1}`),
  author: getObjectId(`employee-${i+1}`),
  company: getObjectId(`company-1}`),
  title: titles[i],
  prices: [{
    price: Math.floor(Math.random() * 2000) + 1000,
    title: 'Regular Ticket'
  },
  {
    price: Math.floor(Math.random() * 999) + 600,
    title: 'Early Bird Ticket'
  },
  {
    price: Math.floor(Math.random() * 4000) + 2001,
    title: 'Late Bird Ticket'
  }],
  fromDate: randomDate(new Date(), new Date(2021,12,31)),
  toDate: randomDate(new Date(), new Date(2021,12,31)),
  description: descriptions[i],
  location: 'Some Location',
  street: 'Some Street 124',
  zip: Math.floor(Math.random() * 99999) + 11111,
  city: 'Some City',
  remote: false,
  certificate: false,
  website: urls[i],
  categories: getObjectIds(['cat-developemnt', 'cat-web', 'cat-javascript', 'cat-technology', 'cat-marketing']),
  departments: getObjectIds(['department-development', 'department-marketing']),
  company: getObjectId('company-1'),
  participants: [getObjectId('employee-1')]
}))

module.exports = trainings
