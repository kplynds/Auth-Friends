import React, {useState} from "react";
import axios from "axios";

export default function Login(props) {
    const [formValues, setFormValues] = useState({
        username: "",
        password: ""
    })


    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", formValues)
            .then(res => {
                console.log(res)
                window.localStorage.setItem('token', res.data.payload)
                props.history.push('/protected')
            })
            .catch(err => {
                console.log(`this is the error: ${err}`)
            })
    }

  return (
    <div className="body">
      <div className="form">
        <form onSubmit={submit}>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            value={formValues.passowrd}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
