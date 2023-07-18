import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Default Loaction",
        avatar_url: "http://dummy-photo.com",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");

    /*
    const data = await fetch("https://api.github.com/users/Praveen-Dsouza");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
    */

    this.timer = setInterval(() => {
      console.log("Component Did Mount");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // Both count variables does different functions
    if (this.state.count !== prevState.count) {
      // code
    }
    if (this.state.count2 !== prevState.count2) {
      // code
    }
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + "Child Render");

    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src="https://avatars.githubusercontent.com/u/96222453?v=4" />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: dsouzapraveen24</h2>
      </div>
    );
  }
}

/**
 *
 * ------- MOUNTING ---------
 * Constructor (dummy)
 * Render (dummy)
 *     <HTML Dummy>
 * ComponentDidMount
 *   - <API Call>
 *   - <this.setState>
 *
 * ------- UPDATING --------
 *      render (API data)
 *      <HTML (new API data)>
 * ComponentDidUpdate
 *
 * -------------------------
 * ComponentWillUnmount
 *      - Component removed from DOM
 *
 */

export default UserClass;
