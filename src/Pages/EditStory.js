import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Card } from "react-bootstrap";
import {  useParams } from "react-router-dom";

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
function EditStory() {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);
  // const item = data.find((item) => item.id === id);
  useEffect(() => {
    handleMount();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMount = async () => {
    const url = "https://testapi.arbsindia.com/public/api/get-page";
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdGFwaS5hcmJzaW5kaWEuY29tXC9wdWJsaWNcL2FwaVwvc2lnbi1pbiIsImlhdCI6MTY5NTk4ODU0NywiZXhwIjoxNjk2NTkzMzQ3LCJuYmYiOjE2OTU5ODg1NDcsImp0aSI6IldYUkZJR3NKRjZ5WjBTMzUiLCJzdWIiOjg5NiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Vj8QuqOabnnhYamjWLxeVLiHwso3wwfTJgakBNTjpd4";
    const data = {
      page_id: id,
    };
    const response = await postData(url, token, data);
    console.log(response);

    setData(response.data);
  };

  const handleDelete = () => {
    setData({});
  };

  return (
    <div className="row">
      <h1>EditStory</h1>
      <div className="col-sm-6 offset-lg-3">
        <div className="card mt-4" key={data.id}>
          <img
            src={data.image || "https://via.placeholder.com/250x250?text=Image+Not+Found"}
            alt=""
            className="card-img-top"
          />
          <div className="card-body ESpadding" >
            <h5 className="card-title">{data.page_title}</h5>
            <p className="card-text">{data.description}</p>
            <button onClick={handleDelete}>Delete Data</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStory;
