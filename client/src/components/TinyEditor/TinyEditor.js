import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { blogs } from "../BlogManager/MockBlog";
import "./TinyEditor.css";

export default function TinyEditor(props) {
  const blog = blogs.filter((blog) => {
    return blog.id.toString() === props.blogId;
  });
  const [selectedBlog, setContent] = useState(() => {
    if (blog.length !== 0) {
      return blog[0];
    } else {
      return {
        title: "",
        content: "",
      };
    }
  });
  function handleChange(e) {
    const title = e.target.value;
    setContent({
      ...selectedBlog,
      title: title,
    });
  }
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="container p-3">
      <div className="input-group mb-3">
        <span className="input-group-text">Title</span>
        <input
          type="text"
          className="form-control"
          aria-label="Title"
          value={selectedBlog.title}
          onChange={handleChange}
        />
      </div>
      <Editor
        apiKey="ehivsy1l41uafzk4lqwabpwchdekysk8cixodxo1mnqh38ln"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={selectedBlog.content}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "save",
            "wordcount",
            "media",
            "image",
            "link",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | link bullist numlist outdent indent " +
            "removeformat | image media | save",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          save_enablewhendirty: false,
          save_onsavecallback: () => {
            console.log("Saved");
          },
        }}
      />
      <button
        type="button"
        className="btn btn-custom"
        onClick={props.handleClick}
        name="save"
      >
        Save content
      </button>
      <button
        type="button"
        className="btn btn-custom"
        onClick={props.handleClick}
        name="publish"
      >
        Publish content
      </button>
    </div>
  );
}
