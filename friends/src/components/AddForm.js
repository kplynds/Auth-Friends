import React from "react";

const AddForm = (props) => {
    return (
    <div className="form">
        <form onSubmit={props.onSubmit}>
          <input
            type="text"
            name="name"
            value={props.values.name}
            onChange={props.onChange}
          />
          <input
            type="number"
            name="age"
            value={props.values.age}
            onChange={props.onChange}
          />
          <input
            type="text"
            name="email"
            value={props.values.email}
            onChange={props.onChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
}

export default AddForm