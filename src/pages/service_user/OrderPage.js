import React, { Component } from "react";
import { connect } from "react-redux";

import Fade from "react-reveal/Fade";

import Header from "parts/service_user/Header";
import Banner from "elements/Banner";
import Footer from "parts/service_user/Footer";

import { fetchPage } from "store/actions/page";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

import { formatNumber } from "utils/formatNumber";

import Button from "elements/Button";

class OrderPage extends Component {
  componentDidMount() {
    document.title = "KerjaIn | Order";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (getWithExpiry("level") !== "service_user") {
      return this.props.history.push("/");
    }

    if (!this.props.page.order)
      this.props.fetchPage(`user/order/get`, "order", getWithExpiry("token"));
  }
  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("order"))
      return (
        <>
          <div className="loader-sm"></div>
          <div className="d-none d-md-block d-lg-block">
            <div className="loader"></div>
          </div>
        </>
      );
    return (
      <>
        <Header {...this.props} />
        <Banner image="https://source.unsplash.com/random" isExternal />
        <Fade bottom>
          <section className="container">
            <h4>Daftar Order Anda:</h4>
            <Fade>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Judul Layanan</th>
                    <th scope="col">Total</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {page.order.map((order, index) => {
                    return (
                      <tr key={`row-${index}`}>
                        <th scope="row">{index + 1}</th>
                        {order.requestId && (
                          <td>{order.requestId.requestSubject}</td>
                        )}
                        {order.serviceId && <td>{order.serviceId.title}</td>}
                        <td>Rp {formatNumber(order.total)}</td>
                        <td>
                          <Button
                            href={`order/${order._id}`}
                            type="link"
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
            </Fade>
          </section>
        </Fade>
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(OrderPage);
