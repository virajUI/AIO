import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Menu from "./Pages/Menu";
import Stories from "./Pages/Stories";
import Stories2 from "./Pages/Stories2";
import Stories3 from "./Pages/Stories3";
import "./App.css";

import "./index.css";
import Listofprofiles from "./Pages/Listofprofiles";
// import Listofprofiles from "./Pages/Listofprofiles";
import Navbar from "./Pages/Navbar";
import Signin from "./Pages/Signin";
import OurStory from "./Pages/OurStory";
import Deletepage from "./Pages/Deletepage";
import Signup from "./Pages/Signup";
import Events from "./Pages/Events";
import SingleStory from "./Pages/SingleStory";
import Footer from "./Pages/Footer";
import Logout from "./Pages/Logout";
import Profile from "./Pages/Profile";
import Meetings from "./Pages/Meetings";
import AddStories from "./Pages/AddStories";
import TextEditor from "./Pages/TextEditor";
import ProtectedPage from "./Pages/ProtectedPage";
import Forms from "./Pages/Forms";
import Create from "./Pages/Create";
import EditStory from "./Pages/EditStory";
import Test from "./Pages/Test";
import Addbusiness from "./Pages/Addbusiness";
import Startups from "./Pages/Startups";
import Contact from "./Pages/Contact";
export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Stories" element={<Stories />} />
        <Route path="Stories2" element={<Stories2 />} />
        <Route path="Menu" element={<Menu />} />
     
     
        <Route path="*" element={<NoPage />} />
        <Route index element={<Home />} />
        <Route path="Forms" element={<Forms />} />
        <Route path="OurStory" element={<OurStory />} />
        <Route path="Deletepage" element={<Deletepage />} />
        <Route path="Create" element={<Create />} />
        <Route path="Stories" element={<Stories />} />
        <Route path="Stories2" element={<Stories2 />} />
        <Route path="Stories3" element={<Stories3 />} />
        <Route path="Signin" element={<Signin />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Events" element={<Events />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="Logout" element={<Logout />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Meetings" element={<Meetings />} />
        <Route path="ProtectedPage" element={<ProtectedPage />} />
        <Route path="AddStories" element={<AddStories />} />
        <Route path="TextEditor" element={<TextEditor />} />
        <Route path="/SingleStory/:id" element={<SingleStory />} />
        <Route path="/EditStory/:id" element={<EditStory />} />
        <Route path="Listofprofiles" element={<Listofprofiles />} />
        <Route path="Addbusiness" element={<Addbusiness />} />
        <Route path="Test" element={<Test />} />
        <Route path="Startups" element={<Startups />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
