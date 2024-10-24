import { useEffect, useState } from "react";
import Alert from "./Alert";

const AlertContainer = ({alerts}) => {

//   useEffect(()=>{
//     for(let n=0; n<5; n++){
//         setAlerts([...alerts, <Alert key={n} delay={n*1000} />,<Alert key={n*1000} delay={n*1000} />])
//         console.log(alerts);
//     }
//   },[])

  
  return (
    <div id="messages" className="fixed bottom-0 w-full">
      <div className=" mx-auto max-w-screen-xl">
        {alerts}
      </div>
    </div>
  );
};

export default AlertContainer;
