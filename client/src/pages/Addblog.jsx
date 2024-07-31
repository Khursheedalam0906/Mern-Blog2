import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Addblog = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories]= useState("")
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState([]);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const getAllCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/getcategory`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setCategories(response.data.allcategory);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const formdata = new FormData();
  formdata.append("title", title);
  formdata.append("category", category);
  formdata.append("description", description);
  formdata.append("thumbnail", file);

  const handleBlog = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/addblog`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div style={{height:"100vh"}}>
      <div className="container shadow my-5">
        <h1 className="text-center pt-3">Add a new blog</h1>
        <div className="col-md-12 d-flex items-center justify-content-center mt-4">
          <div className="flex-column">
            <div className="mb-3">
              <label htmlFor="title" className="mb-1 form-label">
                Title
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Blog Title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="mb-1 form-label">
                Category
              </label>
              <select className="form-control" onChange={(e)=>setCategory(e.target.value)} name="category">
                <option disabled>Select Category</option>
                {categories &&
                  categories.map((item) => {
                    return <option value={item._id} key={item._id}>{item.title}</option>;
                  })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="blogdescription" className="mb-1 form-label">
                Description
              </label>
              <textarea
                id="blogdescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols={2}
                type="password"
                className="form-control"
                placeholder="Blog Description"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="thumbnail" className="mb-1 form-label">
                Thumbnail
              </label>
              <input
                id="thumbnail"
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                className="form-control"
              />
            </div>
            <button
              onClick={() => handleBlog()}
              className="btn btn-primary mb-4"
            >
              Add Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addblog;
