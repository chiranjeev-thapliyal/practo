import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Banner from './components/Main/Banner/Banner';
import CardsWrapper from './components/Main/Cards/CardsWrapper';
import DownloadWrapper from './components/Main/Download/DownloadWrapper';
import Footerwrapper from './components/Footer/Footerwrapper';
import FindDoctors from './components/FindDoctors/FindDoctors';

import Consultdoctor from './components/Main/Consultdoctor/Consultdoctor';
import Navbarwrapper from './components/Navbar/Navbarwrapper';
import Searchbar from './components/SearchBar/Searchbar';
import Slider from './components/Slider/Slider';
import SearchWrapper from './components/SearchResults/SearchWrapper';

function App() {
	return (
		<div className='App'>
			<Navbarwrapper />
			<Switch>
				<Route exact path='/'>
					<Main>
						<Searchbar />
						<Banner bannerImg='https://www.practostatic.com/consumer-home/desktop/images/1597423628/practo_care_dweb_banner.png' />
						<CardsWrapper />
						<Consultdoctor />
						<Slider />
						<DownloadWrapper />
					</Main>
				</Route>
				<Route exact path='/doctors'>
					<FindDoctors />
				</Route>
				<Route path='/search'>
					<SearchWrapper />
				</Route>
			</Switch>
			<Footerwrapper />
		</div>
	);
}

export default App;
