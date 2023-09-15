import React from 'react'
import icon from '../images/blank-profile.webp'
import classnames from 'classnames'

type BlankIconProps = {
  className: string
}

const BlankIcon = ({ className }: BlankIconProps) => {
  return (
    <div
      className={classnames(
        className,
        'bg-red-200 rounded-xl overflow-hidden border-2'
      )}
    >
      <div className={'w-full aspect-square relative'}>
        <img
          className="absolute left-0 right-0 top-0 bottom-0"
          src={icon}
          alt="Blank"
        />
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
