import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import "../node_modules/video-react/dist/video-react.css";
import firebase from './firebase'
import FileModal from './components/FileModal'
import SidePanel from './components/SidePanel'
import VideoPlayer from './components/VideoPlayer'
import ProgressBar from "./components/ProgressBar"

class App extends React.Component {
state={
  modal:false,
  uploadTask:null,
  uploadState:"",
  percentUpLoad:0,
  videoSource:"",
  text:"",
 
}
 
componentDidMount(){
    firebase.database().ref("video/url").on('value',(snapshot)=>{
      this.setState({videoSource:snapshot.val()})
    })
  }
  saveUrl=(url)=>{
    firebase.database().ref('video').set({url:url})
  }
  openModal=()=>this.setState({modal:true})
  closeModal=()=>this.setState({modal:false})
  uploadFile=(file,metaData)=>{
     
    const filePath=`videos/${file.name}`
        
    this.setState({
      uploadState:"loading",
      uploadTask:firebase.storage().ref().child(filePath).put(file,metaData)
    },()=>{
      this.state.uploadTask.on('state_changed',snap=>{
        const percentUpLoad=Math.round((snap.bytesTransferred/ snap.totalBytes) * 100)
        this.setState({percentUpLoad})
        
      },err=>{
        console.log(err)
        this.setState(
          {
            uploadTask:null,
             
          })
      },()=>{
        console.log("here")
        this.state.uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl=>{
          this.setState({uploadState:"done"})
          firebase.database().ref('video').set({url:downloadUrl})

        }).catch(err=>{
         
          this.setState(
            {
              uploadTask:null,
          
            })

        })
      } 
      )
    }
  )
} 
onChangeTextHandler=(e)=>{
  e.persist()
  this.setState({text:e.target.value})
} 
changeTextColorHandler=(color)=>{
  document.querySelector(".text").style.color=color
} 
 
aspectRatioHandler=()=>{
  return `${this.state.aspectRatioX}:${this.state.aspectRatioY}`
}
onChangeHandler=(e)=>{
  let vedioColor=e.target.value
  this.changeColor()
  this.setState({vedioColor })
  
  
}
onChange=(e)=>{
   let filter=e.target.value
  
  this.setState({filter})
  this.setState({vedioColor:100})

}
changeColor=()=>{
  document.querySelector('video').style.filter=`${this.state.filter}(${this.state.vedioColor}%)`
}
 

render(){
  return (
    <div className="App">
      <SidePanel 
       openModal={this.openModal}
       changeTextColorHandler={this.changeTextColorHandler}
       onChangeTextHandler={this.onChangeTextHandler} 
       text={this.state.text}
       />
      {this.state.videoSource  && this.state.videoSource.length > 0 &&  <VideoPlayer
        text={this.state.text}
        videoSource={this.state.videoSource}
        percentUpLoad={this.state.percentUpLoad}
        uploadState={this.state.uploadState}
        
       
       /> 
      
       
       } 
       {this.state.videoSource===null    && this.state.percentUpLoad !==100 &&
       <div className="proress">
       <ProgressBar
        percentUpLoad={this.state.percentUpLoad}
        uploadState={this.state.uploadState}
       />
       
       </div>
       
       }
 
       <FileModal
          modal={this.state.modal}
          closeModal={this.closeModal}
          uploadFile={this.uploadFile}
         
         />
   
         
    </div>
  )
}
}

export default App;

 