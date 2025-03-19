import {useState} from 'react'

import './App.scss'
import { getGhosts } from './stores/ghost_fetcher';
import CardContainer from './CardContainer';
import BottomContainer from './BottomContainer';
import React from 'react';

interface ICheckBox { 
  selectedItems: string[]; 
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CheckBoxValue = React.createContext<ICheckBox|undefined>(undefined);

export default function App():JSX.Element {
  const ghostList = getGhosts();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const value = {selectedItems, setSelectedItems};
  return (

    <CheckBoxValue.Provider value = {value}>
      <CardContainer ghosts={ghostList.ghosts}/>
      <BottomContainer/>
    </CheckBoxValue.Provider>

  );
}
