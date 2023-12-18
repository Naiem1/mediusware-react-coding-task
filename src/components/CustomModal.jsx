import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import useDetails from '../hooks/useDetails';
import { pathStringTransform } from '../utils/pathString';
import ContactTable from './ContactTable';
import ContactDetails from './Modal-C';
import ModalFooter from './modal/ModalFooter';
import ModalHeader from './modal/ModalHeader';

function CustomModal({
  contacts,
  lastElementRef,
  hasMore,
  isLoading,
  handleChange,
  error,
}) {
  const [show, setShow] = useState(true);
  const [isEven, setIsEven] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setContact, contact, handleSetContact } = useDetails();
  const modalHeading = pathStringTransform(pathname);

  const handleFormCheck = (e) => {
    setIsEven(e.target.checked);
  };

  const getEvenContacts = () => {
    if (isEven) {
      contacts = contacts.filter((contact) => contact.id % 2 === 0);
    }

    return contacts;
  };

  const handleClose = () => {
    setShow(false);
    navigate('/problem-2');
  };

  const handleCloseDetails = () => {
    handleSetContact([]);
    setShowDetails(false);
  };

  const handleShowDetails = (contact) => {
    handleSetContact(contact);
    setShowDetails(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <ModalHeader handleClose={handleClose} modalHeading={modalHeading} />
        <Modal.Body>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
            <Button
              style={{ background: '#46139f', border: 'none' }}
              onClick={() => navigate('/modal-a')}
            >
              All Contacts
            </Button>
            <Button
              style={{ background: '#ff7f50', border: 'none' }}
              onClick={() => navigate('/modal-b')}
            >
              US Contacts
            </Button>
          </div>

          <div className="w-75 m-auto mt-4">
            <InputGroup size="sm" className="mb-3">
              <Form.Control
                placeholder="Search Contact..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
            </InputGroup>
          </div>
          <div style={{ height: '320px', overflow: 'auto' }}>
            {/* {error && 'Not Found'} */}
            <ContactTable
              contacts={getEvenContacts()}
              lastElementRef={lastElementRef}
              isLoading={isLoading}
              hasMore={hasMore}
              handleShowDetails={handleShowDetails}
            />
          </div>

        </Modal.Body>

        <ModalFooter
          handleClose={handleClose}
          handleFormCheck={handleFormCheck}
        />
      </Modal>
      <ContactDetails
        show={showDetails}
        contact={contact}
        handleClose={handleCloseDetails}
      />
    </>
  );
}

export default CustomModal;
