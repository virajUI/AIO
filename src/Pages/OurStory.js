import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "./OurStory.css";
import '../css/OurStory.css';
import "bootstrap/dist/css/bootstrap.css";
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

const truncate = (str, numWords) => {
  return str.split(" ").slice(0, numWords).join(" ") + "...";
};

function OurStory() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const handleClick = (id) => {
    navigate("/EditStory");
  };
  const handleDelete = async (id, business_id) => {
    // navigate("/DeleteStory");
    const url = "https://testapi.arbsindia.com/public/api/delete-page";
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdGFwaS5hcmJzaW5kaWEuY29tXC9wdWJsaWNcL2FwaVwvc2lnbi1pbiIsImlhdCI6MTY5NTk4ODU0NywiZXhwIjoxNjk2NTkzMzQ3LCJuYmYiOjE2OTU5ODg1NDcsImp0aSI6IldYUkZJR3NKRjZ5WjBTMzUiLCJzdWIiOjg5NiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Vj8QuqOabnnhYamjWLxeVLiHwso3wwfTJgakBNTjpd4";
    const data = {
      page_id: id,
      business_id: business_id,
    };
    const response = await postData(url, token, data);
    console.log(response);
    console.log("success");
    setData(response.data);
  };
  const handleMount = async () => {
    const url = "https://testapi.arbsindia.com/public/api/get-page-list";
    const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdGFwaS5hcmJzaW5kaWEuY29tXC9wdWJsaWNcL2FwaVwvc2lnbi1pbiIsImlhdCI6MTY5NTk4ODU0NywiZXhwIjoxNjk2NTkzMzQ3LCJuYmYiOjE2OTU5ODg1NDcsImp0aSI6IldYUkZJR3NKRjZ5WjBTMzUiLCJzdWIiOjg5NiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Vj8QuqOabnnhYamjWLxeVLiHwso3wwfTJgakBNTjpd4";
    const data = {
      // business_id: 8,
      status: 1,
      // status: 'active'
    };
    const response = await postData(url, token, data);
    console.log(response);
    setData(response.data);
  };
  useEffect(() => {
    handleMount();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }



  return (

    
    <div className="row ourstory-row">
  <div className="col-sm-6 offset-lg-3">
    <div className="row ourstory-row">
      {/* Change the col classes to define the layout on different screen sizes */}
      <div className="col-12 col-sm-6">
        <h1 className="h1">Our Story</h1>
      </div>
      <div className="col-12 col-sm-6 text-sm-right">
        <Link to={`/AddStories`} className="link ">
           {/* <button className="btn btn-danger ostop">
            <i class="fa fa-plus"></i> AddStories
          </button>  */}
        </Link>
      </div>
    </div>

   

    {data.map((item) => (
      <div
        className="OurStorycard mt-4 d-flex flex-row-reverse"
        key={item.id}
      >
        <div className="img-responsive ">
          {item.image ? (
            <img src={item.image} alt={item.page_title} className="minmax" />
          ) : (
            <img
              src="https://via.placeholder.com/250x250?text=Image+Not+Found"
              alt=""
              className="minmax"
            />
          )}
        </div>
        <div className="card-body ">
          <Link to={`/SingleStory/${item.id}`} className="link">
            <h5 className="OurStorycard-title">{item.page_title}</h5>
          </Link>
          <p className="Storiesmarginleft">
            {truncate(item.description, 10)}
          </p>

          {/* Add edit and delete buttons */}
          <div className="row ourstory-row">
            <div className="col-9"></div>
            <div className="col-3">
              {/* Add edit button */}
              <Link to={`/EditStory/${item.id}`} className="link">
                <button className="btn btn-sm OurStoryedit">
                  <i className="fas fa-edit"></i>
                </button>
              </Link>

              {/* Add delete button */}
              {/* <Link
                to={`/Deletepage/${item.id}/${item.business_id}`}
                className="link"
              > */}
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this story?"
                      )
                    ) {
                      handleDelete(item.id);
                    }
                  }}
                  className="btn btn-sm OurStorydelete"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default OurStory;
