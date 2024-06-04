import Image from 'next/image';
import Link from 'next/link';

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <Link href="/" className="logo-footer">
                                <Image src="/images/logo-footer.png" alt="logo-footer" width="154" height="43" />
                            </Link>

                        </div>
                        <div className="col-lg-9">
                            <div className="widget widget-newsletter form-wrapper form-wrapper-inline">
                                <div className="newsletter-info mx-auto mr-lg-2 ml-lg-4">
                                    <h4 className="widget-title">Subscribe to our Newsletter</h4>
                                    <p>Get all the latest information, Sales and Offers.</p>
                                </div>
                                <form action="#" className="input-wrapper input-wrapper-inline">
                                    <input type="email" className="form-control" name="email" id="email"
                                        placeholder="Email address here..." required />
                                    <button className="btn btn-primary btn-rounded btn-md ml-2" type="submit">subscribe<i
                                        className="d-icon-arrow-right"></i></button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-info">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="widget-body">
                                    <li>
                                        <label>Phone: </label>
                                        <Link href="tel:#">Toll Free (123) 456-7890</Link>
                                    </li>
                                    <li>
                                        <label>Email: </label>
                                        <Link href="mailto:mail@riode.com">mail@riode.com</Link>
                                    </li>
                                    <li>
                                        <label>Address: </label>
                                        <Link href="#">123 Street Name, City, England</Link>
                                    </li>
                                    <li>
                                        <label>WORKING DAYS / HOURS: </label>
                                    </li>
                                    <li>
                                        <Link href="#">Mon - Sun / 9:00 AM - 8:00 PM</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget ml-lg-4">
                                <h4 className="widget-title">My Account</h4>
                                <ul className="widget-body">
                                    <li>
                                        <Link href="/pages/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Order History</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Returns</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Custom Service</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms &amp; Condition</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget ml-lg-4">
                                <h4 className="widget-title">Contact Info</h4>
                                <ul className="widget-body">
                                    <li>
                                        <Link href="/pages/login">Sign in</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/cart">View Cart</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/wishlist">My Wishlist</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Track My Order</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Help</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget-instagram">
                                <h4 className="widget-title">Instagram</h4>
                                <figure className="widget-body row">
                                    <div className="col-3">
                                        <Image src="/images/instagram/01.jpg" alt="instagram 1" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <Image src="/images/instagram/02.jpg" alt="instagram 2" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <Image src="/images/instagram/03.jpg" alt="instagram 3" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <Image src="/images/instagram/04.jpg" alt="instagram 4" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <Image src="/images/instagram/05.jpg" alt="instagram 5" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <Image src="/images/instagram/06.jpg" alt="instagram 6" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <Image src="/images/instagram/07.jpg" alt="instagram 7" width="64" height="64" />
                                    </div>
                                    <div className="col-3">
                                        <Image src="/images/instagram/08.jpg" alt="instagram 8" width="64" height="64" />
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-left">
                        <figure className="payment">
                            <Image src="/images/payment.png" alt="payment" width="159" height="29" />
                        </figure>
                    </div>
                    <div className="footer-center">
                        <p className="copyright ls-normal">Riode eCommerce &copy; 2021. All Rights Reserved</p>
                    </div>
                    <div className="footer-right">
                        <div className="social-links">
                            <Link href="#" className="social-link social-facebook fab fa-facebook-f" />
                            <Link href="#" className="social-link social-twitter fab fa-twitter" />
                            <Link href="#" className="social-link social-linkedin fab fa-linkedin-in" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}