import "../assets/style/App.css";
import AppRouter from "./../routes/AppRouter";
import { ParallaxProvider } from "react-scroll-parallax";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";
import Loader from "./UI/Loader";

const App = observer(() => {
  const { app } = useContext(Context);
  useEffect(() => {
    app
      .fetchMainPageData()
      .then(() => app.fetchSkills())
      .then(() => app.fetchProjects())
      .then(() => app.fetchAboutMePageData());
  }, []);
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
