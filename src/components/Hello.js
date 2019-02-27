import React from "react";

const Hello = () => {
  //   return (
  //     <div className='dummyClass'>
  //       <h1>Hello Koijam</h1>
  //     </div>
  //   );

  //Without JSX
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Koijam")
  );
};

export default Hello;
