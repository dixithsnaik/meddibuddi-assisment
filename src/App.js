
import './App.css';
import axios from "axios"
import ActiveBookings from './components/active-bookings/ActiveBookings';
import FeaturedHealthCheckUp from './components/featured-heath-checkup/FeaturedHealthCheckUp';
import FreqentlyAskedQuestions from './components/frequenty-asked-questions/FreqentlyAskedQuestions';
import  { Header } from './components/header/Header';
import LabBookings from './components/lab-bookings/LabBookings';
import HowItWorks from './components/lab-working/LabWorking';
import LabsVisited from './components/labs-visited/LabsVisited';
import { LifeStyleGrid } from './components/life-style-health-check/LifeStyleGrid';
import PregnancyBanner from './components/pregnancy-care-banner/PregnancyCareBanner';
import CardGrid from './components/primary-fetures/CardGrid';
import  SafetyFeatures  from './components/SafetyFeatures/SafetyFeatures';
import { SearchBar } from './components/searchBar/SearchBar';
import UserReview from './components/user-review/UserReview';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">

      {data && 
      <div>
        <Header/>
        <SearchBar/>
        <CardGrid data={data[0].page_config[0]} />
        <PregnancyBanner data={data[0].page_config[1]} />
        <FeaturedHealthCheckUp data={data[0].page_config[2]} />
        <ActiveBookings />
        <LabBookings/>
        <LabsVisited/>
        <UserReview data={data[0].page_config[5]}/>
        <LifeStyleGrid data={data[0].page_config[3]} />
        <HowItWorks/>
        <SafetyFeatures data={data[0].page_config[7]} />
        <FreqentlyAskedQuestions data={data[0].page_config[6]} />
      </div>
    }
    </div>
  );
}

export default App;
