import PopupMenu from "./PopupMenu";
import "./Header.scss";
import Av1 from "../assets/av1.jpg";

import ArrowLeft from "../assets/arrowLeft.svg";
import {
  SearchNormal1,
  Calendar2,
  Notification,
  MessageQuestion,
  ArrowDown2,
} from "iconsax-react";

const Header = ({ handleSidebar }) => {
  return (
    <header className="header">
      <section className="mobile-menu">
        <div
          className="arrow-left"
          onClick={() => {
            handleSidebar();
          }}
        >
          <img src={ArrowLeft} alt="Arrow Left" />
        </div>
      </section>
      {/* <section className="logo-section">
        <div className="logo">
          <img src={Logo} alt="Project M." />
          Project M.
        </div>
        <div className="arrow-left">
          <img src={ArrowLeft} alt="Arrow Left" />
        </div>
      </section> */}
      <section className="search-section">
        <SearchNormal1 className="search-icon" size="24" color="#787486" />
        <input
          className="input-search"
          placeholder="Search for anything..."
          type="search"
        />
      </section>
      <section className="icons-section">
        <Calendar2 size="24" color="#787486" />
        <MessageQuestion size="24" color="#787486" />
        <span className="notification-badge">
          <Notification size="24" color="#787486" />
        </span>
      </section>

      <PopupMenu
        right={true}
        trigger={
          <section className="cuser-section">
            <div className="user-name-cal">
              <div className="user-name">Anima Agrawal</div>
              <div className="user-location">U.P, India</div>
            </div>
            <img className="avtar" src={Av1} alt="Avtar" />
            <ArrowDown2 className="arrow-down" size="24" color="#292D32" />
          </section>
        }
      />
    </header>
  );
};

export default Header;
