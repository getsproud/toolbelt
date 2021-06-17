const { getObjectId, getObjectIds } = require('mongo-seeding')

const company = [{
  _id: getObjectId('company-1'),
  name: "Netvibes Ltd. Inc.",
  street: "Random Street 45",
  zip: "24890",
  city: "Oregon",
  country: "United States",
  phone: "+007 81839 91348",
  domain: "netvibes",
  emailDomains: ['netvibes.com'],
  website: "https://www.netvibes.com",
  employees: getObjectIds([
    'employee-1',
    'employee-2',
    'employee-3',
    'employee-4',
    'employee-5',
    'employee-6',
    'employee-7',
    'employee-8',
    'employee-9',
    'employee-10',
    'employee-11',
    'employee-12',
    'employee-13',
    'employee-14',
    'employee-15'
  ]),
  "createdAt": "2020-10-15T02:07:19.000Z",
  "updatedAt": "2020-07-04T16:27:09.000Z",
}]

module.exports = company
