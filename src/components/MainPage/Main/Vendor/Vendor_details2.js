/**
 * Signin Firebase
 */

import React from "react";
import axios, * as others from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//react toastify end
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "../Vendor/Vendor.css";
import { Get_venor_Data } from "../Vendor/Services";
import { PUBLIC_URL } from "../Vendor/CommonURL";
import "../../../index.css";
import Header from "../../initialpage/Sidebar/header.jsx";
import Sidebar from "../../initialpage/Sidebar/sidebar";

// import 'Assets/plugins/morris/morris.min.js';
// import 'Assets/plugins/raphael/raphael.min.js';
// import 'Assets/js/chart.js';

class Vendor_details2 extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    invoice_id: "",
    vendor_name: "",
    mobile: "",
    Service_Type: "",
    address: "",
    modal: false,
    vendor_list: [],
    vendor_id: "",
    vendor_title: "",
    vendor_body: "",
    searchProject: [],
    search: "",
    search_vendor_result: [],
  };
  componentDidMount() {
    this.check_refresh();
    this.vendor_data_get();
  }
  check_refresh = () => {
    const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;
    if (reloadCount < 1) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  };
  vendor_data_get = async () => {
    // const response = await Get_venor_Data();
    // if (response) {
    //   this.setState({ vendoe_list: response.data });
    //   console.log(this.state.vendoe_list);
    //   console.log("list");
    // }
    // fetch(`${PUBLIC_URL}posts`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.setState({ vendor_list: json });
    //   });
    // console.log(this.state.vendor_list);
    // if (this.state.vendor_list.title) {
    //   alert("Hello");
    //
    //}
    const response = axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        this.setState({
          vendor_list: res.data,
          searchProject: res.data,
        });
        console.log(this.state.vendor_list);
      });
    if (this.state.vendor_list) {
      console.log(this.state.vendor_list);
    }
  };
  //add vendor functionality start

  //form input value store to variable
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //form submit to controller
  SubmitForm = async (e) => {
    e.preventDefault();
    if (!this.state.invoice_id) {
      toast.error("Invoice Id required");
    } else if (this.state.mobile.length != 11) {
      toast.error("Vailed Mobile number required!");
    } else {
      console.log(this.state.invoice_id);
      console.log(this.invoice_id);

      this.setState({
        invoice_id: "",
        vendor_name: "",
        mobile: "",
        Service_Type: "",
        address: "",
        modal: false,
      });
    }
  };
  //add vendor functionality end

  //active vendor background select
  Active_vendor = (id, title, body) => {
    this.setState({ vendor_id: id, vendor_title: title, vendor_body: body });
  };
  // search functionality
  onSearch = (e) => {
    // alert('hi')

    const search = e.target.value;
    console.log("search", search);
    this.setState({
      search: e.target.value,

      isLoading: true,
    });
    if (search.length > 0) {
      const searchData = this.state.searchProject.filter(function(item) {
        const itemData = item.title + " " + item.id + " " + item.body;
        const textData = search.trim().toLowerCase();
        return (
          itemData
            .trim()
            .toLowerCase()
            .indexOf(textData) !== -1
        );
      });
      this.setState({
        //asign found result to search
        searchProject: searchData,
        search: search,
        isLoading: false,
      });
    } else {
      //here call this method when search result length is empty
      this.vendor_data_get();
    }
  };
  //end search functionality
  render() {
    return (
      <>
        <ToastContainer />
        <Helmet>
          <title>Dashboard - BBA STORE</title>
          <meta name="description" content="BBA STORE" />
        </Helmet>
        {/* Header */}
        {/* Sidebar */}

        <div className="page-wrapper">
          {/* Page Content */}
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title vendor_details_2_heading">
                    Create Vendor & Add Details
                  </h3>
                </div>
              </div>
            </div>
            {/* /Page Header */}

            {/* add vendor  start*/}
            <div className="row">
              <div className="col-md-12">
                {/* modal start */}
                <button
                  type="button"
                  className="btn btn-primary float-right vendor_add_button"
                  style={{ MarginBottom: ".5em" }}
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  Add Vendor
                </button>

                <div class="modal" id="exampleModal1" tabindex="-1">
                  <div class="modal-dialog  modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Add Vendor Member</h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>

                      <div class="modal-body">
                        {/* form */}
                        <form action=" " onSubmit={this.SubmitForm}>
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              placeholder="Enter Invoice id"
                              value={this.state.invoice_id}
                              onChange={(e) => this.changeInput(e)}
                              name="invoice_id"
                              id="invoice_id"
                            ></input>
                          </div>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Name Company/Person"
                              value={this.state.vendor_name}
                              onChange={(e) => this.changeInput(e)}
                              name="vendor_name"
                              id="vendor_name"
                            ></input>
                          </div>
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              placeholder="Enter mobile"
                              value={this.state.mobile}
                              onChange={(e) => this.changeInput(e)}
                              name="mobile"
                              id="mobile"
                              pattern="[01][3/4/5/6/7/8/9][0-9]{8}"
                            ></input>
                          </div>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Service Type"
                              value={this.state.Service_Type}
                              onChange={(e) => this.changeInput(e)}
                              name="Service_Type"
                              id="Service_Type"
                            ></input>
                          </div>
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              name="address"
                              id="address"
                              rows="3"
                              value={this.state.address}
                              onChange={(e) => this.changeInput(e)}
                            ></textarea>
                          </div>

                          <button
                            type="submit"
                            class="btn btn-primary float-left"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger float-right"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* modal end */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <form>
                  <div class="vendor_details2_search_option">
                    {this.state.vendor_list != 0 &&
                      this.state.searchProject.length === 0 && (
                        <span
                          class=" alert-warning"
                          style={{
                            padding: ".2em .5em",
                            marginLeft: "4.5em",
                          }}
                        >
                          No result found!
                        </span>
                      )}
                    <h4 className="text-center">Vendor Search</h4>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search using vendors/Service Type"
                      name="search"
                      onChange={(e) => this.onSearch(e)}
                      id="pwd"
                    />
                  </div>
                </form>
                <div className="vendor_details2_left">
                  {/* At the initial stage all vendors data show */}
                  {this.state.search == 0 && (
                    <>
                      {this.state.vendor_list.map((row1, index) => (
                        <>
                          <div
                            onClick={() =>
                              this.Active_vendor(row1.id, row1.title, row1.body)
                            }
                            className="vendor_left_data"
                            id={
                              this.state.vendor_id == row1.id
                                ? "active_vendor"
                                : "inactive_vendor"
                            }
                          >
                            <h6 className="mr-2">{row1.id}</h6>
                            <h6>{row1.title}</h6>
                          </div>
                        </>
                      ))}
                    </>
                  )}
                  {/* According to search ,if result match then will be show */}
                  {this.state.searchProject.map((row1, index) => (
                    <>
                      <div
                        onClick={() => this.Active_vendor(row1.id)}
                        className="vendor_left_data"
                        id={
                          this.state.vendor_id == row1.id
                            ? "active_vendor"
                            : "inactive_vendor"
                        }
                      >
                        <h6 className="mr-2">{row1.id}</h6>
                        <h6>{row1.title}</h6>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              {/* after select the vendor then show the rightside  selected vendor info and details add input field*/}
              {this.state.vendor_id != 0 && (
                <div className="col-md-8">
                  <>
                    <div className="vendor_detais2_rightside_title">
                      <h6>Vendor:{this.state.vendor_id}</h6>
                      <div className="row">
                        <div className="col-6">
                          <p>{this.state.vendor_title}</p>
                        </div>
                        <div className="col-6">
                          <p>{this.state.vendor_body}</p>
                        </div>
                      </div>
                    </div>
                    <div className="vendor_detais2_rightside_content">
                      {/* form */}
                      <form action="#">
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label for="email">Product No</label>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="Enter Product No"
                                id="email"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div class="form-group">
                              <label for="pwd">Product Name</label>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="Enter Product Name"
                                id="pwd"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label for="sel1">Category:</label>
                              <select class="form-control" id="sel1">
                                <option>Select</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group">
                              <label for="email">Product Price</label>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="Enter Product No"
                                id="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label for="email">Product Quantity</label>
                              <input
                                type="number"
                                class="form-control"
                                placeholder="Enter Product Quantity"
                                id="email"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div class="form-group">
                              <textarea
                                class="form-control"
                                name="product_description"
                                id="address"
                                rows="3"
                                value={this.state.address}
                                onChange={(e) => this.changeInput(e)}
                              >
                                product description
                              </textarea>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label for="exampleFormControlFile1">
                                Upload Photo
                              </label>
                              <input
                                type="file"
                                class="form-control-file"
                                id="exampleFormControlFile1"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div class="form-group">
                              <textarea
                                class="form-control"
                                name="product "
                                id="address"
                                rows="3"
                                value={this.state.address}
                                onChange={(e) => this.changeInput(e)}
                              >
                                Remark about product
                              </textarea>
                            </div>
                          </div>
                        </div>

                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>

                    {/* table start   */}
                    <div className="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Invoice Id</th>
                            <th>Company/Person Name</th>
                            <th>Mobile</th>
                            <th>Service Type</th>
                            <th>Address</th>
                            <th>Details</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>123456</td>
                            <td>ABC</td>
                            <td>01952152883</td>
                            <td>Computer provide</td>
                            <td>Uttara,Dhaka</td>
                            <td>
                              <button className="btn btn-primary">
                                Details
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-success">Edit</button>
                            </td>
                            <td>
                              <button className="btn btn-danger">Delete</button>
                            </td>
                          </tr>
                          <tr>
                            <td>123456</td>
                            <td>ABC</td>
                            <td>01952152883</td>
                            <td>Instruments Provide</td>
                            <td>Dhaka/Bangladesh</td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() => this.Details(123)}
                              >
                                Details
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-success">Edit</button>
                            </td>
                            <td>
                              <button className="btn btn-danger">Delete</button>
                            </td>
                          </tr>
                          <tr>
                            <td>123456</td>
                            <td>ABC</td>
                            <td>01952152883</td>
                            <td>Computer provide</td>
                            <td>Uttara,Dhaka</td>
                            <td>
                              <button className="btn btn-primary">
                                Details
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-success">Edit</button>
                            </td>
                            <td>
                              <button className="btn btn-danger">Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* table end */}
                  </>
                </div>
              )}
            </div>
          </div>
          {/* /Page Content */}
        </div>
      </>
    );
  }
}
export default Vendor_details2;
