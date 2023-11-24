import React from "react";
import ReactDOM from "react-dom";
import "./_modal.scss";

// Modal component to render any necessary component in a popup view using React portal.
export const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className={props.className + " modalPopup"}
      style={{ zIndex: props.zIndex || 500 }}
    >
      {props.ghostClose && (
        <div onClick={props.onBackdropClick} className="modalPopup__close">
          X
        </div>
      )}
      {props.allCentered ? (
        <div className="modalPopup__allCentered">
          <div
            onClick={props.onBackdropClick}
            className={`modalPopup__allCentered__backdrop  ${
              props.withShade && "modalPopup__allCentered__backdrop__shade"
            }`}
          />
          <div className="modalPopup__children">{props.children}</div>
        </div>
      ) : (
        <>
          {" "}
          <div
            onClick={props.onBackdropClick}
            className={`modalPopup__allCentered__backdrop  ${
              props.withShade && "modalPopup__allCentered__backdrop__shade"
            }`}
          />
          <div className="modalPopup__children">{props.children}</div>
        </>
      )}
    </div>,
    document.getElementById(props.modalRoot ?? "modal-portal")
  );
};
