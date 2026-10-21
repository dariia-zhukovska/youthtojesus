import {
  createBrowserRouter,
  Navigate,
  useLocation,
  type RouteObject,
} from "react-router";

import { LangProvider } from "./LangContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";
import Mission from "./pages/Mission";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import ActivityDetail from "./pages/ActivityDetail";
import Church from "./pages/Church";
import NotFound from "./pages/NotFound";

import {
  EnglishClubPage,
  EvangelismPage,
  InterchurchEventsPage,
  VolunteeringPage,
} from "./pages/InitiativeDetail";

function LanguageLayout() {
  return (
    <LangProvider>
      <Layout />
    </LangProvider>
  );
}

function DefaultLanguageRedirect() {
  const { pathname, search, hash } = useLocation();

  return (
    <Navigate
      to={{
        pathname: `/en${pathname === "/" ? "" : pathname}`,
        search,
        hash,
      }}
      replace
    />
  );
}

function createPages(): RouteObject[] {
  return [
    { index: true, Component: Home },
    { path: "about", Component: About },
    { path: "community", Component: Community },
    {
      path: "community/english-club",
      Component: EnglishClubPage,
    },
    {
      path: "community/volunteering",
      Component: VolunteeringPage,
    },
    {
      path: "community/evangelism",
      Component: EvangelismPage,
    },
    {
      path: "community/interchurch-events",
      Component: InterchurchEventsPage,
    },
    {
      path: "community/:activity",
      Component: ActivityDetail,
    },
    { path: "mission", Component: Mission },
    { path: "church", Component: Church },
    { path: "donate", Component: Donate },
    { path: "contact", Component: Contact },

    // /en/ggff або /uk/ggff потрапляють сюди.
    { path: "*", Component: NotFound },
  ];
}

export const router = createBrowserRouter([
  {
    path: "/en",
    Component: LanguageLayout,
    children: createPages(),
  },
  {
    path: "/uk",
    Component: LanguageLayout,
    children: createPages(),
  },
  {
    path: "*",
    Component: DefaultLanguageRedirect,
  },
]);
