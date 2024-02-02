import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";

const ModalEmail = () => {
  const [show, setShow] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const PopUpWindow = setTimeout(() => {
      setModalShow(true);
    }, 2000);
    return () => clearTimeout(PopUpWindow);
  }, []);

  return (
    <div className="relative">
      <section className=" bg-[#cccccc]" onClick={handleClose}>
        <div className=" modal show block initial">
          <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onClick={handleClose}
            closeButton
          >
            <Modal.Header
              className=" text-2xl font-bold md:text-3xl m-auto"
              style={{ border: "1px solid #fff" }}
            >
              <h4 className="flex"> 15 % OFF YOUR PURCHASE !!!</h4>
            </Modal.Header>
            <div className="mx-10 px-0 max-md:px-5">
              <p className="flex mx-auto w-full text-sm">
                Enter your email below and receive 10% OFF + access to special
                deals.
              </p>
              <input
                className="my-1 w-full rounded-lg bg-primary-100 border-slate-950 border-1
            px-3 py-3 placeholder-black  "
                type="text"
                placeholder="Email Address:"
              />
              {/* <button className=" bg-secondary-500">
          Continue
          </button> */}
              <button
                onClick={handleClose}
                className=" flex w-full items-center mt-2 mb-4  justify-center rounded-md border border-transparent  px-7 py-3 text-2xl font-bold  text-primary-100 bg-secondary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Continue
              </button>
            </div>
          </Modal>
        </div>
      </section>
    </div>
  );
};

export default ModalEmail;
