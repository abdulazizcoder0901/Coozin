"use client";
import React, { useState } from "react";
import "@/component/footer/Footer.css";
import Link from "next/link";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function Footer() {
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);

  return (
    <div className="footer container">
      <div className="footer-one">
        <div className="footer-logo">
          <Link href={"/"}>
            <img src="./assets/coozin logo 1.svg" alt="" />
          </Link>
        </div>
        <div className="footer-links">
          <Link href={"/"}>О нас</Link>
          <Link href={"/"}>Edu Coozin</Link>
          <Link href={"/"}>Почему Coozin?</Link>
          <Link href={"/"}>Присоединиться</Link>
          <Link href={"/"}>Мероприятия</Link>
        </div>
        <div className="footer-partner">
          <p className="footer-partner__text">При поддержке</p>
          <img src="./assets/Group (1).png" alt="" />
          <img src="./assets/Group (2).png" alt="" />
        </div>
        <div className="footer-social">
          <p className="footer-social__text">ПОДПИСЫВАЙТЕСЬ НА НАС</p>
          <div className="footer-line"></div>
          <div className="footer-social__icons">
            <Link href={"/"}>
              <AiOutlineInstagram />
            </Link>
            <Link href={"/"}>
              <BiLogoFacebookCircle />
            </Link>
            <Link href={"/"}>
              <AiFillYoutube />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-two">
        <div className="footer-dropdown">
          <div
            className="footer-dropdown__top"
            onClick={() => {
              setShow(!show);
            }}
          >
            <p>О нас</p>
            {show ? <BsChevronUp /> : <BsChevronDown />}
          </div>
          <div
            className={
              show
                ? "footer-dropdown__bottom active"
                : "footer-dropdown__bottom"
            }
          >
            <Link href={"/"}>О нас</Link>
            <Link href={"/"}>Edu Coozin</Link>
            <Link href={"/"}>Почему Coozin?</Link>
          </div>
        </div>
        <div className="footer-dropdown">
          <div
            className="footer-dropdown__top"
            onClick={() => {
              setShowTwo(!showTwo);
            }}
          >
            <p>Edu Coozin</p>
            {showTwo ? <BsChevronUp /> : <BsChevronDown />}
          </div>
          <div
            className={
              showTwo
                ? "footer-dropdown__bottom active"
                : "footer-dropdown__bottom"
            }
          >
            <Link href={"/"}>О нас</Link>
            <Link href={"/"}>Edu Coozin</Link>
            <Link href={"/"}>Почему Coozin?</Link>
          </div>
        </div>
        <div className="footer-dropdown">
          <div
            className="footer-dropdown__top"
            onClick={() => {
              setShowThree(!showThree);
            }}
          >
            <p>Почему Coozin?</p>
            {showThree ? <BsChevronUp /> : <BsChevronDown />}
          </div>
          <div
            className={
              showThree
                ? "footer-dropdown__bottom active"
                : "footer-dropdown__bottom"
            }
          >
            <Link href={"/"}>О нас</Link>
            <Link href={"/"}>Edu Coozin</Link>
            <Link href={"/"}>Почему Coozin?</Link>
          </div>
        </div>
        <div className="footer-dropdown">
          <div
            className="footer-dropdown__top"
            onClick={() => {
              setShowFour(!showFour);
            }}
          >
            <p>При поддержке</p>
            {showFour ? <BsChevronUp /> : <BsChevronDown />}
          </div>
          <div
            className={
              showFour
                ? "footer-dropdown__bottom active"
                : "footer-dropdown__bottom"
            }
          >
            <Link href={"/"}>О нас</Link>
            <Link href={"/"}>Edu Coozin</Link>
            <Link href={"/"}>Почему Coozin?</Link>
          </div>
        </div>
        <div className="footer-bottom__main">
          <div className="footer-social__icons">
            <Link href={"/"}>
              <AiOutlineInstagram />
            </Link>
            <Link href={"/"}>
              <BiLogoFacebookCircle />
            </Link>
            <Link href={"/"}>
              <AiFillYoutube />
            </Link>
          </div>
          <Link href={"/"}>
            <img src="./assets/coozin logo 1.svg" alt="" />
          </Link>
        </div>
      </div>
      <p className="footer-bottom__text">2023 Coozin. All Rights Reserved</p>
    </div>
  );
}
