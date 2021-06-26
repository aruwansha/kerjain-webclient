// package
import React, { Component } from "react";
import { connect } from "react-redux";

// parts
import OrderDetailContent from "parts/freelancer/OrderDetailContent";

// action from redux
import { fetchPage } from "store/actions/page";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

class OrderDetailPage extends Component {
  componentDidMount() {
    document.title = "Freelancer | Detail Orderan";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    const { match } = this.props;
    if (!this.props.page[match.params.id])
      this.props.fetchPage(
        `freelancer/orders/${match.params.id}`,
        match.params.id,
        getWithExpiry("token")
      );
  }

  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) return null;
    return <OrderDetailContent data={page[match.params.id]} />;
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(OrderDetailPage);
