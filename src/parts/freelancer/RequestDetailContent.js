import React from "react";

import Button from 'elements/Button'
import { formatNumber } from "utils/formatNumber";

export default function RequestDetailContent(props) {
  const page = props.data;
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
                    <form
                      action="/freelancer/request/bid?_method=PUT"
                      method="POST"
                    >
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
                          />
                        </div>
                        <div className="modal-footer">
                          <input
                            type="hidden"
                            name="id"
                            defaultValue=" requestBid._id "
                            className="id"
                          />
                          <a
                            href="/freelancer/request"
                            className="btn btn-secondary btn-sm mr-2"
                          >
                            Kembali
                          </a>
                          <button
                            type="submit"
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
                    <a
                      type="button"
                      href="#/"
                      data-id=" request._id "
                      className="btn btn-primary btn-sm button-add"
                    >
                      Ikut
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
