import edit from './../../images/icons/edit-line.svg';
import deleteIcon from './../../images/icons/trash.svg';
import lock from './../../images/icons/lock.svg';
import CustomizationTextBox from '../customization/CustomizationTextBox';
import ChangeBallBox from '../ChangeBallBox';
import ViewFrontBack from '../ViewFrontBack';
import angleRight from './../../images/icons/arrow-right.svg';
import InputBox from '../InputBox';
import OrderSummary from '../OrderSummary';
import Address from '../Address';
import { useRef } from 'react';
import { BsCheckLg } from 'react-icons/bs'
import './StepThree.scss';

function StepThree(props) {
  const { creditCardInfo, billingAddress, shippingAddress, sameAsShipping, quantity, orderCompleted, products, currentItem, logo, logoName, threeTexts, showAddTextColor } = props.props
  const { setCreditCardInfo, setBillingAddress, setShippingAddress, setSameAsShipping, setQuantity, setLogoUpload, changeStep, setTextEdit, setOrderCompleted, toggleproductChangeModal, toggleProductPriceModal } = props.events;
  const completeOrder = useRef();
  const checkoutDOM = useRef();

  const checkoutSteps = (index) => {
    const buttons = checkoutDOM.current.querySelectorAll('.steps button')
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    buttons[index].classList.add('active');
  }

  const showShippingAddress = () => {
    const placeOrder = checkoutDOM.current.querySelector('.place-order');
    placeOrder.classList.add('d-none');
    const shippingDOM = checkoutDOM.current.querySelector('.shipping');
    shippingDOM.classList.remove('d-none');
    const billingDOM = checkoutDOM.current.querySelector('.billing');
    completeOrder.current.classList.add('d-none');
    checkoutDOM.current.classList.remove('d-none');
    billingDOM.classList.add('d-none');
    checkoutSteps(0)
  }
  const showBillingAddress = () => {
    const shippingDOM = checkoutDOM.current.querySelector('.shipping');
    const billingDOM = checkoutDOM.current.querySelector('.billing');
    const placeOrder = checkoutDOM.current.querySelector('.place-order');
    placeOrder.classList.add('d-none');
    shippingDOM.classList.add('d-none');
    billingDOM.classList.remove('d-none');
    checkoutSteps(1)
  }
  const showPlaceOrder = () => {
    const placeOrder = checkoutDOM.current.querySelector('.place-order');
    const billingDOM = checkoutDOM.current.querySelector('.billing');
    const shippingDOM = checkoutDOM.current.querySelector('.shipping');

    placeOrder.classList.remove('d-none');
    billingDOM.classList.add('d-none');
    shippingDOM.classList.add('d-none');
    checkoutSteps(2)
  }

  const showInvoice = () => {
    const placeOrder = checkoutDOM.current.querySelector('.place-order');
    placeOrder.classList.add('d-none');
  }


  return (
    <div className='step-3'>
      <div className="container">
        <div ref={completeOrder} className="complete-order mb-5 pb-lg-3">
          <h3 className="customize-title mt-4 mb-4 text-center text-md-start font-weight-bold">
            COMPLETE YOUR ORDER
          </h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-5 mb-lg-0 mt-lg-3">
                <ViewFrontBack product={products[currentItem]} logo={logo} text={threeTexts} />
              </div>
              <div className="modal-content customization-pricing d-none d-lg-block">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Customization Pricing <span>(per dozen)</span>
                  </h5>
                  <button className="close">×</button>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dollar sit amit im klorum dusi equitor no non umma. Lorem
                    ipsum dollar sit amit im klorum dusi equitor no non umma. Lorem ipsum
                    dollar sit amit im klorum dusi equitor no non umma.
                    <a className="green-text d-inline-block ms-1" href='#'>
                      Lorem ipsum dollar sit amit im klorum dusi equitor no non umma.
                    </a>
                  </p>
                  <table>
                    <tbody>
                      <tr className="text-uppercase">
                        <th>Quantity</th>
                        <th>Front</th>
                        <th>Back</th>
                        <th>Savings</th>
                      </tr>
                      <tr>
                        <td>1-11</td>
                        <td>$10.00</td>
                        <td>$10.00</td>
                        <td>–</td>
                      </tr>
                      <tr>
                        <td>12-23</td>
                        <td>$7.50</td>
                        <td>$7.50</td>
                        <td>25%</td>
                      </tr>
                      <tr>
                        <td>12-23</td>
                        <td>$7.50</td>
                        <td>$7.50</td>
                        <td>25%</td>
                      </tr>
                      <tr>
                        <td>12-23</td>
                        <td>$7.50</td>
                        <td>$7.50</td>
                        <td>25%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="quantity d-flex align-items-center mb-3">
                <h4 className='mb-0 me-3 me-sm-4 ms-auto'>Quantity</h4>
                <div className='d-inline-flex position-relative'>
                  <button onClick={() => setQuantity(quantity - 1)}>-</button>
                  <input onChange={e => {
                    setQuantity(+e.target.value);
                  }} value={quantity} type="number" />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  <span className="dozen position-absolute">
                    Dozen
                  </span>
                </div>
              </div>
              <div className='total-price-table'>
                <table>
                  <tr className='text-uppercase'>
                    <th>
                      Item
                    </th>
                    <th>Cost</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>
                      Titleist Tour Speed – 13 dozen balls
                    </td>
                    <td>
                      $10.00
                    </td>
                    <td>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Front Customization – Text
                    </td>
                    <td>
                      $10.00
                    </td>
                    <td>
                      <button onClick={e => {
                        e.currentTarget.parentElement.parentElement.classList.toggle('disabled')
                      }}>
                        <BsCheckLg />
                        <img src={deleteIcon} alt="" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Back Customization – Logo
                    </td>
                    <td>
                      $10.00
                    </td>
                    <td>
                      <button onClick={e => {
                        e.currentTarget.parentElement.parentElement.classList.toggle('disabled');
                      }}>
                        <BsCheckLg />
                        <img src={deleteIcon} alt="" />
                      </button>
                    </td>
                  </tr>
                </table>
                <div className="total-price">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <p className='mb-0'>
                        Price does not include shipping & applicable taxes.
                      </p>
                    </div>
                    <div className="col-6">
                      <div className='d-flex justify-content-between'>
                        <span>
                          Total
                        </span>
                        <span>
                          $10.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons mt-4 pt-1 ">
                  <div className="text-uppercase row align-items-center">
                    <div className="col-sm-6 order-sm-1 mb-2 mb-sm-0">
                      <button onClick={showShippingAddress} className='justify-content-center w-100 button red-button d-flex align-items-center'>
                        <span>
                          secure checkout</span> <img className='ms-2' src={lock} alt="" />
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <button className="w-100 button">
                        APPLY COUPON CODE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5" style={{
                display: threeTexts.first || threeTexts.second || threeTexts.third ? 'block' : 'none'
              }}>
                <CustomizationTextBox events={
                  {
                    showAddTextColor: () => {
                      setTextEdit();
                      changeStep(2);
                    }
                  }
                } text={threeTexts} />
              </div>
              <div className="mt-4" style={{
                display: logoName ? 'block' : 'none'
              }}>
                <div className='text-center text-sm-start customization-box'>
                  <div className='d-sm-flex align-items-center justify-content-between'>
                    <div>
                      <span className='text-bold text-uppercase'>
                        customization {(threeTexts.first && threeTexts.second && threeTexts.third) ? '2' : 1}
                      </span>
                      <p>
                        Logo: {logoName}
                      </p>
                    </div>
                    <div>
                      <button onClick={() => {
                        changeStep(2);
                        setLogoUpload();
                      }} className='button pt-2'>
                        <label>
                          Change customization
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <ChangeBallBox events={
                  {
                    toggleProductPriceModal,
                    toggleproductChangeModal
                  }
                } product={products[currentItem]} />
              </div>


            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 d-lg-none">
              <div className="modal-content customization-pricing">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Customization Pricing <span>(per dozen)</span>
                  </h5>
                  <button className="close">×</button>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dollar sit amit im klorum dusi equitor no non umma. Lorem
                    ipsum dollar sit amit im klorum dusi equitor no non umma. Lorem ipsum
                    dollar sit amit im klorum dusi equitor no non umma.
                    <a className="green-text d-inline-block ms-1" href='#'>
                      Lorem ipsum dollar sit amit im klorum dusi equitor no non umma.
                    </a>
                  </p>
                  <table>
                    <tbody>
                      <tr className="text-uppercase">
                        <th>Quantity</th>
                        <th>Front</th>
                        <th>Back</th>
                        <th>Savings</th>
                      </tr>
                      <tr>
                        <td>1-11</td>
                        <td>$10.00</td>
                        <td>$10.00</td>
                        <td>–</td>
                      </tr>
                      <tr>
                        <td>12-23</td>
                        <td>$7.50</td>
                        <td>$7.50</td>
                        <td>25%</td>
                      </tr>
                      <tr>
                        <td>12-23</td>
                        <td>$7.50</td>
                        <td>$7.50</td>
                        <td>25%</td>
                      </tr>
                      <tr>
                        <td>12-23</td>
                        <td>$7.50</td>
                        <td>$7.50</td>
                        <td>25%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={checkoutDOM} className="checkout d-none">
          {
            !orderCompleted ? <> <h3 className="text-uppercase customize-title mt-4 mb-2 text-center text-md-start font-weight-bold">
              checkout
            </h3>
              <div className="steps mb-4 pb-lg-3">
                <button onClick={showShippingAddress} className='active'>
                  <span className='text-uppercase'>
                    step 1:
                  </span>
                  Shipping
                </button>
                <img src={angleRight} alt="" />
                <button onClick={() => {
                  showBillingAddress();
                }}>
                  <span className='text-uppercase'>
                    step 2:
                  </span>
                  Billing
                </button>
                <img src={angleRight} alt="" />
                <button onClick={showPlaceOrder}>
                  <span className='text-uppercase'>
                    step 3:
                  </span>
                  Place Order
                </button>
              </div> </> : ''

          }
          <div className="shipping mb-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="shipping-left">
                  <div>
                    <h4>
                      Enter Shipping Address
                    </h4>
                    <p className="text-red">
                      We only ship within Canada
                    </p>
                    <div className='mb-3'>
                      <InputBox name="first-name" event={setShippingAddress} label="first-name" value={shippingAddress['first-name']} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name='last-name' label="last name" value={shippingAddress['last-name']} event={setShippingAddress} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name='address-1' label="address 1" value={shippingAddress['address-1']} event={setShippingAddress} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name='address-2' label="address 2" value={shippingAddress['address-2']} event={setShippingAddress} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name='city' label="city" value={shippingAddress['city']} event={setShippingAddress} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name="postal-code" event={setShippingAddress} label="postal code" value={shippingAddress['postal-code']} />
                      <span className='example'>Example: 1A2B3C</span>
                    </div>
                    <div className='mb-3'>
                      <InputBox name="country" event={setShippingAddress} label="country" value={shippingAddress.country} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name="province" event={setShippingAddress} label="province" value={shippingAddress.province} />
                    </div>
                    <div className='mb-3 d-flex flex-column'>
                      <InputBox name="phone" event={setShippingAddress} label="phone" value={shippingAddress.phone} />
                      <span className='text-green d-inline-block d-none'>
                        why is this required?
                      </span>
                      <span className='example'>Example: 333333333</span>
                    </div>
                    <div className='mb-4'>
                      <InputBox name="email" event={setShippingAddress} label="email" value={shippingAddress.email} />
                    </div>
                    <div className='mb-4'>
                      <label className="d-flex" htmlFor="check-shipping">
                        <input onChange={e => {
                          setSameAsShipping(e.target.checked);
                        }} className="d-none" type="checkbox" id="check-shipping" />
                        <span>
                          <i>✓</i>
                        </span>
                        <span>USE THIS ADDRESS FOR BILLING</span>
                      </label>

                    </div>

                    <button onClick={showBillingAddress} className='button red-button'>
                      Continue <span className="ms-1">{'>'}</span>
                    </button>


                  </div>

                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 mb-4">
                <OrderSummary showExtra={false} />
              </div>
            </div>
          </div>
          <div className="billing mb-5 d-none ">
            <div className="row">
              <div className="col-lg-6">
                <div className="billing-left">

                  {!sameAsShipping && <>
                    <h4 className='mb-3'>
                      Enter Billing Address
                    </h4>
                    <div className='mb-3'>
                      <InputBox name="first-name" event={setBillingAddress} label="first-name" value={billingAddress['first-name']} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name='last-name' label="last name" value={billingAddress['last-name']} event={setBillingAddress} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name='address-1' label="address 1" value={billingAddress['address-1']} event={setBillingAddress} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name='address-2' label="address 2" value={billingAddress['address-2']} event={setBillingAddress} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name='city' label="city" value={billingAddress['city']} event={setBillingAddress} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name="postal-code" event={setBillingAddress} label="postal code" value={billingAddress['postal-code']} />
                      <span className='example'>Example: 1A2B3C</span>
                    </div>
                    <div className='mb-3'>
                      <InputBox name="country" event={setBillingAddress} label="country" value={billingAddress.country} />
                    </div>
                    <div className='mb-3'>
                      <InputBox name="province" event={setBillingAddress} label="province" value={billingAddress.province} />
                    </div>
                    <div className='mb-3 d-flex flex-column'>
                      <InputBox name="phone" event={setBillingAddress} label="phone" value={billingAddress.phone} />
                      <span className='text-green d-inline-block d-none'>
                        why is this required?
                      </span>
                      <span className='example'>Example: 333333333</span>
                    </div>
                    <div className='mb-4'>
                      <InputBox name="email" event={setBillingAddress} label="email" value={billingAddress.email} />
                    </div>
                    <hr />
                  </>
                  }
                  <h4 className='mt-4 pt-3 mb-4 pb-lg-2'>
                    Enter Credit Card Information
                  </h4>
                  <div className='mb-3'>
                    <InputBox name="card-name" event={setCreditCardInfo} label="name on card" value={creditCardInfo.name} />
                  </div>
                  <div className='mb-3'>
                    <div className="select-box input-box">
                      <label>
                        Type
                      </label>
                      <div>
                        <select name='type' onChange={setCreditCardInfo}>
                          <option value="visa">Visa</option>
                          <option value="master">Master</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='mb-3'>
                    <InputBox name="number" event={setCreditCardInfo} label="number" value={creditCardInfo.number} />
                    <span className="example">
                      Example: 3333333333
                    </span>
                  </div>
                  <div className='mb-3'>
                    <InputBox event={setCreditCardInfo} name="expiration-month" label="expiration month" value={creditCardInfo['expiration-month']} />
                  </div>
                  <div className='mb-3'>
                    <InputBox event={setCreditCardInfo} name="expiration-year" label="expiration year" value={creditCardInfo['expiration-year']} />
                  </div>
                  <div className='mb-4 pb-2'>
                    <InputBox event={setCreditCardInfo} name="security-code" label="security code" value={creditCardInfo['security-code']} />
                    <span className="text-green example">
                      What is this?
                    </span>
                  </div>
                  <button onClick={showPlaceOrder} className='button red-button'>
                    Continue <span className="ms-1">{'>'}</span>
                  </button>

                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 mb-4">
                <div className='mb-4'>
                  <OrderSummary showExtra={false} />
                </div>

                <Address title="Shipping Address" addresses={
                  Object.keys(shippingAddress).map(prop => {
                    const item = shippingAddress[prop];
                    return item;
                  })
                } />
              </div>
            </div>
          </div>
          <div className="place-order d-none">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-md-5">
                <div className='place-order-left'>
                  <ViewFrontBack product={products[currentItem]} logo={logo} text={threeTexts} />

                  <p className='mb-4 mt-5'>
                    Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr. Lorem ipsum dolar sit amit im klorum dusi equirr.
                  </p>
                  <div className="text-center">
                    <button onClick={() => {
                      setOrderCompleted();
                      showInvoice();
                    }} className='button red-button'>
                      Place Order <span className="ms-1">{'>'}</span>
                    </button>
                  </div>
                </div>

              </div>
              <div className="col-lg-6 mb-5">
                <div>
                  <div className="mb-4">
                    <OrderSummary showExtra={true} />
                  </div>
                  <div className="mb-4">
                    <Address title="Shipping Address" addresses={
                      Object.keys(shippingAddress).map(prop => {
                        const item = shippingAddress[prop];
                        return item;
                      })
                    } />
                  </div>
                  <div className='order-summary address-box billing-info'>
                    <div className="align-items-center d-flex justify-content-between">
                      <h3>
                        Billing Information
                      </h3>
                      <button className="edit text-green text-decoration-underline">
                        Edit
                      </button>
                    </div>
                    <div className="gray-box">
                      <ul className="address-list p-0 m-0">
                        {
                          Object.keys(sameAsShipping ? shippingAddress : billingAddress).map((prop, index) => {
                            const address = sameAsShipping ? shippingAddress : billingAddress
                            if (!index) return;

                            if (index === 1) {
                              return <li>{
                                address['first-name'] + ' ' + address['last-name']
                              }</li>
                            } else {
                              return <li>{address[prop]}</li>
                            }
                          })
                        }
                      </ul>
                      <hr />
                      <h6 className='text-uppercase'>
                        {creditCardInfo.type}
                      </h6>
                      <ul className='address-list p-0 m-0'>
                        <li>
                          {
                            creditCardInfo['card-name']
                          }
                        </li>
                        <li>
                          {creditCardInfo.number}
                        </li>
                        <li>
                          Expiration: {creditCardInfo['expiration-month']}/{creditCardInfo['expiration-year']}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree