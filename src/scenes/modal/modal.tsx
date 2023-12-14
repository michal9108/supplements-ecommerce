import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type Props = {
  onHide: () => void;
  show: boolean;
};
const MyVerticallyCenteredModal = ({ onHide, show, ...props }: Props) => {
  return (
    <section className="relative h-screen bg-[#cccccc] md:h-screen">
      <div className="absolute left-1/2 top-1/2 w-[90%] max-w-[900px] -translate-x-1/2 -translate-y-1/2 bg-white md:h-96 lg:w-full">
        <Modal
          {...props}
          show={show}
          // aria-labelledby="contained-modal-title-vcenter"
          centered
          onClick={onHide}
          className="mx-auto flex max-w-xl flex-col p-10 md:py-20"
        >
          <Modal.Header
            closeButton
            className="mb-2 text-2xl font-bold md:text-3xl"
          >
            {" "}
            <h4> 15 % OFF YOUR PURCHASE !!!</h4>
          </Modal.Header>
          <label></label>
          <input
            className="mb-5 w-full rounded-lg bg-primary-300
            px-5 py-3 placeholder-white"
            type="text"
            placeholder="Email Address:"
          />
        </Modal>
      </div>
    </section>
  );
};

export default MyVerticallyCenteredModal;
