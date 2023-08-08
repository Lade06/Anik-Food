import React from 'react';
import './order1.css';
import visa from "../../Assets/🦆 icon _Visa_.png"
import paypal from "../../Assets/🦆 icon _PayPal_.png"
import apple from "../../Assets/🦆 icon _Apple Pay_.png"
import mastercard from "../../Assets/🦆 icon _MasterCard_.png"
import sterling from "../../Assets/sterling-classic-credit-card 1.png"

const Order1 = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-light text-center mt-5">
                        <h1>Checkout</h1>
                    </div>
                    <h2 className="text-light">Payment method</h2>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-5"> 
                    <img src={visa} alt="visa-card" className="visa-v" />
                    </div>
                    <div className="col-md-3 mb-5">
                        <img src={mastercard} alt=""  />
                    </div>
                    <div className="col-md-3 mb-5">
                        <img src={apple} alt="" />
                    </div>
                    <div className="col-md-3 mb-5">
                        <img src={paypal} alt="" />
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>

                    <div className="col-md-4 form-m">
                        <img src={sterling} alt="" width={"100%"} />

                    </div>

                    <div className="col-md-4"></div>
                </div>
            </div>




        </div>
    )
}

export default Order1;