import Button from './Button';
import Input from './Input';
import InputGroup from './InputGroup';

const Form = ({ inputValue, onChange, setTodosHandler, message }) => {
  console.log(message);
  return (
    <form
      className="row gy-2 align-items-center mb-4"
      onSubmit={setTodosHandler}
    >
      {message ? (
        <small
          className="fst-italic d-flex justify-content-center text-danger"
          style={{ fontSize: '12px' }}
        >
          status must be any of Active, Pending, Completed
        </small>
      ) : null}
      <InputGroup className="col-xs-12   col-lg-5">
        <Input
          type="text"
          className={` ${
            message ? ' form-control is-invalid' : 'form-control'
          }`}
          placeholder="Name"
          name="name"
          value={inputValue?.name}
          onChange={onChange}
          required
        />
      </InputGroup>
      <InputGroup className="col-xs-12 col-lg-4 ">
        <Input
          type="text"
          className={` ${
            message ? ' form-control is-invalid' : 'form-control'
          }`}
          placeholder="Status"
          name="status"
          value={inputValue?.status}
          onChange={onChange}
          required
        />
      </InputGroup>
      <div className=" col-12 col-lg-auto d-flex justify-content-end">
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
