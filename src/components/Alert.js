import React from 'react'

function Alert(props) {
    const handlecap=(word)=>{
        let newtxt= word.toLowerCase()
        return newtxt.charAt(0).toUpperCase() + newtxt.slice(1)

    }
  return (
    
            props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
    <strong>{handlecap(props.alert.type)}! </strong>{props.alert.message}
    </div>
      
   
  )
}

export default Alert
