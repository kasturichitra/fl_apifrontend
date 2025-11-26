import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DocumentNavigationMobile from "./DocumentNavigationMobile";
import { images } from "../utils/constant";
import "../styles/header.css";
import { setPageTitle, setOpenMenu } from "../redux/slice/headerSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { pageTitle, openMenu } = useSelector((state) => state.header);

  const [increaseSearchBar, setIncreaseSearchBar] = useState(false);
  const [displayedRoute, setDisplayedRoute] = useState("Guides");

  const inputRef = useRef(null);
  const hamburgerRef = useRef(null);
  const { pathname } = useLocation();

  /** --- Event Handlers --- */
  const handleClick = (e) => {
    e.stopPropagation();
    setIncreaseSearchBar(true);
    inputRef.current?.focus();
  };

  const openHamburgerMenu = (e) => {
    e.stopPropagation();
    hamburgerRef.current?.classList.add("open");
    dispatch(setOpenMenu(true));
  };

  /** --- Utility --- */
  const getImage = (str) => {
    const map = {
      guides: images?.bookIcon,
      "api reference": images?.oppositeTriangles,
      "release notes": images?.bullHorn,
    };
    return map[str];
  };

  /** --- Effects --- */
  // Detect current route name
  useEffect(() => {
    if (pathname.includes("guides")) {
      setDisplayedRoute("Guides");
      dispatch(setPageTitle("Guides"));
    } else if (pathname.includes("reference")) {
      setDisplayedRoute("API Reference");
      dispatch(setPageTitle("API Reference"));
    } else if (pathname.includes("changelog")) {
      setDisplayedRoute("Release Notes");
      dispatch(setPageTitle("Release Notes"));
    } else {
      setDisplayedRoute("Guides");
      dispatch(setPageTitle("Guides"));
    }
  }, [pathname, dispatch]);

  // Close menus and search on outside click
  useEffect(() => {
    const closeMenus = () => {
      setIncreaseSearchBar(false);
      hamburgerRef.current?.classList.remove("open");
      dispatch(setOpenMenu(false));
    };

    window.addEventListener("click", closeMenus);
    return () => window.removeEventListener("click", closeMenus);
  }, [dispatch]);

  // CTRL+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIncreaseSearchBar(true);
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /** --- JSX --- */
  return (
    <header className="header">
      <div className="header_main">
        {/* --- Desktop Nav --- */}
        <div className="desktop_nav">
          <Link to="/">
            <p className="main_title"><span className="fp">FLOW</span> <span className="sp">PIPE</span></p>
          </Link>
          <button className="header_lg_btn">Log In</button>
        </div>

        {/* --- Tablet Nav --- */}
        <div className="tablet_nav">
          <div className="tablet_nav_main">
            <button className="hamburger_btn" onClick={openHamburgerMenu}>
              <img
                src={images?.hamburgerIcon}
                alt="menu"
                className="hamburger_icon"
              />
            </button>
            <div className="tablet_nav_chg">
              <img
                src={getImage(displayedRoute.toLowerCase())}
                className="invert-100 h-5"
                alt=""
              />
              <span className="text-sm md:text-base text-white">
                {displayedRoute}
              </span>
            </div>
          </div>
        </div>

        {/* --- Desktop Bottom Nav --- */}
        <div className="desktop_nav_btm xs">
          {/* Left Part (mobile) */}
          {displayedRoute !== "Release Notes" && (
            <DocumentNavigationMobile
              pageTitle={pageTitle}
              setOpenMenu={(v) => dispatch(setOpenMenu(v))}
            />
          )}

          {/* Left Part (desktop) */}
          <nav className="desktop_nav_btm_left">
            <ul className="desktop_nav_btm_left_ul">
              <li onClick={() => dispatch(setPageTitle("Guides"))}>
                <Link
                  to="/guides"
                  className={`desk_nav_item ${
                    pathname.includes("guides") ? "active_route" : ""
                  }`}
                >
                  <img
                    src={images?.bookIcon}
                    className="invert-100 h-4"
                    alt=""
                  />
                  <span className="desk_nav_item_text">Guides</span>
                </Link>
              </li>

              <li onClick={() => dispatch(setPageTitle("API Reference"))}>
                <Link
                  to="/reference"
                  className={`desk_nav_item ${
                    pathname.includes("reference") ? "active_route" : ""
                  }`}
                >
                  <img
                    src={images?.oppositeTriangles}
                    className="invert-100 h-4"
                    alt=""
                  />
                  <span className="desk_nav_item_text">API Reference</span>
                </Link>
              </li>

              <li onClick={() => dispatch(setPageTitle("Release Notes"))}>
                <Link
                  to="/changelog"
                  className={`desk_nav_item ${
                    pathname.includes("changelog") ? "active_route" : ""
                  }`}
                >
                  <img
                    src={images?.bullHorn}
                    className="invert-100 h-4"
                    alt=""
                  />
                  <span className="desk_nav_item_text">Release Notes</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* --- Search Field --- */}
          <div className="search_ele">
            <div
              className={`search_field ${
                increaseSearchBar ? "increase_size" : ""
              }`}
              onClick={handleClick}
            >
              <div className="search_icon">
                <img
                  src={images?.searchIcon}
                  alt="search"
                  className="search_icon_img"
                />
              </div>
              <input type="text" placeholder="Search" ref={inputRef} />
              {!increaseSearchBar && <kbd className="ctrl">CTRL-K</kbd>}
            </div>
          </div>
        </div>

        {/* --- Hamburger Menu --- */}
        <div className="hamburger_menu" ref={hamburgerRef}>
          <div className="hamburger_list">
            <ul>
              <li onClick={() => dispatch(setPageTitle("Guides"))}>
                <Link to="/guides" className="hamburger_link">
                  <img src={images?.bookIcon} className="invert-100 h-4" alt="" />
                  <span className="text-white font-semibold">Guides</span>
                </Link>
              </li>

              <li onClick={() => dispatch(setPageTitle("API Reference"))}>
                <Link to="/reference" className="hamburger_link">
                  <img
                    src={images?.oppositeTriangles}
                    className="invert-100 h-4"
                    alt=""
                  />
                  <span className="text-white font-semibold">API Reference</span>
                </Link>
              </li>

              <li onClick={() => dispatch(setPageTitle("Release Notes"))}>
                <Link to="/changelog" className="hamburger_link">
                  <img
                    src={images?.bullHorn}
                    className="invert-100 h-4"
                    alt=""
                  />
                  <span className="text-white font-semibold">
                    Release Notes
                  </span>
                </Link>
              </li>
            </ul>

            <br className="hamburger_breaker" />
            <button className="hamburger_log_in">Log In</button>

            <div className="hamburger_logo">
              <Link to="/">
                <img src={images.logo} alt="logo" className="h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
