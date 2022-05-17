import React, {Component} from 'react';

export class InputTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userNamePlaceHolder: 'Name'
        }
    }

    clear = () => {
        this.setState({userName: ''})
    }

    render() {
        return (
            <div className={'py-5'}>
                    <input placeholder={this.state.userNamePlaceHolder} value={this.state.userName} id="Name" onChange={(Event) => {
                        this.setState(
                            { userName: Event.target.value }
                        )}}/>
                    <p className={'my-2'}> {this.state.userName}  </p>
                <button className={'btn btn-danger mx-2'} onClick={this.clear}>clear</button>
            </div>
        )
    }
}
