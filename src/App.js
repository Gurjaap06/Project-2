import React, { useState } from "react";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";
import MarketplacePage from "./MarketplacePage";
import FriendsPage from "./FriendsPage";
import WatchPage from "./WatchPage";

function App() {
  const [page, setPage] = useState("landing");
  const handleNavigate = (target) => setPage(target);

  const pages = {
    landing: <LandingPage onNavigate={handleNavigate} />,
    login: <LoginPage onNavigate={handleNavigate} />,
    signup: <SignupPage onNavigate={handleNavigate} />,
    home: <HomePage onNavigate={handleNavigate} />,
    marketplace: <MarketplacePage onNavigate={handleNavigate} />,
    friends: <FriendsPage onNavigate={handleNavigate} />,
    watch: <WatchPage onNavigate={handleNavigate} />,
  };

  return pages[page] || pages.landing;
}

export default App;
