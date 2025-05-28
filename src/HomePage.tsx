import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Internship from "./components/Internship";
import Education from "./components/Education";

function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="resume-sheet">
        <Header />
        {/* <div className="resume-divider" /> */}
        <Summary />
        {/* <div className="resume-divider" /> */}
        <Skills />
        {/* <div className="resume-divider" /> */}
        <Experience />
        {/* <div className="resume-divider" /> */}
        <Internship />
        {/* <div className="resume-divider" /> */}
        <Education />
      </main>
    </div>
  );
}

export default HomePage;
