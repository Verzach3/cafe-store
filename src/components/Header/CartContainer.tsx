import './header.css'

export default function CartContainer({ carIsOpen } : { carIsOpen: boolean}) {
  return (
    <div className={`cart-items-container ${carIsOpen ? 'active' : ''}`}>
            <div className="cart-item">
                <span className='fas fa-times'></span>
                <img src="../../../public/1.jpg" alt="" />
                <div className="content">
                    <h3>Cart item 01</h3>
                    <div className='price'>$40.000/-</div>
                </div>
            </div>
            <div className="cart-item">
                <span className='fas fa-times'></span>
                <img src="../../../public/1.jpg" alt="" />
                <div className="content">
                    <h3>Cart item 02</h3>
                    <div className='price'>$25.000/-</div>
                </div>
            </div>
            <div className="cart-item">
                <span className='fas fa-times'></span>
                <img src="../../../public/1.jpg" alt="" />
                <div className="content">
                    <h3>Cart item 03</h3>
                    <div className='price'>$30.000/-</div>
                </div>
            </div>
            <a href='#' className='btn'>checkout now</a>
        </div>
  )
}
