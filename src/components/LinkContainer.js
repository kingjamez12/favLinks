import React from "react";
import "../styles/LinkContainer.css";
import Table from "./Table";
import Form from "./Form";

/* TODO - Create state object for storing favLinks */
class LinkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favLinks: []
    };
  }

  handleRemove = (index) => {
    this.setState({
      favLinks: this.state.favLinks.filter(
        (link, curIndex) => curIndex !== index
      )
    });
    this.forceUpdate();
    console.log("Button Pressed");
  };

  handleSubmit = (favLink) => {
    this.state.favLinks.push(favLink);
    this.forceUpdate();
  };

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table
          handleRemove={this.handleRemove}
          linkData={this.state.favLinks}
        />
        <br />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default LinkContainer;
