import React from 'react';
import './ErrorBubble.css';

const ErrorBubble = ({show}) => {
  return (
    <div className={`${show ? 'show ' : ''}error-bubble`}>
      Ошибка
    </div>
  );
};

export default ErrorBubble;
