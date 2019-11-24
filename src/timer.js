import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Countdown extends Component{
    state={
        days:parseInt(this.props.days),
        hours:parseInt(this.props.hours),
        mins:parseInt(this.props.mins),
        secs:parseInt(this.props.secs),
        msg:""
    }
    componentDidMount(){
    console.log("heyyy",this.state);
        
          setInterval(()=>{
            if(this.state.days===0 && this.state.hours===0 && this.state.mins===0 && this.state.secs===0){
              this.setState({
                msg:"Countdown Complete"
              })
            } 
            else{      
          this.setState({
            secs:this.state.secs-1
          });
              if(this.state.secs<0){
                this.setState({
                  secs:59
                })
            
              
              if(this.state.secs===59){
                this.setState({
                  mins:this.state.mins>0?this.state.mins-1:59
                })
                if(this.state.mins===59){
                  this.setState({
                    hours:this.state.hours>0?this.state.hours-1:23
                  })
                  if(this.state.hours===23){
                    this.setState({
                      days:this.state.days-1,
                    })
                  }
                }
                }
              }      
          }
      
          },1000)
    }
render(){
    const {days,hours,mins,secs,msg}=this.state;
    return(
        <div>
            <h1>
          {days}:{hours}:{mins}:{secs}
          </h1>
          <p>{msg}</p>
        </div>
    );
    }
}
Countdown.propTypes={
    days:PropTypes.number,
    hours:PropTypes.number,
    mins:PropTypes.number,
    secs:PropTypes.number
};
export default Countdown;