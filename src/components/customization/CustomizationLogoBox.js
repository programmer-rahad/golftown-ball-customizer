function CustomizationLogoBox({ logoName, text }) {
    return (
        <div className='text-center text-sm-start customization-box'>
            <div className='d-sm-flex align-items-center justify-content-between'>
                <div>
                    <span className='text-bold text-uppercase'>
                        back customization 2
                    </span>
                    <p>
                        Logo: {logoName}
                    </p>
                </div>
                <div>
                    <button className='button pt-2'>
                        <label htmlFor='upload-logo'>
                            Change
                        </label>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomizationLogoBox