import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

export default function FooterMenu({ appData }) {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-3 pb-3">
							<div className="foot-cont">
								<Link to="/">
									<img src="/images/logo.webp" alt="Logo" />
								</Link>
								<p>
									Mevive® a Manufacturer, Bulk Supplier of
									Dehydrated Vegetables, Spray Dried Fruit
									Powders, Dried Leaves, Dried Herbs and Spice
									Powders in India.
								</p>
							</div>
						</div>
						<div className="col-md-3 pb-3">
							<div className="quick-links">
								<h4>Quick links</h4>
								<ul>
									<li>
										<Link to="/products">
											<img
												src="/images/icons/leaf-img.webp"
												alt="Leaf Icon"
											/>
											Products
										</Link>
										<ul className="foot-sub-menu">
											{appData.category_products &&
												appData.category_products.map(
													(value, i) => {
														return (
															<li key={i}>
																<Link
																	to={`/products/${value.ca_slug}`}
																>
																	<img
																		src="/images/icons/round-img.webp"
																		alt="Round Icon"
																	/>
																	{
																		value.ca_title
																	}
																</Link>
															</li>
														);
													}
												)}
										</ul>
									</li>
									<li>
										<Link to="/applications">
											<img
												src="/images/icons/leaf-img.webp"
												alt="Leaf Icon"
											/>
											Application
										</Link>
									</li>
									<li>
										<Link to="/about-us">
											<img
												src="/images/icons/leaf-img.webp"
												alt="Leaf Icon"
											/>
											About
										</Link>
									</li>
									<li>
										<Link to="/contact-us">
											<img
												src="/images/icons/leaf-img.webp"
												alt="Leaf Icon"
											/>
											Contact
										</Link>
									</li>
									<li>
										<Link to="/blog">
											<img
												src="/images/icons/leaf-img.webp"
												alt="Leaf Icon"
											/>
											Blog
										</Link>
									</li>
									<li>
										<Link to="/faq">
											<img
												src="/images/icons/leaf-img.webp"
												alt="Leaf Icon"
											/>
											FAQ's
										</Link>
									</li>
									<li>
										<Link to="/careers">
											<img
												src="/images/icons/leaf-img.webp"
												alt="Leaf Icon"
											/>
											Careers
										</Link>
									</li>
									<li>
										<Link to="/privacy-policy">
											<img
												src="images/icons/leaf-img.webp"
												alt="Leaf Icon"
											/>
											Privacy Policy
										</Link>
									</li>
									{/* <li>
                                        <Link to="/">
                                            <img
                                                src="images/icons/leaf-img.webp"
                                                alt="Leaf Icon"
                                            />
                                            Terms &amp; Conditions
                                        </Link>
                                    </li> */}
								</ul>
							</div>
						</div>
						<div className="col-md-3 pb-3">
							<div className="foot-contact">
								<h4>Contact</h4>
								<ul>
									<li>
										<h5>India office</h5>
									</li>
									<li>
										<img
											src="/images/icons/foot-location.webp"
											alt="Map Icon"
										/>
										<span>
											Mevive International Food
											Ingredients
											<br /> M3, Mayflower Metropolis,
											Udayampalayam Road Sowripalayam,
											Coimbatore 641028, Tamilnadu, India.
										</span>
									</li>
									{/* <li>
                                        <img
                                            src="images/icons/foot-phone.webp"
                                            alt="Phone Icon"
                                        />
                                        <span>+91 7540073991</span>
                                    </li>
                                    <li>
                                        <img
                                            src="images/icons/foot-mail.webp"
                                            alt="Mail Icon"
                                        />
                                        <span>
                                            sales@meviveinternational.com
                                        </span>
                                    </li> */}
									<li>
										<img
											src="/images/icons/foot-arrow.webp"
											alt="Arrow Icon"
										/>
										<span>
											<a
												href="https://g.page/r/CRZkKdJIRq0pEBA"
												target="_blank"
												rel="noreferrer"
											>
												Get Location
											</a>
										</span>
									</li>
								</ul>
								<ul>
									<li>
										<h5>UAE office</h5>
									</li>
									<li>
										<img
											src="/images/icons/foot-location.webp"
											alt="Map Icon"
										/>
										<span>
											Mevive General Trading LLC
											<br /> Office No.154, Unique World
											Business Centre, Hamsah -A, Ansar
											Gallery Complex, Al Karama, Dubai,
											UAE.
										</span>
									</li>
									{/* <li><img src="images/icons/foot-phone.webp" alt='Phone Icon' /><span>+971 50 210 2073 | +971 52 514 0926</span></li> */}
									<li>
										<img
											src="/images/icons/foot-arrow.webp"
											alt="Arrow Icon"
										/>
										<span>
											<a
												href="https://g.page/r/Cb7zS7ppYR0JEBA"
												target="_blank"
												rel="noreferrer"
											>
												Get Location
											</a>
										</span>
									</li>
									<li>
										<img
											src="/images/icons/foot-mail.webp"
											alt="Mail Icon"
										/>
										<span>
											<a href="mailto:sales@meviveinternational.com">
												sales@meviveinternational.com
											</a>
										</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 pb-3">
							<div className="foot-social-links">
								<h4>Newsletter</h4>
								<Newsletter />
								<h4>Follow Us</h4>
								<ul>
									<li>
										<a
											href="https://www.facebook.com/meviveinternational/"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fa fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a
											href="https://www.linkedin.com/company/mevive-international/"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/meviveinternational/"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li>
										<a
											href="https://www.youtube.com/channel/UCG-bfLZuJFkomwqNMNvMnSg"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fa fa-youtube-play"></i>
										</a>
									</li>
									<li>
										<a
											href="https://twitter.com/MeviveIntl"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li>
										<a
											href="https://in.pinterest.com/meviveinternational/"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fa fa-pinterest"></i>
										</a>
									</li>
								</ul>
								<br />
								<h4>Connect with us</h4>
								<img
									src="/images/connect-with-us-linktree-mevive-international-food-ingredients.webp"
									alt="Whatsapp Chat - QR Code"
									className="img-responsive"
									width={130}
								/>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
