import React, { Component } from "react";
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class CarMain extends Component {
  id = 3;
  timer = "";
  state = {
    state1: "",
    state2: "",

    isFetch: false,
    carList: [
      {
        id: 0,
        c_sortation: "연료",
        c_start: "2020-11-17",
        c_end: "2020-11-17",
        c_present: "200km",
        c_cost: "5000원",
        c_place: "화순군",
      },
      {
        id: 1,
        c_sortation: "연료",
        c_start: "2020-11-17",
        c_end: "2020-11-17",
        c_present: "300km",
        c_cost: "5000원",
        c_place: "광주광역시",
      },
      {
        id: 2,
        c_sortation: "연료",
        c_start: "2020-11-17",
        c_end: "2020-11-17",
        c_present: "400km",
        c_cost: "5000원",
        c_place: "여서도",
      },
    ],
    carData: {
      c_id: 0,
      c_sortation: "",
      c_start: "",
      c_end: "",
      c_present: "",
      c_cost: "",
      c_place: "",
    },
  };

  onToggle = (id) => {
    const { carList } = this.state;
    const commpcarList = carList.map((car) => {
      if (car.id === Number(id)) return { ...car, isComplete: !car.isComplete };
      else return car;
    });
    this.setState({ carList: commpcarList });
  };

  onCreate = (car) => {
    console.log(car);
    const newcarList = [
      ...this.state.carList,
      { id: this.id++, text: car, isComplete: false },
    ];
    this.setState({ carList: newcarList });
  };

  componentWillUnmount() {
    this.timer = null;
  }

  render() {
    const { carList, state1, state2, state3, state4 } = this.state;
    return (
      <div>
        <CarInsert carData={this.state.carData} onCreate={this.onCreate} />
        <CarList
          carList={this.state.carList}
          state1={state1}
          state2={state2}
          onToggle={this.onToggle}
        />
      </div>
    );
  }
}

export default CarMain;
