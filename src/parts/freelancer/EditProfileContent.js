import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// action
import {
  editPersonal,
  editService,
  editBank,
} from "store/actions/freelancer/profile";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

import profileDefault from "assets/images/pp-default.svg";
import thumbnailDefault from "assets/images/thumbnail-default.svg";

export default function EditProfileContent({ data }) {
  const dispatch = useDispatch();

  const [personal, setPersonal] = useState({
    firstname: data.profile.userId.name.split(" ")[0],
    lastname: data.profile.userId.name.split(" ")[1],
    email: data.profile.userId.email,
    address: data.profile.userId.address,
    birthdate: data.profile.userId.birthdate,
    phone: data.profile.userId.phone,
  });

  const handlePersonal = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const [personalImg, setPersonalImg] = useState({
    selectedFile: null,
  });

  const onFilePersonal = (event) => {
    setPersonalImg({ selectedFile: event.target.files[0] });
  };

  const edit_personal = () => {
    if (
      personal.firstname === undefined ||
      personal.lastname === undefined ||
      personal.email === undefined ||
      personal.address === undefined ||
      personal.phone === undefined
    ) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = new FormData();
      payload.append("firstname", personal.firstname);
      payload.append("lastname", personal.lastname)
      payload.append("email", personal.email);
      payload.append("address", personal.address);
      payload.append("phone", personal.phone);
      if (personalImg.selectedFile) {
        payload.append(
          "image",
          personalImg.selectedFile,
          personalImg.selectedFile.name
        );
        dispatch(editPersonal(payload, getWithExpiry("token")));
      } else {
        dispatch(editPersonal(payload, getWithExpiry("token")));
      }
    }
  };

  const [service, setService] = useState({
    title: data.profile.title,
    description: data.profile.description,
  });

  const [serviceImg, setServiceImg] = useState({
    selectedFile: null,
  });

  const handleService = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const onFileService = (event) => {
    setServiceImg({ selectedFile: event.target.files[0] });
  };

  const edit_service = () => {
    if (service.title === undefined || service.description === undefined) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = new FormData();
      payload.append("title", service.title);
      payload.append("description", service.description);
      if (serviceImg.selectedFile) {
        payload.append(
          "image",
          serviceImg.selectedFile,
          serviceImg.selectedFile.name
        );
        dispatch(editService(payload, getWithExpiry("token")));
      } else {
        dispatch(editService(payload, getWithExpiry("token")));
      }
    }
  };

  const [bank, setBank] = useState({
    bankName: data.profile.bankName,
    bankAccount: data.profile.bankAccount,
    accountHolder: data.profile.accountHolder,
  });

  const handleBank = (e) => {
    setBank({ ...bank, [e.target.name]: e.target.value });
  };

  const edit_bank = () => {
    if (
      bank.bankName === undefined ||
      bank.bankAccount === undefined ||
      bank.accountHolder === undefined
    ) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = {
        bankName: bank.bankName,
        bankAccount: bank.bankAccount,
        accountHolder: bank.accountHolder,
      };
      dispatch(editBank(payload, getWithExpiry("token")));
    }
  };

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
              <form>
                <div className="form-group">
                  <label htmlFor="inputName">Nama Depan</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    defaultValue={data.profile.userId.name.split(" ")[0]}
                    onChange={handlePersonal}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Nama Belakang</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    defaultValue={data.profile.userId.name.split(" ")[1]}
                    onChange={handlePersonal}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    defaultValue={data.profile.userId.email}
                    onChange={handlePersonal}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Alamat</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    defaultValue={data.profile.userId.address}
                    onChange={handlePersonal}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPhone">Nomer Telepon</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    defaultValue={data.profile.userId.phone}
                    onChange={handlePersonal}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPhone">Foto Profil</label>
                  <br />
                  <img
                    src={`${process.env.REACT_APP_HOST}${data.profile.userId.imgUrl}`}
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
                    onChange={onFilePersonal}
                  />
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    onClick={edit_personal}
                    className="btn btn-primary btn-sm"
                  >
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
              <form>
                <div className="form-group">
                  <label htmlFor="inputTitle">Judul</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    defaultValue={data.profile.title}
                    onChange={handleService}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputDescription">Deskripsi</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    defaultValue={data.profile.description}
                    onChange={handleService}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputCategory">Kategori</label>
                  <select
                    name="categoryId"
                    id="category"
                    className="form-control"
                  >
                    <option defaultValue={data.profile.categoryId.name}>
                      {data.profile.categoryId.name}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="image">Gambar</label>
                  <br />
                  <img
                    src={`${process.env.REACT_APP_HOST}${data.profile.imgUrl}`}
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
                    onChange={onFileService}
                  />
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    onClick={edit_service}
                    className="btn btn-primary btn-sm"
                  >
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
              <form>
                <div className="form-group">
                  <label htmlFor="inputBankName">Nama Bank</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bankName"
                    defaultValue={data.profile.bankName}
                    onChange={handleBank}
                    placeholder="Enter Bank Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputbankAccount">Rekening Bank</label>
                  <input
                    type="text"
                    className="form-control"
                    name="bankAccount"
                    defaultValue={data.profile.bankAccount}
                    onChange={handleBank}
                    placeholder="Enter bank Account"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAccountHolder">Pemilik Rekening</label>
                  <input
                    type="text"
                    className="form-control"
                    name="accountHolder"
                    defaultValue={data.profile.accountHolder}
                    onChange={handleBank}
                    placeholder="Enter Bank Name"
                  />
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    onClick={edit_bank}
                    className="btn btn-primary btn-sm"
                  >
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
