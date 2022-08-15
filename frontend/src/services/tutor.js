import axios from 'axios'

const getAll = async () => {
  const request = axios({
    method: 'get',
    url: 'http://localhost:5000/api/tutors',
  })
  const response = await request
  return response.data 
}

const getFiltered = async (params) => {
  const request = axios({
    method: 'get',
    url: 'http://localhost:5000/api/tutors',
    params: params
  })

  const response = await request
  return response.data
}
export default { getAll, getFiltered }