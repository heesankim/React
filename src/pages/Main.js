import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Card } from '../components/Card.js';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export function Main(props) {
  const [sortState, setSortState] = useState('none');

  let sortedShoes = [...props.shoes];
  if (sortState === 'alphabetical') {
    sortedShoes.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortState === 'fromLowPrice') {
    sortedShoes.sort((a, b) => a.price - b.price);
  } else if (sortState === 'fromHighPrice') {
    sortedShoes.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <h4>메인페이지임</h4>
      <div className="main-bg"></div>
      <Button
        style={{ marginRight: 5 }}
        onClick={() => {
          setSortState('alphabetical');
        }}
      >
        이름순
      </Button>
      <Button
        style={{ marginRight: 5 }}
        onClick={() => {
          setSortState('fromLowPrice');
        }}
      >
        가격 낮은순
      </Button>
      <Button
        onClick={() => {
          setSortState('fromHighPrice');
        }}
      >
        가격 높은순
      </Button>

      <Container>
        <Row>
          {sortedShoes.map((shoe, i) => {
            return <Card shoes={shoe} key={i}></Card>;
          })}
        </Row>
      </Container>
    </>
  );
}
