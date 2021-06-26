// package
import React, { Component } from "react";
import { connect } from "react-redux";

// parts
import OrderContent from "parts/freelancer/OrderContent";

// action from redux
import { fetchPage } from "store/actions/page";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

class OrderPage extends Component {
  componentDidMount() {
    document.title = "Freelancer | Orderan";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page.orders)
      this.props.fetchPage(
        `freelancer/orders`,
        "orders",
        getWithExpiry("token")
      );
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("orders")) return null;
    return <OrderContent data={page} />;
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(OrderPage);
