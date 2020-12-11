import React from 'react'
import { Button } from 'semantic-ui-react';



const SidePanel=(props)=>(
    <div className="sidepanel">
     <div className="upload-button">
        <Button   
            content="Upload Video"
            icon="cloud upload"
            color="orange"
            labelPosition="left"
            onClick={props.openModal}
            className="uploadbutton"
        />
     </div>
     <div>
        <input 
            maxLength="20"
            placeholder="max length 20 character"
            className="video-title" type='text'
            value={props.text} onChange={props.onChangeTextHandler} 
            className="text-input"
            />
            <Button.Group  >
            <Button  className="color-button" onClick={props.changeTextColorHandler.bind(this,"purple")} size="tiny" color="purple"/> 
            <Button  className="color-button" onClick={props.changeTextColorHandler.bind(this,"red")} size="tiny" color="red"/> 
            <Button  className="color-button"  onClick={props.changeTextColorHandler.bind(this,"blue")} size="tiny" color="blue"/>
            </Button.Group>
     </div>    
      
        
    </div> 
)


export default SidePanel