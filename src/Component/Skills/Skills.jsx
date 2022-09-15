import React from 'react'
import './Skills.css'

function Skills(){
  return (
    <div className='skills'>
        <div className='skill'>
        <h3>Skills</h3>
        <hr className="skillrule" />
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>Javascript</li>
            <li>REACT</li>
            <li>NODE</li>
        </ul>
        </div>
        <div className='association'>
            <h3>Association</h3>
            <hr className='skillrule' />
            <ul>
                <li>ACW</li>
                <li>ACW</li>
            </ul>

        </div>
        
    </div>
  )
}

export default Skills