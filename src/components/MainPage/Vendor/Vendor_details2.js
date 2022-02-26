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
    vendor_list: [],
    vendor_id: "",
    vendor_title: "",
    vendor_body: "",
    searchProject: [],
    search: "",
    search_vendor_result: [],
    product_no: "",
    product_name: "",
    Category: "",
    product_price: "",
    product_quantity: "",
    product_description: "",
    image: "",
    remarkProduct: "",
    Array_data: [],
  };
  componentDidMount() {
    this.vendor_data_get();
    this.vendor_push_data();
  }
  vendor_push_data = () => {
    console.log(this.state.Array_data);
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
  SubmitMoraData = async (e) => {
    e.preventDefault();
    if (!this.state.product_no) {
      toast.error("Product Id required");
    } else if (!this.state.product_name) {
      toast.error("Product Name!");
    } else {
      console.log(this.state.invoice_id);
      console.log(this.invoice_id);
      const postBody = {
        product_no: this.state.product_no,
        product_name: this.state.product_name,
        Category: this.state.Category,
        product_price: this.state.product_price,
        product_quantity: this.state.product_quantity,
        product_description: this.state.product_description,
        image: this.state.image,
        remarkProduct: this.state.remarkProduct,
      };
      this.state.Array_data.push(postBody);

      this.setState({
        product_no: "",
        product_name: "",
        Category: "",
        product_price: "",
        product_quantity: "",
        product_description: "",
        image: "",
        remarkProduct: "",
      });
      this.vendor_push_data();
      toast.success("Data Added");
    }
  };
  //add vendor functionality end
  // DemoDataDelete
  DemoDataDelete = (product_name) => {
    alert(product_name);
    const str = this.state.Array_data.toString();
    console.log("array data" + str);
    var people = this.state.Array_data;
    var toRemove = product_name;
    var index = people.indexOf(toRemove);
    if (index > -1) {
      //Make sure item is present in the array, without if condition, -n indexes will be considered from the end of the array.
      people.splice(index, 1);
      this.setState({ Array_data: people });
    }
    console.log(people);
  };
  // FinalSubmit functionality
  FinalSubmit = (e) => {
    e.preventDefault();

    if (this.state.product_no == 0) {
      toast.error("Please add some product");
    } else {
      this.setState({ Array_data: "" });
      toast.success("Data Successfully Added");
    }
  };

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
              <div className="col-md-12"></div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <form>
                  <div class="vendor_details2_search_option">
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
                  {this.state.search != 0 &&
                    this.state.searchProject.length === 0 && (
                      <span
                        class=""
                        style={{
                          padding: ".2em .5em",
                          marginLeft: "4.5em",
                          color: "red",
                        }}
                      >
                        No result found!
                      </span>
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
                    {/* add more modal start */}
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Add More
                    </button>
                    <div class="modal" id="myModal">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                          </div>

                          <div class="modal-body">
                            <div className="vendor_detais2_rightside_content">
                              {/* form */}
                              <form onSubmit={this.SubmitMoraData}>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <label for="email">Product No</label>
                                      <input
                                        type="number"
                                        class="form-control"
                                        placeholder="Enter Product No"
                                        id="email"
                                        name="product_no"
                                        value={this.state.product_no}
                                        onChange={(e) => this.changeInput(e)}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <label for="pwd">Product Name</label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Enter Product Name"
                                        id="pwd"
                                        name="product_name"
                                        value={this.state.product_name}
                                        onChange={(e) => this.changeInput(e)}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <label for="sel1">Category:</label>
                                      <select
                                        class="form-control"
                                        id="sel1"
                                        name="Category"
                                        onChange={(e) => this.changeInput(e)}
                                      >
                                        <option value={this.state.Category}>
                                          Select
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
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
                                        name="product_price"
                                        value={this.state.product_price}
                                        onChange={(e) => this.changeInput(e)}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <label for="email">
                                        Product Quantity
                                      </label>
                                      <input
                                        type="number"
                                        class="form-control"
                                        placeholder="Enter Product Quantity"
                                        id="email"
                                        name="product_quantity"
                                        value={this.state.product_quantity}
                                        onChange={(e) => this.changeInput(e)}
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
                                        value={this.state.product_description}
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
                                        name="image"
                                        value={this.state.image}
                                        onChange={(e) => this.changeInput(e)}
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
                                        name="remarkProduct"
                                        value={this.state.remarkProduct}
                                        onChange={(e) => this.changeInput(e)}
                                      >
                                        Remark about product
                                      </textarea>
                                    </div>
                                  </div>
                                </div>

                                <button type="submit" class="btn btn-primary">
                                  Add
                                </button>
                              </form>

                              {/* table start   */}
                              {this.state.Array_data != 0 && (
                                <div className="table-responsive">
                                  <table class="table table-striped">
                                    <thead>
                                      <tr>
                                        <th>Product No</th>
                                        <th>Product Name</th>
                                        <th>Category</th>
                                        <th>Product Price</th>
                                        <th>Product Quantity</th>
                                        <th>Descirption</th>
                                        <th>Image</th>
                                        <th>Remark</th>
                                        <th>Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.state.Array_data.map(
                                        (row, index) => (
                                          <tr>
                                            <td>{row.product_no}</td>
                                            <td>{row.product_name}</td>
                                            <td>{row.Category}</td>
                                            <td>{row.product_price}</td>
                                            <td>{row.product_quantity}</td>
                                            <td>{row.product_description}</td>
                                            <td>{row.image}</td>
                                            <td>{row.remarkProduct}</td>
                                            <td>
                                              <button
                                                onClick={() =>
                                                  this.DemoDataDelete(
                                                    row.product_name
                                                  )
                                                }
                                              >
                                                Delete
                                              </button>
                                            </td>
                                          </tr>
                                        )
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              )}

                              {/* table end */}

                              {/* Finally send data */}
                              <form onSubmit={this.FinalSubmit}>
                                <button
                                  type="submit"
                                  style={{ marginTop: "1em" }}
                                  class="btn btn-success float-right"
                                >
                                  Submit
                                </button>
                              </form>
                            </div>
                          </div>

                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* add more modal end */}
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
