import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./App.css";

function NewPost() {
  return (
    <div className="App">
      <p>I like fish</p>
      <Typography component="h1" variant="h5">
        New Product
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="ProductName"
        label="Product is"
        name="Product"
        //autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="description"
        label="Product Description"
        type="Product description "
        id="product description"
        //autoComplete="current-password"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="buyerPrice"
        label="I would pay"
        type="Price "
        id="productPrice"
        //autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Save
      </Button>
    </div>
  );
}

export default NewPost;
