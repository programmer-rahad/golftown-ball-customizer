import React, { createRef, useEffect, useState } from 'react'
import ballFront from '../customization/ball-front.png'
import ballBack from '../customization/ball-back.png'
import ballLogo from '../ballLogo.svg';
import Button from '../Buttons.js';
import ColorButton from '../customization/ColorButton.js';
import CustomizationTextBox from '../customization/CustomizationTextBox';
import CustomizationLogoBox from '../customization/CustomizationLogoBox';
import ChangeBallBox from '../ChangeBallBox';
import { Link } from 'react-router-dom';
import './StepTwo.scss';



function StepTwo({ whiteBall, logoUpload, textEdit, colors, color, sameAsFront, currentItem, products, logo, logoName, threeTexts: text, events }) {
  const { setColor, changeStep, setSameAsFront, setLogoAndLogoName, setBallTexts, toggleproductChangeModal, toggleProductPriceModal } = events;

  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  const list = createRef();
  let stepTwoFirst = createRef();
  let stepTwoSecond = createRef();
  let stepTwoThird = createRef();
  let logoContinueButton = createRef();
  let customizeBackSide = createRef();

  function changeColor(color, e) {
    setColor(color);
    const li = list.current.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove('active');
      li[i].style.backgroundColor = 'transparent';
    }
    e.currentTarget.classList.add('active');
    e.currentTarget.style.backgroundColor = color;
  }

  function showAddTextColor() {

    customizeBackSide.current.classList.add('d-none');
    stepTwoFirst.current.classList.add('d-none');

    stepTwoSecond.current.classList.remove('d-none');

    stepTwoThird.current.classList.add('d-none')

  }
  function showCustomizeBackSide() {
    stepTwoSecond.current.classList.add('d-none');
    stepTwoThird.current.classList.add('d-none');
    customizeBackSide.current.classList.remove('d-none');
  }
  function showAddLogo() {
    customizeBackSide.current.classList.add('d-none');
    stepTwoFirst.current.classList.add('d-none');
    stepTwoSecond.current.classList.add('d-none');
    stepTwoThird.current.classList.remove('d-none');
  }
  useEffect(() => {
    if (textEdit) {
      showAddTextColor();
    }
    if (logoUpload) {
      showAddLogo();
    }
  }, [])
  const image = products[currentItem].image;
  return (
    <div className='step-two mb-5 pb-lg-5'>
      <div className='container'>
        <h3 className='customize-title mt-4 mb-4 text-center text-md-start font-weight-bold'>
          <strong>CUSTOMIZE YOUR BALL</strong>
        </h3>
        <div ref={stepTwoFirst} className="step-two-first one row align-items-center">
          <div className="col-lg-6 d-none d-md-block">
            <div className='customize-left'>
              <div className='mx-auto mx-xl-0'>
                <div>
                  <img src={whiteBall} alt='' />
                  <p>
                    <span>your</span>
                    <span>Personalized</span>
                    <span>Text Here!</span>
                  </p>
                </div>
                <div>
                  <img src={whiteBall} alt='' />
                  <div className='logo'>
                    <img src={ballLogo} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className='customize-right one'>
              <h4 className='customize-subtitle text-center text-md-start'>
                Choose Customization
              </h4>
              <p className='text-center text-md-start mt-3 pt-1 mb-4 pb-2'>
                Customize one or two sides of your ball with any combination of text and logos.
              </p>
              <div className="add-text-logo">
                <div className="row">
                  <div className="col-6 col-md-12 mb-3 pb-1">
                    <div>
                      <img className='d-md-none' src={ballFront} alt="" />
                      <Button onClick={showAddTextColor} type="red-button" text="Add Text" />
                      <p className='mt-3 pt-1 text-center text-md-start'>
                        Add up to three lines of text in a variety of colours. <strong>Quantities as low as one dozen.</strong>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-12">
                    <div>
                      <img className='d-md-none' src={ballBack} alt="" />
                      <input className='d-none' onChange={e => {
                        const logoURL = URL.createObjectURL(e.target.files[0]);
                        setLogoAndLogoName(logoURL, e.target.files[0].name)
                        showAddLogo();
                      }} id='upload-logo' type='file' />
                      <button className='button red-button'>
                        <label htmlFor="upload-logo">
                          Add Logo
                        </label>
                      </button>
                      <p className='mt-3 pt-1 text-center text-md-start'>
                        Add a logo containing up to 6 colours. <strong>Minimum quantity 12 dozen.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br className='d-none d-lg-block' />
              <br className='d-none d-sm-block' />
              <ChangeBallBox events={{
                toggleproductChangeModal,
                toggleProductPriceModal
              }} product={products[currentItem]} />
            </div>
          </div>
        </div>
        <div ref={stepTwoSecond} className="step-two-second row mt-4 d-none">
          <div className="col-lg-6">
            <div className='customize-left ms-lg-5 pt-lg-3 position-relative'>
              <img src={products[currentItem].image} alt="" />
              <div style={{
                color
              }} className='ball-text text-center text-uppercase'>
                <p>{text.first}</p>
                <p>{text.second}</p>
                <p>{text.third}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className='customize-right ps-lg-2'>
              <div className="row">
                <div className="col-md-6">
                  <div className="add-text">
                    <h4>Add Text</h4>
                    <input value={text.first} name='first' onChange={setBallTexts} type="text" placeholder='Add Line 1' />
                    <input value={text.second} name='second' onChange={setBallTexts} type="text" placeholder='Add Line 2' />
                    <input value={text.third} name='third' onChange={setBallTexts} type="text" placeholder='Add Line 3' />
                  </div>
                </div>
                <div className="col-md-6 pb-3 mt-4 mt-md-0">
                  <div className="select-color d-flex align-items-center d-sm-block">
                    <h4>Select Colour</h4>
                    <div ref={list} className='d-flex justify-content-between'>
                      <ul className='d-flex d-sm-block'>
                        <ColorButton active="active" changeColor={changeColor} text="Black" color={colors.black} />
                        <ColorButton changeColor={changeColor} text="Blue" color={colors.blue} />
                        <ColorButton changeColor={changeColor} text="Green" color={colors.green} />
                      </ul>
                      <ul className='d-flex d-sm-block'>
                        <ColorButton changeColor={changeColor} text="Red" color={colors.red} />
                        <ColorButton changeColor={changeColor} text="Purple" color={colors.purple} />
                        <ColorButton changeColor={changeColor} active={true} text="Orange" color={colors.orange} />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 mt-lg-4 mb-3'>
                  <div className='border-top pt-4'>
                    <button onClick={showCustomizeBackSide} disabled={text.first || text.second || text.third ? false : true} className='button red-button'>Continue</button>
                  </div>
                </div>
              </div>

              <br />
              <ChangeBallBox events={{
                toggleproductChangeModal,
                toggleProductPriceModal
              }} product={products[currentItem]} />
            </div>
          </div>
        </div>
        <div ref={stepTwoThird} className="step-two-third row mt-4 d-none">
          <div className="col-lg-5">
            <div className='customize-left ms-lg-4 pt-lg-3 position-relative'>
              <img src={products[currentItem].image} alt="" />
              <div className='ball-image'>
                <img style={{
                  transform: `scale(${scale}) rotate(${rotate}deg)`
                }} src={logo} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-lg-5">
            <div className='customize-right ps-lg-4'>
              <h4>Adjust Logo</h4>
              <p className='text-center text-sm-start'>
                Size your logo to fit in the circular area.
              </p>
              {/* <div className="scale-rotate">
                <button onClick={() => {
                  const ballLogo = stepTwoThird.current.querySelector('.ball-image img');
                  if (scale > 1.3) {
                    setScale(.9);
                  } else {
                    setScale(scale + .1);
                  }
                  ballLogo.style.transform = `scale(${scale}) rotateZ(${rotate}deg)`;

                }} className='button green-button'>
                  Scale
                </button>
                <button onClick={() => {
                  const ballLogo = stepTwoThird.current.querySelector('.ball-image img');
                  if (rotate > 360) {
                    setRotate(0)
                  } else {
                    setRotate(rotate + 5);
                  }
                  ballLogo.style.transform = `scale(${scale}) rotateZ(${rotate}deg)`;
                  console.log(rotate);
                }} className='button green-button'>
                  Rotate
                </button>
              </div> */}
              <div className='logo-checkbox-wrapper'>
                <label htmlFor="logo-checkbox" className='d-flex align-items-start'>
                  <input onChange={e => {
                    const button = logoContinueButton.current.querySelector('button');
                    button.disabled = !e.target.checked;
                    button.classList.toggle('red-button');
                  }} type="checkbox" id='logo-checkbox' />
                  <p>I verify that I own the copyright and/or have permission to use the uploaded image.</p>
                </label>
              </div>
              <div ref={logoContinueButton} className='text-center text-sm-start'>
                <button onClick={e => {
                  if (!e.target.classList.contains('red-button')) return;
                  showCustomizeBackSide()
                }} className='logo-continue'>
                  Continue
                </button>
              </div>
              <div className='mt-5' style={{
                display: (text.first && text.second && text.third) ? 'block' : 'none'
              }}>
                <CustomizationTextBox events={
                  {
                    showAddTextColor: showAddTextColor
                  }
                } text={text} />
              </div>
              <div className='mt-4'>
                <CustomizationLogoBox text={text} logoName={logoName} />
              </div>
              <div className='mt-4'>
                <ChangeBallBox events={{
                  toggleproductChangeModal,
                  toggleProductPriceModal
                }} product={products[currentItem]} />
              </div>
            </div>
          </div>
        </div>
        <div ref={customizeBackSide} className="step-two-first customize-back-side row d-none">
          <div className="col-xl-6 d-none d-md-block">
            <div className='customize-left'>
              <div className='mx-auto mx-xl-0'>
                <div>
                  <img src={image} alt='' />
                  <p>
                    <span>{text.first}</span>
                    <span>{text.second}</span>
                    <span>{text.third}</span>
                  </p>
                </div>
                <div>
                  <img src={image} alt='' />
                  <div className='logo'>
                    <img src={logo} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className='customize-right one'>
              <h4 className='customize-subtitle text-center text-md-start'>
                OPTIONAL – Customize the Back Side
              </h4>
              <p className='text-center text-md-start mt-3 pt-1 mb-4 pb-2'>
                Add another customization to the other side of your ball.
                <strong className='d-block'>Note: Additional charges apply.</strong>
              </p>
              <div className="add-text-logo">
                <div className="row">
                  <div className="col-6 col-md-12 mb-2 pb-1">
                    <div>
                      <div className='mobile position-relative d-md-none'>
                        <img src={image} alt='' />
                        <p className='position-absolute'>
                          <span>{text.first}</span>
                          <span>{text.second}</span>
                          <span>{text.third}</span>
                        </p>
                      </div>
                      <div className='d-none d-md-block'>
                        <Button onClick={showAddTextColor} type="red-button" text="Add Text" />
                      </div>

                    </div>
                  </div>
                  <div className="col-6 col-md-12">
                    <div>
                      <div className='mobile position-relative d-md-none'>
                        <img src={image} alt='' />
                        <div className='logo position-absolute'>
                          <img src={logo} alt='' />
                        </div>
                      </div>
                      <input className='d-none' onChange={e => {
                        const logoURL = URL.createObjectURL(e.target.files[0]);
                        setLogoAndLogoName(logoURL, e.target.files[0].name)
                        showAddLogo();
                      }} id='upload-logo' type='file' />
                      <button className='button red-button d-none d-md-block'>
                        <label htmlFor="upload-logo">
                          Add Logo
                        </label>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='text-center text-center text-md-start'>
                  <div className='mt-2 pt-1'>
                    <div className='d-md-none'>
                      <div className='mb-2 pb-1'>
                        <Button onClick={showAddTextColor} type="red-button" text="Add Text" />
                      </div>
                      <div className="mb-2 pb-1 ">
                        <button className='button red-button'>
                          <label htmlFor="upload-logo">
                            Add Logo
                          </label>
                        </button>
                      </div>
                    </div>
                    <div style={{
                      // display: ((text.first || text.second || text.third) && logoName) ? 'none' : 'block'
                    }}>
                      <button onClick={() => {
                        setSameAsFront();
                        changeStep(3);
                      }} className='button red-button mb-4'>
                        Same As Front
                      </button>
                    </div>
                    <Link to="step-3" onClick={(e) => { 
                      e.preventDefault();
                       changeStep(3) }
                       } className='text-green-2 text-decoration-underline mt-lg-3'>
                      No further customizations required
                    </Link>
                  </div>
                </div>
              </div>
              <br className='d-none d-lg-block' />

              <div className='mt-4 mb-4' style={{
                display: (text.first || text.second || text.third) ? 'block' : 'none'
              }}>
                <CustomizationTextBox events={
                  {
                    showAddTextColor: showAddTextColor
                  }
                } text={text} />
              </div>
              <div style={{ display: logoName ? 'block' : 'none' }} className="my-4">
                <CustomizationLogoBox text={text} logoName={logoName} />
              </div>
              <ChangeBallBox events={{
                toggleproductChangeModal,
                toggleProductPriceModal
              }} product={products[currentItem]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTwo