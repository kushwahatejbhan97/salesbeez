import React from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io';
import { BsHouseDoor } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  return (
    <>
    <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
            <div className="col-12">
                <div className="breadscrumb-contain">
                <h2>Wishlist</h2>
                <nav>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                      <Link to="/">
                          <BsHouseDoor className='mb-1 mx-1' />
                      </Link>
                      </li>
                    </ol>
                </nav>
                </div>
            </div>
            </div>
        </div>
    </section>

    <section className="wishlist-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-sm-3 g-2">
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                  <div className="product-box-3 h-100">
                  <div className="product-header">
                      <div className="product-image">
                      <a href="product-left-thumbnail.html">
                          <img src="../assets/images/cake/product/2.png" className="img-fluid blur-up lazyload" alt />
                      </a>
                      <div className="product-header-top">
                          <button className="btn wishlist-button close_button">
                          <IoMdClose data-feather="x" />
                          </button>
                      </div>
                      </div>
                  </div>
                  <div className="product-footer">
                      <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                          <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                      </a>
                      <h6 className="unit mt-1">250 ml</h6>
                      <h5 className="price">
                          <span className="theme-color">₹08.02</span>
                          <del>₹15.15</del>
                      </h5>
                      <div className="add-to-cart-box bg-white mt-2">
                          <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                              <i className="fa-solid fa-plus" />
                          </span>
                          </button>
                          <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                              <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                  <div className="product-box-3 h-100">
                  <div className="product-header">
                      <div className="product-image">
                      <a href="product-left-thumbnail.html">
                          <img src="../assets/images/cake/product/3.png" className="img-fluid blur-up lazyload" alt />
                      </a>
                      <div className="product-header-top">
                          <button className="btn wishlist-button close_button">
                          <IoMdClose data-feather="x" />
                          </button>
                      </div>
                      </div>
                  </div>
                  <div className="product-footer">
                      <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                          <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                      </a>
                      <h6 className="unit mt-1">350 G</h6>
                      <h5 className="price">
                          <span className="theme-color">₹04.33</span>
                          <del>₹10.36</del>
                      </h5>
                      <div className="add-to-cart-box bg-white mt-2">
                          <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                              <i className="fa-solid fa-plus" />
                          </span>
                          </button>
                          <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                              <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                  <div className="product-box-3 h-100">
                  <div className="product-header">
                      <div className="product-image">
                      <a href="product-left-thumbnail.html">
                          <img src="../assets/images/cake/product/4.png" className="img-fluid blur-up lazyload" alt />
                      </a>
                      <div className="product-header-top">
                          <button className="btn wishlist-button close_button">
                          <IoMdClose data-feather="x" />
                          </button>
                      </div>
                      </div>
                  </div>
                  <div className="product-footer">
                      <div className="product-detail">
                      <span className="span-name">Snacks</span>
                      <a href="product-left-thumbnail.html">
                          <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                      </a>
                      <h6 className="unit mt-1">570 G</h6>
                      <h5 className="price">
                          <span className="theme-color">₹12.52</span>
                          <del>₹13.62</del>
                      </h5>
                      <div className="add-to-cart-box bg-white mt-2">
                          <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                              <i className="fa-solid fa-plus" />
                          </span>
                          </button>
                          <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                              <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                  <div className="product-box-3 h-100">
                  <div className="product-header">
                      <div className="product-image">
                      <a href="product-left-thumbnail.html">
                          <img src="../assets/images/cake/product/5.png" className="img-fluid blur-up lazyload" alt />
                      </a>
                      <div className="product-header-top">
                          <button className="btn wishlist-button close_button">
                          <IoMdClose data-feather="x" />
                          </button>
                      </div>
                      </div>
                  </div>
                  <div className="product-footer">
                      <div className="product-detail">
                      <span className="span-name">Snacks</span>
                      <a href="product-left-thumbnail.html">
                          <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                      </a>
                      <h6 className="unit mt-1">100 G</h6>
                      <h5 className="price">
                          <span className="theme-color">₹10.25</span>
                          <del>₹12.36</del>
                      </h5>
                      <div className="add-to-cart-box bg-white mt-2">
                          <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                              <i className="fa-solid fa-plus" />
                          </span>
                          </button>
                          <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                              <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                  <div className="product-box-3 h-100">
                  <div className="product-header">
                      <div className="product-image">
                      <a href="product-left-thumbnail.html">
                          <img src="../assets/images/cake/product/6.png" className="img-fluid blur-up lazyload" alt />
                      </a>
                      <div className="product-header-top">
                          <button className="btn wishlist-button close_button">
                          <IoMdClose data-feather="x" />
                          </button>
                      </div>
                      </div>
                  </div>
                  <div className="product-footer">
                      <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                          <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                      </a>
                      <h6 className="unit mt-1">550 G</h6>
                      <h5 className="price">
                          <span className="theme-color">₹14.25</span>
                          <del>₹16.57</del>
                      </h5>
                      <div className="add-to-cart-box bg-white mt-2">
                          <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                              <i className="fa-solid fa-plus" />
                          </span>
                          </button>
                          <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                              <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                  <div className="product-box-3 h-100">
                  <div className="product-header">
                      <div className="product-image">
                      <a href="product-left-thumbnail.html">
                          <img src="../assets/images/cake/product/7.png" className="img-fluid blur-up lazyload" alt />
                      </a>
                      <div className="product-header-top">
                          <button className="btn wishlist-button close_button">
                          <IoMdClose data-feather="x" />
                          </button>
                      </div>
                      </div>
                  </div>
                  <div className="product-footer">
                      <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                          <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                      </a>
                      <h6 className="unit mt-1">1 Kg</h6>
                      <h5 className="price">
                          <span className="theme-color">₹12.68</span>
                          <del>₹14.69</del>
                      </h5>
                      <div className="add-to-cart-box bg-white mt-2">
                          <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                              <i className="fa-solid fa-plus" />
                          </span>
                          </button>
                          <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                              <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                  <div className="product-box-3 h-100">
                  <div className="product-header">
                      <div className="product-image">
                      <a href="product-left-thumbnail.html">
                          <img src="../assets/images/cake/product/2.png" className="img-fluid blur-up lazyload" alt />
                      </a>
                      <div className="product-header-top">
                          <button className="btn wishlist-button close_button">
                          <IoMdClose data-feather="x" />
                          </button>
                      </div>
                      </div>
                  </div>
                  <div className="product-footer">
                      <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                          <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                      </a>
                      <h6 className="unit mt-1">250 ml</h6>
                      <h5 className="price">
                          <span className="theme-color">₹08.02</span>
                          <del>₹15.15</del>
                      </h5>
                      <div className="add-to-cart-box bg-white mt-2">
                          <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                              <i className="fa-solid fa-plus" />
                          </span>
                          </button>
                          <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                              <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                  <div className="product-box-3 h-100">
                  <div className="product-header">
                      <div className="product-image">
                      <a href="product-left-thumbnail.html">
                          <img src="../assets/images/cake/product/3.png" className="img-fluid blur-up lazyload" alt />
                      </a>
                      <div className="product-header-top">
                          <button className="btn wishlist-button close_button">
                          <IoMdClose data-feather="x" />
                          </button>
                      </div>
                      </div>
                  </div>
                  <div className="product-footer">
                      <div className="product-detail">
                      <span className="span-name">Vegetable</span>
                      <a href="product-left-thumbnail.html">
                          <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                      </a>
                      <h6 className="unit mt-1">350 G</h6>
                      <h5 className="price">
                          <span className="theme-color">₹04.33</span>
                          <del>₹10.36</del>
                      </h5>
                      <div className="add-to-cart-box bg-white mt-2">
                          <button className="btn btn-add-cart addcart-button">Add
                          <span className="add-icon bg-light-gray">
                              <i className="fa-solid fa-plus" />
                          </span>
                          </button>
                          <div className="cart_qty qty-box">
                          <div className="input-group bg-white">
                              <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                              <i className="fa fa-minus" aria-hidden="true" />
                              </button>
                              <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                              <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                              <i className="fa fa-plus" aria-hidden="true" />
                              </button>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Wishlist