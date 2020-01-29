import React, { Component } from "react";
import { connect } from "react-redux";

import cauldron_img from "./cauldron.png";
import "./style.css";

export class Cauldron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: props.action,
      ingredients: props.ingredients
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { action: props.action, ingredients: props.ingredients };
  }

  getIngredients() {
    const { ingredients } = this.state;
    return ingredients.map((item, index) => <img key={index} src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.name} />);
  }

  render() {
    const { action } = this.state;
    return (
      <div>
        <div className={`ingredient-items ${action}`}>{this.getIngredients()}</div>

        <div className="cauldron-img-holder">
          <img src={cauldron_img} alt="cauldron" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cauldron);
