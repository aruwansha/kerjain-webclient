import React from "react";
import Time from "react-time-format";

import Button from "elements/Button";
import { formatNumber } from "utils/formatNumber";

export default function OrderContent(props) {
  const page = props.data;
  return (
    <div className="container-fluid">
      <div className="card mt-2 mb-4">
        <div className="card-header py-3"></div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered text-center"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Tanggal Order</th>
                  <th>Nama Pengirim</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {page.orders.orderId.map((order, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <Time value={order.orderDate} format="YYYY/MM/DD" />
                      </td>
                      <td>{order.payments.accountHolder}</td>
                      <td>
                        {order.payments.status === "finished"
                          ? "Selesai"
                          : order.payments.status === "paid"
                          ? "Menunggu Proses Freelancer"
                          : order.payments.status === "unpaid"
                          ? "Menunggu Konfirmasi Admin"
                          : "undefined"}
                      </td>
                      <td>{`Rp ${formatNumber(order.total)}`}</td>
                      <td>
                        <Button
                          type="link"
                          href={`/freelancer/order/${order._id}`}
                          className="btn btn-primary btn-sm"
                        >
                          Detail
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
