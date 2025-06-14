import { Ghost , evidence} from './Interfaces';
import './Card.scss'
import { Context } from './CardContainer'
import {CheckBoxValue} from './App'

import renderEvidence from './stores/Evidence';
import renderTalles from './stores/Talles';
import React, { useState, useRef, useLayoutEffect, useContext, useEffect } from "react";
import Speed from './stores/Speed';
import Img from './stores/Img';
import classNames from 'classnames';
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"

interface appProps {
  ghost: Ghost;
  
  forceOn: boolean; 
};

function Card({ghost}: appProps) {
  const [toggle, setToggle] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  const checkBoxValue = useContext(CheckBoxValue);
  if (checkBoxValue === undefined){
    return(null)
  } 
  const {selectedItems: selectedItems} = checkBoxValue;
  const hasCommonValues = selectedItems.every(item => ghost.evidence.includes(item as evidence));

  const context = useContext(Context);
  if (context === undefined){
    return(null)
  } 
  const {unHidden: unHidden} = context;

  const className = classNames({
    card: true,
    hidden: isHidden,
  });
  
  
  const color = useTransform(x, xInput, [
      "rgb(200, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(3, 209, 0)"
  ]);
  const backgroundColor = useTransform(x, xInput, [
    "rgb(147,0,0)",  // Red when dragged to the left
    "rgb(0, 0, 0)",    // Black when centered
    "rgb(0,0,0)"   // Green when dragged to the right
  ]);
  
  useLayoutEffect(() => {
    if (contentRef.current) {
      if (toggle) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;  
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  }, [toggle]);

  const handleCardToggle = (x1: React.MouseEvent) => {
    x1.stopPropagation();
    setToggle((prev) => !prev);
  };

  const handleDragEnd = (xPos: number) =>{
    if (xPos < -50){
      setIsHidden(true);    
    }
  };
  
  useEffect(() => {
    if(hasCommonValues){
      if(unHidden){
        setIsHidden(false);
      }
      if(toggle){
        setToggle(false);
      }
    }
  }, [unHidden]);
  
  useEffect(()=>{
    if (selectedItems.length > 0){
      if(hasCommonValues){
        setIsHidden(false);
        setToggle(false);
      }
      else{
        setIsHidden(true);
      }
    }
    else{
      setIsHidden(false);
    }  
  },[selectedItems])

  return (

      <motion.div className={className}  onClick={handleCardToggle}
                  drag="x"
                  dragConstraints={{left: 0, right: 0}}
                  style={{x,backgroundColor}}
                  onDragEnd={() => handleDragEnd(x.get())}
      >
        
          <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M17,17 L33,33"
              strokeDasharray="0 1"
              style={{pathLength: crossPathA}}
          />
          <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M33,17 L17,33"
              strokeDasharray="0 1"
              style={{pathLength: crossPathB}}
          />
        
        <div id="header" className="header">
          
            <div className='portrait'>
              <Img url={ghost.portrait}/>

            
          </div>
          <div className="information">
            <div className="wrap">
              <div className="name">{ghost.ghost}

              </div>
              <div className="sanity">🧠{ghost.hunt_sanity}</div>
              <div className="los">{ghost.has_los ? '🏃‍♂️' : '🧍‍♂️'}</div>
              <div className="ghost_speed">
                <Speed speed={ghost.min_speed}/>
                {ghost.max_speed ? <Speed speed={ghost.max_speed}/> : ''}
                {ghost.alt_speed ? <Speed speed={ghost.alt_speed}/> : ''}
              </div>
            </div>
            <div className="ghost_evidence">{ghost.evidence.map(evidence => renderEvidence(evidence))}</div>
          </div>
        </div>

        <div className="content" ref={contentRef}>
          <ul>
            {ghost.wiki.tells.map(tell => renderTalles(tell.data))}
          </ul>
        </div>
      </motion.div>


  );
}

export default Card;
