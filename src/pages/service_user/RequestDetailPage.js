import React, { Component } from "react";
import { connect } from "react-redux";
import Time from "react-time-format";

import { withRouter } from "react-router-dom";

import Header from "parts/service_user/Header";
import Footer from "parts/service_user/Footer";

import Button from "elements/Button";

import propTypes from "prop-types";

import { fetchPage } from "store/actions/page";

import { pick_freelancer } from "store/actions/freelancer";

import { checkoutBooking } from "store/actions/checkout";

import { formatNumber } from "utils/formatNumber";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

class RequestDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      description: "",
      submitted: false,
    };

    window.title = "KerjaIn | Detail Request";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `user/request/${this.props.match.params.id}`,
        this.props.match.params.id,
        getWithExpiry("token")
      );

    this.handleChange = this.handleChange.bind(this);
    this._pick_freelancer = this._pick_freelancer.bind(this);
  }

  handleChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  _pick_freelancer = (id, budget) => {
    const payload = {
      freelancerId: id,
      finalBudget: budget,
    };
    this.props.pick_freelancer(
      payload,
      this.props.match.params.id,
      getWithExpiry("token")
    );
  };

  startBooking = (request, bank) => {
    this.props.checkoutBooking({
      requestId: request._id,
      title: request.requestSubject,
      price: request.finalBudget,
      description: request.requestDescription,
      bank: bank,
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) return null;
    return (
      <>
        <Header {...this.props} />
        <div className="container">
          <h4 className="mb-3">Detail Request</h4>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header"></div>
                <div
                  className="card-body"
                  style={{ height: 500, overflow: "auto" }}
                >
                  {page[match.params.id].request.map((request, index) => {
                    return (
                      <div className="form-group" key={`key-${index}`}>
                        <h5>Informasi Request</h5>
                        <table>
                          <tbody>
                            <tr>
                              <td>Tanggal</td>
                              <td>:</td>
                              <td>
                                <Time
                                  value={request.requestDate}
                                  format="YYYY/MM/DD"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Judul</td>
                              <td>:</td>
                              <td>{request.requestSubject}</td>
                            </tr>
                            <tr>
                              <td>Detail</td>
                              <td>:</td>
                              <td>{request.requestDescription}</td>
                            </tr>
                            <tr>
                              <td>Budget Tersedia</td>
                              <td>:</td>
                              <td>Rp {formatNumber(request.requestBudget)}</td>
                            </tr>
                            {request.finalBudget && (
                              <tr>
                                <td>Harga Akhir</td>
                                <td>:</td>
                                <td>
                                  Rp {formatNumber(request.finalBudget)}
                                </td>
                              </tr>
                            )}
                          </tbody>
                          {request.freelancerId ? (
                            !request.request[0] && 
                            <Button
                              className="btn btn-primary btn-sm"
                              onClick={() => {
                                this.startBooking(request, page[match.params.id].bank);
                              }}
                            >
                              Bayar
                            </Button>
                          ) : ""}
                        </table>
                        <hr />
                        {!request.freelancerId && (
                          <div className="table-responsive">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th scope="col">No</th>
                                  <th scope="col">Nama Freelancer</th>
                                  <th scope="col">Tawaran Harga</th>
                                  <th scope="col">Rating</th>
                                  <th scope="col">Aksi</th>
                                </tr>
                              </thead>
                              <tbody>
                                {request.requestBidId.map(
                                  (requestBid, index) => {
                                    return (
                                      <tr key={`row-${index}`}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{request.freelancer[0].name}</td>
                                        <td>
                                          Rp {formatNumber(requestBid.bid)}
                                        </td>
                                        <td>{request.rating.toFixed(1)}</td>
                                        <td>
                                          <Button
                                            type="button"
                                            onClick={() =>
                                              this._pick_freelancer(
                                                requestBid.freelancerId,
                                                requestBid.bid
                                              )
                                            }
                                            className="btn btn-primary btn-sm"
                                          >
                                            Pilih
                                          </Button>
                                        </td>
                                      </tr>
                                    );
                                  }
                                )}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

RequestDetailPage.propTypes = {
  startBooking: propTypes.func,
};

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, {
  fetchPage,
  pick_freelancer,
  checkoutBooking,
})(withRouter(RequestDetailPage));
