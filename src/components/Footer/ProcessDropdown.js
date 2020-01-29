import React, { Component } from "react";
import data from "../process.json";

export default class ProcessDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ""
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      selected: props.value
    };
  }

  render() {
    const { name, onChange } = this.props;
    const { selected } = this.state;

    return (
      <select name={name} onChange={onChange} value={selected}>
        <option value="">Select Process</option>
        {data.processes.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    );
  }
}
