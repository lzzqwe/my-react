import React, { useState } from "react";

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please Sign up</h1>;
}

const ConditionsRender = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <div>
        {isLoggedIn ? (
          <UserGreeting></UserGreeting>
        ) : (
          <GuestGreeting></GuestGreeting>
        )}
      </div>
      <button onClick={() => {
        setIsLoggedIn(!isLoggedIn)
      }}>{isLoggedIn?'退出':"登录"}</button>
    </div>
  );
};
export default ConditionsRender;
