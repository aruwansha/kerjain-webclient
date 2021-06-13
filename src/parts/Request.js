import React, { Component } from "react";

import Button from "elements/Button";

import Banner from "elements/Banner";

import Fade from "react-reveal/Fade";

import { connect } from "react-redux";

import { request } from "store/actions/request";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        categoryId: "",
        subject: "",
        description: "",
        budget: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this._request = this._request.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
    });
  };

  _request = (event) => {
    const { data } = this.state;
    console.log(data);
    if (
      data.categoryId === "" ||
      data.subject === "" ||
      data.description === "" ||
      data.budget === ""
    ) {
      toast.error("Tolong isi dan lengkapi field!");
    } else {
      const payload = {
        categoryId: data.categoryId,
        requestSubject: data.subject,
        requestDescription: data.description,
        requestBudget: data.budget,
      };
      this.props.request(payload, getWithExpiry("token"));
    }
    this.setState({
      data: {
        categoryId: "",
        subject: "",
        description: "",
        budget: "",
      },
    });
    event.preventDefault();
  };

  render() {
    const { data } = this.state;

    return (
      <section id="request" className="container">
        <Fade bottom>
          <h4>Masukkan Request</h4>
          <div className="row">
            <div className="col-lg-6 pt-5">
              <form onSubmit={this._request}>
                <div className="form-group">
                  <label htmlFor="">Kategori yang dipiih</label>
                  <select
                    name="categoryId"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.categoryId}
                  >
                    <option value="" selected disabled>
                      Pilih kategori...
                    </option>
                    <option value="605b580db4a8e60af44d4530">
                      Technology & Programming
                    </option>
                    <option value="605b580db4a8e60af44d4531">
                      Graphic & Design
                    </option>
                    <option value="605b580db4a8e60af44d4532">
                      Write & Translate
                    </option>
                    <option value="605b580db4a8e60af44d4533">
                      Video & Animation
                    </option>
                  </select>
                </div>
                {data.categoryId !== "" && (
                  <div className="form-group">
                    <label htmlFor="">Subyek</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Masukkan subyek..."
                      onChange={this.handleChange}
                    />
                  </div>
                )}
                {data.subject !== "" && (
                  <div className="form-group">
                    <label htmlFor="">Deskripsi</label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      placeholder="Masukkan deskripsi..."
                      onChange={this.handleChange}
                    />
                  </div>
                )}
                {data.description !== "" && (
                  <div className="form-group">
                    <label htmlFor="">Maksimal Dana</label>
                    <input
                      type="text"
                      className="form-control"
                      name="budget"
                      placeholder="Masukkan maksimal pengeluaran..."
                      onChange={this.handleChange}
                    />
                  </div>
                )}
                {data.budget !== "" && (
                  <Fade>
                    <Button className="btn px-4" type="submit" isPrimary>
                      Buat Request
                    </Button>
                  </Fade>
                )}
              </form>
            </div>
            <div className="col d-none d-lg-block">
              <Banner image="https://source.unsplash.com/random" isExternal />
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  request: state.request,
});

export default connect(mapStateToProps, { request })(Request);
