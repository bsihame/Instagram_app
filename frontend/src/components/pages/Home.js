import React from "react";
import Login from "../login_signup/Login";
import Footer from "../navbar_footer/Footer";
import { BrowserRouter, Route} from "react-router-dom";

import AboutUs from "../navbar_footer/footerLinks/AboutUs";
import Help from "../navbar_footer/footerLinks/Help"
import Blog from "../navbar_footer/footerLinks/Blog"
import Developer from "../navbar_footer/footerLinks/Developer"
import Jobs from "../navbar_footer/footerLinks/Jobs"
import Privacy from "../navbar_footer/footerLinks/Privacy"
import Term from "../navbar_footer/footerLinks/Term"
import Locations from "../navbar_footer/footerLinks/Locations"
import TopAccounts from "../navbar_footer/footerLinks/TopAccounts"
import HashtagsFooter from "../navbar_footer/footerLinks/HashtagsFooter"
import Language from "../navbar_footer/footerLinks/Language"





export default function Home() {
  return (
    <>
      <div>
      <Login />
      </div>
      <div>
      <BrowserRouter>
          <Footer />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/help" component={Help} />
          <Route path="/blog" component={Blog} />
          <Route path="/developer" component={Developer} />
          <Route path="/about/jobs/" component={Jobs} />
          <Route path="/519522125107875" component={Privacy} />
          <Route path="/581066165581870" component={Term} />
          <Route path="/explore/locations/" component={Locations} />
          <Route path="/directory/profiles/" component={TopAccounts} />
          <Route path="/directory/hashtags/" component={HashtagsFooter} />
          <Route path="/language" component={Language} />
          
      </BrowserRouter>
      </div>
    </>
  )

}