import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/zahid.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        my name is muhammad zahid my father name is Muhammad Asghar i blong to Ruknpur my hobies is playing cricket. I am studying at the best school in my city. I am presently in class 11th. I feel happy to be a part of this great college with the good friends, helpful and loving teacher and sound college administration. I have extraordinary skills in some subjects whereas I am very weak in the few.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Muhammad Zahid
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, Al expert
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page