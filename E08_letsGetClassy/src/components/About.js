import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component {

    constructor(props) {
        super(props);

        // console.log("Parent Constructor")
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent Render");

        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                <User name={"Child1 (class)"} location={"Mumbai Class"} />
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             {/* <User name={"Praveen Dsouza (function)"} /> */}
//             <UserClass name={"Praveen Dsouza (class)"} location={"Mumbai Class"} />
//         </div>
//     );
// };

export default About;