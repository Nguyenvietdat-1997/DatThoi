import React, { useState, useEffect } from 'react'
import './header.scss'
import { Link } from "react-router-dom"
import classNames from 'classnames'

import Logo from 'assets/images/logo.png'
import User from 'assets/images/user.png'
import { SearchIcon, CartIcon, CaretDownIcon, BarsIcon, CloseIcon, PlusIcon } from 'components/icons/icons'
import { HomepageCarousel } from 'components/homepage-carousel/homepage-carousel';
export const Header = () => {

  useEffect(() => {
  }, [])

  return (
    <div>
      <div className="container">
        <div className="header row">
          <div className="LoGo" >
            <img src={Logo} alt="" />
          </div>

          <div className="KhuVuc">
            <p>Chọn kho giao hàng</p>
            <select className="BoxGiaoHang">
              <option value="">Hà Nội</option>
              <option value="">Huế</option>
              <option value="">Hồ Chí Minh</option>
            </select>
          </div>

          <div className="inputHeader">
            <SearchIcon className="iconTimKiem" />
            <input type="text" name="TimKiem" id="TimKiem" placeholder="Tìm kiếm" />
          </div>

          <div className="DangNhap">
            <a href="">Đăng Ký</a>
            <span>/</span>
            <a href="">Đăng nhập</a>
          </div>

          <div className="GioHang">
            <CartIcon /><span className="SpHang">(0)</span>
          </div>
        </div>
      </div>
      <HomepageCarousel />
    </div>


  )
}
