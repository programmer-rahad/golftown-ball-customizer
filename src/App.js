import { useState, Component } from 'react';
import Topbar from './components/Topbar/Topbar';
import Logo from './components/Logo/Logo';
import Steps from './components/Steps/Steps';
import { BrowserRouter } from 'react-router-dom';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';
import Invoice from './components/Invoice';
import ProductPriceModal from './components/Modal/ProductPriceModal.js';
import ProductChangeModal from './components/Modal/ProductChangeModal.js';


import ballImage from './components/product-img.png'
import whiteBall from './components/ball.png';
import ball2 from './components/ball-2.png';
import ball3 from './components/ball-3.png';

const ballProducts = [
  {
    id: 1,
    brand: 'titleist',
    title: 'Tour Speed',
    text: 'Titleist Performance Urethane (TPU) combined with a proprietary casing layer, and reformulated core produce an incredible combination of speed and spin to cover any shot, tee to green.',
    price: 59.99,
    image: whiteBall,
    packetImage: ballImage
  },
  {
    id: 2,
    brand: 'titleist',
    title: 'Tour Speed',
    text: 'Titleist Performance Urethane (TPU) combined with a proprietary casing layer, and reformulated core produce an incredible combination of speed and spin to cover any shot, tee to green.',
    price: 59.99,
    image: ball3,
    packetImage: ballImage
  },
  {
    id: 3,
    brand: 'titleist',
    title: 'Tour Speed',
    text: 'Titleist Performance Urethane (TPU) combined with a proprietary casing layer, and reformulated core produce an incredible combination of speed and spin to cover any shot, tee to green.',
    price: 59.99,
    image: ball3,
    packetImage: ballImage
  },
  {
    id: 4,
    brand: 'titleist',
    title: 'Tour Speed',
    text: 'Titleist Performance Urethane (TPU) combined with a proprietary casing layer, and reformulated core produce an incredible combination of speed and spin to cover any shot, tee to green.',
    price: 59.99,
    image: ball2,
    packetImage: ballImage
  },
  {
    id: 5,
    brand: 'titleist',
    title: 'Tour Speed',
    text: 'Titleist Performance Urethane (TPU) combined with a proprietary casing layer, and reformulated core produce an incredible combination of speed and spin to cover any shot, tee to green.',
    price: 59.99,
    image: ball2,
    packetImage: ballImage
  },
  {
    id: 6,
    brand: 'titleist',
    title: 'Tour Speed',
    text: 'Titleist Performance Urethane (TPU) combined with a proprietary casing layer, and reformulated core produce an incredible combination of speed and spin to cover any shot, tee to green.',
    price: 59.99,
    image: ball2,
    packetImage: ballImage
  },
];

