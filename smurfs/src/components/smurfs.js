import React, { useState } from "react";

const Smurfs = (props) => {
  const [editSmurf, setEditSmurf] = useState({
    name: props.smurf.name,
    height: props.smurf.height,
    age: props.smurf.age,
  });
  const [editToggle, setEditToggle] = useState(false);

  return (
    <section>
      <h3>{props.smurf.name}</h3>
      <p>height: {props.smurf.height}</p>
      <p>age:{props.smurf.age}</p>
    </section>
  );
};

export default Smurfs;
