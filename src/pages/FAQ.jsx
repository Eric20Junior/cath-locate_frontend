import React, { useEffect, useState } from 'react'
import axiosinstance from '../utilis/axiosinstance'

export const FAQ = () => {

  const [faqs, setFaqs] = useState([])

  useEffect(() => {
    fetchFaqs()
  }, [])

  const fetchFaqs = async () => {
    try {
      const response = await axiosinstance.get('/api/faqs/')
      setFaqs(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='xs:font-[sora] xs:px-8 xs:pt-20 xs:bg-slate-100 xs:h-full lg:h-screen md:grid md:grid-cols-2 lg:block'>
        <div>
          <div className='xs:space-y-2'>
              <h1 className='xs:text-4xl text-[#048950]'>Frequently Asked Questions</h1>
              <p className='xs:w-[300px]'>Can't find the answer you're looking for? Please Chat to our frendly team</p>
          </div>

          <div className='lg:grid lg:grid-cols-3'>
              {faqs.map ((faq) => (
                <div className='xs:pt-10 xs:w-[300px] xs:h-[200px] xs:space-y-2'>
                <h1 className='text-[#048950] xs:font-semibold'>{faq.question}</h1>
                <p>{faq.answer}</p>
            </div>
              ))}

              
            
          </div>
        </div>

        <div className='lg:flex lg:justify-between md:shadow-none xs:shadow-xl xs:p-2 xs:space-y-2'>
          <div>
            <h1 className='text-[#048950] xs:font-semibold'>Stil have questions?</h1>
            <p>Cant find the answer you're lookimg for? Please chat to our friendly team.</p>
          </div>

          <button className='xs:bg-[#048950] xs:text-white xs:h-[50px] xs:w-[120px] xs:rounded-md xs:font-semibold'>Get in touch</button>
        </div>

        
    </div>
  )
}
