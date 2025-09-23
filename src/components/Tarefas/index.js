import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './tarefas.css';

export default function Tarefas({
  tarefas, handleDelete, handleEdit, handleKill,
}) {
  return (
    <div>
      <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>
            {tarefa}
            <span>
              <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
              <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
            </span>
          </li>
        ))}
      </ul>
      <span>
        <button onClick={handleKill} type="submit" className="btnKill">Apagar lista</button>
      </span>
    </div>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleKill: PropTypes.func.isRequired,
};
