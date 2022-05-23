import {Component} from "react";

export default class About extends Component {

    about = () => {
       return(
           <div className={'container'}>
               <div className={'d-flex align-items-center justify-content-center vh-100 text-center'}>
                   <main className="px-3">
                       <h1>About us</h1>
                       <p className="lead">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum nunc,
                           rhoncus quis euismod nec, dictum eget arcu. Sed efficitur justo quis ante tincidunt, et euismod
                           risus porta. Donec efficitur nibh nec tellus placerat, vitae blandit ex auctor. Fusce et iaculis
                           velit. Proin vel nisl id urna porttitor rhoncus ut convallis justo. Aliquam accumsan non justo
                           ac rhoncus. Mauris ac enim libero. Nam feugiat pharetra metus, id convallis libero. In commodo
                       </p>
                       <button className={'btn btn-lg btn-secondary fw-bold border-white'}>Learn more</button>
                   </main>
               </div>
           </div>
       )
    }

    render() {
        return (
            this.about()
        )
    }
}
