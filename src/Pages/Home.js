import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Stories from "./Stories";
import Footer1 from "./Footer1";
import { Container } from "react-bootstrap";
import '../App.css';
const Home = () => {
  return (
    <Container fluid className="p-0">
      <Header />
      <Stories />
      <Footer1 />
    </Container>
  );
};

export default Home;
