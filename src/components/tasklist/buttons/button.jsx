import React from 'react';
const buttons = [
  { label: 'Todos', value: 'all' },
  { label: 'Hoje', value: 'today' },
  { label: 'Atrasadas', value: 'late' },
  { label: 'Concluídas', value: 'done' },
];

export const ButtonFilter = ({ filter, setFilter }) => {
  return React.createElement(
    'div',
    { className: 'tasklist-buttons' },
    buttons.map((btn) =>
      React.createElement(
        'button',
        {
          key: btn.value,
          className: `tasklist-button ${filter === btn.value ? 'active' : ''}`,
          onClick: () => setFilter(btn.value),
          'aria-pressed': filter === btn.value,
        },
        btn.label
      )
    )
  );
};
