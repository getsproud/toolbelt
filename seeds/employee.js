const { getObjectId } = require('mongo-seeding')

const employees = [{
  "_id": getObjectId('employee-1'),
  "firstname": "Janet",
  "lastname": "Aneley",
  "identifier": "janeley0@netvibes.com",
  "internalEmail": null,
  "gender": "female",
  "roles": ['owner', 'admin'],
  "position": "Product Management",
  "interests": [getObjectId('cat-marketing'), getObjectId('cat-strategy'), getObjectId('cat-business'), getObjectId('cat-leadership')],
  "department": getObjectId('department-development'),
  "company": getObjectId('company-1'),
  "activated": true,
  "createdAt": "2020-10-15T02:07:19.000Z",
  "updatedAt": "2020-07-04T16:27:09.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-2'),
  "firstname": "Lucho",
  "lastname": "Duding",
  "identifier": "lduding1@netvibes.com",
  "internalEmail": null,
  "gender": "male",
  "roles": ['employee'],
  "position": "Internal Auditor",
  "interests": [getObjectId('cat-hr'), getObjectId('cat-leadership'), getObjectId('cat-business')],
  "department": getObjectId('department-human-resources'),
  "company": getObjectId('company-1'),
  "activated": true,
  "createdAt": "2020-10-13T08:18:17.000Z",
  "updatedAt": "2020-09-17T03:43:11.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-3'),
  "firstname": "Lia",
  "lastname": "Garrelts",
  "identifier": "lgarrelts2@netvibes.com",
  "internalEmail": null,
  "gender": "female",
  "roles": ['employee'],
  "position": "Frontend Developer",
  "interests": [getObjectId('cat-web'), getObjectId('cat-javascript'), getObjectId('cat-development')],
  "department": getObjectId('department-development'),
  "company": getObjectId('company-1'),
  "activated": true,
  "createdAt": "2019-11-25T01:22:34.000Z",
  "updatedAt": "2019-12-04T02:16:12.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-4'),
  "firstname": "Maitilde",
  "lastname": "Danton",
  "identifier": "mdanton3@netvibes.com",
  "internalEmail": null,
  "roles": ['employee'],
  "gender": "female",
  "position": "Automation Specialist",
  "interests": [getObjectId('cat-qa'), getObjectId('cat-development'), getObjectId('cat-technology')],
  "department": getObjectId('department-development'),
  "company": getObjectId('company-1'),
  "activated": true,
  "createdAt": "2019-12-30T14:19:14.000Z",
  "updatedAt": "2020-04-13T20:45:52.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-5'),
  "firstname": "Dorrie",
  "lastname": "Garnsworthy",
  "identifier": "dgarnsworthy4@netvibes.com",
  "internalEmail": null,
  "gender": "female",
  "roles": ['employee', 'finance'],
  "position": "Financial Advisor",
  "interests": [getObjectId('cat-finance'), getObjectId('cat-fintech'), getObjectId('cat-business')],
  "department": getObjectId('department-finance'),
  "company": getObjectId('company-1'),
  "activated": true,
  "createdAt": "2020-09-04T08:17:28.000Z",
  "updatedAt": "2020-10-26T23:56:20.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-6'),
  "firstname": "Merrill",
  "lastname": "Abden",
  "identifier": "mabden5@netvibes.com",
  "internalEmail": null,
  "gender": "male",
  "roles": ['employee'],
  "position": "Marketing Manager",
  "interests": [getObjectId('cat-marketing'), getObjectId('cat-strategy'), getObjectId('cat-business'), getObjectId('cat-leadership')],
  "department": getObjectId('department-marketing'),
  "company": getObjectId('company-1'),
  "activated": false,
  "createdAt": "2020-04-01T17:41:25.000Z",
  "updatedAt": "2020-09-06T16:32:33.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-7'),
  "firstname": "Gerald",
  "lastname": "Blague",
  "identifier": "gblague6@netvibes.com",
  "internalEmail": null,
  "gender": "male",
  "roles": ['employee'],
  "position": "Quality Engineer",
  "interests": [getObjectId('cat-qa'), getObjectId('cat-testing'), getObjectId('cat-technology')],
  "department": getObjectId('department-development'),
  "company": getObjectId('company-1'),
  "activated": true,
  "createdAt": "2020-11-16T08:35:33.000Z",
  "updatedAt": "2020-10-04T08:20:20.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-8'),
  "firstname": "Tann",
  "lastname": "Mart",
  "identifier": "tmart7@netvibes.com",
  "internalEmail": null,
  "gender": "male",
  "roles": ['employee', 'hr'],
  "position": "Recruiting Manager",
  "interests": [getObjectId('cat-hr'), getObjectId('cat-leadership'), getObjectId('cat-business')],
  "department": getObjectId('department-human-resources'),
  "company": getObjectId('company-1'),
  "activated": false,
  "createdAt": "2020-11-10T10:50:41.000Z",
  "updatedAt": "2020-10-15T14:10:41.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-9'),
  "firstname": "Dixie",
  "lastname": "Carnilian",
  "identifier": "dcarnilian8@netvibes.com",
  "internalEmail": null,
  "gender": "female",
  "roles": ['employee'],
  "position": "Information Systems Manager",
  "interests": [getObjectId('cat-k8s'), getObjectId('cat-development'), getObjectId('cat-web')],
  "department": getObjectId('department-development'),
  "company": getObjectId('company-1'),
  "activated": false,
  "createdAt": "2020-06-17T17:55:30.000Z",
  "updatedAt": "2020-11-07T19:04:56.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-10'),
  "firstname": "Alleyn",
  "lastname": "Parrot",
  "identifier": "aparrot9@netvibes.com",
  "internalEmail": null,
  "gender": "male",
  "roles": ['employee', 'hr'],
  "position": "Recruiter",
  "interests": [getObjectId('cat-hr'), getObjectId('cat-leadership'), getObjectId('cat-business')],
  "department": getObjectId('department-human-resources'),
  "company": getObjectId('company-1'),
  "activated": true,
  "createdAt": "2020-10-03T20:07:25.000Z",
  "updatedAt": "2020-09-03T14:12:35.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-11'),
  "firstname": "Ernst",
  "lastname": "Ohlsen",
  "identifier": "eohlsena@netvibes.com",
  "internalEmail": null,
  "gender": "male",
  "roles": ['employee'],
  "position": "Assistant Media Planner",
  "interests": [getObjectId('cat-marketing'), getObjectId('cat-digital'), getObjectId('cat-web')],
  "department": getObjectId('department-marketing'),
  "company": getObjectId('company-1'),
  "activated": true,
  "createdAt": "2019-12-14T23:06:10.000Z",
  "updatedAt": "2020-03-06T14:41:22.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-12'),
  "firstname": "Darrel",
  "lastname": "Siaspinski",
  "identifier": "dsiaspinskib@netvibes.com",
  "internalEmail": null,
  "gender": "male",
  "roles": ['employee'],
  "position": "Technical Writer",
  "interests": [getObjectId('cat-blogging'), getObjectId('cat-writing'), getObjectId('cat-language')],
  "department": getObjectId('department-marketing'),
  "company": getObjectId('company-1'),
  "activated": true,
  "createdAt": "2020-01-18T19:07:09.000Z",
  "updatedAt": "2020-11-16T22:19:12.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-13'),
  "firstname": "Lucita",
  "lastname": "Norres",
  "identifier": "lnorresc@netvibes.com",
  "internalEmail": null,
  "roles": ['employee'],
  "gender": "female",
  "position": "Dental Hygienist",
  "interests": [getObjectId('cat-dental'), getObjectId('cat-biology'), getObjectId('cat-language')],
  "department": getObjectId('department-law'),
  "company": getObjectId('company-1'),
  "activated": false,
  "createdAt": "2020-07-25T02:08:29.000Z",
  "updatedAt": "2020-05-29T10:34:59.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-14'),
  "firstname": "Bart",
  "lastname": "Kelf",
  "identifier": "bkelfd@netvibes.com",
  "internalEmail": null,
  "roles": ['employee'],
  "gender": "male",
  "position": "Business Systems Development Analyst",
  "interests": [getObjectId('cat-data'), getObjectId('cat-finance'), getObjectId('cat-language')],
  "department": getObjectId('department-data'),
  "company": getObjectId('company-1'),
  "activated": true,
  "createdAt": "2020-01-19T01:08:26.000Z",
  "updatedAt": "2019-12-01T08:12:44.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}, {
  "_id": getObjectId('employee-15'),
  "firstname": "Roanna",
  "lastname": "Lancett",
  "roles": ['employee'],
  "identifier": "rlancette@netvibes.com",
  "internalEmail": null,
  "gender": "female",
  "position": "Paralegal",
  "interests": [getObjectId('cat-law'), getObjectId('cat-finance'), getObjectId('cat-management')],
  "department": getObjectId('department-law'),
  "company": getObjectId('company-1'),
  "activated": false,
  "createdAt": "2020-07-23T17:38:58.000Z",
  "updatedAt": "2020-07-24T10:29:46.000Z",
  "password": '$2a$10$oBGg/V0/450qe/XNpc3IL.7ov/BrhOvWWe5PqTk79gqIRSUBoYuQS'
}]

module.exports = employees
