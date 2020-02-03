import React, { useState } from "react";
import Moment from "react-moment";

const Header = props => {
  const { darkModeToggle } = props;

  const [dmActive, setDmActive] = useState({
    dmActive: false
  });

  const onChange = () => {
    setDmActive({
      dmActive: !dmActive.dmActive
    });

    darkModeToggle();
  };

  return (
    <div className={"header" + (dmActive.dmActive ? " dm-active" : "")}>
      <div className="wrap header-wrap">
        <div className="logo">
          Budget <span>Tracker</span>
        </div>

        <div className="header__info">
          <div className="header__dark-toggle">
            Dark Mode
            <label className="slider">
              <input
                type="checkbox"
                onChange={onChange}
                // defaultChecked={this.state.checked}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="header__date">
            <Moment format="dddd Do MMMM YYYY">{new Date()}</Moment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
