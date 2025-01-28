import React from 'react'
import TestimonyImage1 from '../../assets/images/person/image-5.jpg'
import TestimonyImage2 from '../../assets/images/person/image-11.jpg'
import TestimonyImage3 from '../../assets/images/person/image-13.jpg'

function Testimonials() {
  return (
    <div className='testimonial-section flex-center' id='testimonialSection'>
      <div className='header flex-center'>
        <div className='intro flex-center'>
          <h2 className='main-heading'>What Our Clients and Kasamas Say</h2>

          <p className='subheading'>
            These stories highlight the genuine connections made possible by our
            platform and the positive impact of companionship. See what makes
            our community so special!
          </p>
        </div>

        <div className='cards flex-center'>
          <div className='card flex-center'>
            <div className='profile-container flex-center'>
              <img src={TestimonyImage3} alt='' className='profile-image' />
              <div className='profile-text flex-center'>
                <p className='name'>Carla Gonzales</p>
                <p className='member-type'>Client</p>
              </div>
            </div>
            <div className='testimonial-text'>
              <p className='text'>
                After moving to a new city, I felt lonely, but Kasama became a
                true friend, helping me feel at home. This service completely
                transformed my experience.
              </p>
            </div>
          </div>

          <div className='card flex-center'>
            <div className='profile-container flex-center'>
              <img src={TestimonyImage2} alt='' className='profile-image' />
              <div className='profile-text flex-center'>
                <p className='name'>Ana Reyes</p>
                <p className='member-type'>Client</p>
              </div>
            </div>
            <div className='testimonial-text'>
              <p className='text'>
                I was nervous about trying this service, but my experience was
                incredible. My Kasama was a true friend and really helped me
                through a tough time.
              </p>
            </div>
          </div>

          <div className='card flex-center'>
            <div className='profile-container flex-center'>
              <img src={TestimonyImage1} alt='' className='profile-image' />
              <div className='profile-text flex-center'>
                <p className='name'>John Dela Cruz</p>
                <p className='member-type kasama'>Kasama</p>
              </div>
            </div>
            <div className='testimonial-text'>
              <p className='text'>
                Being a Kasama allows me to connect with amazing people. Every
                client experience is unique, and I’m grateful for the
                opportunity to make a positive impact in someone’s life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
