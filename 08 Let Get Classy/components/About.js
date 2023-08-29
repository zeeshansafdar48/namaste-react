import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      {/* <User name={"Zeeshan Safdar from Function"} /> */}
      <UserClass name={"Zeeshan Safdar from Class"} />
    </div>
  );
};

export default About;
