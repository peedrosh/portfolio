import axios from 'axios'

const api = axios.create({
  baseURL: 'https://send-mail-peedrosh.herokuapp.com/'
})

export default api
