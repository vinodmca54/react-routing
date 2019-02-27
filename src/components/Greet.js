import React from "react";

// function Greet() {
//     return <h1>Hello Koijam</h1>
// }

//const Greet = () => <h1>Hello Koijam</h1>;

const Greet = props => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.ka {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
