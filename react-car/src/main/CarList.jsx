import React, { Component } from "react";
import "../css/CarList.css";
import CarItem from "./Caritem";

class CarList extends Component {
  render() {
    const { carList, handleUpdate } = this.props;
    const CarItemList = carList.map((car, index) => (
      <CarItem key={car.id} index={index} car={car} />
    ));
    return (
      <table className="car-list">
        <thead>
          <tr>
            <th>NO</th>
            <th>구분</th>
            <th>시작일시</th>
            <th>종료일시</th>
            <th>현재거리&#127753;</th>
            <th>소요비용</th>
            <th>장소</th>
            <th>&#9851;</th>
          </tr>
        </thead>
        <tbody>{CarItemList}</tbody>
      </table>
    );
  }
}

export default CarList;
