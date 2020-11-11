import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddForm from "./AddForm";
import axios from "axios";

const baseUrl = "http://localhost:5000";

export default function Protected(props) {
  const [friends, setFriends] = useState([]);
  const [addFormValues, setAddFormValues] = useState({
    name: "",
    age: 0,
    email: "",
  });
  const handleChange = (e) => {
    setAddFormValues({
      ...addFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const getData = () => {
    axiosWithAuth()
      .get(`${baseUrl}/api/friends`)
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      });
  };

  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", addFormValues)
      .then((res) => {
        getData();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
          </div>
        );
      })}
      <AddForm
        onSubmit={submit}
        values={addFormValues}
        onChange={handleChange}
      />
    </div>
  );
}
