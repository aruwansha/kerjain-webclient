import React, { Component } from "react";
import { connect } from "react-redux";
import Time from "react-time-format";
import ReactStars from "react-rating-stars-component";

import Header from "parts/Header";
import Footer from "parts/Footer";

import Button from "elements/Button";

import { fetchPage } from "store/actions/page";

import { review } from "store/actions/review";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class OrderDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      description: "",
      submitted: false,
    };

    window.title = "KerjaIn | Detail Order";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/order/get/${this.props.match.params.id}`,
        this.props.match.params.id,
        getWithExpiry("token")
      );

    this.handleChange = this.handleChange.bind(this);
    this._review = this._review.bind(this);
  }

  ratingChanged = (newRating) => {
    this.setState({
      rating: newRating,
    });
  };

  handleChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  _review = (event) => {
    this.setState({
      submitted: true,
    });
    const { rating, description } = this.state;
    if (rating === "" || description === "") {
      toast.error("Tolong isi fieldnya!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const { page, match } = this.props;
      const payload = {
        orderId: this.props.match.params.id,
        rating: rating,
        description: description,
      };
      this.props.review(
        payload,
        page[match.params.id][0].freelancerId,
        getWithExpiry("token")
      );
    }
    event.preventDefault();
  };

  render() {
    const { page, match } = this.props;
    const { submitted } = this.state;
    if (!page[match.params.id]) return null;

    return (
      <>
        <Header {...this.props} />
        <div className="container">
          <h4 className="mb-3">Detail Order</h4>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header"></div>
                <div
                  className="card-body"
                  style={{ height: 500, overflow: "auto" }}
                >
                  {page[match.params.id].map((order, index) => {
                    return (
                      <div className="form-group" key={`key-${index}`}>
                        <h5>Informasi Order</h5>
                        <table>
                          <tbody>
                            <tr>
                              <td>Invoice</td>
                              <td>:</td>
                              <td>#{order.invoice}</td>
                            </tr>
                            <tr>
                              <td>Tanggal Order</td>
                              <td>:</td>
                              <td>
                                <Time
                                  value={order.orderDate}
                                  format="YYYY/MM/DD"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>Judul</td>
                              <td>:</td>
                              <td>{order.serviceId.title}</td>
                            </tr>
                            <tr>
                              <td>Total Bayar</td>
                              <td>:</td>
                              <td>{order.total}</td>
                            </tr>
                            <tr>
                              <td>Nama Pemesan</td>
                              <td>:</td>
                              <td>{order.name}</td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>:</td>
                              <td>{order.email}</td>
                            </tr>
                            <tr>
                              <td>No. Hp</td>
                              <td>:</td>
                              <td>{order.phone}</td>
                            </tr>
                            <tr>
                              <td>Catatan</td>
                              <td>:</td>
                              <td>{order.detailNote}</td>
                            </tr>
                          </tbody>
                        </table>
                        <hr />
                        <h5>Informasi Pembayaran</h5>
                        <table>
                          <tbody>
                            <tr>
                              <td>Atas Nama</td>
                              <td>:</td>
                              <td>{order.payments.accountHolder}</td>
                            </tr>
                            <tr>
                              <td>Asal Bank</td>
                              <td>:</td>
                              <td>{order.payments.bankFrom}</td>
                            </tr>
                            <tr>
                              <td>Status Pemesanan</td>
                              <td>:</td>
                              <td>
                                {order.payments.status === "finished"
                                  ? "Selesai"
                                  : order.payments.status === "paid"
                                  ? "Menunggu Konfirmasi Admin"
                                  : order.payments.status === "unpaid"
                                  ? "Menunggu Pembayaran"
                                  : "undefined"}
                              </td>
                            </tr>
                            <tr>
                              <td>Bukti Pembayaran</td>
                              <td>:</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                        <img
                          src={`${process.env.REACT_APP_HOST}${order.payments.proofPayment}`}
                          alt="tes"
                          className="img-thumbnail"
                          style={{ height: 400 }}
                        />
                        <hr />
                        {order.payments.status === "finished" &&
                        !order.isReviewed &&
                        !submitted ? (
                          <section>
                            <h5>Beri Ulasan</h5>
                            <form onSubmit={this._review}>
                              <div className="row">
                                <div className="col">
                                  <span>Pilih rating</span>
                                  <ReactStars
                                    count={5}
                                    onChange={this.ratingChanged}
                                    size={30}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={
                                      <i className="fa fa-star-half-alt"></i>
                                    }
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffc107"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-11 col-9 text-left">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tulis ulasan..."
                                    name="description"
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                  />
                                </div>

                                <div className="col-lg-1 col-3 text-right">
                                  <Button
                                    className="btn btn-primary"
                                    type="submit"
                                  >
                                    Kirim
                                  </Button>
                                </div>
                              </div>
                            </form>
                          </section>
                        ) : (
                          ""
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

export default connect(mapStateToProps, { fetchPage, review })(OrderDetailPage);
