import { Button } from '@/components/atoms'
import React from 'react'

const Modal = ({ modal, setModal }: IModalProps) => {
  return (
    <article
      className={`bg-gray-800 bg-opacity-40 fixed top-0 left-0 z-50 flex items-center justify-center w-full h-[100vh] px-15 
        ${modal ? 'block' : 'hidden'}
      `}>
      <div className='bg-white p-26 rounded-sm sm:max-w-screen-sm'>
        <h3 className='text-center mb-15'>Obrigada!</h3>
        <p>Obrigado pelo seu interesse no meu trabalho! Vou entrar em contato em breve para discutir mais sobre suas necessidades e como posso ajudá-lo a alcançar seus objetivos.</p>
        <div className="flex justify-center">
          <Button styleType='btn-modal' onClick={() => setModal(!false)}>Voltar</Button>
        </div>
      </div>
    </article >
  )
}

export default Modal