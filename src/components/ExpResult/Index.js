import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.css";

export class Index extends Component {
  state = {
    result: "Success!",
    isVisible: true
  };

  render() {
    const { result, isVisible } = this.state;
    return (
      isVisible && (
        <div className="exp-result">
          <div>Experiment Result</div>
          <div>{result}</div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
