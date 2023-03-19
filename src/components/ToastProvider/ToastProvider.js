import React from "react";

export const ToastContext = React.createContext();

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    function handleKeyDown(e) {
      console.log(e);
      if (e.code === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
};

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => setToasts([]));

  function addToast(message, variant) {
    setToasts((toasts) => [
      ...toasts,
      { id: crypto.randomUUID(), message, variant },
    ]);
  }

  function removeToast(toastId) {
    const nextToasts = toasts.filter((toast) => toast.id !== toastId);
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
