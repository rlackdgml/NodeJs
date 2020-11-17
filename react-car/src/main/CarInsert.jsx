import React, { Component } from "react";
import "../css/CarInsert.css";

class CarInsert extends Component {
  state = {
    c_start: "",
    c_sortation: "",
    c_end: "",
    c_present: "",
    c_cost: "",
    c_place: "",

    c_id: 0,
  };
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onCreate = (e) => {
    const { onCreate } = this.props;
    onCreate(this.state.car);
  };

  render() {
    const { c_start, c_end, c_present, c_cost, c_place } = this.state;
    return (
      <div className="input-form">
        <input
          name="c_start"
          value={this.state.c_start}
          onChange={this.handleOnChange}
          placeholder="시작일시"
        />
        <input
          name="c_end"
          value={this.state.c_end}
          onChange={this.handleOnChange}
          placeholder="종료일시"
        />
        <input
          name="c_present"
          value={this.state.c_present}
          onChange={this.handleOnChange}
          placeholder="현재거리"
        />
        <input
          name="c_cost"
          value={this.state.c_cost}
          onChange={this.handleOnChange}
          placeholder="소요비용"
        />
        <input
          name="c_place"
          value={this.state.c_place}
          onChange={this.handleOnChange}
          placeholder="장소"
        />
        <button onClick={this.onCreate}>저장&#127760;</button>
      </div>
    );
  }
}

export default CarInsert;
