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

    if (!getWithExpiry("token") && !getWithExpiry("level") === "freelancer")
      return this.props.history.push("/");

    if (!this.props.page.chats)
      this.props.fetchPage(`freelancer/chats`, "chats", getWithExpiry("token"));
  }

  componentDidUpdate() {
    this.props.fetchPage(`freelancer/chats`, "chats", getWithExpiry("token"));
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("chats"))
      return (
        <>
          <div className="loader-sm" style={{ left: "58%" }}></div>
          <div className="d-none d-md-block d-large-block">
            <div className="loader" style={{ marginLeft: 90 }}></div>
          </div>
        </>
      );

    return <ChatContent data={page} />;
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(ChatPage);
