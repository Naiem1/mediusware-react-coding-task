const ContactList = ({ contact, onClick, index, handleShowDetails}) => {
  return (
    <>
      <tr
        key={index}
        style={{ fontSize: '18px' }}
        onClick={() => handleShowDetails(contact)}
      >
        <th>{contact?.id} </th>
        <td>{contact?.phone} </td>
        <td>{contact?.country?.name} </td>
      </tr>

    </>
  );
};

export default ContactList;
