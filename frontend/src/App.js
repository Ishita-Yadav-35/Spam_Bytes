import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import ReportChild from './components/ReportChild'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import VerificationPage from './components/VerificationPage'
import UserDashboard from './features/users/UserDashboard'
// import AllUser from "./features/users/AllUser";
import AllNgo from './features/ngo/AllNgo'
import NgoDashboard from './features/ngo/NgoDashboard'
import Districts from './components/Districts'
import Guidelines from './components/Guildelines'
import AllFoundChild from './features/foundchild/AllFoundChild'
import ComplaintStatusPage from './features/foundchild/ComplaintStatusPage'
import NodalDashboard from './features/nodal/NodalDashboard'
import ChildDetails from './components/ChildDetails'
import ChangePassword from './components/ChangePassword'
import ResetPassword from './components/ResetPassword'
import ForgotPassword from './components/ForgotPassword'
import NodalProfile from './components/NodalProfile'
import PolicyPage from './components/PolicyPage'
import Government from './components/Goverment'

import NCLP from './components/NCLP'
import Acts from './components/Acts'
import Logout from './components/Logout'
import { Toaster } from 'react-hot-toast'
import {
  Box,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material'
import AnimatedRoutes from './components/AnimatedRoutes'
import UserProfile from './components/UserProfile'

function App() {
  const location = useLocation()

  let globalTheme = createTheme({
    palette: {
      primary: {
        main: '#192F4D',
        contrastText: '#E3ECF3',
      },
      secondary: {
        main: '#457B9D',
        // light: '#E3ECF3',
        contrastText: '#E3ECF3',
      },
      text: {
        primary: '#192F4D',
        secondary: '#457B9D',
      },
      success: {
        main: '#F9C80E',
        contrastText: '#E3ECF3',
      },
    },
    typography: {
      fontFamily: 'Bebas Neue',
      h1: {
        letterSpacing: '1.5rem',
        '@media (max-width:600px )': {
          letterSpacing: 0,
        },
      },
      h2: {
        letterSpacing: '1rem',
        fontSize: '70px',
      },
      h3: {
        letterSpacing: '0.7rem',
        fontSize: '60px',
      },
      h6: {
        fontSize: '26px',
        fontFamily: 'Montserrat',
      },
      subtitle1: {
        fontSize: '30px',
        fontFamily: 'Montserrat',
      },
      subtitle2: {
        fontSize: '28px',

        fontFamily: 'Montserrat',
      },
      body1: {
        fontSize: '16px',
        fontFamily: 'Montserrat',
      },
      body2: {
        fontSize: '18px',
        fontFamily: 'Montserrat',
      },
      caption: {
        fontFamily: 'Montserrat',
      },
      overline: {
        fontFamily: 'Montserrat',
      },
      button: {
        fontFamily: 'Montserrat',
      },
    },
  })
  globalTheme = responsiveFontSizes(globalTheme)
  return (
    <ThemeProvider theme={globalTheme}>
      <Box
        sx={{
          width: '100%',
          // display: 'flex',
          // flexDirection: 'column',
        }}
      >
        <Toaster />
        <AnimatedRoutes exitBeforeEnter>
          {/* <Districts /> */}
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reportchild" element={<ReportChild />} />
            <Route path="/verificationpage" element={<VerificationPage />} />
            {/* <Route path="/users" element={<AllUser />} /> */}

            <Route path="IN/" element={<UserDashboard />} />
            {/* <Route path="/NGO/:ngoId" element={<NgoDashboard />} /> */}
            <Route path="/ngo" element={<NgoDashboard />} />
            <Route
              path="/ngo/child/:childId"
              element={<ChildDetails ngo={true} />}
            />
            <Route path="/goverment" element={<Government />} />
            <Route path="/Districts" element={<Districts />} />
            <Route path="/Policy" element={<PolicyPage />} />
            <Route path="/NCLP" element={<NCLP />} />
            <Route path="/Guildlines" element={<Guidelines />} />
            <Route path="/Acts" element={<Acts />} />
            <Route path="/admin" element={<NodalDashboard />} />

            <Route path="/admin/profile" element={<NodalProfile />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/foundchild" element={<AllFoundChild />} />
            <Route path="/complaintstatus" element={<ComplaintStatusPage />} />
            <Route path="/child/:childId" element={<ChildDetails />} />

            <Route path="/changepassword" element={<ChangePassword />} />
            <Route
              path="/passwordReset/:token/:id"
              element={<ResetPassword />}
            />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </AnimatedRoutes>
      </Box>
    </ThemeProvider>
  )
}

export default App
