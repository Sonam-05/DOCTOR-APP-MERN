import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from './pages/NotificationPage';
import UsersPage from './pages/admin/UsersPage';
import DoctorsPage from './pages/admin/DoctorsPage';
import DoctorProfile from './pages/doctor/DoctorProfile';
import BookingPage from './pages/doctor/BookingPage';
import UserProfile from './pages/UserProfile';
import HomePage from './pages/HomePage';
import FeedbackPage from './pages/FeedbackPage';
import AllFeedBacks from './pages/AllFeedBacks';

function App() {
  const {loading} = useSelector((state) => state.alerts);
  
  return (
    <div className="App">
      {loading ? <Spinner /> : <Router>
        <Routes>
          <Route exact path='/' element={<PublicRoute><HomePage /></PublicRoute>} />
          <Route exact path='/doctor-list' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route exact path='/apply-doctor' element={<ProtectedRoute><ApplyDoctor /></ProtectedRoute>} />
          <Route exact path='/notification' element={<ProtectedRoute><NotificationPage /></ProtectedRoute>} />
          <Route exact path='/doctor/profile/:id' element={<ProtectedRoute><DoctorProfile /></ProtectedRoute>} />
          <Route exact path='/doctor/book-appointment/:doctorId' element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
          <Route exact path='/admin/users' element={<ProtectedRoute><UsersPage /></ProtectedRoute>} />
          <Route exact path='/profile/:id' element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route exact path='/feedback' element={<ProtectedRoute><FeedbackPage /></ProtectedRoute>} />
          <Route exact path='/admin/doctors' element={<ProtectedRoute><DoctorsPage /></ProtectedRoute>}/>
          <Route exact path='/readAllFeedbacks' element={<PublicRoute><AllFeedBacks /></PublicRoute>}/>
          <Route exact path='/register' element={<PublicRoute><Register /></PublicRoute>} />
          <Route exact path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        </Routes>
      </Router>}
    </div>
  );
}

export default App;
