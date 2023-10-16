import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/exstoriesinfo.css';
// import "./exstoriesinfo.css";
import { Container } from "react-bootstrap";
const postData = async (url, token, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

function StoriesEX() {
  const truncate = (str, numWords) => {
    return str.split(" ").slice(0, numWords).join(" ") + "...";
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    handleMount();
  }, []);
  const handleMount = async () => {
    const url = "https://testapi.arbsindia.com/public/api/get-page-list";
    const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdGFwaS5hcmJzaW5kaWEuY29tXC9wdWJsaWNcL2FwaVwvc2lnbi1pbiIsImlhdCI6MTY5NTk4ODU0NywiZXhwIjoxNjk2NTkzMzQ3LCJuYmYiOjE2OTU5ODg1NDcsImp0aSI6IldYUkZJR3NKRjZ5WjBTMzUiLCJzdWIiOjg5NiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Vj8QuqOabnnhYamjWLxeVLiHwso3wwfTJgakBNTjpd4";
    const data = {
      status: 1,
    };
    const response = await postData(url, token, data);
    console.log(response);
    setData(response.data);
  };
  return (
    <Container fluid className="no-paddingst">
    <div className="row ">
    <h3 class="justify-content-left exsh5">Latest Stories </h3>
      {data.slice(0, 4).map((item, index) => (
        <div className="col-md-3 no-paddingst" key={item.id}>
          <div className="nocard">
            {item.image ? (
              <img src={item.image} alt="" className="nocard-img-top" />
            ) : (
              <img
                src="https://via.placeholder.com/250x250?text=Image+Not+Found"
                alt=""
                className="nocard-img-top nocard-img"
              />
            )}
            <div className="nocard-body ">
              <h6 className="nocard-title">{item.page_title}</h6>
              <p className="nocard-text">{truncate(item.description, 5)}</p>
            </div>
            <div className="nocard-footer">
            
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
  
  );
}

export default StoriesEX;
