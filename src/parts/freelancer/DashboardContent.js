import React from "react";

export default function DashboardContent(props) {
  const page = props.data;
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
      <div className="row">
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Order
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {page.dashboard.total_order}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-laptop-house fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Layanan
                  </div>
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        {page.dashboard.total_service}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-users fa-2x text-gray-300"> </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
