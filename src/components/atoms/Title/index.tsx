import React from 'react'
import { ITitleProps } from './type'

const Title = ({ children }: ITitleProps): JSX.Element => {
  return (
    <h2 className='text-31 md:text-38 uppercase font-bold'>{children}</h2>
  )
}

export default Title 