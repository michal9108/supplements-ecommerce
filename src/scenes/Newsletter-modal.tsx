import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useProductCart } from "./cart/ProductCartContext";

type NewsletterModalProps = {
    newsletterModalShow: boolean;
  };
const NewsletterModal: React.FC<NewsletterModalProps> = ({ newsletterModalShow }) => {
    const { handleCloseModal } = useProductCart();

  return (
    <div className="relative">
      <section className=" bg-[#cccccc]" onClick={handleCloseModal}>
        <div className=" modal show block initial">
          <Modal
            show={newsletterModalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onClick={handleCloseModal}
          >
            <Modal.Header
              className=" text-2xl font-bold md:text-3xl m-auto"
              style={{ border: "1px solid #fff" }}
            >
              <h4 className="flex"> Thank you</h4>
            </Modal.Header>
          
          </Modal>
        </div>
      </section>
    </div>
  )
}

export default NewsletterModal
