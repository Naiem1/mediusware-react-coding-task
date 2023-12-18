import { Button, Modal } from 'react-bootstrap';

const ModalHeader = ({ modalHeading, handleClose }) => {
  return (
    <Modal.Header className='p-1'>
      <Modal.Title>{modalHeading}</Modal.Title>
      
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
    </Modal.Header>
  );
};

export default ModalHeader;
