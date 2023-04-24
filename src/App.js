import './App.css';
import { HabitTracker } from './components/HabitTracker';
import { Playlist } from './components/Playlist';
import { Products } from './components/Products';
import { Profile } from './components/Profile';
import { ProfileFollowers } from './components/ProfileFollowers';
import { Projects } from './components/Projects';
import { SocialMedia } from './components/SocialMedia';
import { ToDo } from './components/ToDo';
import { UnArchived } from './components/UnArchived';
import { Video } from './components/Video';

function App() {
  return (
    <div className="App">
      <Products />
      <ToDo />
      <HabitTracker />
      <Playlist />
      <SocialMedia />
      <UnArchived />
      <Projects />
      <Profile />
      <Video />
      <ProfileFollowers />
    </div>
  );
}

export default App;
