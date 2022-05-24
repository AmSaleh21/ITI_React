import {Component} from "react";
import './students.css'
import Display from "./display";

export default class Students extends Component {

    lastId = 0;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            studentsList:  JSON.parse(localStorage.getItem('students') || '[]')
        }
    }

    addStudent = () => {
        if (this.state.name !== '' && this.state.age !== 0) {
            this.state.studentsList.push(
                {
                    id: ++this.lastId,
                    name: this.state.name,
                    age: this.state.age
                }
            );
            this.setState({
                studentsList: this.state.studentsList
            });
            localStorage.setItem('students', JSON.stringify(this.state.studentsList))
        } else {
            alert('name and age fields are required');
        }
    }

    students = () => {
        return (
            <div className={'container form-container'}>
                <main className="form">
                    <p className="h3 mb-3 fw-normal text-center">Add Student</p>
                    <div className="my-2 form-floating">
                        <input type="text" className="form-control" id="name"
                               onChange={(Event) => {
                                   this.setState({name: Event.target.value})
                               }}
                               placeholder="name"/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="my-2 form-floating">
                        <input type="number" className="form-control" id="age"
                               onChange={(Event) => {
                                   this.setState({age: Event.target.value})
                               }}
                               placeholder="age"/>
                        <label htmlFor="age">Age</label>
                    </div>
                    <button className="my-1 w-100 btn btn-lg btn-primary" type="submit"
                            onClick={this.addStudent}>Add
                    </button>
                </main>
                <hr/>
                <p className={'h3 mb-3 fw-normal text-center'}>Students Data table</p>

                <Display data={this.state.studentsList}/>
            </div>
        )
    }

    componentDidMount() {
        this.lastId = this.state.studentsList.length
    }

    render() {
        return (
            this.students()
        )
    }
}
