
import './App.css';
import ActiveBookings from './components/active-bookings/ActiveBookings';
import FeaturedHealthCheckUp from './components/featured-heath-checkup/FeaturedHealthCheckUp';
import FreqentlyAskedQuestions from './components/frequenty-asked-questions/FreqentlyAskedQuestions';
import  { Header } from './components/header/Header';
import LabBookings from './components/lab-bookings/LabBookings';
import HowItWorks from './components/lab-working/LabWorking';
import { LifeStyleGrid } from './components/life-style-health-check/LifeStyleGrid';
import PregnancyBanner from './components/pregnancy-care-banner/PregnancyCareBanner';
import CardGrid from './components/primary-fetures/CardGrid';
import  SafetyFeatures  from './components/SafetyFeatures/SafetyFeatures';
import { SearchBar } from './components/searchBar/SearchBar';
import UserReview from './components/user-review/UserReview';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <CardGrid/>
      <PregnancyBanner/>
      <FeaturedHealthCheckUp/>
      <ActiveBookings/>
      <LabBookings/>
      <UserReview/> {/*css not applied*/}
      <LifeStyleGrid/>
      <HowItWorks/>
      <SafetyFeatures/>
      <FreqentlyAskedQuestions/>
    </div>
  );
}

export default App;
