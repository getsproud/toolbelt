const { getObjectId } = require('mongo-seeding')

const budgets = new Array(15).fill(1).map((e,i) => ({
  _id: getObjectId(`budget-${i+1}`),
  employee: getObjectId(`employee-${i+1}`),
  company: getObjectId('company-1'),
  budget: 8000,
  remaining: Math.floor(Math.random() * 8000),
  fromDate: new Date('2020-01-01'),
  toDate: new Date('2020-12-31'),
  spendings: (i === 0) ? [getObjectId(`spending-1`), getObjectId(`spending-2`)] : []
}))

module.exports = budgets
