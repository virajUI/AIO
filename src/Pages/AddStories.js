import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "quill/dist/quill.snow.css";
import '../css/AddStories.css';
import ReactQuill from "react-quill";
// import "./AddStories.css"
function AddStories() {
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };

  var formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];
  // const handleProcedureContentChange = async (e) => {
  //   e.preventDefault();
  //   await uploadProduct();
  // };
  // const handleProcedureContentChange = (content) => {
  //   console.log("content---->", content);
  // };
  const navigate = useNavigate();
  // const [ptitle, setPtitle] = useState("");
  // const [pprice, setPprice] = useState("");
  // const [pfile, setPfile] = useState("");
  const [page_title, setPage_title] = useState("");
  const [description, setDescription] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [seq_no, setSeq_no] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState(1);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  // eslint-disable-next-line no-unused-vars
  const uploadProduct = async () => {
    const formData = new FormData();
    formData.append("page_title", page_title);
    formData.append("description", description);
    formData.append("seq_no", seq_no);
    formData.append("status", status);
    formData.append("image", image);
      const token = localStorage.getItem('token');

    const responce = await axios.post(
      "https://testapi.arbsindia.com/public/api/add-page",
      formData,
      {
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(responce.data)
    if (responce.data.success) {
      console.log(responce.data);
      console.log("success");
      alert("Data sent successfully!");
      console.log(token);
      setMessage(responce.data.success);
      setTimeout(() => {
        navigate("/Stories");
      }, 1000);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadProduct();
  };
  return (
<div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <h5 className="mb-4">Add Story </h5>
      <p className="text-warning">{message}</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-3"> Title </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPage_title(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-3"> Image</label>
          <div className="col-sm-9">
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>
        <p className="p">
          PS: High definition images would be appreciated{" "}
        </p>
        
        <div>
          <h1>Text Editor In React JS</h1>
          <div className="div">
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              placeholder="write your content .... and add second image with positioning please..."
              onChange={(content, delta, source, editor) => {
                setDescription(editor.getText());
              }}
              className="react-quill"
            ></ReactQuill>
             <button type="submit" onChange={handleSubmit} className="btn btn-primary button">
          Submit
        </button>
          </div>
        </div>
      </form>
      <div className="">
       
      </div>
    </div>

  </div>
</div>


  );
}
export default AddStories;
