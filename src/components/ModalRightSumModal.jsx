import React from "react";
import { Button, Modal, Label, Select } from "flowbite-react";
import { useState, useEffect } from "react";

import _ from "lodash";

const ModalRightSumModal = ({ productToRightModal }) => {
  const [showRightModal, setShowRightModal] = useState(false);


  const handleSumModal = () => {
    setShowRightModal(true);
    let cart = [];
    if (sessionStorage.getItem("cart")) {
      cart = JSON.parse(sessionStorage.getItem("cart"));
    }
    cart.push({
      ...productToRightModal,
      count: 1,
    });

    let unique = _.uniqWith(cart, _.isEqual);
    sessionStorage.setItem("cart", JSON.stringify(unique));
  };

  const closeRightModal = () => {
    setShowRightModal(false);
  };

  const chackout = () => {
    alert("Sucess of payment");
    setShowRightModal(false);
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={handleSumModal}>Add to Card</Button>
        <Modal position="top-right" show={showRightModal} onClose={closeRightModal}>
          <Modal.Header>Cart</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 grid grid-cols-2">
              <div className="flex">
                {/* <div>
                  {itemStoreInfo?.map((el, index) => {
                    return <img key={index} src={el.media[0].url} />;
                  })}
                </div> */}
                <div className="detail cart"></div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={chackout}>I accept</Button>
            <Button color="gray" onClick={closeRightModal}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default ModalRightSumModal;
