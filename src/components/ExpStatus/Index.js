import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.css";

export class Index extends Component {
  state = {
    status: "In Progress",
    step: 1,
    process: "Stirring"
  };

  static getDerivedStateFromProps(props, state) {
    return { step: props.step, process: props.process_name };
  }

  render() {
    const { status, step, process } = this.state;
    return (
      <div className="exp-status">
        <div>Experiment Status</div>
        <div>{status}</div> <br />
        <div>Step: {step}</div>
        <div>process:{process}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
