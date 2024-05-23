import React from 'react'

const PayPage = () => {

  return (
    <>
      <div className="billing-cart">
         <h2>Payment Receipt</h2>
         <form className='billform'>
  <div class="mb-3">
    <label for="exampleInputName1" class="form-label">Enter Name</label>
    <input type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputMobile1" class="form-label">Contact No.</label>
    <input type="number" class="form-control" id="exampleInputMobile1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPayment1" class="form-label">Total Payment </label>
    <input type="number" class="form-control" id="exampleInputPayment1"/>
  </div>
  
  <button type="submit" class="btn btn-primary" style={{marginLeft:'41%'}}>Submit</button>
</form>
      </div>
    </>
  )
}

export default PayPage
