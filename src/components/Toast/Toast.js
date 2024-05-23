import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import { ToastContext } from "../ToastProvider";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, message }) {
  const { toasts, setToasts } = React.useContext(ToastContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!toasts?.length) return;

    const newToasts = toasts.filter(
      ({ id: toastId }) => toastId !== e.target.id
    );
    setToasts(newToasts);
  };

  const IconTag = ICONS_BY_VARIANT[variant];

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`${styles.toast} ${styles[variant]}`}
    >
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}</VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </form>
  );
}

export default Toast;
