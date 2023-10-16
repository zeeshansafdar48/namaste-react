import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location"
      }
    };
  }

  async componentDidMount() {
    console.log("componentDidMount called");
    const data = await fetch("https://api.github.com/users/zeeshansafdar48");
    const json = await data.json();
    this.setState({
      userInfo: json
    });
    this.timer = setInterval(() => {
      console.log("Set Interval Called");
    }, 1000);
    console.log("this ==>", this);
    this.checkThis();
    this.arrowFunction();
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
    clearInterval(this.timer);
    console.log("this ==>", this);
  }

  checkThis() {
    console.log("normal function this ==>", this);
  }

  arrowFunction = () => {
    console.log("Arrow function this ==>", this);
  };

  render() {
    const {
      count,
      userInfo: { name, location }
    } = this.state;
    return (
      <div className="user-container">
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
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
