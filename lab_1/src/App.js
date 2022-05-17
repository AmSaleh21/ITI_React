import './App.css';
import {InputTest} from "./components/InputTest/InputTest";
import {SlideShow} from "./components/SlideShow/SlideShow";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className={'App container'}>
        <InputTest/>
        <SlideShow/>
      </div>
  )
}

export default App;
