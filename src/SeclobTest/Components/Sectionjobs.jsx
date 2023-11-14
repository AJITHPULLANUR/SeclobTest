import React from 'react'
import "../Css/Sectioinjobs.css"
import build from '../images/building.png'
import bag from '../images/portfolio.png'

function Sectionjobs() {
  return (
    <div className='sectionjobs'>
        <div className='sectionof1strow'>


            <div className='Jobcard'>
                <div className='jobcardsection1'>
                    <h3>Computer Operator Part Time / Data
Entry Operator Fresher</h3>
<h4>Seclob Technologies, Cyberpark, Calicut</h4>

                </div>
                <div className='jobcard2'>


                    <div className='salaryscale'>
                        <div className='salarydiv'>
                            <img width="20px" height="20px" src={build} alt="" />
                            <span>₹1,000 - ₹2,000 a day</span>

                        </div>
                        <div className='time'>
                            <img width="20px" height="20px" src={bag} alt="" />
                            <span>Full Time</span>

</div>





                    </div>
                    <div className='hiring'>

                    </div>
                    <div className='urgent'>

                    </div>
                    <div className='posted'>

                    </div>

            </div>

            </div>

            

        </div>
      
    </div>
  )
}

export default Sectionjobs
