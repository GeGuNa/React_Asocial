import axios from 'axios'

const port = 8172

export const ajax = axios.create({
   baseURL: 'http://localhost:'+port
});


export async function tz(){


  try {
    const response = await axios.get('https://nic.net');
    console.log(response);
  } catch (error) {
    console.error(error);
  }


}


