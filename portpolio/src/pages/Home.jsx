import "../styles/Home.scss";
import Navigator from "../components/Navigator";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
export default function Home() {
  return (
    <>
      <Navigator></Navigator>
      <Introduction />
      <AboutMe />
    </>
  );
}
