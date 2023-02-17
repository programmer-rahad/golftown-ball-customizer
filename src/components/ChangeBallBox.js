import './ChangeBallBox.scss'
function ChangeBallBox({ product: { brand, title, price, packetImage: image }, events: { toggleproductChangeModal, toggleProductPriceModal } }) {
    return (
        <div className="change-ball-box">
            <div className='d-flex justify-content-between align-items-center mb-3 mb-md-0'>
                <img src={image} alt="" />
                <div>
                    <div className='pe-4 me-1'>
                        <div>
                            <h4 className='text-bold text-uppercase'>{brand}</h4>
                            <h3>{title}</h3>
                            <button onClick={toggleProductPriceModal} className="price-info text-start d-flex text-black align-items-center">
                                <img className="me-1 me-sm-2" src="/static/media/info.f4c92dbc316aeba18bf2b3eb3770debd.svg" alt="" />
                                <span className="ps-1 pt-1">${price + ' '}
                                    <span className="text-green-2">
                                        + Customization
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="text-end d-none d-lg-block mt-3">
                        <button onClick={toggleproductChangeModal} className="button">Change</button>
                    </div>
                </div>
            </div>
            <div className="text-center d-lg-none">
                <button onClick={toggleproductChangeModal} className="button">Change</button>
            </div>
        </div>
    )
}

export default ChangeBallBox