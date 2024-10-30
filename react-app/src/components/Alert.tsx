import React, { ReactNode, useState } from "react";
interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-dismissible  alert-primary" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
