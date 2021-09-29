import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Banner from "./components/Main/Banner/Banner";
import CardsWrapper from "./components/Main/Cards/CardsWrapper";
import DownloadWrapper from "./components/Main/Download/DownloadWrapper";
import Footerwrapper from "./components/Footer/Footerwrapper";
import FindDoctors from "./components/FindDoctors/FindDoctors";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main>
            <Banner bannerImg="https://www.practostatic.com/consumer-home/desktop/images/1597423628/practo_care_dweb_banner.png" />
            <CardsWrapper />
            <DownloadWrapper />
          </Main>
        </Route>
        <Route exact path="/doctors">
          <FindDoctors />
        </Route>
      </Switch>
      <Footerwrapper />
    </div>
  );
}

export default App;
