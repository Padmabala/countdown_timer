import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Countdown from './timer';

class CountdownTimer extends React.Component{
    state={
      days:"",
      hours:"",
      mins:"",
      secs:"",
      flag:false,
      msg:""
    }
    startCountdown=()=>{
      if(this.state.days==="" || this.state.hours==="" || this.state.mins==="" || this.state.secs===""){
        this.setState({
          msg:"Please provide all the values to start Timer"
        })
      }
      else{
      this.setState({
        flag:true
      })
    }
    }
    resetTimer=()=>{
      this.setState({
        flag:false,
        days:"",
        hours:"",
        mins:"",
        secs:""
      })
    }
    setFieldValue=(event)=>{
      const field=event.target.name
      this.setState({
        [field]:event.target.value
      })
    }
    render(){
      const {days,hours,mins,secs,flag,msg}=this.state;
      return(
        <>
        <div className="App-header">
        <header>
          {
            
            flag
            ?
            <>
            <Countdown days={days} hours={hours} mins={mins} secs={secs}></Countdown>
            <p><button type="button" onClick={this.resetTimer}>Reset Timer</button></p>
            </>
            :
            <>
          <table>
            <tr>
              <td>
              Days:
              </td>
              <td>
              <input name="days" type="text" placeholder="Enter Days countdown" onChange={this.setFieldValue} value={days}/>
              </td>
            </tr>
            <tr>
              <td>
              Hours:
              </td>
              <td>
              <input name="hours" type="text" placeholder="Enter between 1-24" onChange={this.setFieldValue} value={hours}/>
              </td>
            </tr>
            <tr>
              <td>
              Minutes:
              </td>
              <td>
              <input name="mins" type="text" placeholder="Enter between 1-60" onChange={this.setFieldValue} value={mins}/>
              </td>
            </tr>
            <tr>
              <td>
              Seconds:
              </td>
              <td>
              <input name="secs" placeholder="Enter between 1-60" onChange={this.setFieldValue} value={secs}/>
              </td>
            </tr>
          </table>
          <p><button type="button" onClick={this.startCountdown}>Start Countdown </button></p>
          <p>{msg}</p>
          </>
    }
        </header>
          
      </div>
      </>
      );
    }
  }
  
  
  
  export default CountdownTimer;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
