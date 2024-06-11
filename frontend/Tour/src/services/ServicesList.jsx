import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap';

import weatherImg from '/images/weather.png'
import guideImg from '/images/guide.png'
import customizationImg from '/images/customization.png'

const servicesData = [
  {
    imgUrl : weatherImg,
    title : "Calculate Weather",
    desc : "We will calculate the weather of your destination and show it to you"
  },
  {
    imgUrl : guideImg,
    title : "Best Tour Guide",
    desc : "We will help you to choose the best tour guide for your trip"
  },
  {
    imgUrl : customizationImg,
    title : "Customization",
    desc : "We will help you to choose the best tour guide for your trip"
  },
]

function ServicesList() {
  return (
    <>
    {
      servicesData.map((item , index) => ( <Col lg = "3" key = {index}><ServiceCard item = {item}/></Col>))
    }
    </>
  )
}

export default ServicesList