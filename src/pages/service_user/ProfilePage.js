import React, { Component } from "react";

import Header from "parts/service_user/Header";

import Button from "elements/Button";

import { connect } from "react-redux";

import { fetchPage } from "store/actions/page";

import { edit_profile } from "store/actions/profile";

import { formatDate } from "utils/formatDate";
import { getWithExpiry } from "utils/setExpiryLocalStorage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        birthdate: "",
        phone: "",
      },
      loading: false,
    };

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page.profilePage)
      this.props.fetchPage(
        `user/profile/get`,
        "profilePage",
        getWithExpiry("token")
      );

    this.handleChange = this.handleChange.bind(this);
    this._edit_profile = this._edit_profile.bind(this);
  }

  handleChange(event) {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
    });
  }

  _edit_profile = (event) => {
    const { data } = this.state;
    if (
      data.firstname === "" ||
      data.lastname === "" ||
      data.email === "" ||
      data.address === "" ||
      data.birthdate === "" ||
      data.phone === ""
    ) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = {
        name: `${data.firstname} ${data.lastname}`,
        email: data.email,
        address: data.address,
        birthdate: data.birthdate,
        phone: data.phone,
      };
      this.props.edit_profile(payload, this.props);
    }
    event.preventDefault();
  };

  loader = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { loading } = this.state;

    const { page } = this.props;
    if (!page.hasOwnProperty("profilePage")) return null;

    return (
      <>
        <Header {...this.props} />
        <section className="container" style={{ margin: "auto" }}>
          <h4 className="mb-3">Profile</h4>
          <div className="wrapper" style={{ margin: "30px 0" }}>
            <form onSubmit={this._edit_profile}>
              <div className="row">
                <div
                  className="col-lg-6 pd-right-50 pd-left-50"
                  style={{ margin: "0 auto" }}
                >
                  <div className="form-group">
                    <label htmlFor="">Nama Depan</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      placeholder="Masukkan nama..."
                      defaultValue={page.profilePage.name.split(" ")[0]}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-6 pd-right-50 pd-left-50"
                  style={{ margin: "0 auto" }}
                >
                  <div className="form-group">
                    <label htmlFor="">Nama Belakang</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      placeholder="Masukkan nama..."
                      defaultValue={page.profilePage.name.split(" ")[1]}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-6 pd-right-50 pd-left-50"
                  style={{ margin: "0 auto" }}
                >
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Masukkan email..."
                      defaultValue={page.profilePage.email}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-6 pd-right-50 pd-left-50"
                  style={{ margin: "0 auto" }}
                >
                  <div className="form-group">
                    <label htmlFor="">Alamat</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Masukkan alamat..."
                      defaultValue={page.profilePage.address}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-6 pd-right-50 pd-left-50"
                  style={{ margin: "0 auto" }}
                >
                  <div className="form-group">
                    <label htmlFor="">Tanggal Lahir</label>
                    <input
                      type="date"
                      className="form-control"
                      name="birthdate"
                      placeholder="Masukkan tanggal lahir..."
                      defaultValue={formatDate(page.profilePage.birthdate)}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-6 pd-right-50 pd-left-50"
                  style={{ margin: "0 auto" }}
                >
                  <div className="form-group">
                    <label htmlFor="">No. HP</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Masukkan No.Hp..."
                      defaultValue={page.profilePage.phone}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-6 pd-right-50 pd-left-50"
                  style={{ margin: "0 auto" }}
                >
                  <Button
                    className="btn px-4"
                    type="submit"
                    onClick={this.loader}
                    disabled={loading}
                    isPrimary
                  >
                    {loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        style={{ margin: "0 0.8em" }}
                      ></span>
                    )}
                    {!loading && <span>Ubah</span>}
                  </Button>
                  <Button
                    type="link"
                    className="btn btn-light px-4 ml-3"
                    href="/"
                  >
                    Kembali
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
  profile: state.profile,
});

export default connect(mapStateToProps, { fetchPage, edit_profile })(
  ProfilePage
);
