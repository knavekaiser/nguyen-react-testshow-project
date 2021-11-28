import { createPortal } from "react-dom";

export const Modal = ({
  containerClass,
  open,
  children,
  onBackdropClick,
  backdropClass,
  style,
}) => {
  if (!open) return null;
  return createPortal(
    <>
      <div
        className={`modalBackdrop ${backdropClass || ""}`}
        onClick={(e) => {
          e.stopPropagation();
          if (typeof onBackdropClick === "function") {
            onBackdropClick();
          }
        }}
      />
      <div style={{ ...style }} className={`modal ${containerClass || ""}`}>
        {children}
      </div>
    </>,
    document.querySelector("#portal")
  );
};
