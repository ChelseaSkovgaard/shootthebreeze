import React from 'react';
import ReactDOM from 'react-dom';

const SortButtons = ({sortMessagesFunction}) => {

  return (
    <div>
    <button className="btn-sort" onClick={() => sortMessagesFunction()}> Sort ↑ </button>
    <button className="btn-sort" onClick={() => sortMessagesFunction()}> Sort ↓</button>
    </div>

  );
};

module.exports = SortButtons
