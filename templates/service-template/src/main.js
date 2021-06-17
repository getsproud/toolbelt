import express from 'express'
import pkg from './package.json'

const app = express()
const port = 8080

app.get('/api/v1/training/:id', (req, res) => {

  res.json({
    "training_id": req.params.id,
    "title": "An Absolutely Remarkable Thing",
    "trainer": "Hank Green",
    "training_date": "September 25th, 2018"
  })

})

// eslint-disable-next-line
app.listen(port, () => console.log(`🤩 employeehq.io ${pkg.name} microservice listening on port ${port}!`))
