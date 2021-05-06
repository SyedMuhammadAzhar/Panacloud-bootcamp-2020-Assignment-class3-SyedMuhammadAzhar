
import React, {useState} from 'react';
import './Room.css'
const Room = ()=>{

    let [islet,setlet]=useState(true);
    let [time,settime]=useState(true);
    let [on,setOn]=useState(true);
    let [off,setOff]=useState(true);
    let [temp,setTemp]=useState(22);

    const ToogleLight=()=>{

      setlet(!islet);
      settime(!time);

    }

    return(

        <div className={`room ${islet && on && off? "lit": "dark"}`}>
          <p> The Room is {islet && on? "Lit": "Dark"}</p>
          <p>{time?"Wake up its Morning": "Go to bed Its sleep time"}</p>


          <p>Temperature:{temp}</p>
         
            <br></br>
            <button onClick={ToogleLight}>Toggle Light</button>

            <br></br>

            <button onClick={()=>{
                settime(!time)
                setlet(!islet)

            
            }}>Sleep/Wakeup</button>


            <br></br>

            <button onClick={()=>{
                setOn(true);
                setOff(true);
                
                }}>Turn On</button>
            <button onClick={()=>{
                setOff(false);
                setOn(false);
                }}>Turn Off</button>

                <br></br>

                <button onClick={()=>setTemp(++temp)}>Increase Temp</button>
                <button onClick={()=>setTemp(--temp)}>Decrease Temp</button>


            
        </div>

        

    );
}

export default Room;