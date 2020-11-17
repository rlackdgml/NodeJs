import React, { Component } from "react";
import Moment from "react-moment";

class Caritem extends Component {
  handleClick = (id) => {
    const { fetchCar } = this.props;
  };

  render() {
    const { index, car, handleUpdate } = this.props;
    return (
      // c_id: 0,

      <tr>
        <td>{index + 1}</td>
        <td>{car.c_sortation}</td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm:ss">{car.c_start}</Moment>
        </td>
        <td>{car.c_end}</td>
        <td
          onClick={() => this.handleClick(car.c_id)}
          style={{ cursor: "pointer" }}
        >
          {car.c_present}
        </td>
        <td>{car.c_cost}</td>
        <td>{car.c_place}</td>
        &times;
      </tr>
    );
  }
}

export default Caritem;
