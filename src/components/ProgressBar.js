import React from 'react'
import{Progress} from 'semantic-ui-react'


const ProgressBar=(props)=>(
    <React.Fragment>
   
   {  props.uploadState  && props.percentUpLoad !==100 &&  <Progress 
    color="orange" 
    indicating
    percent={ props.percentUpLoad}
    inverted 
    progress
    size="small"  
    success>
   
 </Progress>}
   
    
    </React.Fragment>
)


export default ProgressBar