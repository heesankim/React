import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Card(props) {
  return (
    <Col sm>
      <Link to={'/detail/' + props.shoes.id}>
        <img alt="shoe" src={props.shoes.img} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price.toLocaleString() + '원'}</p>
      </Link>
    </Col>
  );
}
