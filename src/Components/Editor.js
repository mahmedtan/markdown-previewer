import React, { Component } from "react";

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "",
    };
  }
  render() {
    return (
      <div>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ducimus voluptatibus quos reiciendis sapiente consectetur aliquam
          minima placeat cupiditate velit. Libero quas doloribus similique atque
          voluptates omnis officiis esse neque voluptatem autem aliquid sit
          sequi vero accusantium ab, ullam quia nostrum maxime? Iste autem fuga
          officia totam obcaecati eligendi in.
        </h1>
      </div>
    );
  }
}
export default Editor;
