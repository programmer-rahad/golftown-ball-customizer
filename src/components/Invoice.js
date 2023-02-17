import OrderSummary from './OrderSummary'
import print from './../images/icons/print.svg';
import './Invoice.scss'

function Invoice() {
    return (
        <div className="invoice">
            <div className="container mt-4 ">
                <h2 className='text-uppercase text-center text-lg-start'>
                    THANK YOU!
                </h2>
                <div className="row mt-4">
                    <div className="col-lg-6 order-1 order-lg-0">
                        <OrderSummary hideEdit={true} showExtra={true} />
                    </div>
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className='invoice-right text-center text-lg-start ps-lg-3'>
                            <h4>
                                Your Order Has Been Placed
                            </h4>
                            <p>
                                Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-6 order-2 mb-4">
                        <div className="print-close-return">
                            <div className="text-center text-lg-start">
                                <button className='d-inline-flex align-items-center print-button'>
                                    <img className='me-2' src={print} alt="" />
                                    <span className='text-docoration-underline text-green'>
                                        Print this page
                                    </span>
                                </button>
                            </div>
                            <div className="text-center text-lg-start">
                                <button className='button red-button'>
                                    CLOSE & RETURN TO GOLF TOWN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice