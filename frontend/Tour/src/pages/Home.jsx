import React from 'react'
import "../styles/home.css"

import {Container , Row , Col} from 'react-bootstrap'
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import Subtitle from '../shared/Subtitle'

import SearchBar from '../shared/SearchBar'
import ServicesList from '../services/ServicesList'

import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList'

function Home() {
  return (
    <>
       {/* hero section  starts*/}
       <section>
          <Container>
            <Row>
              <Col lg = '6'>
                 <div className = "hero_content">
                    <div className = "hero__subtitle d-flex align-items-center">
                       <Subtitle subtitle = {'Know Before You Go'}/>
                       <img src = {worldImg} alt = ""/>
                    </div> 
                    <h1>Travel opens the door to creating <span className = "highlight">memories</span></h1>
                    <p1>
                    Traveling is a transformative experience that enriches the soul and broadens the mind. It offers an escape from the routine of everyday life, inviting us to explore new cultures, landscapes, and perspectives. Whether it's the thrill of adventure in remote destinations or the relaxation found on serene beaches, each journey leaves a lasting impression. 
                    </p1>
                 </div>
              </Col>
              <Col lg = '2'>
                <div className = "hero__img-box">
                   <img src = {heroImg} alt = ""/> 
                </div>
              </Col>
              <Col lg = '2'>
                <div className = "hero__img-box mt-4">
                   <video src = {heroVideo} autoPlay loop muted></video> 
                </div>
              </Col>
              <Col lg = '2'>
                <div className = "hero__img-box mt-5">
                   <img src = {heroImg02} alt = ""/> 
                </div>
              </Col>
              <SearchBar/>
            </Row>
          </Container>
        </section>     
        <section>
           <Container>
             <Row>
               <Col lg = '3'>
                <h5 className = "services__subtitle">What we serve</h5>
                <h2 className = "services__title">We offer our best services</h2>
               </Col>
               <ServicesList />
             </Row>
           </Container>
        </section>

          {/* hero section  ends*/}

          {/* feature tour  section  starts*/}
             <section>
                <Container>
                   <Row>
                     <Col lg = '12' className = 'mb-5'>
                       <Subtitle subtitle = {'Explore'}/>
                       <h2 className = "featured__tour-title">Our featured tours</h2>
                     </Col>
                     <FeaturedTourList/>
                   </Row>
                </Container>
             </section>
          {/* feature tour  section  ends*/}
    </>
  )
}

export default Home
