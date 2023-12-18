import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ContactDetails({ show, handleClose, contact }) {
  return (
    <>
      <Modal
        style={{
          height: '100%',
          paddingTop: '250px',
          background: '#55555555',
          width: '100%',
        }}
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header>Details</Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h6>{contact?.phone}</h6>
            <h6>{contact?.country?.name}</h6>
          </div>
        </Modal.Body>
        <Modal.Footer className="m-0 p-0">
          <Button
            size="sm"
            variant="secondary"
            style={{
              background: '#FFFF',
              border: '1px solid #46139f',
              color: '#000',
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactDetails;
