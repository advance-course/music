import axios from 'axios';
import { HOST } from '../host';

axios.get(`${HOST}/search`, {
  params: {
    keywords: '海阔天空'
  }
}).then(res => {
  console.log(res);
})

export default axios;