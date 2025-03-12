import React, { useState } from 'react'
import LinkButton from '../elements/LinkButton'
import { DarkModeContext } from '../../contexts/DarkModeContext'

const ReceivePayment = () => {
    const { darkMode } = useState(DarkModeContext)
  return (
    <section id="receive-payment-section">
    <div className="container">
      <div className="column">
        <img id="recieve-payment-img" src="/images/receive-payment.svg" alt=""></img>
      </div>
        <div className="content-container">
            <h2 className='headline'>Receive payment from international bank details</h2>
            <div className="features">
                <div className="feature">
                    <div className="feature-icon">
                        <img src={ darkMode ? '/images/icons/card-features-dark.svg' : '/images/icons/card-features.svg' }  alt="Credit Card Icon" />
                    </div>
                    <div className="feature-body">
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-icon">
                        <img src={ darkMode ? '/images/icons/wallet-dark.svg' : '/images/icons/wallet.svg' } alt="Wallet Icon" />
                    </div>
                    <div className="feature-body">
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    </div>
                </div>
            </div>

                        <div className="learn-more-link">
                            <LinkButton to="/" color="purple" text="Learn more" icon="bi bi-arrow-right" iconAfter={true} />
                        </div>
                    </div>
                </div>
    </section>
  )
}

export default ReceivePayment