import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3001, () => {
  console.log('Server is running')
})
