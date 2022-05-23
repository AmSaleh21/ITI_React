import {Component} from "react";

export default class Display extends Component {
    table = () => {
        return (
            <table className="table table-sm table-hover table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.data.map((listValue, index) => {
                    return (
                        <tr key={index}>
                            <td>{listValue.id}</td>
                            <td>{listValue.name}</td>
                            <td>{listValue.age}</td>
                        </tr>
                        );
                    })
                }
                </tbody>
            </table>
        )
    }

    render() {
        return (this.table())
    }
}
