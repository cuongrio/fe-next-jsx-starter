import { getCartCount, getTotalPrice, toDecimal } from '@/utils';

import Image from 'next/image';
import Link from 'next/link';

function CartMenu(props) {
  const { cartList = [], removeFromCart } = props;

  const showCartMenu = (e) => {
    e.preventDefault();
    e.currentTarget.closest('.cart-dropdown').classList.add('opened');
  };

  const hideCartMenu = () => {
    if (document.querySelector('.cart-dropdown').classList.contains('opened'))
      document.querySelector('.cart-dropdown').classList.remove('opened');
  };

  const removeCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div className='dropdown cart-dropdown type2 cart-offcanvas mr-0 mr-lg-2'>
      <a href='#' className='cart-toggle label-block link' onClick={showCartMenu}>
        <div className='cart-label d-lg-show'>
          <span className='cart-name'>Shopping Cart:</span>
          <span className='cart-price'>${toDecimal(getTotalPrice(cartList))}</span>
        </div>
        <i className='d-icon-bag'>
          <span className='cart-count'>{getCartCount(cartList)}</span>
        </i>
      </a>
      <div className='cart-overlay' onClick={hideCartMenu}></div>
      <div className='dropdown-box'>
        <div className='cart-header'>
          <h4 className='cart-title'>Shopping Cart</h4>
          <Link href='#' className='btn btn-dark btn-link btn-icon-right btn-close' onClick={hideCartMenu}>
            close<i className='d-icon-arrow-right'></i>
            <span className='sr-only'>Cart</span>
          </Link>
        </div>
        {cartList.length > 0 ? (
          <>
            <div className='products scrollable'>
              {cartList.map((item, index) => (
                <div className='product product-cart' key={'cart-menu-product-' + index}>
                  <figure className='product-media pure-media'>
                    <Link href={'/product/default/' + item.slug}>
                      <Image
                        src={process.env.NEXT_PUBLIC_ASSET_URI + item.pictures[0].url}
                        alt='product'
                        width='80'
                        height='88'
                      />
                    </Link>
                    <button
                      className='btn btn-link btn-close'
                      onClick={() => {
                        removeCart(item);
                      }}
                    >
                      <i className='fas fa-times'></i>
                      <span className='sr-only'>Close</span>
                    </button>
                  </figure>
                  <div className='product-detail'>
                    <Link href={'/product/default/' + item.slug} className='product-name'>
                      {item.name}
                    </Link>
                    <div className='price-box'>
                      <span className='product-quantity'>{item.qty}</span>
                      <span className='product-price'>${toDecimal(item.price)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='cart-total'>
              <label>Subtotal:</label>
              <span className='price'>${toDecimal(getTotalPrice(cartList))}</span>
            </div>

            <div className='cart-action'>
              <Link href='/pages/cart' className='btn btn-dark btn-link' onClick={hideCartMenu}>
                View Cart
              </Link>
              <Link href='/pages/checkout' className='btn btn-dark' onClick={hideCartMenu}>
                <span>Go To Checkout</span>
              </Link>
            </div>
          </>
        ) : (
          <p className='mt-4 text-center font-weight-semi-bold ls-normal text-body'>No products in the cart.</p>
        )}
      </div>
    </div>
  );
}

export default CartMenu;
