import React from 'react';
import { useParams } from 'react-router-dom';
import { Btn, NewBtn } from '../style/detail';

/**
 * 컴포넌트의 Lifecycle
 * 컴포넌트가 보이는 순간에 mount된다고 한다.
 * 페이지에 장착되기도 하고(mount)
 * 가끔 업데이트도 되고(update)
 * 필요없으면 제거되고 (unmount)
 */

export function Detail(props) {
  let { id } = useParams();
  let founded = props.shoes.find(function (x) {
    return x.id == id;
  });

  if (!founded) {
    return <div>해당 상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container">
      <Btn bg="orange">버튼1</Btn>
      <Btn bg="blue">버튼2</Btn>
      <NewBtn bg="green">버튼3</NewBtn>

      <div className="row">
        <div className="col-md-6">
          <img alt="shoeImg" src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{founded.title}</h4>
          <p>{founded.content}</p>
          <p>{founded.price.toLocaleString()}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
