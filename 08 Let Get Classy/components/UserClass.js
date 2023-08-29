import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-container">
        <h1>{this.props.name}</h1>
        <h2>Lahore Pakistan</h2>
        <h3>zeeshan7826@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
