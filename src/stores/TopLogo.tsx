import {useContext} from 'react'
import { Context } from '../CardContainer'


export default function TopLogo({url}: {url: string}){
  const context = useContext(Context);
  if (context === undefined){
    return(null)
  } 
  const {setUnHidden} = context;

  const delay = async (ms: number) => {
    return new Promise((resolve) => 
        setTimeout(resolve, ms));
  };

  const handleClick = async () => {
    setUnHidden(false);
    await delay(100);
    setUnHidden(true);
  };

  return(
    <div> 
      <img src={url} onClick={handleClick} className="logo"/>
    </div>
  )
}