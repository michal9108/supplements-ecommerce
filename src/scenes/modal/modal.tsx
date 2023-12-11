import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type Props = {
  onHide: () => void;
  show: boolean;
};
const MyVerticallyCenteredModal = ({ onHide, show, ...props }: Props) => {
  return (
    <Modal
      {...props}
      show={show}
      size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
      onClick={onHide}
    >
      <Modal.Header closeButton className="my-20 py-20 font-bold text-center"> <h4> 15 % OFF YOUR PURCHASE !!!</h4></Modal.Header>
    <label></label>
      <input
            className="mb-5 w-full rounded-lg bg-primary-300
            px-5 py-3 placeholder-white"
                type="text"
                placeholder="Email Address:"

              
              />
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
