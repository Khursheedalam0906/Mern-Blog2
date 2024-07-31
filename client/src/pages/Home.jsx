import React, { useEffect, useState } from "react";
import girgit from "../assets/girgit.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const token = localStorage.getItem("token");

  console.log(blogs);

  const fetchAllBlogs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/getallblogs`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setBlogs(response.data.allblogs);
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="" style={{ height: "100vh" }}>
      <div className="container shadow-lg my-5">
        <div className="row">
          <h1 className="text-center pt-3">Latest Post</h1>
          <div className="col-3  mb-3 d-flex flex-row">
            {blogs && blogs.length > 0 ? (
              blogs.map((item) => {
                return (
                  <Link to={`/blog/${item._id}`}>
                    <div
                      key={item._id}
                      className="card me-3"
                      style={{ width: "20rem" }}
                    >
                      <img
                        src={`http://localhost:8080/${item.thumbnail}`}
                        className="card-img-top img-fluid" style={{width:"100%", height:"200px"}}
                        alt="Img"
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <button className="btn btn-primary">More</button>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
