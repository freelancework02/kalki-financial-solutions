import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ContactSection from '../Components/Contactus/Contactus'
import Servicecard from '../Components/Service card/Servicecard'
import Valueprop from '../Components/valueproposition/Valueprop'
import Productcard from '../Components/Productcard/Productcard'


const Servicepage = () => {
  return (
    <div className='mt-12'>
        <Navbar/>
        <Servicecard/>
                <Productcard/>
        
        <ContactSection/>
    </div>
  )
}

export default Servicepage