import React from "react";

import Button from "elements/Button";

import { formatNumber } from "utils/formatNumber";

export default function RequestContent(props) {
  const page = props.data;
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Daftar Request</h1>
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
                  <th>Nama Pemesan</th>
                  <th>Subyek</th>
                  <th>Budget Maksimal</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {page.requests.map((request, index) => {
                  return (
                    <tr key={`request-${index}`}>
                      <td>{index + 1}</td>
                      <td>{request.userId[0].name}</td>
                      <td>{request.requestSubject}</td>
                      <td>Rp {formatNumber(request.requestBudget)}</td>
                      <td>
                        <Button
                          type="link"
                          href={`/freelancer/request/${request._id}`}
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
