import React from "react";
import { formatNumber } from "utils/formatNumber";
import Button from "elements/Button";

export default function OrderDetailContent({ data }) {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Detail Order</h1>
      <div className="card shadow mb-4 mt-2">
        <div className="card-header py-3">
          <Button
            type="link"
            href="/freelancer/order"
            className="btn btn-secondary btn-sm"
          >
            Back
          </Button>
        </div>
        <div className="card-body">
          <div className="row">
            {data.order.payments.status === "paid" ?? (
              <div className="col-md-4">
                <div className="row ml-1">
                  <form
                    action="/freelancer/order/<%= data.order.id %>/upload?_method=PUT"
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <div className="form-group">
                      <label htmlFor="">Upload Bukti Pengerjaan:</label>
                      <input
                        type="file"
                        name="image"
                        id="file"
                        className="form-control-file"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-success btn-sm">
                      <i className="fas fa-check"></i>
                      Upload
                    </button>
                  </form>
                </div>
              </div>
            )}

            <div className="col">
              <div className="form-group">
                <label htmlFor="inputName">Nama Penyewa</label>
                <input
                  type="text"
                  className="form-control input-disabled"
                  name="name"
                  defaultValue={data.serviceUser.name}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="text"
                  className="form-control input-disabled"
                  name="email"
                  defaultValue={data.serviceUser.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPhone">No. HP</label>
                <input
                  type="text"
                  className="form-control input-disabled"
                  name="phone"
                  defaultValue={data.serviceUser.phone}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputService">Pesanan</label>
                <input
                  type="text"
                  className="form-control input-disabled mb-2"
                  name="service"
                  defaultValue={` ${
                    data.order.serviceId
                      ? data.order.serviceId.title
                      : data.order.requestId.requestSubject
                  } - Rp  ${formatNumber(
                    data.order.serviceId
                      ? data.order.serviceId.price
                      : data.order.requestId.finalBudget
                  )}`}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputService">Detail Pesanan</label>
                <textarea
                  className="form-control input-disabled mb-2"
                  name="service"
                  rows="3"
                  readOnly
                  defaultValue={data.order.detailNote}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="inputStatus">Status</label>
                <input
                  type="text"
                  className="form-control input-disabled"
                  name="status"
                  defaultValue={
                    data.order.payments.status === "finished"
                      ? "Selesai"
                      : data.order.payments.status === "paid"
                      ? "Menunggu Konfirmasi Admin"
                      : data.order.payments.status === "unpaid"
                      ? "Menunggu Pembayaran"
                      : "undefined"
                  }
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputTotal">Total</label>
                <input
                  type="text"
                  className="form-control input-disabled"
                  name="total"
                  defaultValue={`Rp ${formatNumber(data.order.total)}`}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
