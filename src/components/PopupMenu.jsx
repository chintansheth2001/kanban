import React from "react";
import "./PopupMenu.scss";
const PopupMenu = ({ trigger, right = false }) => {
  const [open, setOpen] = React.useState(false);
  const btnRef = React.useRef(null);

  React.useEffect(() => {
    const closeDropdown = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, [btnRef]);

  return (
    <div className="dropdown-cover">
      <span
        ref={btnRef}
        className="dropdown-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {trigger}
      </span>
      {open && (
        <div className={`popup-menu ${right ? "right" : ""}`}>
          <div className="pm-item-input">
            <input className="input-text" type="text" placeholder="Text box" />
          </div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="pm-item"
          >
            Lorem ipsum
          </div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="pm-item"
          >
            Sed mattis
          </div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="pm-item"
          >
            Mauris aliquet
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
