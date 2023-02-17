import './Address.scss';

function Address({title,addresses}) {
    return (
        <div className='order-summary address-box'>
            <div className="align-items-center d-flex justify-content-between">
                <h3>
                    {title}
                </h3>
                <button className="edit text-green text-decoration-underline">
                    Edit
                </button>
            </div>
            <div className="gray-box">
                <ul className="address-list p-0 m-0">
                    {
                        addresses.map((address,i) => {
                            if(!i) return;
                            if(i === 1) {
                                return <li key={i}>{addresses[0] + ' ' + addresses[1]}</li>
                            } else {
                                return <li key={i}>{address}</li>
                            }
                        } )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Address