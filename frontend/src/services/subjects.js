import axios from 'axios'

const getAll = () => {
  const request = axios({
    method: 'get',
    url: 'http://localhost:5000/api/tutors/subjects',
  })
  return request.then(response => response.data) 
}

export default { getAll }