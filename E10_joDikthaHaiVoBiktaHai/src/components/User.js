import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        // API Call
        console.log("useEffect");
        const timer = setInterval(() => {
            console.log("Namaste React OP");
          }, 1000);

        /** Function is called when unmounting the component */
        return() => {
            clearInterval(timer);
            console.log("useEffect Return");
        }
    }, [])

    useEffect(() => {
        // API Call
        // console.log("useEffect");
    }, [count2])
    
    return (
        <div className="m-4 p-4 bg-gray-50 rounded-lg">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: Mumbai</h2>
            <h2>Contact: dsouzapraveen24</h2>
        </div>
    )
}

export default User;