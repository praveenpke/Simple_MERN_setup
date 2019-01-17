import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { defaultCipherList } from "constants";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>Hello World..!</h1>
      </div>
    );
  }
}

export default hot(module)(HelloWorld);
