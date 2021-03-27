import './App.css';
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?'
               render={ () => <ProfileContainer /> } />
        <Route path='/dialogs'
               render={ () => <DialogsContainer /> } />
        <Route path='/news' render={ () => <News /> } />
        <Route path='/music' render={ () => <Music /> } />
        <Route path='/users' render={ () => <UsersContainer /> } />
        <Route path='/settings' render={ () => <Settings /> } />
      </div>
    </div>
  );
}

export default App;
