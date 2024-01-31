import React from 'react';
import PropTypes from 'prop-types'

function alert(props) {
  let color = "green";
  
  if(!!props.alert){
    if(props.alert.type === "success"){
      color = "green";
    }
    if(props.alert.type === "fail" || props.alert.type === "danger"){
      color = "red";
    }
    if(props.alert.type === "general" || props.alert.type === "info"){
      color = "blue";
    }
  }
  return (
    !!props.alert &&
    <>
      <div id="alert-border-3" className={`flex items-center p-4 text-${color}-800 border-t-4 border-b-4 border-${color}-300 bg-${color}-50 dark:text-${color}-400 dark:bg-gray-800 dark:border-${color}-800`} role="alert">
          <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <div className="ms-3 text-sm font-medium">
            <strong>{props.alert.msg.split(' ')[0] }</strong>&nbsp;
            {props.alert.msg.substr(props.alert.msg.indexOf(" ") + 1)}
          </div>
      </div>
    </>
  )
}

alert.propTypes = {
  alert: PropTypes.shape({
    msg: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["success", "fail", "danger", "general", "info"]).isRequired
  })
}

export default alert