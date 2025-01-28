import React from 'react'
import BankTransferIcon from '../../assets/icons/landing-page/payments/bank.svg'
import GCashIcon from '../../assets/icons/landing-page/payments/gcash.svg'

function Payments() {
  return (
    <div className='payments-section flex-center'>
      <div className='payments flex-center'>
        <div className='headers flex-center'>
          <p className='header'>Easy & Secure Payments</p>
          <p className='subheader'>
            Choose Your Preferred Payment Method for Quick and Easy Transactions
          </p>
        </div>

        <div className='payments-container flex-center'>
          <div className='payment-option flex-center'>
            <div className='payment-header flex-center'>
              <img className='payment-icon' src={BankTransferIcon} alt='' />
              <p className='payment-title'>Bank Transfer</p>
            </div>
            <p className='payment-description'>
              Prefer a direct bank transfer? Complete your payment securely
              through any major bank. Our bank details will be provided after
              booking confirmation.
            </p>
          </div>

          <div className='payment-option flex-center'>
            <div className='payment-header flex-center'>
              <img className='payment-icon' src={GCashIcon} alt='' />
              <p className='payment-title'>GCash Payment</p>
            </div>
            <p className='payment-description'>
              Pay through GCash for a fast, cashless transaction. Simply open
              your GCash app, scan the QR code, or transfer to our official
              GCash number. Details will be provided at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payments
