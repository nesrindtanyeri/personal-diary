import { useEffect, useState } from "react";

const Alert = (props) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    console.log(props.delay)
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  }, [props.delay]);

  return (
    <>
      {visible && (
        <div role="alert" className={`alert alert-${props.type} mb-4`}>
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
          <span>{props.text}</span>
        </div>
      )}
    </>
  );
};

export default Alert;
