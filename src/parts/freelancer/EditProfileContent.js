import React from "react";

import profileDefault from "assets/images/pp-default.svg";
import thumbnailDefault from "assets/images/thumbnail-default.svg";

export default function EditProfileContent(props) {
  const page = props.data;
  console.log(page);
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Profile</h1>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="personal-tab"
            data-toggle="tab"
            href="#personal"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Data Pribadi
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="service-tab"
            data-toggle="tab"
            href="#service"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Data Jasa
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="bank-tab"
            data-toggle="tab"
            href="#bank"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Data Bank
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="personal"
          role="tabpanel"
          aria-labelledby="personal-tab"
        >
          <div className="card mt-2 mb-4">
            <div className="card-body">
              <form
                action="/freelancer/profile/<%= freelancer.userId.id %>/personal?_method=PUT"
                method="post"
                enctype="multipart/form-data"
              >
                <div className="form-group">
                  <label for="inputName">Nama Depan</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    defaultValue={page.profile.userId.name.split(" ")[0]}
                  />
                </div>
                <div className="form-group">
                  <label for="inputName">Nama Belakang</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={page.profile.userId.name.split(" ")[1]}
                  />
                </div>
                <div className="form-group">
                  <label for="inputEmail">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={page.profile.userId.email}
                  />
                </div>
                <div className="form-group">
                  <label for="inputAddress">Alamat</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={page.profile.userId.address}
                  />
                </div>
                <div className="form-group">
                  <label for="inputPhone">Nomer Telepon</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    value={page.profile.userId.phone}
                  />
                </div>
                <div className="form-group">
                  <label for="inputPhone">Foto Profil</label>
                  <br />
                  <img
                    src={`${process.env.REACT_APP_HOST}${page.profile.userId.imgUrl}`}
                    alt=""
                    width="200"
                    height="200"
                    className="img-fluid mb-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = profileDefault;
                    }}
                  />
                  <input
                    type="file"
                    className="form-control-file mt-2"
                    name="image"
                  />
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="service"
          role="tabpanel"
          aria-labelledby="service-tab"
        >
          <div className="card mt-2 mb-4">
            <div className="card-body">
              <form
                action="/freelancer/profile/<%= freelancer._id %>/service?_method=PUT"
                method="post"
                enctype="multipart/form-data"
              >
                <div className="form-group">
                  <label for="inputTitle">Judul</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={page.profile.title}
                  />
                </div>
                <div className="form-group">
                  <label for="inputDescription">Deskripsi</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={page.profile.description}
                  />
                </div>
                <div className="form-group">
                  <label for="inputCategory">Kategori</label>
                  <select
                    name="categoryId"
                    id="category"
                    className="form-control"
                  >
                    <option value={page.profile.categoryId.name}>
                      {page.profile.categoryId.name}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="image">Gambar</label>
                  <br />
                  <img
                    src={`${process.env.REACT_APP_HOST}${page.profile.imgUrl}`}
                    alt=""
                    width="200"
                    height="200"
                    className="img-fluid mb-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = thumbnailDefault;
                    }}
                  />
                  <input
                    type="file"
                    className="form-control-file mt-2"
                    name="image"
                  />
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="bank"
          role="tabpanel"
          aria-labelledby="bank-tab"
        >
          <div className="card mt-2 mb-4">
            <div className="card-body">
              <form
                action="/freelancer/profile/<%= freelancer._id %>/bank?_method=PUT"
                method="post"
              >
                <div className="form-group">
                  <label for="inputBankName">Nama Bank</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bankName"
                    value={page.profile.bankName}
                    placeholder="Enter Bank Name"
                  />
                </div>
                <div className="form-group">
                  <label for="inputbankAccount">Rekening Bank</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bankAccount"
                    value={page.profile.bankAccount}
                    placeholder="Enter bank Account"
                  />
                </div>
                <div className="form-group">
                  <label for="inputAccountHolder">Pemilik Rekening</label>
                  <input
                    type="text"
                    className="form-control"
                    name="accountHolder"
                    value={page.profile.accountHolder}
                    placeholder="Enter Bank Name"
                  />
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
