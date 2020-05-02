import "./App.css";
import React from "react";
import Previewer from "./Components/Previewer";
import Editor from "./Components/Editor";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // let str = marked("Marked in browser\n\nRendered by **marked**.");
    return (
      <div class="container">
        <div class="row">
          <div classN="col-sm-8">col-sm-8</div>
          <div class="col-sm-4">col-sm-4</div>
        </div>
        <div class="row">
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
        </div>
      </div>
      // <div className="container-fluid">
      //   <div className="row">
      //     <div className="card col-sm ">
      //       <Editor id="editor" />
      //     </div>
      //     <div className="card col-sm">
      //       <Previewer id="preview"></Previewer>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
export default App;
