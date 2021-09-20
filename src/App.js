

import './App.css';
import  Home  from './components/Home';

import  MyNavbar  from './components/MyNavbar';
import {useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { JobDetail } from './components/JobDetail';
import FavoriteCompanies from './components/FavoriteCompanies';
function App() {
  /* const [searchQuery,setSearchQuery]=useState("")
  const [searchCategory, setSearchCategory] = useState(""); */

  return (
    <div className="App">
     {/* { console.log(searchCategory)} */}
     <Router>
     <MyNavbar /* setSearchQuery={setSearchQuery} setSearchCategory={setSearchCategory} *//>
     <Route path="/" exact render={(routerProps)=><Home {...routerProps} /* searchQuery={searchQuery}   searchCategory={searchCategory} *//>}/>
   <Route path="/jobDetails" component={JobDetail}/>
   <Route path="/favourites" component={FavoriteCompanies}/>
     </Router>
    </div>
  );
}

export default App;
