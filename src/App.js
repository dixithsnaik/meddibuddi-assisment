
import './App.css';
import FeaturedHealthCheckUp from './components/featured-heath-checkup/FeaturedHealthCheckUp';
import  { Header } from './components/header/Header';
import PregnancyBanner from './components/pregnancy-care-banner/PregnancyCareBanner';
import CardGrid from './components/primary-fetures/CardGrid';
import { SearchBar } from './components/searchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <CardGrid/>
      <PregnancyBanner/>
      <FeaturedHealthCheckUp/>
    </div>
  );
}

export default App;
