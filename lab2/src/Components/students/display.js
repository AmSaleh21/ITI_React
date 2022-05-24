import {Component} from "react";

export default class Display extends Component {

    deleteStudent = (index) => {
        this.props.data.splice(index, 1)
        this.props.onDelete(this.props.data)
    }

    table = () => {
        return (
            <table className="table table-sm table-hover table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">options</th>
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
                            <td>
                                <button className={'btn btn-danger btn-sm'}
                                        onClick={()=> this.deleteStudent(index)}>delete</button>
                            </td>
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
