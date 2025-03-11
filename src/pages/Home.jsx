import React from 'react'
import Banner from '../components/Banner'
import WhyCommunionRocks from '../components/WhyCommunionRocks'
import JoinConversation from '../components/JoinConversation'
import FAQAccordion from "../components/FAQAccordion";
import Event from "../components/Event";

const Home = () => {
  return (
    <div>  
      <Banner />
      <WhyCommunionRocks />
      <JoinConversation />
      <Event />
      <FAQAccordion />
    </div>
  )
}

export default Home
