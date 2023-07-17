import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {

    constructor(props) {
        super(props);

        console.log("Parent Constructor")
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");

        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"Child1 (class)"} location={"Mumbai Class"} />
                <UserClass name={"Child2 (class)"} location={"USA Class"} />
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

/**
 * 
 * Parent Constructor
 * Parent Render
 * 
 *  - Child1 Constructor
 *  - Child1 Render
 * 
 *  - Child2 Constructor
 *  - Child2 Render
 * 
 *  - Child1 ComponentDidMount
 *  - Child2 ComponentDidMount
 * 
 * Parent ComponentDidMount
 * 
 */

export default About;