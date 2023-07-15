import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 1
        }
    }

    render() {
        const { name, location } = this.props
        const { count, count2 } = this.state

        return (
            <div className="user-card">
                <h1>Count = {count}</h1>
                <h1>Count2 = {count2}</h1>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: dsouzapraveen24</h2>
            </div>
        )
    }
}

export default UserClass;