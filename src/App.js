
import './App.css';
import Header from "./component/header/header";
import {Content} from "./component/content/content";
import Footer from "./component/footer/footer";
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
            <Header />
            <Content />
            <Footer />

    </div>
  );
}

export default App;
