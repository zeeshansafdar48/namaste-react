import { useEffect, useState } from "react";

const User = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "Dummy Name",
    location: "Dummy Locations"
  });

  useEffect(() => {
    fetchData();
    return () => {
      console.log("from return use Effect 1");
    };
  }, []);

  useEffect(() => {
    // fetchData();
    return () => {
      console.log("from return use Effect 2");
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/zeeshansafdar48");
    const json = await data.json();
    setUserInfo(json);
  };
  const { name, location } = userInfo;
  return (
    <div className="user-container">
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h3>zeeshan7826@gmail.com</h3>
    </div>
  );
};

export default User;
