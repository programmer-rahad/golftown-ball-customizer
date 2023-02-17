import './OrderSummary.scss';

function OrderSummary({ showExtra, hideEdit }) {
    return (
        <div className='order-summary'>
            <div className="align-items-center d-flex justify-content-between">
                <h3>
                    Order Summary
                </h3>
                {
                    !hideEdit && <button className="edit text-green text-decoration-underline">
                        Edit
                    </button>
                }

            </div>
            <div className="gray-box">
                <table>
                    <tr>
                        <td>
                            Titleist Tour Speed – 13 dozen balls
                        </td>
                        <td>
                            $10.00
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Titleist Tour Speed – 13 dozen balls
                        </td>
                        <td>
                            $10.00
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Titleist Tour Speed – 13 dozen balls
                        </td>
                        <td>
                            $10.00
                        </td>
                    </tr>
                    <hr />
                    <tr>
                        <td className={`text-end ${!showExtra ? 'd-flex align-items-center justify-content-between' : ''}`}>
                            {
                                !showExtra ? <span className='text-start'>
                                    Price does not include shipping & <br className="d-md-none" /> applicable taxes.
                                </span> : ''
                            }
                            <strong>
                                Subtotal
                            </strong>
                        </td>
                        <td className='text-bold'>
                            $10.00
                        </td>
                    </tr>
                    {
                        showExtra ? <>

                            <tr>
                                <td className='text-end'>
                                    Delivery Express Shipping
                                </td>
                                <td>
                                    $10.00
                                </td>
                            </tr>
                            <tr>
                                <td className='text-end'>
                                    Sales Tax
                                </td>
                                <td>
                                    $10.00
                                </td>
                            </tr>
                            <tr>
                                <td className='text-bold text-end pt-2'>
                                    Order Total
                                </td>
                                <td className='text-bold pt-2'>
                                    $10.00
                                </td>
                            </tr>
                        </> : ''
                    }
                </table>
            </div>
        </div>
    )
}

export default OrderSummary