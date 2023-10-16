import axios from 'axios';

const url = 'https://testapi.arbsindia.com/public/api/get-page-list'; // replace with your URL
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdGFwaS5hcmJzaW5kaWEuY29tXC9wdWJsaWNcL2FwaVwvc2lnbi1pbiIsImlhdCI6MTY5NjA3MDUxNywiZXhwIjoxNjk2Njc1MzE3LCJuYmYiOjE2OTYwNzA1MTcsImp0aSI6ImRSbzlxZjZmcGhFTW1IcU8iLCJzdWIiOjc4NSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.hPiA-KsF5CA6_i0l14OxFwLBjXgnUUqI7XriQmD7bb0'; // replace with your token


const data = {
  business_id: '105',
  type: '4',
  status: '1'
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
};

const postData = () => {
  axios.post(url, data, { headers })
  .then(response => {
    if (response.status === 200) {
      console.log('Success:', response.data);
      return 'Okay';
    }
  })
  .catch(error => console.error('Error:', error));
};

export default postData;
