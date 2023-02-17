import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ModalProduct from '../Products/ModalProduct';
import './Modal.scss';
import {FaAngleUp,FaAngleDown} from 'react-icons/fa'

const ProductChangeModal = (props) => {
    const [filter, setFilter] = React.useState(0);
    const {
        className,
        modal,
        events,
        products
    } = props;



    const closeBtn = <button className="close" onClick={events.toggleproductChangeModal}>&times;</button>;

    return (
        <div>
            <Modal isOpen={modal} className={className}>
                <ModalHeader close={closeBtn}>
                    SELECT A DIFFERENT BALL
                </ModalHeader>
                <ModalBody>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="category-filter">
                                <h4 onClick={() => setFilter(!filter)}>Filter by Brand {
                                    filter ? <FaAngleUp className='d-md-none ms-1 text-green' /> : <FaAngleDown className='text-green d-md-none ms-1' />
                                } </h4>
                                <form action="#">
                                    <ul className={`text-uppercase ${filter ? 'show-filter' : ''}`}>
                                        <li className='d-flex align-items-center'>
                                            <label className='d-flex' htmlFor="filter-1">
                                                <input className='d-none' type="checkbox" id='filter-1' />
                                                <span>
                                                    <i>✓</i>
                                                </span>
                                                <span>
                                                    TITLEIST
                                                </span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <label className='d-flex' htmlFor="filter-2">
                                                <input className='d-none' type="checkbox" id='filter-2' />
                                                <span>
                                                    <i>✓</i>
                                                </span>
                                                <span>
                                                    TAYLORMADE
                                                </span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <label className='d-flex' htmlFor="filter-3">
                                                <input className='d-none' type="checkbox" id='filter-3' />
                                                <span>
                                                    <i>✓</i>
                                                </span>
                                                <span>
                                                    CALLAWAY
                                                </span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <label className='d-flex' htmlFor="filter-4">
                                                <input className='d-none' type="checkbox" id='filter-4' />
                                                <span>
                                                    <i>✓</i>
                                                </span>
                                                <span>
                                                    BRIDGESTONE
                                                </span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <label className='d-flex' htmlFor="filter-5">
                                                <input className='d-none' type="checkbox" id='filter-5' />
                                                <span>
                                                    <i>✓</i>
                                                </span>
                                                <span>
                                                    SRIXON
                                                </span>
                                            </label>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <label className='d-flex' htmlFor="filter-6">
                                                <input className='d-none' type="checkbox" id='filter-6' />
                                                <span>
                                                    <i>✓</i>
                                                </span>
                                                <span>
                                                    SHOW ALL
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='row'>
                                {
                                    products.map(product => {
                                        return <ModalProduct key={product.id} events={events} {...product} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ProductChangeModal;