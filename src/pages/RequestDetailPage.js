import React, { Component } from "react";
import { connect } from "react-redux";
import Time from "react-time-format";

import Header from "parts/Header";
import Footer from "parts/Footer";

import Button from "elements/Button";

import { fetchPage } from "store/actions/page";

import { pick_freelancer } from "store/actions/freelancer";

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
        `/request/${this.props.match.params.id}`,
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

  _pick_freelancer = (id) => {
    const payload = {
      freelancerId: id,
    };
    this.props.pick_freelancer(
      payload,
      this.props.match.params.id,
      getWithExpiry("token")
    );
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
                  {page[match.params.id].map((request, index) => {
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
                          </tbody>
                        </table>
                        <hr />
                        {!request.freelancerId && (
                          <div className="table-responsive">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th scope="col">No</th>
                                  <th scope="col">Nama Freelancer</th>
                                  <th scope="col">Budget</th>
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
                                                requestBid._id
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

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage, pick_freelancer })(
  RequestDetailPage
);
