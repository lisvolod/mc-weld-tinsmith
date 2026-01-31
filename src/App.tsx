import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Team from './pages/About/Team';
import Professions from './pages/About/Professions';
import Facilities from './pages/About/Facilities';
import Qualification from './pages/About/Qualification';
import Subjects from './pages/Students/Subjects';
import Thesis from './pages/Students/Thesis';
import Practice from './pages/Students/Practice';
import Achievements from './pages/Achievements/Achievements';
import Contacts from './pages/Contacts/Contacts';
import './styles/global.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about">
            <Route path="team" element={<Team />} />
            <Route path="professions" element={<Professions />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="qualification" element={<Qualification />} />
          </Route>
          <Route path="students">
            <Route path="subjects" element={<Subjects />} />
            <Route path="thesis" element={<Thesis />} />
            <Route path="practice" element={<Practice />} />
          </Route>
          <Route path="achievements" element={<Achievements />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
