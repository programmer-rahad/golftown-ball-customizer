import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Modal.scss';

const ProductPriceModal = (props) => {
    const {
        className,
        modal, 
        event
    } = props;

 

    const closeBtn = <button className="close" onClick={event}>&times;</button>;

    return (
        <div>
            <Modal isOpen={modal} className={className}>
                <ModalHeader  close={closeBtn}>
                    Customization Pricing <span>(per dozen)</span>
                </ModalHeader>
                <ModalBody>
                    <p>
                        Lorem ipsum dollar sit amit im klorum dusi equitor no non umma. Lorem ipsum dollar sit amit im klorum dusi equitor no non umma. Lorem ipsum dollar sit amit im klorum dusi equitor no non umma.
                        <span className='green-text'>
                            Lorem ipsum dollar sit amit im klorum dusi equitor no non umma.
                        </span>
                    </p>
                    <table>
                        <tr className='text-uppercase'>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Front
                            </th>
                            <th>
                                Back
                            </th>
                            <th>
                                Savings
                            </th>
                        </tr>
                        <tr>
                            <td>
                                1-11
                            </td>
                            <td>
                                $10.00
                            </td>
                            <td>
                                $10.00
                            </td>
                            <td>
                                –
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12-23
                            </td>
                            <td>
                                $7.50
                            </td>
                            <td>
                                $7.50
                            </td>
                            <td>
                                25%
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12-23
                            </td>
                            <td>
                                $7.50
                            </td>
                            <td>
                                $7.50
                            </td>
                            <td>
                                25%
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12-23
                            </td>
                            <td>
                                $7.50
                            </td>
                            <td>
                                $7.50
                            </td>
                            <td>
                                25%
                            </td>
                        </tr>
                    </table>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ProductPriceModal;