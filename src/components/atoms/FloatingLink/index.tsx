/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const FloatingLink = () => {
  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=55###########"
        target="_blank">
        <img className="fixed bottom-0 right-0 p-15 z-50" src="https://assets.boxloja.pro/shop/img/whatsapp.png" />
      </a>
    </div>
  )
}

export default FloatingLink
