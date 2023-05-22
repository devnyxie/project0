import { useState } from "react";
import { useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { SettingsModal } from "./Settings/SettingsModal";
const MenuModalComponent = (props) => {
  // const [settingsModalShow, setSettingsModalShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  console.log(props);
  return (
    <div
      className="monospace text-center text-white p-1 transform-center center"
      style={{
        height: "100%",
        width: "100%",
        display: props.show ? "block" : "none",
        zIndex: 5,
      }}
    >
      <div
        style={{
          width: "min-content",
          height: "40vh",
          backdropFilter: "blur(5px)",
          position: "relative",
          alignItems: "center",
        }}
        className="widget-menu center flex"
      >
        <div
          style={{
            fontSize: "17px",
            position: "absolute",
            top: "2.5%",
            left: "50%",
            transform: " translateX(-50%)",
          }}
        >
          Menu
        </div>
        <div className="">
          <div className="menu-button">Profile</div>
          <div className="menu-button">Friendlist</div>
          <div onClick={() => setModalShow(true)} className="menu-button">
            Settings
          </div>
          <div
            onClick={() => props.setModalShow(false)}
            className="menu-button"
          >
            Continue
          </div>
        </div>
        <div
          className="p-2"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            display: "flex",
            alignItems: "start",
          }}
        >
          <BiLogOut size={25} className="logout-button" />
        </div>
      </div>
      <SettingsModal show={modalShow} setModalShow={setModalShow} />
    </div>
  );
};
export const Menu = () => {
  const opacity = useSelector((state) => state.style_data.widgets_opacity);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div
        className="monospace widget text-center text-white p-1"
        onClick={() => setModalShow(true)}
        style={{
          height: "max-content",
          width: "300px",
          right: "50px",
          top: "0",
          opacity: opacity,
        }}
      >
        <span className="widget-text">Menu</span>
      </div>
      <MenuModalComponent show={modalShow} setModalShow={setModalShow} />
    </>
  );
};
