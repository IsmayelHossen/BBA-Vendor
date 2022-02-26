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
import { Get_venor_Data } from "./Services";
import { PUBLIC_URL } from "./CommonURL";
import "../../../index.css";
import Header from "../../initialpage/Sidebar/header.jsx";
import Sidebar from "../../initialpage/Sidebar/sidebar";

// import 'Assets/plugins/morris/morris.min.js';
// import 'Assets/plugins/raphael/raphael.min.js';
// import 'Assets/js/chart.js';

class Vendor_details extends React.Component {
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
  Details = (id) => {
    const { history } = this.props;
    history.push(`/history_check`);
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
                    Vendor Details page ({this.props.match.params.id})
                  </h3>
                </div>
              </div>
            </div>
            {/* /Page Header */}

            {/* add vendor  start*/}
          </div>
          {/* /Page Content */}
        </div>
      </>
    );
  }
}
export default withRouter(Vendor_details);
