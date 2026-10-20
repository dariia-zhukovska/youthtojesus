import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Community from './pages/Community'
import Mission from './pages/Mission'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import ActivityDetail from './pages/ActivityDetail'
import {
  EnglishClubPage,
  EvangelismPage,
  InterchurchEventsPage,
  VolunteeringPage,
} from './pages/InitiativeDetail'
import Church from './pages/Church'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'community', Component: Community },
      { path: 'community/english-club', Component: EnglishClubPage },
      { path: 'community/volunteering', Component: VolunteeringPage },
      { path: 'community/evangelism', Component: EvangelismPage },
      { path: 'community/interchurch-events', Component: InterchurchEventsPage },
      { path: 'community/:activity', Component: ActivityDetail },
      { path: 'mission', Component: Mission },
      { path: 'church', Component: Church },
      { path: 'donate', Component: Donate },
      { path: 'contact', Component: Contact },
    ],
  },
])
