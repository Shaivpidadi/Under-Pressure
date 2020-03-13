import axios from 'axios'
const baseURL = 'http://localhost:8000/api/v1'

const user = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default user
