import React, { useState } from 'react';
import FilterAction from './problem-one/FilterAction';
import Form from './problem-one/Form';
import Table from './problem-one/Table';

const INITIAL_STATE = {
  name: '',
  status: '',
};

const Problem1 = () => {
  const [show, setShow] = useState('all');
  const [inputValue, setInputValue] = useState({ ...INITIAL_STATE });
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(false);

  const handleClick = (val) => {
    setShow(val);
  };

  const changeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  let id = todos.length;
  const setTodosHandler = (e) => {
    e.preventDefault();

    if (
      (inputValue.name && inputValue.status.toLocaleLowerCase() === 'active') ||
      inputValue.status.toLocaleLowerCase() === 'pending' ||
      inputValue.status.toLocaleLowerCase() === 'completed'
    ) {
      setTodos([...todos, { ...inputValue, id: id++ }]);
      setMessage(false);

      return;
    }

    setMessage(true);
  };

    
  const sortedTodos = () => {
    let sorted = [];

    if (show === 'all') {
      return (sorted = todos.sort((a, b) => {
        return a['status'].toString().localeCompare(b['status'].toString());
      }));
    }
    return (sorted = todos.filter((todo) => todo.status === show));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-8">
          <Form
            onChange={changeHandler}
            setTodosHandler={setTodosHandler}
            message={message}
          />
        </div>
        <div className="col-8">
          {/* Filter Action */}
          <FilterAction show={show} handleClick={handleClick} />
          <div className="tab-content"></div>

          {/* Table */}
          <Table todos={sortedTodos()} />
        </div>
      </div>
    </div>
  );
};

export default Problem1;