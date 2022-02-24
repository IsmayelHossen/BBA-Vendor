import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { withRouter, } from 'react-router-dom';
import "../Vendor/Vendor.css";
import Header from '../../initialpage/Sidebar/header';
import Sidebar from '../../initialpage/Sidebar/sidebar';

const barchartdata = [
    { y: '2006', "Total Income" : 100, 'Total Outcome' : 90 },
    { y: '2007', "Total Income" : 75,  'Total Outcome' : 65 },
    { y: '2008', "Total Income" : 50,  'Total Outcome' : 40 },
    { y: '2009', "Total Income" : 75,  'Total Outcome' : 65 },
    { y: '2010', "Total Income" : 50,  'Total Outcome' : 40 },
    { y: '2011', "Total Income" : 75,  'Total Outcome' : 65 },
    { y: '2012', "Total Income" : 100, 'Total Outcome' : 90 }
];
const linechartdata = [
    { y: '2006', "Total Sales": 50, 'Total Revenue': 90 },
    { y: '2007', "Total Sales": 75,  'Total Revenue': 65 },
    { y: '2008', "Total Sales": 50,  'Total Revenue': 40 },
    { y: '2009', "Total Sales": 75,  'Total Revenue': 65 },
    { y: '2010', "Total Sales": 50,  'Total Revenue': 40 },
    { y: '2011', "Total Sales": 75,  'Total Revenue': 65 },
    { y: '2012', "Total Sales": 100, 'Total Revenue': 50 }
];
class Vendor extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        invoice_id:'',
        vendor_name:'',
        mobile:'',
        Service_Type:'',
        address:'',
     }

    componentDidMount() {
        this.check_refresh();
    }
check_refresh=()=>{
    const reloadCount = Number(sessionStorage.getItem('reloadCount')) || 0;
    if(reloadCount < 1) {
        sessionStorage.setItem('reloadCount', String(reloadCount + 1));
        window.location.reload();
      } else {
        sessionStorage.removeItem('reloadCount');
      }
    }

      //form input value store to variable
      changeInput=(e)=>{
          this.setState({
            [e.target.name]: e.target.value
          })
         };

//form submit to controller
SubmitForm=async(e)=>{
    e.preventDefault();
    if(!this.state.invoice_id){
        alert("Invoice id required");
    }
    else{
        alert(this.state.invoice_id);
        console.log(this.invoice_id);
        ('.myModal1').modal('hide');
    }
}
//Vendor Details
// Details=async(email)=>{
//  const {history}=this.props;
//  await history.push(`http://localhost:3000/vendor/details/${email}`);
// }
Details=async(abc)=>{
    //alert(abc);
    console.log(abc);
    const {history}=this.props;
    await history.push('http://localhost:3000/vendor/details');
   }

    render() { 

        return ( 

            <>
          <Helmet>
              <title>Dashboard - BBA STORE</title>
              <meta name="description" content="BBA STORE"/>					
          </Helmet>
          {/* Header */}
          <Header />
          {/* Sidebar */}
          <Sidebar />
      <div className="page-wrapper">
         {/* Page Content */}
         <div className="content container-fluid">
           {/* Page Header */}
           <div className="page-header">
             <div className="row">
               <div className="col-sm-12">
                 <h3 className="page-title  vendor_heading">Welcome To Vendor</h3>
                </div>
             </div>
           </div>
         {/* modal start */}
  <button type="button" className="btn btn-primary float-right vendor_add_button" style={{MarginBottom:'.5em'}} data-toggle="modal" data-target="#myModal1">
    Add Vendor
  </button>
  <div class="modal" id="myModal1">
    <div class="modal-dialog  modal-lg">
      <div class="modal-content">
      
          <div class="modal-header">
          <h4 class="modal-title">Add Vendor Member</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
     
        <div class="modal-body">
        {/* form */}
        <form action=" " onSubmit={this.SubmitForm}>
        <div class="form-group">
        <input type="number" class="form-control" placeholder="Enter Invoice id" value={this.state.invoice_id} onChange={(e)=>this.changeInput(e)} name="invoice_id" id="invoice_id"></input>
         </div>
       <div class="form-group">
       <input type="text" class="form-control" placeholder="Enter Name Company/Person" value={this.state.vendor_name} onChange={(e)=>this.changeInput(e)} name="vendor_name" id="vendor_name"></input>
       </div>
        <div class="form-group">
       <input type="number" class="form-control" placeholder="Enter mobile" value={this.state.mobile} onChange={(e)=>this.changeInput(e)} name="mobile" id="mobile"></input>
      </div>
      <div class="form-group">
       <input type="text" class="form-control" placeholder="Enter Service Type" value={this.state.Service_Type} onChange={(e)=>this.changeInput(e)} name="Service_Type" id="Service_Type"></input>
      </div>
      <div class="form-group">
       <textarea class="form-control" name="address" id="address" rows="3" value={this.state.address} onChange={(e)=>this.changeInput(e)}></textarea>
  </div>
      
  <button type="submit" class="btn btn-primary float-left" >Submit</button>
  <button type="button" class="btn btn-danger float-right" data-dismiss="modal">Close</button>
</form> 

        </div>
          
      </div>
    </div>
  </div>
 {/* modal end */}

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
        <td><button className='btn btn-primary'>Details</button></td>
        <td><button className='btn btn-success'>Edit</button></td>
        <td><button className='btn btn-danger'>Delete</button></td>
      </tr>
      <tr>
        <td>123456</td>
        <td>ABC</td>
        <td>01952152883</td>
        <td>Instruments Provide</td>
        <td>Dhaka/Bangladesh</td>
        <td><button className='btn btn-primary' onClick={()=>this.Details(123)} >Details</button></td>
        <td><button className='btn btn-success'>Edit</button></td>
        <td><button className='btn btn-danger'>Delete</button></td>
      </tr>
      <tr>
        <td>123456</td>
        <td>ABC</td>
        <td>01952152883</td>
        <td>Computer provide</td>
        <td>Uttara,Dhaka</td>
        <td><button className='btn btn-primary'>Details</button></td>
        <td><button className='btn btn-success'>Edit</button></td>
        <td><button className='btn btn-danger'>Delete</button></td>
      </tr>
    </tbody>
  </table>
  </div>

       {/* table end */}
           
           
        </div>
        
       </div>
          </>
         );
    }
}
 
export default Vendor;