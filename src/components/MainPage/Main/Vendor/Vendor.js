import React from "react";
//react toastify start
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//react toastify end

class Vendor extends React.Component {
  constructor() {
    super();
  }
  Details = () => {
    console.log();
  };
  render() {
    return (
      <>
        <ToastContainer />
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
                  <button className="btn btn-primary">Details</button>
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
                  <button className="btn btn-primary">Details</button>
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
    );
  }
}

export default Vendor;
