import { useState } from "react";
import Slider from "./Slider";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const showMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      <main className="container ">
        <div
          onClick={showMenu}
          className={` ${openMenu ? "overlay" : ""}`}
        ></div>
        {/* Hero Section */}
        <header className="hero">
          {/* [1] Navigation bar */}
          <div className={`nav__mobile ${openMenu ? "show" : "hide"}`}>
            <img onClick={showMenu} src="/icon-close.svg" />
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <nav className="navbar">
            <img
              onClick={showMenu}
              className="burger__icon"
              src="/icon-hamburger.svg"
            />
            <div className="logo__container">
              <img className="logo" src="/logo.svg" alt="logo" />
            </div>
            <ul className="navbar__menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          {/* =============== [Slides] ============== */}
          <Slider />
        </header>
        <section className="about">
          <div className="about__image">
            <img src="/image-about-dark.jpg" />
          </div>
          <div className="about__text">
            <h2 className="about__title"> About our furniture</h2>
            <p className="about__description">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div className="about__image">
            <img src="/image-about-light.jpg" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
