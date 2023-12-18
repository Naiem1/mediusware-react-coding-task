import ContactList from './ContactList';

const ContactTable = ({
  contacts,
  lastElementRef,
  hasMore,
  isLoading,
  handleShowDetails,
}) => {
  return (
    <>
      <table className="table overflow-auto">
        <thead>
          <tr style={{ fontSize: '18px' }}>
            <th>#</th>
            <th>Phone Number</th>
            <th>Country Name</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact, index) => (
            <ContactList
              key={index}
              contact={contact}
              index={index}
              handleShowDetails={handleShowDetails}
            />
          ))}

          {hasMore && isLoading && (
            <span className="text-light bg-primary px-2 rounded-1">
              Loading...
            </span>
          )}
          <p ref={lastElementRef} style={{ height: '10px' }}></p>
        </tbody>
      </table>
    </>
  );
};

export default ContactTable;
