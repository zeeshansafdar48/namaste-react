import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-container">
        <h1>{name}</h1>
        <h2>Lahore Pakistan</h2>
        <h3>zeeshan7826@gmail.com</h3>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: count + 1
            });
          }}
        >
          Click Increment{" "}
        </button>
      </div>
    );
  }
}

export default UserClass;
