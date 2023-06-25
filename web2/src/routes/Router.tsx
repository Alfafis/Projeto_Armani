import { Routes, Route } from 'react-router-dom';
// import { routes } from '../constants/routes';

import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Login from '../pages/login';
import Modality from '../pages/modality';
import Schedule from '../pages/schedule';
import Student from '../pages/student';
import NotFound from '../pages/NotFound';

const Router = () => (
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route exact path={'/About'} element={<About />} />
    <Route exact path={'/Contact'} element={<Contact />} />
    <Route exact path={'/Login'} element={<Login />} />
    <Route exact path={'/Modality'} element={<Modality />} />
    <Route exact path={'/Schedule'} element={<Schedule />} />
    <Route exact path={'/Student'} element={<Student />} />
    <Route exact path={'*'} element={<NotFound />} />
  </Routes>
);

export default Router;
