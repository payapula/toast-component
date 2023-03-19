import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf({ handleDismiss }) {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        const { variant, message, id } = toast;
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} handleDismiss={() => handleDismiss(id)}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
