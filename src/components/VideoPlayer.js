import React from 'react'
import {   Button  } from 'semantic-ui-react';
import ProgressBar from './ProgressBar' 
import {Player,BigPlayButton,LoadingSpinner,ControlBar,ReplayControl,VolumeMenuButton,PlaybackRateMenuButton} from 'video-react'
 



class VideoPlayer extends React.Component{
    state={
        aspectRatio:"1:1",
        filter:"brightness",
        vedioColor:"100"
        
    }
    
aspectRatioHandler=()=>{
    return `${this.state.aspectRatioX}:${this.state.aspectRatioY}`
  }
  onChangeHandler=(e)=>{
    e.persist()
    if((e.target.value>0 && e.target.value<101 )|| e.target.value===""){
        this.changeColor(e.target.value)
        this.setState({vedioColor:e.target.value })
    }
    
    
  }
  onChange=(e)=>{
     let filter=e.target.value
    
    this.setState({filter})
    this.setState({vedioColor:100})
  
  }
  changeColor=(value)=>{
    document.querySelector('video').style.filter=`${this.state.filter}(${value}%)`
  }
   
   
    render(){
        return (
     <div className="video">
            <div  className="video-content">
            <p className="text" >{this.props.text}</p>
            
            <Player
               fluid={false}
               width={400}
               heigh={400}
               src={this.props.videoSource}
               aspectRatio={this.state.aspectRatio}
               
              
             >
               
               <BigPlayButton position="center"  />
               <ControlBar autoHide={false}   >
               <LoadingSpinner/>
               <VolumeMenuButton  />
               <ReplayControl seconds={5} order={2.1} />
              
              
               <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
             </ControlBar>
              
             </Player> 
          
             <ProgressBar
             percentUpLoad={this.props.percentUpLoad}
             uploadState={this.props.uploadState}
             />
            
             <div>
             <p style={{display:"inline"}}>aspect Ratio    </p>
             <Button  onClick={()=>this.setState({aspectRatio:"1:1"})} size="tiny" content="1:1" /> 
             <Button  onClick={()=>this.setState({aspectRatio:"4:3"})} size="tiny" content="4:3" /> 
             <Button   onClick={()=>this.setState({aspectRatio:"8:5"})} size="tiny"  content="8:5" />
             <Button   onClick={()=>this.setState({aspectRatio:"7:3"})} size="tiny"  content="7:5" />
             
             
            
             </div>
              <div>
                <select  value={this.state.filter} onChange={this.onChange}>
                  <option  value="brightness">brightness</option>
                  <option  value="saturate" >saturate</option>
                  <option  value="contrast">contrast</option>
                </select>
                <span>&nbsp;&nbsp;number 0 and 100 &nbsp;&nbsp;</span>
                <input 
                 type="number"
                 value={this.state.vedioColor} 
                 onChange={this.onChangeHandler}
                 
                 />
                
               </div>
     
            </div>
           </div>
             
   
        )

    }
}

export default VideoPlayer