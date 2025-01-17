import React, { useState } from 'react'
import ArrowDown from '../../assets/icons/landing-page/faqs/arrow-down.svg'
import ArrowUp from '../../assets/icons/landing-page/faqs/arrow-up.png'
import MessageQuestion from '../../assets/icons/landing-page/faqs/message-question.png'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'What is Rent-A-Kasama?',
      answer:
        'Rent-A-Kasama is a platform that connects individuals with trusted companions (Kasamas) to meet their specific needs.',
    },
    {
      question: 'Is Rent-A-Kasama safe?',
      answer:
        'Yes, we prioritize safety through a rigorous background check process for all Kasamas, ensuring that our platform is secure and trustworthy.',
    },
    {
      question: 'How do I become a Kasama?',
      answer:
        'To become a Kasama, simply sign up on our platform, complete the application process, and pass our background checks.',
    },
    {
      question: 'What types of companions are available?',
      answer:
        'We offer a wide range of companions, including travel buddies, event partners, and more, tailored to your preferences.',
    },
    {
      question: 'How do I book a companion?',
      answer:
        'Booking a companion is easy! Simply browse available profiles, select a Kasama, and confirm your booking.',
    },
    {
      question: 'What are the rates for hiring a Kasama?',
      answer:
        'Rates vary based on the type of service and duration. You can view pricing details on each Kasama’s profile.',
    },
    {
      question: 'Can I cancel a booking?',
      answer:
        'Yes, you can cancel a booking if needed. However, please review our cancellation policy to understand any applicable fees or restrictions.',
    },
  ]

  return (
    <div className='faqs-section flex-center' id='faqsSection'>
      <div className='headers flex-center'>
        <p className='header'>Frequently Asked Questions</p>
        <p className='subheader'>
          Everything You Need to Know Before You Begin
        </p>
      </div>

      <div className='accordion-container flex-center'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`accordion ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className='accordion-header flex-center'
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <img
                src={activeIndex === index ? ArrowUp : ArrowDown}
                alt={
                  activeIndex === index ? 'arrow up icon' : 'arrow down icon'
                }
                className='accordion-icon'
              />
            </div>
            {activeIndex === index && (
              <div className='accordion-content'>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className='contact-component flex-center'>
        <div className='contact-item flex-center'>
          <p className='contact-title flex-center'>
            <img src={MessageQuestion} alt='' className='contact-icon' />{' '}
            customer support
          </p>
          <p className='contact-info'>Monday - Friday, 9:00 AM - 6:00 PM</p>
        </div>

        <div className='contact-item flex-center'>
          <p className='contact-title flex-center'>
            <img src={MessageQuestion} alt='' className='contact-icon' />{' '}
            response time
          </p>
          <p className='contact-info'>We aim to respond within 24-48 hours.</p>
        </div>
      </div>
    </div>
  )
}

export default FAQ
