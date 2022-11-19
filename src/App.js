import "./App.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BeerList from "./components/Lists/BeerList";
import { ALL_BEERS, MY_BEERS } from "./constants";

const App = () => {
  return (
    <div className="container pb-5">
      <div>
        <Tabs defaultActiveKey={ALL_BEERS.key} id="beer-tab" className="mb-3">
          <Tab eventKey={ALL_BEERS.key} title={ALL_BEERS.value}>
            <BeerList type={ALL_BEERS.key} />
          </Tab>
          <Tab eventKey={MY_BEERS.key} title={MY_BEERS.value}>
            <BeerList type={MY_BEERS.key} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
