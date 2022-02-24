import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Header from '../initialpage/Sidebar/header';
import Sidebar from '../initialpage/Sidebar/sidebar';
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




function Transport() {
    const reloadCount = Number(sessionStorage.getItem('reloadCount')) || 0;

    useEffect(() => {
      if(reloadCount < 1) {
        sessionStorage.setItem('reloadCount', String(reloadCount + 1));
        window.location.reload();
      } else {
        sessionStorage.removeItem('reloadCount');
      }
    }, []);

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
                 <h3 className="page-title text-start">Welcome To Transport!</h3>

               </div>
             </div>
           </div>
           {/* /Page Header */}
           
           
         </div>
         {/* /Page Content */}
       </div>
          </>
  );
}

export default Transport;