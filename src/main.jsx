
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes,Route } from 'react-router'
import Home from './pages/home/Home.jsx'
import Layout from './layout/Layout.jsx'
import SignIn from './pages/auth/sign-in/SignIn.jsx'
import SignUp from './pages/auth/sign-up/SignUp.jsx'
import Event from "./pages/events/event.jsx";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="event" element={<Event />} />
        <Route path="auth">
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Layout>
  </BrowserRouter>
)
