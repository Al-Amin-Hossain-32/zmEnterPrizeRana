import React, { Component, } from 'react'
import { Table,Button } from 'reactstrap'
import '../style/table.css'
import '../style/print.css'
import CustomerDetails from './CustomerDetails'
import ProductDetails from './ProductDetails'
import Header from './Header.jsx'
import Signature from './Signature'
import ReactToPrint from 'react-to-print'
export default class Invoice extends Component {
  date = 2024060400496
 pageStyle = `
  @page {
    size: A4 portrait;
    margin-bottom:2rem;
    
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: avoid;
    }
  }
`;

constructor(props) {
  super();
  this.props = props;
}

  render() {
    
    return (
      
      <div id='invoice' className="container mt-2 "  >
        <ReactToPrint
                pageStyle={()=> this.pageStyle}
                trigger={() => <Button >Print</Button>}
                content={() => this.printRef}
        />
            <div ref={(refer)=>(this.printRef=refer)} className="mt-4 invoiceDetails">
              <div  className="main-invoice">
                  <div className="header px-5 mb-3">
                          <Header 
                            barcodeNumber={this.props.customer.barcodeNumber}
                          />
                  </div>
                  <div className="customerDetails">
                          <CustomerDetails
                            jobOrder={this.props.customer.jobOrder}
                            jobDate ={this.props.customer.jobDate}
                            payDate ={this.props.customer.payDate}
                            customerName ={this.props.customer.customerName}
                            customerPhone ={this.props.customer.customerPhone}
                            customerEmail ={this.props.customer.customerEmail}
                          />
                  </div>
                  <div className="productDetails">
                          <ProductDetails 
                            amount = {this.props.customer.amount}
                            payDate={this.props.customer.payDate}
                          />
                  </div>
                  <div className="signature">
                      <Signature />
                 </div>
                  </div>
              </div>
           
      </div>
    )
  }
}
