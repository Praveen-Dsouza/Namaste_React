import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Praveen Dsouza (function)"} /> */}
            <UserClass name={"Praveen Dsouza (class)"} location={"Mumbai Class"} />
        </div>
    );
};

export default About;