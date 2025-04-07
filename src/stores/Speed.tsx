import { useState, useRef } from 'react';



function Speed({speed}: {speed: number}){
    
    const [intervalId, setIntervalId] = useState<number | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const delay = async (ms: number) => {
      return new Promise((resolve) => 
          setTimeout(resolve, ms));
    };

    async function toggleSound(e: React.MouseEvent){
      e.stopPropagation();
      
      if (intervalId){
        clearInterval(intervalId!);
        setIntervalId(null);
      }
      else{
        if (!audioRef.current) {
          audioRef.current = new Audio("https://zero-network.net/phasmophobia/static/assets/footstep.mp3");
        }
    
      
        const newIntervalId = window.setInterval(() => {
            if (audioRef.current) {
              
              const newAudio = audioRef.current.cloneNode(true) as HTMLAudioElement; // Clone if you want overlapping sounds
              newAudio.play();
            }
          }, 890 / speed );
          setIntervalId(newIntervalId);
          await delay(5000);
          clearInterval(newIntervalId);
          setIntervalId(null);
      };
      
    };

  

    return(
      
        
        <div className={"speed"} onClick={toggleSound}>{speed} {intervalId ? '🔊' : '🔇'}</div>
        
      
    )
  }

  export default Speed;