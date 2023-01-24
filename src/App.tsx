import "./assets/style/App.css";
import AppRouter from "./routes/AppRouter";
import { ParallaxProvider } from "react-scroll-parallax";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { hotjar } from "react-hotjar";
import { useLocation } from "react-router";
import Loader from "./components/UI/Loader";
import { Context } from "./main";

const App = observer(() => {
  const { app } = useContext(Context);
  const { pathname } = useLocation();
  useEffect(() => {
    app
      .fetchMainPageData()
      .then(() => app.fetchSkills())
      .then(() => app.fetchProjects())
      .then(() => app.fetchAboutMePageData())
      .then(() => {
        hotjar.initialize(
          Number(import.meta.env.VITE_HJ_ID),
          Number(import.meta.env.VITE_HJ_SV)
        );
      });
  }, []);

  useEffect(() => {
    if (hotjar.initialized()) {
      hotjar.stateChange(pathname);
    }
  }, [pathname]);
  if (app.loading) {
    return <Loader />;
  }
  return (
    <ParallaxProvider>
      <AppRouter />
    </ParallaxProvider>
  );
});

export default App;
