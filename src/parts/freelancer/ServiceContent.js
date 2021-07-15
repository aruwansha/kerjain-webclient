import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// action
import {
  addService,
  deleteService,
  editService,
} from "store/actions/freelancer/service";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

import thumbnailDefault from "assets/images/thumbnail-default.svg";
import { formatNumber } from "utils/formatNumber";

export default function ServiceContent(props) {
  const dispatch = useDispatch();

  const [postService, setPostService] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [postServiceImg, setPostServiceImg] = useState({
    selectedFile: null,
  });

  const handlePostService = (e) => {
    setPostService({ ...postService, [e.target.name]: e.target.value });
  };

  const onFilePostService = (event) => {
    setPostServiceImg({ selectedFile: event.target.files[0] });
  };

  const add_service = () => {
    if (
      postService.title === undefined ||
      postService.description === undefined ||
      postService.price === undefined ||
      !postServiceImg.selectedFile
    ) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = new FormData();
      payload.append("title", postService.title);
      payload.append("description", postService.description);
      payload.append("price", postService.price);
      if (postServiceImg.selectedFile) {
        payload.append(
          "image",
          postServiceImg.selectedFile,
          postServiceImg.selectedFile.name
        );
        dispatch(addService(payload, getWithExpiry("token")));
      }
    }
  };

  const [serviceId, setServiceId] = useState({
    id: "",
  });

  const [putService, setPutService] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [putServiceImg, setPutServiceImg] = useState({
    selectedFile: null,
  });

  const handlePutService = (e) => {
    setPutService({ ...putService, [e.target.name]: e.target.value });
  };

  const onFilePutService = (event) => {
    setPutServiceImg({ selectedFile: event.target.files[0] });
  };

  // const id = useRef(null);

  const edit_service = (id) => {
    if (typeof id === "string") {
      setServiceId({ id: id });
    }
    if (
      putService.title === undefined ||
      putService.description === undefined ||
      putService.price === undefined
    ) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = new FormData();
      payload.append("id", serviceId.id);
      payload.append("title", putService.title);
      payload.append("description", putService.description);
      payload.append("price", putService.price);
      if (putServiceImg.selectedFile) {
        payload.append(
          "image",
          putServiceImg.selectedFile,
          putServiceImg.selectedFile.name
        );
        dispatch(editService(payload, getWithExpiry("token")));
      } else {
        dispatch(editService(payload, getWithExpiry("token")));
      }
    }
  };

  const delete_service = (id) => {
    dispatch(deleteService(id, getWithExpiry("token")));
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">Daftar Layanan</h1>
        <div className="row mb-4">
          <div className="col">
            <button
              className="btn btn-primary btn-sm"
              data-toggle="modal"
              data-target="#addModal"
            >
              <span className="font-weight-bold text-xs text-uppercase">
                Tambah
              </span>
            </button>
          </div>
        </div>
        <section id="list">
          {props.data.services.map((service, index) => {
            return (
              <div className="row" key={`service-${index}`}>
                <div className="col-12 mb-3">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col-lg-3 col-sm-12 mr-2">
                          <img
                            src={`${process.env.REACT_APP_HOST}${service.imgUrl}`}
                            alt={service.title}
                            style={{
                              objectFit: "contain !important",
                              width: "100% !important",
                              maxWidth: "200px",
                              height: "112.50px !important",
                            }}
                            className="img-fluid"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = thumbnailDefault;
                            }}
                          />
                        </div>
                        <div className="col-6 mr-auto">
                          <div className="text-l font-weight-bold text-primary text-uppercase mb-1">
                            {service.title}
                          </div>
                          <div className="h6 mb-2 text-gray-500">
                            {service.description}
                          </div>
                          <div className="h6 mb-0">
                            Rp {formatNumber(service.price)}
                          </div>
                        </div>
                        <div className="col-auto">
                          <input
                            type="hidden"
                            defaultValue={service._id}
                            name="id"
                            // ref={id}
                          />
                          <a
                            href="#/"
                            type="button"
                            onClick={(e) => edit_service(service._id)}
                            data-toggle="modal"
                            data-target="#editModal"
                            className="btn btn-warning btn-sm text-white  d-flex justify-content-center mb-2"
                          >
                            Edit
                          </a>
                          <a
                            href="#/"
                            type="button"
                            onClick={() => {
                              delete_service(service._id);
                            }}
                            className="btn btn-danger btn-sm button-delete d-flex justify-content-center mb-0"
                          >
                            Hapus
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* add modal */}
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Tambah layanan
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="inputServiceTitle">Judul</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Masukkan nama layanan..."
                    onChange={handlePostService}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputServiceDescription">Deskripsi</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Masukkan deskripsi layanan..."
                    onChange={handlePostService}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAccountHolder">Harga</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    placeholder="Masukkan harga layanan..."
                    onChange={handlePostService}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputImgUrl">Gambar</label>
                  <input
                    type="file"
                    className="form-control-file"
                    name="image"
                    onChange={onFilePostService}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Keluar
                  </button>
                  <button
                    type="button"
                    onClick={add_service}
                    data-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* edit modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Edit Layanan
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="inputServiceTitle">Judul</label>
                    <input
                      type="text"
                      className="form-control service-title"
                      name="title"
                      placeholder="Masukkan judul layanan..."
                      onChange={handlePutService}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputServiceDescription">Deskripsi</label>
                    <input
                      type="text"
                      className="form-control service-description"
                      name="description"
                      placeholder="Masukkan deskripsi layanan..."
                      onChange={handlePutService}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPrice">Harga</label>
                    <input
                      type="number"
                      className="form-control service-price"
                      name="price"
                      placeholder="Masukkan harga layanan..."
                      onChange={handlePutService}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputImgUrl">Gambar</label>
                    <input
                      type="file"
                      className="form-control-file"
                      name="image"
                      onChange={onFilePutService}
                    />
                  </div>
                  <div className="modal-footer">
                    <input type="hidden" name="id" className="id" />
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Keluar
                    </button>
                    <button
                      type="button"
                      onClick={edit_service}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal */}
      {/* <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Yakin untuk menghapus data ini?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">Pilih "Hapus" jika anda yakin.</div>
                <div className="modal-footer">
                  <input type="text" name="id" className="id" />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Batalkan
                  </button>
                  <button
                    type="button"
                    onClick={delete_service}
                    className="btn btn-primary"
                  >
                    Hapus
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
