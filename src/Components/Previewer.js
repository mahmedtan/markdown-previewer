import React, { Component } from "react";
import marked from "marked";

class Previewer extends Component {
  render() {
    return (
      <div
        className="p-3"
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(this.props.onClick),
        }}
      ></div>
    );
  }
}
export default Previewer;
