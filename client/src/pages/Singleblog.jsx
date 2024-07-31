import React, { useEffect, useState } from "react";
import natureImg from "../assets/nature.jpg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Singleblog = () => {
  const [blog, setBlog] = useState({});

  const params = useParams();
  const { id } = params;
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const getblogdata = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/getblog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
         setBlog(response.data.blog);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    getblogdata();
  }, [id]);

  return (
    
        <div className="container shadow my-5">
      {blog ? (
        <>
          <h1 className="text-center pt-3">{blog.title}</h1>
          <div className="mt-3">
            <img src={`http://localhost:8080/${blog.thumbnail}`} className="w-100 mt-2" style={{width:100, height:"500px"}} alt="..." />
            <h1>{blog.description}</h1>
            <button onClick={()=>navigate("/")} className="btn bg-primary mb-3" style={{ color: "white" }}>
              Back to post
            </button>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Singleblog;
