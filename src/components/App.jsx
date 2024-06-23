import  { useState, } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Form,
  Col,
  ModalHeader
} from 'reactstrap';
import Invoice from '../components/Invoice';
import FormgroupComp from './FormgroupComp';
// Functionality 

//print Functionality 


function App(props) {
  const [open, setOpen] = useState(false);

  // const [focusAfterClose, setFocusAfterClose] = useState(true);
  

  function checklessThenTen(t){
    return t<10 ? '0'+t :t ;
  }
  const paymentTimeGenarate=()=>{
    const time = new Date()
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
    const payTime = `${year}/${checklessThenTen(month)}/${checklessThenTen(date)} ${checklessThenTen(hour)}:${checklessThenTen(minute)}:${checklessThenTen(second)}`
    return payTime;
  }
  
  
  const jobSheetOrderGenarator=()=>{
    const time = new Date()
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
 
    const jobOrder = `BDJS${year}${month<10 ? '0'+month : month}${date<10 ? '0'+date : date}`;
    return jobOrder;
  }
  const  genarateBarcodeNumber =()=>{
    const time = new Date()
  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();
 
    const barcode = `BDPAY${year}${month<10 ? '0'+month : month}${date<10 ? '0'+date : date}`;
  return barcode
  }
  
  const intCustomer = {
    customerName: '',
    jobDate : paymentTimeGenarate(),
    payDate:paymentTimeGenarate(),
    customerPhone:'',
    jobOrder:jobSheetOrderGenarator(),
    barcodeNumber:genarateBarcodeNumber(),
    customerEmail:'',
    amount:0,
    invoiceOpend:false,
    
  }
  const [customer,setCustomer]= useState(intCustomer)
  const [focusAfterClose, setFocusAfterClose] = useState(true);
  const toggle = () => setOpen(!open);
  
  const handleChange=(event)=>{
    setCustomer({
      ...customer,[event.target.name]:event.target.value
    })
  }
  const submitHandler =(e)=>{
    e.preventDefault();
    setOpen(!open)
    setInvoiceOpend(!invoiceOpend)
    // let invoice = document.getElementById('invoice');
    // invoice.classList.remove('d-none');
    // invoice.classList.add("d-block");
    // console.log(invoice);
   
  }
  

  return (
    <div className='container mt-3' >
      <h1 className='text-center'>Z M Enterprise</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        
        <Button className='mb-3'  color="info" onClick={toggle}>
          New Invoice
        </Button>
      </Form>
      <Modal size='lg' returnFocusAfterClose={focusAfterClose} isOpen={open}>
        <ModalHeader>
          <h2 className='text-center'>Z.M. Enterprize</h2>
        </ModalHeader>
        <Form onSubmit={submitHandler}>
      

            <ModalBody  id='printpage'>
            
                <FormgroupComp changeHandler={handleChange} name='jobDate' label='JobSheet Date:' value={customer.jobDate}  type='text' />
                <FormgroupComp changeHandler={handleChange} name='payDate' label='Payment Date :' value={customer.payDate}  type='text' />
                <FormgroupComp changeHandler={handleChange} name='customerName' label='Customer Name :' value={customer.customerName} placeholder='Eng Masud Rana' type='text' />
                <FormgroupComp changeHandler={handleChange} name='customerPhone' label='Customer Phone No :' value={customer.customerPhone} placeholder='01794722127' type='number' />
                <FormgroupComp changeHandler={handleChange} name='jobOrder' label='Jobsheet Order :' value ={customer.jobOrder} type='text' />
                <FormgroupComp changeHandler={handleChange} name='barcodeNumber' label='Bar Code Number:' value ={customer.barcodeNumber} type='text' />
                <FormgroupComp changeHandler={handleChange} name='amount' value={customer.amount} label='Amount' placeholder='1250' type='number' />
                <FormgroupComp changeHandler={handleChange} name='customerEmail' value={customer.customerEmail} label='Customer Email :' placeholder='example@gmail.com' type='email' />
                
            </ModalBody>
            <ModalFooter>
              
              {/* React Print */}
            <Button color="danger" onClick={toggle}>
              Not Yet Now
            </Button> 
            <Button type='submit' color="success" onClick={submitHandler} >
                Create Invoice
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    
    
    <Invoice
    customer ={customer}
    />
    </div>
  );
}

export default App;