const colors = {
  black: '#000',
  red: '#ff0000',
  blue: '#0062FB',
  purple: '#D21DE2',
  green: '#4E931B',
  orange: '#EDBD3B'
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      creditCardInfo: {
        'card-name': '',
        number: '',
        type: '',
        'expiration-month': '',
        'expiration-year': '',
        'security-code': ''
      },
      shippingAddress: {
        ['first-name']: '',
        ['last-name']: '',
        ['address-1']: '',
        ['address-2']: '',
        city: '',
        ['postal-code']: '',
        country: '',
        province: '',
        phone: '',
        'email': ''
      },
      billingAddress: {
        ['first-name']: '',
        ['last-name']: '',
        ['address-1']: '',
        ['address-2']: '',
        city: '',
        ['postal-code']: '',
        country: '',
        province: '',
        phone: '',
      },
      sameAsShipping: false,
      quantity: 10,
      color: colors.black,
      sameAsFront: false,
      currentItem: 0,
      currentStep: 1,
      productPriceModal: false,
      productChangeModal: false,
      threeTexts: {
        first: '',
        second: '',
        third: ''
      },
      logo: '',
      logoName: '',
      orderCompleted: false,
      textEdit: false,
      logoUpload: false
    }
  }
  setCreditCardInfo = e => {
    const property = e.target.name;
    const value = e.target.value;
    this.setState({
      creditCardInfo: {
        ...this.state.creditCardInfo,
        [property]: value
      }
    })
  }
  setBillingAddress = e => {
    if (this.state.sameAsShipping) {
      this.setState({
        billingAddress: {
          ...this.state.shippingAddress,
        }
      })
    } else {
      const property = e.target.name;
      const value = e.target.value;
      this.setState({
        billingAddress: {
          ...this.state.billingAddress,
          [property]: value
        }
      })
    }
  }
  setShippingAddress = e => {
    const property = e.target.name;
    const value = e.target.value;
    this.setState({
      shippingAddress: {
        ...this.state.shippingAddress,
        [property]: value
      }
    })
  }
  setSameAsShipping = boolean => {
    this.setState({
      sameAsShipping: boolean
    })
  }
  setQuantity = quantity => {
    this.setState({
      quantity
    });
  }
  setTextEdit = () => {
    this.setState({
      textEdit: true
    });
  }
  setLogoUpload = () => {
    this.setState({
      logoUpload: true
    });
  }
  setOrderCompleted = () => {
    this.setState({
      orderCompleted: true
    })
  }
  setColor = (color) => {
    this.setState({
      color
    })
  }
  setSameAsFront = () => {
    const text = this.state.threeTexts;
    const boolean = (text.first || text.second || text.third) && this.state.logoName ? false : true
    this.setState({
      sameAsFront: boolean
    });
  }
  setLogoAndLogoName = (url, logoName) => {
    this.setState({
      logo: url,
      logoName
    })
  }
  setBallTexts = e => {
    this.setState({
      threeTexts: {
        ...this.state.threeTexts,
        [e.target.name]: e.target.value
      }
    })
  }
  toggleProductPriceModal = () => {
    this.setState({
      productPriceModal: !this.state.productPriceModal
    })
  }
  toggleproductChangeModal = () => {
    this.setState({
      productChangeModal: !this.state.productChangeModal
    })
  }
  changeStep = (step) => {
    this.setState({
      currentStep: step
    })
  }
  setCurrentItem = (id) => {

    const index = ballProducts.findIndex(product => product.id === id);

    this.setState({
      currentItem: index
    });


  }
  render() {
    return <BrowserRouter>
      <ProductPriceModal className="product-price-modal modal-dialog-centered modal-lg modal-dialog-scrollable" event={this.toggleProductPriceModal} modal={this.state.productPriceModal} />
      <ProductChangeModal className="product-change-modal modal-dialog-scrollable modal-lg" products={ballProducts} events={{
        toggleproductChangeModal: this.toggleproductChangeModal,
        setCurrentItem: this.setCurrentItem
      }} modal={this.state.productChangeModal} />

      <div className='text-center d-md-none'>
        <Logo />
      </div>
      <Topbar />
      <div>
        <div className="container mt-sm-1 steps-wrapper">
          <div className="d-none d-md-block">
            <Logo />
          </div>
          {
            !this.state.orderCompleted && <Steps currentStep={this.state.currentStep} event={this.changeStep} />
          }

        </div>
        {
          this.state.currentStep === 1 ? <StepOne products={ballProducts} events={{
            changeStep: this.changeStep,
            toggleProductPriceModal: this.toggleProductPriceModal,
            setCurrentItem: this.setCurrentItem
          }} /> : ''
        }
        {
          this.state.currentStep === 2 ?
            <StepTwo whiteBall={whiteBall} logoUpload={this.state.logoUpload} textEdit={this.state.textEdit} sameAsFront={this.state.sameAsFront} currentItem={this.state.currentItem} products={ballProducts} logoName={this.state.logoName} logo={this.state.logo} threeTexts={this.state.threeTexts} colors={colors} color={this.state.color} events={
              {
                toggleProductPriceModal: this.toggleProductPriceModal,
                toggleproductChangeModal: this.toggleproductChangeModal,
                setBallTexts: this.setBallTexts,
                setLogoAndLogoName: this.setLogoAndLogoName,
                setSameAsFront: this.setSameAsFront,
                changeStep: this.changeStep,
                setColor: this.setColor
              }} /> :
            ''
        }
        {
          this.state.currentStep === 3 ?
            <StepThree
              events={{
                toggleProductPriceModal: this.toggleProductPriceModal,
                toggleproductChangeModal: this.toggleproductChangeModal,
                setOrderCompleted: this.setOrderCompleted,
                setTextEdit: this.setTextEdit,
                changeStep: this.changeStep,
                setLogoUpload: this.setLogoUpload,
                setQuantity: this.setQuantity,
                setSameAsShipping: this.setSameAsShipping,
                setShippingAddress: this.setShippingAddress,
                setBillingAddress: this.setBillingAddress,
                setCreditCardInfo: this.setCreditCardInfo
              }}
              props={{
                billingAddress: this.state.billingAddress,
                shippingAddress: this.state.shippingAddress,
                sameAsShipping: this.state.sameAsShipping,
                products: ballProducts,
                currentItem: this.state.currentItem,
                logoName: this.state.logoName,
                logo: this.state.logo,
                threeTexts: this.state.threeTexts,
                orderCompleted: this.state.orderCompleted,
                quantity: this.state.quantity,
                creditCardInfo: this.state.creditCardInfo
              }} /> :
            ''
        }
        {
          this.state.orderCompleted && <Invoice />
        }
      </div>
    </BrowserRouter>
  }


}

export default App;
