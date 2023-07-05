import React from "react";
import './ContactForm.css';
class App extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (

      <div className="mani">


        <div className="App">
          <div className="header">

            <h1 className="center"> Home </h1>
          </div> {
            items.map((item) => (

              <div className="Box">
                <div key={item.id}>

                  <p ><b>Name:</b> {item.name}</p>
                  <p ><b>userName:</b> {item.username}</p>
                  <p ><b>Email:</b>   {item.email}</p>


                </div>
              </div>


            ))

          }
        </div>
      </div>


    );
  }
}

export default App;