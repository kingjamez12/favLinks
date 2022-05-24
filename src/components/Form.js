import React, { Component } from "react";
import "../styles/Forms.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      URL: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      name: "",
      URL: ""
    });
  };

  render() {
    return (
      <form id="forms">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter name of website"
            name="name"
          />
        </div>
        <div>
          <label>URL</label>
          <input
            type="text"
            value={this.state.URL}
            onChange={this.handleChange}
            placeholder="Enter URL of website"
            name="URL"
          />
        </div>
        <button type="submit" onClick={this.onFormSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
