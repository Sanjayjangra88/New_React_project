import React from 'react'
import "../Components/mainbody.css"
import Singers from './Singers'

const Mainbody = () => {
  return (
    <div className='container'>
        <div className="Singers maxWidth">
        <h1 className="SingersHeading">Shortlist</h1>
        <p className="medium">Details :</p>
        <div className="details_div">
        <div>
        <p className="mediumHeading">Event Date</p><p className="smallHeading"> 2023-02-22</p>
        </div>
        <div>
        <p className="mediumHeading">Location</p><p className="smallHeading"> Delhi, India</p>
        </div>
        <div className="budget_div">
        <p className="mediumHeading">Budget</p>
        <div className="budget_tag">
        <p className="mediumHeading">₹500,000</p></div>
        </div>
        </div>
        <center>
        <h1 className="SingersHeading1">Singers</h1>
        <p className="medium textmaxwidth">Select an artist that matches your vibe.</p>
        </center>
        <Singers/>
        
      
        </div>
    </div>
  )
}

export default Mainbody