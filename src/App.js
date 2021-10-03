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
import SearchbarWrapper from './components/SearchBar/SearchbarWrapper';
import SearchWrapper from './components/SearchResults/SearchWrapper';
import Searchbar from './components/SearchBar/Searchbar';
import ConsultPage from './components/ConsultPage/ConsultPage';
import Flow2ConsultPage from './components/Flow2Consult/Flow2ConsultPage';
import Payment from './components/Payment/Payment';
import Videoconsult from './components/Videoconsult/Videoconsult';
import Appointment from './components/Main/Appointment/Appointment';

function App() {
	return (
		<div className='App'>
			<Navbarwrapper />
			<Switch>
				<Route exact path='/'>
					<Main>
						<SearchbarWrapper>
							<Searchbar />
						</SearchbarWrapper>
						<Banner bannerImg='https://www.practostatic.com/consumer-home/desktop/images/1597423628/practo_care_dweb_banner.png' />
						<CardsWrapper />
						<Consultdoctor />
						<Appointment />
						<DownloadWrapper />
					</Main>
				</Route>
				<Route exact path='/doctors'>
					<FindDoctors />
				</Route>
				<Route exact path='/consultpage'>
					<ConsultPage />
				</Route>
				<Route exact path='/consult-doctor'>
					<Flow2ConsultPage />
				</Route>
				<Route path='/video-consult'>
					<Videoconsult />
				</Route>
				<Route path='/search'>
					<div className='bg-white'>
						<SearchbarWrapper>
							<Searchbar />
						</SearchbarWrapper>
						<SearchWrapper />
					</div>
				</Route>
				<Route path='/payment'>
					<Payment />
				</Route>
			</Switch>
			<Footerwrapper />
		</div>
	);
}
export default App;
