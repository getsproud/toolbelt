const { getObjectId } = require('mongo-seeding')

const departments = [{
    _id: getObjectId('department-development'),
    name: "Entwicklung",
    company: getObjectId('company-1')
  },
  {
    _id: getObjectId('department-human-resources'),
    name: "Human Resources",
    company: getObjectId('company-1')
  },
  {
    _id: getObjectId('department-finance'),
    name: "Buchhaltung",
    company: getObjectId('company-1')
  },
  {
    _id: getObjectId('department-marketing'),
    name: "Marketing",
    company: getObjectId('company-1')
  },
  {
    _id: getObjectId('department-law'),
    name: "Rechtsabteilung",
    company: getObjectId('company-1')
  },
  {
    _id: getObjectId('department-data'),
    name: "Data",
    company: getObjectId('company-1')
  }
]

module.exports = departments
