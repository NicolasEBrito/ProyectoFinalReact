import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../Loader/Loader.css'


const Loader = () => {
  return (
    <div className="spinnerContainer" >
      <FontAwesomeIcon className="spinner" icon="fa-solid fa-spinner" />
    </div>
  )
}

export default Loader