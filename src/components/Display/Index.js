import React, { Component } from "react";
import { connect } from "react-redux";

import Cauldron from "../Cauldron/Index";
import ExpStatus from "../ExpStatus/Index";
import ExpResult from "../ExpResult/Index";

import { startExperiment, resetExperiment } from "../../actions/index";

import "./style.css";

export class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step_number: 0,
      action: "",
      ingredients: [],
      process_name: "",
      success: false
    };
    this.manageSteps = this.manageSteps.bind(this);
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps", props, state);

  //   return { steps: props.steps };
  // }

  async manageSteps(steps, allowToNew) {
    console.log("manageSteps", steps);

    if (steps && allowToNew === false) {
      for (let i = 0; i < steps.length; i++) {
        let step = steps[i];
        this.setState({ action: step.action, ingredients: step.ingredients, step_number: i + 1, process_name: step.name });
        await this.timer(step.duration * 1000);
      }
      this.props.resetExperiment();
      this.setState({ action: "", ingredients: [], step_number: 0, process_name: "", success: true });
    }
  }

  timer(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.manageSteps(props.steps, props.allowToNew);
  }

  //  startExperiment;

  render() {
    const { action, ingredients, step_number, process_name, success } = this.state;

    return (
      <div className="display-area">
        {action && ingredients && step_number > 0 ? (
          <React.Fragment>
            <ExpStatus step={step_number} process_name={process_name} />
            <Cauldron action={action} ingredients={ingredients} />
          </React.Fragment>
        ) : success ? (
          <ExpResult />
        ) : (
          <h2>Please create and run any experiment steps</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ operation }) => ({ ...operation });

const mapDispatchToProps = { startExperiment, resetExperiment };

export default connect(mapStateToProps, mapDispatchToProps)(Display);
