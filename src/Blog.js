import React, { useEffect, useState } from 'react'
import axios from "axios";

function Blog() {
    const [getBlog , setGetBlog] = useState("");
    useEffect(() => {
        
        axios.get(`http://3.7.81.243:3253/api/blog/`)
          .then((response) => {
            setGetBlog(response?.data?.data);
            console.log(response?.data?.data,"test")
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      <div className="blog-section-main">
        <div className="blog-section-bth">
          <h1>Blogs</h1>
          <p className="view-all">View All &#8594;</p>
        </div>
        <div className="blog-data-flex">
        {getBlog &&getBlog.slice(0, 3).map((blog,index)=>{
            return(
            <div className="single-blog">
            <img src={blog.image_url}></img>
            <h5>{blog.seo_title}</h5>
            <span>
            {formatDate(blog.createdAt)}  by <b className="btext">{blog.name}</b>
            </span>
            <p>
              {blog.short_description}
            </p>
          </div>
            )
        })}
          {/* <div className="single-blog">
            <img src="Images/Bitmap Copy.png"></img>
            <h5>Acoount Management Tips</h5>
            <span>
              May 13, 2019 by <b className="btext">Allison Fox</b>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua
            </p>
          </div>
          <div className="single-blog">
            <img src="Images/Bitmap Copy 2.png"></img>
            <h5>Acoount Management Tips</h5>
            <span>
              May 13, 2019 by <b className="btext">Allison Fox</b>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua
            </p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Blog
