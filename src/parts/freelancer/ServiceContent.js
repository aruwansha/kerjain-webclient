import React from "react";

import thumbnailDefault from "assets/images/thumbnail-default.svg";
import { formatNumber } from "utils/formatNumber";

export default function ServiceContent(props) {
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
                        <div className="col-3 mr-2">
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
                          <a
                            href="#/"
                            type="button"
                            data-id="<%= service[i].id %>"
                            data-title="<%= service[i].title %>"
                            data-description="<%= service[i].description %>"
                            data-price="<%= service[i].price %>"
                            data-toggle="modal"
                            data-target="#editModal"
                            className="btn btn-warning btn-sm text-white  d-flex justify-content-center mb-2"
                          >
                            Edit
                          </a>
                          <a
                            href="#/"
                            type="button"
                            data-id="<%= service[i].id %>"
                            data-toggle="modal"
                            data-target="#deleteModal"
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
            <form
              action="/freelancer/service/add"
              method="POST"
              enctype="multipart/form-data"
            >
              <div className="modal-body">
                <div className="form-group">
                  <label for="inputServiceTitle">Judul</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Masukkan nama layanan..."
                    autocomplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="inputServiceDescription">Deskripsi</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Masukkan deskripsi layanan..."
                    autocomplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="inputAccountHolder">Harga</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    placeholder="Masukkan harga layanan..."
                    autocomplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="inputImgUrl">Gambar</label>
                  <input
                    type="file"
                    className="form-control-file"
                    name="image"
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
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
              <form
                action="/freelancer/service/edit?_method=PUT"
                method="POST"
                enctype="multipart/form-data"
              >
                <div className="modal-body">
                  <div className="form-group">
                    <label for="inputServiceTitle">Judul</label>
                    <input
                      type="text"
                      className="form-control service-title"
                      name="title"
                      placeholder="Masukkan judul layanan..."
                      required
                      autocomplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputServiceDescription">Deskripsi</label>
                    <input
                      type="text"
                      className="form-control service-description"
                      name="description"
                      placeholder="Masukkan deskripsi layanan..."
                      required
                      autocomplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputPrice">Harga</label>
                    <input
                      type="number"
                      className="form-control service-price"
                      name="price"
                      placeholder="Masukkan harga layanan..."
                      required
                      autocomplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputImgUrl">Gambar</label>
                    <input
                      type="file"
                      className="form-control-file"
                      name="image"
                    />
                  </div>
                  <div className="modal-footer">
                    <input type="hidden" name="id" className="id" />
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
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
      <div
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
              <form
                action="/freelancer/service/delete?_method=DELETE"
                method="POST"
              >
                <div className="form-group">Pilih "Hapus" jika anda yakin.</div>
                <div className="modal-footer">
                  <input type="hidden" name="id" className="id" />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Batalkan
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Hapus
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
