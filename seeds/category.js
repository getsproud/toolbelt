const { getObjectId } = require('mongo-seeding')

const categories = [
  {
    _id: getObjectId('cat-dental'),
    label: 'ERP',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-management'),
    label: 'Management',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-law'),
    label: 'Recht/Gesetz',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-data'),
    label: 'BigData',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-biology'),
    label: 'Biologie',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-marketing'),
    label: 'Marketing',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-strategy'),
    label: 'Marketing Strategie',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-leadership'),
    label: 'Mitarbeiterführung',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-hr'),
    label: 'Human Resources',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-web'),
    label: 'Web-Entwicklung',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-javascript'),
    label: 'JavaScript',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-development'),
    label: 'Software Entwicklung',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-qa'),
    label: 'Qualitätssicherung',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-technology'),
    label: 'Technologie',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-finance'),
    label: 'Finanzen',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-fintech'),
    label: 'FinTech',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-testing'),
    label: 'Testing',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-k8s'),
    label: 'Kubernetes',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-digital'),
    label: 'Digitalisierung',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-blogging'),
    label: 'Blogging',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-writing'),
    label: 'Texten/Schreiben',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-language'),
    label: 'Sprachen',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  },
  {
    _id: getObjectId('cat-business'),
    label: 'Wirtschaft',
    company: getObjectId('company-1'),
    color: Math.floor(Math.random()*16777215).toString(16)
  }
]

module.exports = categories
