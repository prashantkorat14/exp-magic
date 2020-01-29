import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllExperiment, startExperiment } from "../../actions";

const ListRow = function(props) {
  let processArr = [];
  if (props.process_a) {
    processArr.push(parseInt(props.process_a, 10));
  }
  if (props.process_b) {
    processArr.push(parseInt(props.process_b, 10));
  }
  if (props.process_c) {
    processArr.push(parseInt(props.process_c, 10));
  }
  if (props.exp_name && processArr) {
    return (
      <li>
        {props.exp_name} <button onClick={() => props.onClick(processArr)}>Run</button>
      </li>
    );
  } else {
    return false;
  }
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { data: props };
  }

  componentDidMount() {
    this.props.getAllExperiment();
  }

  render() {
    const { data } = this.state;
    const { startExperiment } = this.props;

    return (
      <div className="col">
        <h3>Experiments</h3>

        <ul>{data ? Object.keys(data).map(index => <ListRow key={index} {...data[index]} onClick={startExperiment} />) : <li>No data found </li>}</ul>
      </div>
    );
  }
}

// const mapStateToProps = state => ({ experiment: state.experiment });
const mapStateToProps = ({ exp }) => {
  return { ...exp };
};

const mapDispatchToProps = { getAllExperiment, startExperiment };

export default connect(mapStateToProps, mapDispatchToProps)(List);
