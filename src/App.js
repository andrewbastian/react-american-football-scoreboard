//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import { render } from "react-dom";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

const [countHome, homeUpdate] = useState(0);
const [countAway, awayUpdate] = useState(0);
const [yardCount, gains] = useState(0);
const [downCount, downUpdate ] = useState(0);
useEffect(()=>{
  function handleSatusChange(status){
    downUpdate(status.downCount)
  }
})
if(downCount === 4){
  console.log(downCount - 4)
}
return downCount

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{countHome}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{countAway}</div>
          </div>
        </div>
        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">{downCount}</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">7</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">{yardCount}</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">4</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {()=> homeUpdate(countHome + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {()=> homeUpdate(countHome + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {()=> awayUpdate(countAway + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {()=> awayUpdate(countAway + 3)}>Away Field Goal</button>
        </div>
        <div className = "bottomBTNs">
<button className="awayButtons__fieldGoal" onClick = {()=> downUpdate(downCount + 1 )}>Down</button>
<button className="awayButtons__fieldGoal" onClick = {()=> awayUpdate(countAway + 3)}>To Go</button>
<button className="awayButtons__fieldGoal" onClick = {()=> awayUpdate(countAway + 3)}>Ball on</button>
<button className="awayButtons__fieldGoal" onClick = {()=> awayUpdate(countAway + 3)}>quarter</button>
<form id ="frm" action= {()=> gains(yardCount ++)}>
  Turn over:<br></br>
  <input type="text" number = "?"></input>
  <input type="submit" onClick = {()=> document.getElementById('frm').submit()} value="Submit"></input>
</form>
        </div>
      </section>
    </div>
  );
}

export default App;
