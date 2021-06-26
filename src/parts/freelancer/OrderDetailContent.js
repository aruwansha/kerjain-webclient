import React from "react";
import { formatNumber } from "utils/formatNumber";
import Button from "elements/Button";

export default function OrderDetailContent(props) {
  const page = props.data;
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
            {page.order.payments.status === "paid" ?? (
              <div className="col-md-4">
                <div className="row ml-1">
                  <form
                    action="/freelancer/order/<%= page.order.id %>/upload?_method=PUT"
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <div className="form-group">
                      <label for="">Upload Bukti Pengerjaan:</label>
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
                <label for="inputName">Nama Penyewa</label>
                <input
                  type="text"
                  className="form-control input-disabled"
                  name="name"
                  value={page.serviceUser.name}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label for="inputEmail">Email</label>
                <input
                  type="text"
                  className="form-control input-disabled"
                  name="email"
                  value={page.serviceUser.email}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label for="inputPhone">No. HP</label>
                <input
                  type="text"
                  className="form-control input-disabled"
                  name="phone"
                  value={page.serviceUser.phone}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label for="inputService">Pesanan</label>
                <input
                  type="text"
                  className="form-control input-disabled mb-2"
                  name="service"
                  value={` ${
                    page.order.serviceId
                      ? page.order.serviceId.title
                      : page.order.requestId.requestSubject
                  } - Rp  ${formatNumber(
                    page.order.serviceId
                      ? page.order.serviceId.price
                      : page.order.requestId.finalBudget
                  )}`}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label for="inputService">Detail Pesanan</label>
                <textarea
                  className="form-control input-disabled mb-2"
                  name="service"
                  rows="3"
                  readOnly
                >
                  {page.order.detailNote}
                </textarea>
              </div>
              <div className="form-group">
                <label for="inputStatus">Status</label>
                <input
                  type="text"
                  className="form-control input-disabled"
                  name="status"
                  value={
                    page.order.payments.status === "finished"
                      ? "Selesai"
                      : page.order.payments.status === "paid"
                      ? "Menunggu Konfirmasi Admin"
                      : page.order.payments.status === "unpaid"
                      ? "Menunggu Pembayaran"
                      : "undefined"
                  }
                  readOnly
                />
              </div>
              <div className="form-group">
                <label for="inputTotal">Total</label>
                <input
                  type="text"
                  className="form-control input-disabled"
                  name="total"
                  value={`Rp ${formatNumber(page.order.total)}`}
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
