import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// action
import { addBid, editBid } from "store/actions/freelancer/bid";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

import Button from "elements/Button";
import { formatNumber } from "utils/formatNumber";

export default function RequestDetailContent(props) {
  const page = props.data;

  const dispatch = useDispatch();

  const [postBid, setPostBid] = useState({
    nominal: "",
  });

  const handlePostBid = (e) => {
    setPostBid({ ...postBid, [e.target.name]: e.target.value });
  };

  const add_bid = () => {
    if (postBid.nominal === undefined) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = {
        id: page.request._id,
        nominal: postBid.nominal,
      };
      dispatch(addBid(payload, getWithExpiry("token")));
    }
  };

  const [putBid, setPutBid] = useState({
    nominal: "",
  });

  const handlePutBid = (e) => {
    setPutBid({ ...putBid, [e.target.name]: e.target.value });
  };

  const edit_bid = () => {
    if (putBid.nominal === undefined) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = {
        id: page.request_bid._id,
        nominal: putBid.nominal,
      };
      dispatch(editBid(payload, getWithExpiry("token")));
    }
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">Detail Request</h1>
        <div className="card shadow mb-4 mt-2">
          <div className="card-header py-3">
            <Button
              type="link"
              href="/freelancer/request"
              className="btn btn-secondary btn-sm"
            >
              Back
            </Button>
          </div>
          <div className="card-body" id="card">
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="inputName">Nama Penyewa</label>
                  <input
                    type="text"
                    className="form-control input-disabled"
                    name="name"
                    defaultValue={page.service_user.userId.name}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="text"
                    className="form-control input-disabled"
                    name="email"
                    defaultValue={page.service_user.userId.email}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPhone">No. HP</label>
                  <input
                    type="text"
                    className="form-control input-disabled"
                    name="phone"
                    defaultValue={page.service_user.userId.phone}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPhone">Subyek Pesanan</label>
                  <input
                    type="text"
                    className="form-control input-disabled"
                    name="phone"
                    defaultValue={page.request.requestSubject}
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inputPhone">Deskripsi Pesanan</label>
                  <input
                    type="text"
                    className="form-control input-disabled"
                    name="phone"
                    defaultValue={page.request.requestDescription}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPhone">Budget Pesanan</label>
                  <input
                    type="text"
                    className="form-control input-disabled"
                    name="phone"
                    defaultValue={`Rp ${formatNumber(
                      page.request.requestBudget
                    )} `}
                    readOnly
                  />
                </div>
                <hr />
                {page.request_bid ? (
                  <>
                    <h5>Status Bid Saya</h5>
                    <form>
                      <div className="modal-body">
                        <div className="form-group">
                          <label htmlFor="inputServiceTitle">Nominal</label>
                          <input
                            type="number"
                            className="form-control"
                            name="nominal"
                            placeholder={`Rp ${formatNumber(
                              page.request_bid.bid
                            )}`}
                            onChange={handlePutBid}
                          />
                        </div>
                        <div className="modal-footer">
                          <a
                            href="/freelancer/request"
                            className="btn btn-secondary btn-sm mr-2"
                          >
                            Kembali
                          </a>
                          <button
                            type="button"
                            onClick={edit_bid}
                            className="btn btn-primary btn-sm"
                          >
                            Ubah
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                ) : (
                  <div id="button" className="d-flex justify-content-end">
                    <a
                      href="/freelancer/request"
                      className="btn btn-secondary btn-sm mr-2"
                    >
                      Kembali
                    </a>
                    <button
                      type="button"
                      href="#/"
                      data-toggle="modal"
                      data-target="#addModal"
                      className="btn btn-primary btn-sm"
                    >
                      Ikut
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

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
                Ikuti Permintaan
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
            <form action="/freelancer/request/bid" method="POST">
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="inputServiceTitle">Nominal</label>
                  <input
                    type="number"
                    className="form-control"
                    name="nominal"
                    placeholder="Masukkan nominal..."
                    onChange={handlePostBid}
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
                    onClick={add_bid}
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Ikuti
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
