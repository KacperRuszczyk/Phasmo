import Card from "./Card";
import { Ghost, GhostList } from "./Interfaces";

import './CardContainer.scss'
import TopLogo from "./stores/TopLogo";
import React, {useState} from "react"


export interface CardContainerProps {
    ghosts:Ghost[];
    
}

interface IContext { 
  unHidden: boolean; 
  setUnHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = React.createContext<IContext|undefined>(undefined);



export default function CardContainer(props: CardContainerProps) {
  const [forceOn, setForceOn] = useState(false);
  const [unHidden, setUnHidden] = useState(false);
  
  const value = {unHidden, setUnHidden};
  return (
    <div className="CardContainer">
    
      <Context.Provider value = {value}>
        <TopLogo url = { 'https://www.meme-arsenal.com/memes/a65584195768dd4ee9aeac93ef033de9.jpg'} />
        {props.ghosts.map(ghost => <Card ghost={ghost} forceOn={forceOn}/>)}  
      </Context.Provider>
    </div>
  );
}
