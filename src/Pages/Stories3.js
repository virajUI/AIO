import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./../css/Stories3.css";
// import "./Stories.css";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
function Stories3() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const handleClick = (id) => {
    navigate("/SingleStories");
  };

  const truncate = (str, numWords) => {
    if (str) {
      return str.split(" ").slice(0, numWords).join(" ") + "...";
    } else {
      return "";
    }
  };

  const handleMount = async () => {
    const url =
      "https://testapi.arbsindia.com/public/api/get-public-pages-list";
    // Retrieve the token from local storage
    // const token = localStorage.getItem('token');
    const data = {
      type: 0,
      business_id: 105,
      // status: 'active'
    };
    const response = await postData(url, data);
    console.log(response);

    setData(response.data);
  };

  useEffect(() => {
    handleMount();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div>Page is Loading...</div>;
  }

  return (
    <Container fluid className="Stories-background">
      <div class="Stories-hero-image">
        <div class="Stories-hero-text">
          <h1>S t o r i e s</h1>
        </div>
      </div>
      <Row>
        <h3 class="justify-content-center exsh5"> </h3>
        {data.slice(0, 4).map((item, index) => (
          <Col md={3} className="no-paddings" key={item.id}>
            <div className="nocard">
              {item.image ? (
                <img src={item.image} alt="" className="nocard-img" />
              ) : (
                <img
                  src="https://via.placeholder.com/250x250?text=Image+Not+Found"
                  alt=""
                  className=" nocard-img"
                />
              )}
              <div className="nocard-body ">
                <h6 className="nocard-title d-flex justify-content-center">
                  {item.page_title}
                </h6>
                {/* <p className="nocard-text">{truncate(item.description, 5)}</p> */}
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Adding for zigzag cards */}
      <div className="custom-topmargin"></div>
      <div data-target="">
        {data.slice(4).map((item, index) => (
          <div key={item.id}>
            <Row>
              {/* If index is even, image will be displayed on the left and description on the right */}
              {/* If index is odd, description will be displayed on the left and image on the right */}
              <Col
                className={index % 2 === 0 ? "custom-color1" : "custom-color2"}
              >
                {index % 2 === 0 ? (
                  // Image for even indices
                  <img
                    src={item.image}
                    className="Storiesimg-fluid2"
                    alt="..."
                  />
                ) : (
                  // Description for odd indices
                  <div className="storiescard-body2">
                    <h5 className="custom-topmargin2">{item.page_title}</h5>
                    <p className="custom-topmargin2">
                      {truncate(item.description, 90)}
                    </p>
                    <p className=""></p>
                  </div>
                )}
              </Col>
              <Col
                className={index % 2 === 0 ? "custom-color1" : "custom-color2"}
              >
                {index % 2 === 0 ? (
                  // Description for even indices
                  <div className="storiescard-body2">
                    <h5 className="custom-topmargin2">{item.page_title}</h5>
                    <p className="custom-topmargin2">
                      {truncate(item.description, 90)}
                    </p>
                    <p className=""></p>
                  </div>
                ) : (
                  // Image for odd indices
                  <img
                    src={item.image}
                    className="Storiesimg-fluid2 "
                    alt="..."
                  />
                )}
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Stories3;

// eslint-disable-next-line no-lone-blocks
