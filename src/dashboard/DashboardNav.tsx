import React from 'react'
const img = require('../pics/icon-small.png');

export default function DashboardNav() {
  return (
    <div>
       <div className='logo-container'>
          <p><b><img src={img} alt='YelpCamp logo' className='logo-image'/>yelpCamp</b></p>
        </div>
        <main>
            
        </main>
        <footer>
            <p>logout</p>
        </footer>
    </div>
  )
}
