import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addcategory = () => {
  const [title, setTitle] = useState("");

  console.log(title);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleCategory = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/addcategory`,
        { title },
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
    <div className="" style={{ height: "100vh" }}>
      <div className="container shadow mt-5 ">
        <h1 className="text-center pt-3">Add a new category</h1>
        <div className="d-flex col-md-12 items-center justify-content-center mt-3">
          <div className="flex-column">
            <label htmlFor="title" className="form-label">
              Category Name
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control "
              placeholder="Enter category name"
            />
            <button
              onClick={() => handleCategory()}
              className="btn bg-primary mt-3 mb-4"
              style={{ color: "white" }}
            >
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcategory;
