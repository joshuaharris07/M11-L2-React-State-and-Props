import { Component } from "react";

class Task1 extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        
        this.changeName = this.changeName.bind(this)
    }

    // fixed by changing to setState and properly binding the method above.
    changeName() {
        this.setState({ name: 'Charlie' });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default Task1;