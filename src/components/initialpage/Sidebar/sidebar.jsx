
/**
 * App Header
 */

 import React from 'react';
 import { withRouter } from 'react-router-dom';
 import { Link } from 'react-router-dom';
 import 'font-awesome/css/font-awesome.min.css';

 import '../../assets/css/font-awesome.min.css';
 import '../../assets/css/line-awesome.min.css';
 
 import 'bootstrap/dist/css/bootstrap.min.css';
 import "../../assets/css/bootstrap.min.css";
 import '../../assets/css/select2.min.css';
 import '../../assets/js/app';
 import "../../assets/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css";
 import "../../assets/css/bootstrap-datetimepicker.min.css";
 import '../../assets/css/style.css';
 import { useLocation } from 'react-router-dom';

 const Sidebar = () => {

  const location = useLocation();
  let pathname = location.pathname;

  return (
      <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className={pathname.includes('/') ?"active" :""}> 
              <Link to = "/"><i className="la la-home" /> <span> Dashboard</span></Link>
            </li>

            <li className={pathname.includes('/store') ?"active" :""}> 
              <Link to = "/newRequision"><i className="la la-newspaper" /> <span>Requisition</span></Link>
            </li>

            {/* Vendor */}
            <li className="submenu text-start">
              <a href="#"><i className="la la-gift" /> <span> Vendor</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li>
                  <Link className={pathname.includes('/admindashboard') ?"active" :""} to="/vendor/details">
                    Vendor
                  </Link>
                </li>

               
              </ul>
            </li>
            
           

            {/* Reports Menu */}
            <li className="submenu text-start">
              <a href="#"><i className="la la-line-chart" /> <span> Reports</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li>
                  <Link className={pathname.includes('/admindashboard') ?"active" :""} to="/report/products">
                    Products
                  </Link>
                </li>

                <li>
                  <Link className={pathname.includes('/admindashboard') ?"active" :""} to="/report/requisitions">
                    Requistions
                  </Link>
                </li>
              </ul>
            </li>

            {/* Settings Menu */}
            <li className="submenu text-start">
              <a href="#"><i className="la la-cog" /> <span> Settings</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li>
                  <Link className={pathname.includes('/admindashboard') ?"active" :""} to="/setting/categories">
                    Categories
                  </Link>
                </li>

                <li>
                  <Link className={pathname.includes('/admindashboard') ?"active" :""} to="/setting/productList">
                    Product List
                  </Link>
                </li>

                <li>
                  <Link className={pathname.includes('/admindashboard') ?"active" :""} to="/setting/unit">
                    Unit
                  </Link>
                </li>

                <li>
                  <Link className={pathname.includes('/admindashboard') ?"active" :""} to="/setting/suppliers">
                    Suppliers
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
     
    );
 
}

export default Sidebar;