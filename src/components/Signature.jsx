import React from 'react'
import '../style/signature.css'

export default function Signature() {
  return (
    <div className='d-flex justify-content-center
justify-content-between'>
        <div className="customer">
            <p>Customer Signature with Name </p>
            <p>Signature Date: </p>
        </div>
        <div className="serviceCenter">
            <p>Signature of Service Center</p>
            <p> ( computer village) </p>
        </div>
    </div>
  )
}
