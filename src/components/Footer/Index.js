import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "./Form";
import List from "./List";

import "./style.css";

export class Index extends Component {
  render() {
    return (
      <div className="row">
        <Form />
        <List />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
