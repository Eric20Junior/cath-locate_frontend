import React from 'react'

export const UpdateFaq = () => {

  
  
  return (
    <div>
      <div className='xs:bg-white xs:px-4 xs:pt-3 xs:pb-4 xs:border xs:border-gray-200 xs:h-[30rem] lg:w-[60rem] xs:font-[sora] lg:mx-auto xs:rounded-md xs:my-8'>
      <strong className='xs:text-[20px]'>Update FAQ</strong>

      <form >
        <div className='xs:block xs:mt-10 xs:py-6'>
          <div className='xs:space-y-4'>
            <label className='xs:text-[#048950] xs:font-semibold'>Enter Question</label>
            <input type="text" 
            name='question'
            // value={question}
            // onChange={(e) => setQuestion(e.target.value)}
            className='xs:w-full xs:h-[40px] xs:border xs:border-black xs:rounded-md' />
          </div>

          <div className='xs:mt-10 xs:space-y-4'>
            <label className='xs:text-[#048950] xs:font-semibold'>Enter Answer</label>
            <textarea cols="30" rows="10" 
            name="answer"
            // value={answer} 
            // onChange={(e) => setAnswer(e.target.value)}
            className='xs:w-full xs:h-[100px] xs:border xs:border-black xs:rounded-md'>Enter your Answer here...</textarea>
          </div>

          <button className='xs:bg-[#048950] xs:w-[100px] xs:h-[40px] xs:rounded-md xs:text-white xs:font-bold xs:text-center xs:py-1.5' type='submit'>Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}
