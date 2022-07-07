import React from 'react'
import './footer.css'

const Footer = () => {
      let d = new Date();
        let n = d.getFullYear();
    return (
        <div className="footer">
            <div className='logo_copyright'>
                    
                    <div className = 'copyright'>
                    Copyright © {n} Prateek Shaw All Rights Reserved.
                    </div>
            </div>

        </div>
    )
}

export default Footer