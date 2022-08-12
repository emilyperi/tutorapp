import axios from 'axios'

const getAll = () => {
  const request = axios({
    method: 'get',
    url: '/test',
  })
  return request.then(response => response.data) 
}
export default { getAll }