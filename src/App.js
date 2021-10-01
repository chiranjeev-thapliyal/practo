import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Banner from "./components/Main/Banner/Banner";
import CardsWrapper from "./components/Main/Cards/CardsWrapper";
import DownloadWrapper from "./components/Main/Download/DownloadWrapper";
import Footerwrapper from "./components/Footer/Footerwrapper";
import FindDoctors from "./components/FindDoctors/FindDoctors";

import Consultdoctor from "./components/Main/Consultdoctor/Consultdoctor";
import Navbarwrapper from "./components/Navbar/Navbarwrapper";
import SearchbarWrapper from "./components/SearchBar/SearchbarWrapper";
import Slider from "./components/Slider/Slider";
import SearchWrapper from "./components/SearchResults/SearchWrapper";
import Searchbar from "./components/SearchBar/Searchbar";
// import ConsultPage from "./components/ConsultPage/ConsultPage";

function App() {
  return (
    <div className="App">
      <Navbarwrapper />
      <Switch>
        <Route exact path="/">
          <Main>
            <SearchbarWrapper>
              <Searchbar />
            </SearchbarWrapper>
            <Banner bannerImg="https://www.practostatic.com/consumer-home/desktop/images/1597423628/practo_care_dweb_banner.png" />
            <CardsWrapper />
            <Consultdoctor />
            <Slider />
            <DownloadWrapper />
          </Main>
        </Route>
        <Route exact path="/doctors">
          <FindDoctors />
          {/* <ConsultPage /> */}
        </Route>
        <Route path="/search">
          <SearchbarWrapper>
            <Searchbar />
          </SearchbarWrapper>
          <SearchWrapper />
        </Route>
      </Switch>
      <Footerwrapper />
    </div>
  );
}
export default App;
