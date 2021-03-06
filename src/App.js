import React, { useState } from 'react';
import './App.scss'

import { AiOutlineFire } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { BsCalendar3 } from 'react-icons/bs'
import { GrUserWorker } from 'react-icons/gr'
import { AiFillFacebook } from 'react-icons/ai'

import hero from './assets/heros/test-hero.jpg'
import Email from './components/modals/email'
import Info from './components/modals/info'

const servicesData = [
  {
    title: 'Heating',
    description: 'lorem ipsum',
    icon: <AiOutlineFire />
  },
  {
    title: 'Air Conditioning',
    description: 'lorem ipsum',
    icon: <AiOutlineFire />
  },
  {
    title: 'Maintenance',
    description: 'lorem ipsum',
    icon: <AiOutlineFire />
  },
  {
    title: 'Electrical',
    description: 'lorem ipsum',
    icon: <AiOutlineFire />
  },
  {
    title: 'Water',
    description: 'lorem ipsum',
    icon: <AiOutlineFire />
  },
  {
    title: 'Plumbing',
    description: 'lorem ipsum',
    icon: <AiOutlineFire />
  },
];

function App() {
  let [toggleEmailModal, setToggleEmailModal] = useState(false);
  let [toggleInfoModal, setToggleInfoModal] = useState(false);

  const handleEmailModal = () => {
    setToggleEmailModal(!toggleEmailModal);
  }
  const handleInfoModal = () => {
    setToggleInfoModal(!toggleInfoModal);
  }
  return (
    <div className="app">
      <div className="app__hero">
        <div className="app__hero-overlay"></div>
        <div className="app__hero-info">
          <h1>HVAC RIOS</h1>
          <p>
            {' '}
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the{' '}
          </p>
          <div className="app__hero-btns">
            <button>Our Services</button>
            <button onClick={() => { handleEmailModal() }}>Contact</button>
          </div>
        </div>
      </div>
      <div className="app__services">
        <div className="app__cards">
          {servicesData.map((data) => {
            return (
              <div className="app__card" onClick={() => handleInfoModal()}>
                {data.icon}
                <p>{data.title}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="app__processes">
        <div className="app__process">
          <h2>1.</h2>
          <p>Get a Quote</p>
          <MdAttachMoney />
        </div>
        <div className="app__process">
          <h2>2.</h2>
          <p>Schedule An Appointment</p>
          <BsCalendar3 />
        </div>
        <div className="app__process">
          <h2>3.</h2>
          <p>Technician Services</p>
          <GrUserWorker />
        </div>
      </div>
      <div className="app__about">
        <h2>About Us</h2>
        <p>
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <p>
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
      <div className="app__footer">
        <div className="app__footer-contact">
          <h2>
            <strong>Email</strong>
          </h2>
          <p>jrios70s@gmail.com</p>
          <p>
            <strong>Phone</strong>
          </p>
          <p>312-261-0596</p>
        </div>
        <div className="app__footer-social">
          <h2>Social Media</h2>
          <AiFillFacebook />
        </div>
        <div className="app__footer-hours">
          <h2>Business Hours</h2>
          <table>
            <tr>
              <td>Monday:</td>
              <td>8:00AM-10:00PM</td>
            </tr>
            <tr>
              <td>Tuesday:</td>
              <td>8:00AM-10:00PM</td>
            </tr>
            <tr>
              <td>Wednesday:</td>
              <td>8:00AM-10:00PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>8:00AM-10:00PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>8:00AM-10:00PM</td>
            </tr>
            <tr>
              <td>Saturday:</td>
              <td>8:00AM-10:00PM</td>
            </tr>
            <tr>
              <td>Sunday:</td>
              <td>8:00AM-10:00PM</td>
            </tr>
          </table>
        </div>
      </div>
      <Email isOpen={toggleEmailModal} handleClose={handleEmailModal}></Email>
      <Info isOpen={toggleInfoModal} handleClose={handleInfoModal}></Info>
    </div>
  )
}

export default App
