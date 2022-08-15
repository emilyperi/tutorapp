import axios from 'axios'

const getAll = () => {
  const request = axios({
    method: 'get',
    url: 'http://localhost:5000/api/tutors',
  })
  return request.then(response => response.data) 
}

const getFiltered = (params) => {
  console.log(params)
  const request = axios({
    method: 'get',
    url: 'http://localhost:5000/api/tutors',
    params: params
  })

  return request.then(response => response.data)
}
export default { getAll, getFiltered}