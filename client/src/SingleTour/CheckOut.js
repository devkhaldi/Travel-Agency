import React from 'react'
import ReactDom from 'react-dom'

const showMessage = () => {
  console.log('test')
}

const CheckOut = ({ handleModalOpen, handleModalClose }) => {
  return ReactDom.createPortal(
    <section onClick={() => handleModalClose()} className='checkout-modal'>
      <div onClick={() => handleModalOpen()} className='modal-content'>
        <div className='modal-header'></div>
        <div className='modal-body'>Show Modal</div>
        <div className='modal-footer'></div>
      </div>
    </section>,
    document.getElementById('modal')
  )
}

export default CheckOut
