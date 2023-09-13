import React from 'react'
import icon from '../images/blank-profile.webp'

const BlankIcon = () => {
  return (
    <div className={'w-40 h-52 bg-red-200 rounded-xl overflow-hidden border-2'}>
      <div className={'w-40 h-40'}>
        <img className="w-40 h-40" src={icon} alt="Blank" />
      </div>
      <div className="bg-white px-4 text-lg font-bold h-12 flex items-center">
        <p className={'text-center leading-4 block w-full opacity-50'}>
          No selection
        </p>
      </div>
    </div>
  )
}

export default BlankIcon
