import PropTypes from 'prop-types';
import s from './Phonebook.module.css';
const Filter = ({ value, onChange }) => (
  <div className={s.wrapFilter}>
    <label htmlFor="filter" className={s.find}>
      Find contacts by name
    </label>
    <input id="filter" value={value} onChange={onChange} className={s.input} />
  </div>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
