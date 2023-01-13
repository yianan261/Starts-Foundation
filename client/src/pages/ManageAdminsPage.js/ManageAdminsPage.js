import React, { useState } from "react";
import ManageAdmins from "../../components/ManageAdmins/ManageAdmins";
import AdminSideNav from "../../components/AdminSideNav/AdminSideNav";
import AddAdminModal from "../../components/AddAdminModal/AddAdminModal";
import LogoutMenu from "../../components/LogoutMenu/LogoutMenu";

function ManageAdminsPage() {
  const [admins, setAdmins] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  /**
   * toggle function for add admin modal
   */
  const handleModal = () => {
    return setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <div className="d-flex align-items-center admin-mainDiv adminDiv">
        <AdminSideNav />
        <div className="col-2"></div>
        <ManageAdmins admins={admins} handleModal={handleModal} />
        <div className="col-2"></div>
      </div>

      {modalIsOpen ? <AddAdminModal handleModal={handleModal} /> : null}
    </>
  );
}

ManageAdminsPage.propTypes = {};
export default ManageAdminsPage;
