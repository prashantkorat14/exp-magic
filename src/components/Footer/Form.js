import React, { Component } from "react";
import { connect } from "react-redux";
import { addExperiment } from "../../actions";
import ProcessDropdown from "./ProcessDropdown";

const emptyFormArr = {
  exp_name: "",
  process_a: "",
  process_b: "",
  process_c: ""
};

export class MainForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...emptyFormArr };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let formData = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ ...formData });
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = this.state;

    if (formData.exp_name === "") {
      alert("Please enter name");
    } else if (formData.process_a === "" && formData.process_b === "" && formData.process_c === "") {
      alert("Please select step process");
    } else {
      this.props.addExperiment(formData);

      this.setState({ ...emptyFormArr });
    }
  }

  render() {
    const { exp_name, process_a, process_b, process_c } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col">
          <h3>Dashboard</h3>
          <input name="exp_name" value={exp_name} placeholder="Experiment name" onChange={this.handleChange} />
        </div>
        <div className="col">
          <h3>Steps</h3>

          <ol>
            <li>
              <ProcessDropdown name="process_a" value={process_a} onChange={this.handleChange} />
            </li>
            <li>
              <ProcessDropdown name="process_b" value={process_b} onChange={this.handleChange} />
            </li>
            <li>
              <ProcessDropdown name="process_c" value={process_c} onChange={this.handleChange} />
            </li>
          </ol>
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { addExperiment };

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
