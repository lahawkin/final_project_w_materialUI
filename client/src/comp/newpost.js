import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";

class NewPost extends Component {
  state = {
    name: "",
    description: "",
    Price: "",
    ProductImage: ""
  };

  handleClick = () => {
    console.log("Sign Up button clicked!");
    // this.context.location.transitionTo('login');
    //grab the values  in the inputs, save into a variable, create ajax call and pass to back end (post method)
  };

  handleChange = (event, state) => {
    console.log("state inside: ", state);
    this.setState({
      state: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let user = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      ProductImage: this.state.value
    };
    // const user = {
    //   name: this.state.name,
    //   description: this.state.description,
    //   Price: this.state.Price,
    //   ProductImage: this.state.ProductImage
    // };

    const axios = require("axios").default;
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className="App">
        <br></br>
        <Typography component="h1" variant="h5">
          New Product
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="ProductName"
          label="Name"
          name="Product"
          onChange={this.handleChange("name")}
          //autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="description"
          label="Description"
          type="description "
          id="product description"
          onChange={this.handleChange("description")}
          //autoComplete="current-password"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="buyerPrice"
          label="I would pay"
          type="Price"
          id="productPrice"
          //autoComplete="current-password"
          onChange={this.handleChange("Price")}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="ProductImage"
          label="Upload Image"
          name="Image"
          //autoComplete="email"
          autoFocus
          onChange={this.handleChange("ProductImage")}
        />

        <Button
          onClick={this.handleSubmit}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </div>
    );
  }
}

export default NewPost;

// export default class PersonList extends React.Component {
//   state = {
//     name: ""
//   };

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name
//     };

//     axios
//       .post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }
