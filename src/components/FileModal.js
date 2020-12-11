import React from 'react'
import { Modal, Input, Button  } from 'semantic-ui-react';
import  mime from 'mime-types'
 



class FileModal extends React.Component{
    state={
        file:null,  
        authorized:["video/mp4" ]
       
    }
   addFile=(e)=>{
    let file=e.target.files[0]
    if(file){
    this.setState({file})
    }
   }
    
   sendFile=()=>{
 
    if(this.state.file !== null){
       
        if(this.isAuthorized(this.state.file)){
             
            const metaData={ contentType: mime.lookup(this.state.file.name)}
           this.props.uploadFile(this.state.file,metaData) 
             console.log(mime.lookup(this.state.file.name))
            

            this.props.closeModal()
            this.clearFile()
             

        }
    }
}
isAuthorized=(fileName)=> this.state.authorized.includes(mime.lookup(fileName.name))
clearFile=()=>this.setState({file:null})
    render(){
        return (
          
            <Modal basic open={this.props.modal} onClose={this.props.closeModal}>
              <Modal.Header> Select An Image File</Modal.Header>
               <Modal.Content>  
               <Input 
                onChange={this.addFile}
                fluid
                type="file"
                name="file"
                label="File type:mp4"
               />
 
               </Modal.Content>
               <Modal.Actions>
               <Button
                onClick={this.sendFile}
                name="send"
                icon="checkmark"
                color="green"
                
               
               />
               <Button
               
                name="cancel"
                icon="remove"
                color="red"
                onClick={this.props.closeModal}
               
               />
               
               </Modal.Actions>
               
             
            
            </Modal>
  
        )

    }
}

export default FileModal