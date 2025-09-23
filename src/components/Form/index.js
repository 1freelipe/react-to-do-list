import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <div className="inputControl">
        <input onChange={handleChange} type="text" value={novaTarefa} placeholder="" />
        {/* eslint-disable-next-line */}
        <label className="place">Sua Tarefa</label>
        <button type="submit">
          <span><FaPlus /></span>
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
