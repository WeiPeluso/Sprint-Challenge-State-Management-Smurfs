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

  const editSmurfButton = (e) => {
    e.preventDefault();
    setEditToggle(true);
  };
  const smurfEditChange = (e) => {
    e.preventDefault();
    setEditSmurf({
      ...editSmurf,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    axios
      .put(`http://localhost:3333/smurfs/${props.smurf.id}`, editSmurf)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setEditToggle(false);
        props.setRefresh(!props.refresh);
      });
  };
  const cancelEdit = (e) => {
    setEditToggle(false);
  };
  return (
    <section>
      {editToggle ? (
        <>
          <form onSubmit={onSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={editSmurf.name}
              onChange={smurfEditChange}
            />
            <label>Height:</label>
            <input
              type="text"
              name="height"
              value={editSmurf.height}
              onChange={smurfEditChange}
            />
            <label>Age:</label>
            <input
              type="text"
              name="age"
              value={editSmurf.age}
              onChange={smurfEditChange}
            />
            <button type="submit">Submit</button>
            <button onClick={cancelEdit}>Cancel Edit</button>
          </form>
        </>
      ) : (
        <>
          <h3>{props.smurf.name}</h3>
          <p>height: {props.smurf.height}</p>
          <p>age:{props.smurf.age}</p>
          <button onClick={editSmurfButton}>Edit</button>
          <button onClick={deleteSmurf}>Delete</button>
        </>
      )}
    </section>
  );
};

export default Smurfs;
