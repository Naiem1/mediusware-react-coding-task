import { Button, FormCheck, Modal } from 'react-bootstrap';

const ModalFooter = ({ handleClose, handleFormCheck }) => {
  return (
    <Modal.Footer className="p-1">
      Even Only
      <FormCheck onChange={handleFormCheck} />
      <Button
        size="sm"
        style={{
          border: '1px solid #46139f',
          background: '#FFF',
          color: '#000',
        }}
        onClick={handleClose}
      >
        Close
      </Button>
    </Modal.Footer>
  );
};

export default ModalFooter;
