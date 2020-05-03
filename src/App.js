import "./App.css";
import React from "react";
import Previewer from "./Components/Previewer";
import Editor from "./Components/Editor";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }
  handleChange = (markdown) => {
    this.setState({
      markdown,
    });
    console.log(this.state.markdown);
  };

  render() {
    return (
      <div className="container-fluid fill-viewport">
        <p className="title h1 text-responsive text-center">
          Markdown Previewer
        </p>
        <div className="row p-3 h-100 no-gutters">
          <div className="card col-sm m-1 ">
            <h4 className="card-header ">Editor</h4>
            <Editor handleChange={this.handleChange} />
          </div>
          <div className="card col-sm m-1 ">
            <h4 className="card-header ">Previewer</h4>
            <Previewer onClick={this.state.markdown}></Previewer>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
