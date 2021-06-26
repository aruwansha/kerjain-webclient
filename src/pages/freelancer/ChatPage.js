// package
import React, { Component } from "react";
import { connect } from "react-redux";

// parts
import ChatContent from "parts/freelancer/ChatContent";

// action from redux
import { fetchPage } from "store/actions/page";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

class ChatPage extends Component {
  componentDidMount() {
    document.title = "Freelancer | Chat";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page.chats)
      this.props.fetchPage(
        `freelancer/chats`,
        "chats",
        getWithExpiry("token")
      );
  }

  componentDidUpdate() {
    this.props.fetchPage(`freelancer/chats`, "chats", getWithExpiry("token"));
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("chats")) return null;
    return <ChatContent data={page} />;
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(ChatPage);
