import { Burger, Nav } from '@/components/atoms'
import React, { useState } from 'react'

const Menu = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <header className="md:h-79">
      <div className="container m-auto">
        <div className="flex justify-end md:justify-center items-center py-26">
          <div className="flex justify-between p-13 items-center md:block">
            <Burger open={open} setOpen={() => setOpen(!open)} />
          </div>
          <Nav open={open} />
        </div>
      </div>
    </header>
  )
}

export default Menu 