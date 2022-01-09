import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-react-c5b2b-default-rtdb.firebaseio.com/'
})