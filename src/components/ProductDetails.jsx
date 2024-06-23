import React from 'react'
import { Table } from 'reactstrap'
import '../style/productDetails.css'
export default function ProductDetails({amount,payDate}) {
  return (
    <div className='main-product'>

        <Table bordered className='borderd-table'  >
            <tbody>
            <tr  className="text-center colorTable ">
                <td>Payment Date</td>
                <td>Service Fee</td>
                <td>Amount</td>
            </tr>
            <tr className='text-center cash'>
                <td>{payDate}</td>
                <td>Cash</td>
                <td>{amount}</td>
            </tr>
            <tr className=" text-center colorTable ">
                <td>Subtotal</td>
                <td></td>
                <td>{amount}</td>
            </tr>
            </tbody>
        </Table>
    </div>
  )
}
