import React, { useState } from "react";
import { blogs } from "./MockBlog";
import { TiTick } from "react-icons/ti";
import "./BlogManager.css";
import TinyEditor from "../TinyEditor/TinyEditor";

function BlogManager() {
  const [editMode, setEditMode] = useState(false);
  const [blog, setBlog] = useState("");
  function handleClick(e) {
    setEditMode(!editMode);
    if (!e.target.name) {
      setBlog(e.currentTarget.children[0].innerHTML);
    }
  }
  return (
    <div className="container">
      {editMode ? (
        <TinyEditor blogId={blog} handleClick={handleClick} />
      ) : (
        <div className="container">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Create Date</th>
                <th scope="col">Publish Date</th>
                <th scope="col">Publish</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => {
                return (
                  <tr key={index} className="blog" onClick={handleClick}>
                    <td>{blog.id}</td>
                    <td>{blog.title}</td>
                    <td
                      dangerouslySetInnerHTML={{
                        __html: blog.content.slice(0, 100) + "...",
                      }}
                    ></td>
                    <td>{blog.createDate}</td>
                    <td>{blog.publishDate}</td>
                    <td className="text-center">
                      {blog.publish && <TiTick />}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button name="newPost" className="btn btn-custom" onClick={handleClick}>
            Write new post
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogManager;
