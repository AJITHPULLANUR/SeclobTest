import React from 'react'
import "../Css/Section1.css"
import writing from '../images/unrecognizable-woman-sitting-cafe-drawing-napking.jpg'
import painter from '../images/paint-roller.png'
import Electrician from '../images/repairing.png'
import plumber from '../images/pipe.png'
import Sectionjobs from './Sectionjobs'

function Section1() {
  return (
    <div className='Section1container'>

        {/* navbarsection////////////////////////////////////// */}
        <div className='navbarofsec1'>
            <div className='navbarsecloblogo'>
                <img className='navbarlogo' src="data:image/png;base64,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" alt="" />
        
                </div>

                <div className='navbarbuttons'>
                    <div className='navbarbutton2in1'>
                        <button className='buttonofnavbars'>Employers</button>
                        <button className='buttonofnavbars'>Post a Job</button>

                    </div>

                    <div className='navbarbutton2in1'>
                    <button className='buttonofnavbars'>Employers</button>
                        <button className='loginbuttonofnavbars'>Log In</button>

                    </div>

                </div>
       

       


            

        </div>


        <div className='SectionofSearch'>
            <div className='writingbackg'>
                <img className='writing' src={writing} alt="" />
            </div>


           
            
            <div className='sectionsearchexplore'>
                

        
            <input className='searchbar' type="search" name="" id=""  placeholder='job title,keywords or company'/>
                <button className='buttonofexplore' >Explore</button>
                
            </div>
        </div>

        <div className='sectionsofwork'>

            <div className='groupofjobs'>
                <div className='group1strow'>
                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                            <img className='jobimages' src={painter} alt="" />

                        </div>
                    
                    <span>Painter</span>
                    </div>

                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={plumber} alt="" />

                        </div>
                    
                    <span>Plumber</span>
                    </div>
                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={Electrician} alt="" />

                        </div>
                    
                    <span>Electrician</span>
                    </div>

                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={Electrician} alt="" />

                        </div>
                    
                    <span>Electrician</span>
                    </div>
                </div>


                <div className='group1strow'>
                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                            <img className='jobimages' src={painter} alt="" />

                        </div>
                    
                    <span>Painter</span>
                    </div>

                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={plumber} alt="" />

                        </div>
                    
                    <span>Plumber</span>
                    </div>
                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={Electrician} alt="" />

                        </div>
                    
                    <span>Electrician</span>
                    </div>

                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={Electrician} alt="" />

                        </div>
                    
                    <span>Electrician</span>
                    </div>
                </div>


            </div>


            <div className='groupofjobs'>
                <div className='group1strow'>
                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                            <img className='jobimages' src={painter} alt="" />

                        </div>
                    
                    <span>Painter</span>
                    </div>

                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={plumber} alt="" />

                        </div>
                    
                    <span>Plumber</span>
                    </div>
                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={Electrician} alt="" />

                        </div>
                    
                    <span>Electrician</span>
                    </div>

                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={Electrician} alt="" />

                        </div>
                    
                    <span>Electrician</span>
                    </div>
                </div>


                <div className='group1strow'>
                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                            <img className='jobimages' src={painter} alt="" />

                        </div>
                    
                    <span>Painter</span>
                    </div>

                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={plumber} alt="" />

                        </div>
                    
                    <span>Plumber</span>
                    </div>
                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={Electrician} alt="" />

                        </div>
                    
                    <span>Electrician</span>
                    </div>

                    <div className='jobsdivmain'>
                        <div className='jobsdiv'>
                        <img className='jobimages' src={Electrician} alt="" />

                        </div>
                    
                    <span>Electrician</span>
                    </div>
                </div>


            </div>

            

            
    


        </div>

        <Sectionjobs/>
      
    </div>
  )
}

export default Section1
