// package
import React, { Component } from "react";
import { connect } from "react-redux";

// parts
import ChatDetailContent from "parts/freelancer/ChatDetailContent";

// action from redux
import { fetchPage } from "store/actions/page";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

class ChatDetailPage extends Component {
  componentDidMount() {
    document.title = "Freelancer | Detail Chat";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    const { match } = this.props;
    if (!this.props.page[match.params.id])
      this.props.fetchPage(
        `freelancer/chats/${match.params.id}`,
        match.params.id,
        getWithExpiry("token")
      );
  }

  componentDidUpdate() {
    const { match } = this.props;
    this.props.fetchPage(
      `freelancer/chats/${match.params.id}`,
      match.params.id,
      getWithExpiry("token")
    );
  }

  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) return null;
    return <ChatDetailContent data={page[match.params.id]} />;
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(ChatDetailPage);
