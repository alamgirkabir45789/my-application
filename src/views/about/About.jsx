/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import profile from '../../assets/images/images.jpg';

const About = () => {
  return (
    <div >
       {/* <marquee direction="right"> <h1>Welcome to Alamgir's Documentary</h1></marquee> */}
        <div className='container-fluid'>
          <div className="row">   
          <div className='col-sm' >
            <h2>Education</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sint. Est a, eos aliquid iure amet alias reiciendis? Corporis pariatur dolorum vero deleniti illo aperiam, iste ipsam similique officiis ratione.
</p>
          </div>    
       
          <div className='col-sm'>
            <h2>Skill</h2>
            <ul>
        <li>Javascript</li>
        <li>ReactJs</li>
        <li>AngularJS</li>
        <li>Javascript</li>
        <li>Javascript</li>
        </ul>
          <img className='img-fluid  float-right' src={profile}  width={300} height={300}
          style={{
            position: "absolute",
            top: "40%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            
          }}
          ></img>
          </div>
          <div className="col-sm">
            <h2>Experience</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas accusantium hic commodi soluta laborum molestiae saepe quisquam quos, iste omnis nesciunt natus, sequi atque nemo eveniet impedit, reiciendis cumque ratione.
            </div>   
          <div className='col-sm'>
            <div>
              <h2>Project</h2>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default About