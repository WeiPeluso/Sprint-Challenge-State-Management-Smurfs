import React, { useState, useEffect } from "react";
import "./App.css";
import Smurfs from "./smurfs";
import { fetchSmurfs } from "../actions/smurfActions";
import { connect } from "react-redux";
import axios from "axios";

function App(props) {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    props.fetchSmurfs();
  }, [refresh]);

  const smurfInputChange = (e) => {
    e.preventDefault();
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    axios.post("http://localhost:3333/smurfs", smurf).then((res) => {
      setRefresh(!refresh);
    });
  };

  return (
    <div className="App">
      <h1>SMURFS!!!!!</h1>
      <section className="addSmurf">
        <h2>Add a Smurf</h2>
        <form onSubmit={onSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={smurf.name}
            onChange={smurfInputChange}
          />
          <label>Height:</label>
          <input
            type="text"
            name="height"
            value={smurf.height}
            onChange={smurfInputChange}
          />
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={smurf.age}
            onChange={smurfInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="displaySmurfs">
        {props.smurfs.map((smurf) => {
          return (
            <Smurfs
              key={smurf.id}
              smurf={smurf}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          );
        })}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.SmurfsReducer.smurfs,
    isFetching: state.SmurfsReducer.isFetching,
  };
};
export default connect(mapStateToProps, { fetchSmurfs })(App);
