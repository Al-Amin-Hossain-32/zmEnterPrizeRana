import React from 'react'
import { Table } from 'reactstrap'
import Barcode from 'react-barcode'
import '../style/heading.css'


export default function Header(props) {
  
  return (
    <div className='heading-container d-flex  flex-row '>
        <div className="heading   align-self-center ">
            <h2 className='text-center' >Retail Invoice</h2>
        </div>
        <div className="barcode ">
        <Barcode value={props.barcodeNumber} width={1.3} height={75} margin={5} />
        </div>
    </div>
  )
}
