import { useEffect, useState } from "react";

const Alert = (props) => {
  const [visible, setVisible] = useState(true);

  // use timeout to remove the Alert after a while
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  }, [props.delay]);

  // add fade in effect on render
  const [opacityClass, setOpacityClass] = useState("opacity-0");
  useEffect(() => {
    setOpacityClass("opacity-100");
  }, []);

  return (
    <>
      {visible && (
        <div
          role="alert"
          className={`alert alert-${props.type} mb-4 transition-opacity ease-in duration-700 ${opacityClass}`}
        >
          {props.type === "success" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          )}

          <span>{props.text}</span>
        </div>
      )}
    </>
  );
};

export default Alert;
