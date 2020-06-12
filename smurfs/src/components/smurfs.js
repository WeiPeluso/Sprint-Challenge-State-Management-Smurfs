import React, { useState } from "react";
import axios from "axios";

const Smurfs = (props) => {
  const [editSmurf, setEditSmurf] = useState({
    name: props.smurf.name,
    height: props.smurf.height,
    age: props.smurf.age,
  });
  const [editToggle, setEditToggle] = useState(false);

  const deleteSmurf = (e) => {
    axios
      .delete(`http://localhost:3333/smurfs/${props.smurf.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        props.setRefresh(!props.refresh);
      });
  };

  return (
    <section>
      {editToggle ? (
        <></>
      ) : (
        <>
          <h3>{props.smurf.name}</h3>
          <p>height: {props.smurf.height}</p>
          <p>age:{props.smurf.age}</p>
          <button>Edit</button>
          <button onClick={deleteSmurf}>Delete</button>
        </>
      )}
    </section>
  );
};

export default Smurfs;
