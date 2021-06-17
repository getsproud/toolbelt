const { getObjectId } = require('mongo-seeding')

const spendings = new Array(2).fill(1).map((e,i) => ({
  _id: getObjectId(`spending-${i+1}`),
  budget: getObjectId(`budget-1`),
  reference: getObjectId(`training-${i+1}`),
  type: 'training',
  amount: Math.floor(Math.random() * 2000),
  approved: true,
  approvedBy: getObjectId(`employee-2`),
  approvedAt: new Date()
}))

module.exports = spendings
