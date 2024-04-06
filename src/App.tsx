import logo from "./assets/noteworthy-white.png";
import NavBar from "./components/NavBar";
import ImgCarousel from "./components/ImgCarousel";
import IG from "./assets/instagram.png";
import FB from "./assets/facebook.png";
import YT from "./assets/youtube.png";

function App() {
  return (
    <>
      <section className="landing">
        <NavBar />

        <div className="landing-title">
          <img id="logo" width="50%" src={logo} />
          <h1>
            NOTEWORTHY<br></br>ACAPELLA
          </h1>
          <h3>est. 2000 @ UC Berkeley</h3>
        </div>
      </section>

      <section id="about-us">
        <h1 className="subheading">ABOUT US</h1>
        <div className="subtext">
          <p>
            We're a lower-voices a cappella group known for our fun performances
            and fresh takes on popular songs! It always feels sunny when we
            perform, and not just because of our golden vests!
          </p>
          <p>
            Since our founding in 2000, we've gone million-view-viral on YouTube
            multiple times, released an album entirely composed of original
            songs, and performed at the 2022 UC Berkeley commencement.
          </p>
        </div>

        <section id="more-about">
          <div className="col">
            <h1 className="subheading">EVENTS</h1>
            <p>
              We organize Welcome Back to A Cappella, Cal's a cappella
              orientation, at the beginning of every semester. Hundreds of
              students turn out to hear 13+ a cappella groups perform. The show
              is always fun, and we hope you'll come!
            </p>
            <ImgCarousel />
          </div>
          <div className="col">
            <h1 className="subheading">FOLLOW US</h1>
            <div id="soc">
              <a
                target="_blank"
                href="https://www.instagram.com/cal_noteworthy/"
              >
                <img className="socmed" src={IG} />
              </a>
              <a target="_blank" href="https://www.facebook.com/Noteworthy">
                <img className="socmed" src={FB} />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA"
              >
                <img className="socmed" src={YT} />
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
