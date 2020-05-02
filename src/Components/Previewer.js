import React, { Component } from "react";
import marked from "marked";
class Previewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "",
    };
  }

  render() {
    return (
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab unde
        doloremque quo exercitationem, dolor repellendus explicabo nam sapiente
        fugiat ea voluptatibus suscipit earum nobis voluptate totam eaque quia
        iusto. Ea tempore repudiandae ad dolorum aut itaque aperiam doloribus
        harum. Ea deleniti reprehenderit quis id ut eaque a illo adipisci?
      </div>
    );
  }
}
export default Previewer;
