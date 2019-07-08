import React from 'react';

// import { Container } from './styles';

export default function template(props) {
  return (
    <header className="page-header">
        <h2>{props.name}<small>{props.small}</small></h2>
    </header>
  );
}
