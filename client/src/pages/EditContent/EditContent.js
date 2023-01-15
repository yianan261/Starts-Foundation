import React, { useState } from "react";
import AdminSideNav from "../../components/AdminSideNav/AdminSideNav";
import BlogManager from "../../components/BlogManager/BlogManager";
import EditContentNav from "../../components/EditContentNav/EditContentNav";
import TinyEditor from "../../components/TinyEditor/TinyEditor";
import "./EditContent.css";

function EditContent() {
  const [page, setPage] = useState("Blog Manager");
  function changePage(name) {
    setPage(name);
  }

  return (
    <div>
      <div className="flex admin-mainDiv">
        <AdminSideNav />
        <div className="edit-content">
          <EditContentNav changePage={changePage} />
          <h1 className="mt-3">{page}</h1>
          {(() => {
            switch (page) {
              case "Blog Manager":
                return <BlogManager />;
              case "About Us":
                return <TinyEditor blogId={"1"} />;
              default:
                return <TinyEditor />;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default EditContent;
