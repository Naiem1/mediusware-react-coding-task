import Button from './Button';

const FilterAction = ({ show, handleClick }) => {
  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item">
          <Button
            className={`nav-link ${show === 'all' && 'active'}`}
            type="button"
            onClick={() => handleClick('all')}
          >
            All
          </Button>
        </li>
        <li className="nav-item">
          <Button
            className={`nav-link ${show === 'active' && 'active'}`}
            type="button"
            onClick={() => handleClick('active')}
          >
            Active
          </Button>
        </li>
        <li className="nav-item">
          <Button
            className={`nav-link ${show === 'completed' && 'active'}`}
            type="button"
            onClick={() => handleClick('completed')}
          >
            Completed
          </Button>
        </li>
      </ul>
    </>
  );
};

export default FilterAction;
