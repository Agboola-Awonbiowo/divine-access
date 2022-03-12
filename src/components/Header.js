import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const [dropDown, setDropDown] = useState(false);

  const [attractions, setAttractions] = useState(false);

  return (
    <div>
      <header>
        <div className="nav_main_container">
          <div className="logo_container">
            <div className="logo_image"></div>
            <div className="church_name">
              <h1>Divine Assembly</h1>
            </div>
          </div>
          <div className="burgermenu_container">
            <span onClick={() => setSidebarIsOpen(true)}>
              <i className="fas fa-bars"></i>
            </span>
          </div>
          <aside className={sidebarIsOpen ? "open" : ""}>
            <div className="navigation">
              <nav>
                <ul>
                  <li
                    onClick={() =>
                      setSidebarIsOpen(false) &
                      setDropDown(false) &
                      setAttractions(false)
                    }
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    onClick={() =>
                      setSidebarIsOpen(false) &
                      setDropDown(false) &
                      setAttractions(false)
                    }
                  >
                    <Link to="/about">About Us</Link>
                  </li>
                  <div className="dropdown">
                    <li className="program">
                      Program & Services{" "}
                      <span>
                        <i className="fa fa-caret-down"></i>
                      </span>
                    </li>
                    <div className="dropdown-content">
                      <div>
                        <Link to="/media">Watch Us Live</Link>
                      </div>
                      <div>
                        <Link to="/housefellowship">House Fellowship</Link>
                      </div>
                      <div>
                        <Link to="/coming">Youth-Live</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-dropdown">
                    <li onClick={() => setDropDown(!dropDown)}>
                      {" "}
                      Program & Services{" "}
                      {dropDown ? (
                        <span>
                          <i className="fa fa-caret-up"></i>
                        </span>
                      ) : (
                        <span>
                          <i className="fa fa-caret-down"></i>
                        </span>
                      )}
                    </li>
                    {dropDown && (
                      <div className="mobile-dropdown-content">
                        <li
                          onClick={() =>
                            setSidebarIsOpen(false) &
                            setDropDown(false) &
                            setAttractions(false)
                          }
                        >
                          <Link to="/media">Watch Us Live</Link>
                        </li>
                        <li
                          onClick={() =>
                            setSidebarIsOpen(false) &
                            setDropDown(false) &
                            setAttractions(false)
                          }
                        >
                          <Link to="/housefellowship">House Fellowship</Link>
                        </li>
                        <li
                          onClick={() =>
                            setSidebarIsOpen(false) &
                            setDropDown(false) &
                            setAttractions(false)
                          }
                        >
                          <Link to="/coming">Youth-Live</Link>
                        </li>
                      </div>
                    )}
                  </div>
                  <li
                    onClick={() =>
                      setSidebarIsOpen(false) &
                      setDropDown(false) &
                      setAttractions(false)
                    }
                  >
                    <Link to="/onlinegiving">Online Giving</Link>
                  </li>
                  <div className="dropdown">
                    <li className="program">
                      Other Attractions{" "}
                      <span>
                        <i className="fa fa-caret-down"></i>
                      </span>
                    </li>
                    <div className="dropdown-content">
                      <div>
                        <Link to="/coming">Pastors Desk</Link>
                      </div>
                      <div>
                        <Link to="/coming">Youth Corner</Link>
                      </div>
                      <div>
                        <Link to="/hymn">Hymn</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-dropdown">
                    <li onClick={() => setAttractions(!attractions)}>
                      Other Attractions{" "}
                      {attractions ? (
                        <span>
                          <i className="fa fa-caret-up"></i>
                        </span>
                      ) : (
                        <span>
                          <i className="fa fa-caret-down"></i>
                        </span>
                      )}
                    </li>
                    {attractions && (
                      <div className="mobile-dropdown-content">
                        <li
                          onClick={() =>
                            setSidebarIsOpen(false) &
                            setAttractions(false) &
                            setDropDown(false)
                          }
                        >
                          <Link to="/coming">Pastors Desk</Link>
                        </li>
                        <li
                          onClick={() =>
                            setSidebarIsOpen(false) &
                            setAttractions(false) &
                            setDropDown(false)
                          }
                        >
                          <Link to="/coming">Youth Corner</Link>
                        </li>
                        <li
                          onClick={() =>
                            setSidebarIsOpen(false) &
                            setAttractions(false) &
                            setDropDown(false)
                          }
                        >
                          <Link to="/hymn">Hymn</Link>
                        </li>
                      </div>
                    )}
                  </div>

                  <li
                    onClick={() =>
                      setSidebarIsOpen(false) &
                      setDropDown(false) &
                      setAttractions(false)
                    }
                  >
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div className="cancel">
                <span
                  onClick={() =>
                    setSidebarIsOpen(false) &
                    setDropDown(false) &
                    setAttractions(false)
                  }
                >
                  <i className="fas fa-times"></i>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </header>
    </div>
  );
}
