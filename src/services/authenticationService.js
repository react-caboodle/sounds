import  axios from 'axios';

export const login = (pinCode) => {

console.log('meol', pinCode);
 
const apiUrl = 'https://frontend-challenge.screencloud-michael.now.sh/api/pin/';

return axios.post(apiUrl,{"pin":pinCode});
  // .then(response =>console.log(response));

}