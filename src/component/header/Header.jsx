import React from 'react'
import '@/component/header/Header.css'
import {AiOutlineCheck} from 'react-icons/ai'

export default function Header() {
  return (
    <div className="header">
        <div className="header-cards container">
          <div className="header-card__top">
            <div className="header-top__left">
              <p className="header-top__title">Раскрой свой потенциал вместе с Coozin!</p>
              <p className="header-top__text">Универсальная платформа Coozin предоставляют множество возможностей для самозанятых женщин. На платформе можно продавать товары и услуги, а также учиться новым навыкам и развивать свой бизнес</p>
              <div className='header-left__btn'>
                <button>Присоединиться</button>
              </div>
              <div className="header-top__left-bottom">
                <p className="header-top__left-title">Достижения</p>
                <div className="header-bottom__cards">
                  <div className="header-bottom__card">
                    <p className="header-bottom__card-title">1K</p>
                    <p className="header-bottom__card-text">женщин прошли обучение</p>
                  </div>
                  <div className="header-bottom__card">
                    <p className="header-bottom__card-title">130K</p>
                    <p className="header-bottom__card-text">присоединились
                      в платформу</p>
                  </div>
                  <div className="header-bottom__card">
                    <p className="header-bottom__card-title">1K</p>
                    <p className="header-bottom__card-text">пользователей платформы</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-top__right">
              <div className="header-top__right-img">
                <img src="./assets/Image 04.png" alt=""/>
                <img src="./assets/Image 03.png" alt=""/>
              </div>
              <div className="header-top__right-img">
                <img src="./assets/Image 02.png" alt=""/>
                <img src="./assets/Image 01.png" alt=""/>
              </div>
            </div>
          </div>
          <div className='header-card__bottom'>
            <div className='header-card__bottom-img'>
                <img src="./assets/Frame 812068.png" alt="" />
            </div>
            <div className='header-card__bottom-right'>
                <p className='header-card__bottom-title'>EDU COOZIN</p>
                <p className='header-card__bottom-text'>Онлайн-академия Coozin предоставляет обучение и помощь в развитии бизнеса. </p>
                <div className='header-card__bottom-lists'>
                    <div className='header-card__bottom-list'>
                        <div className='header-bottom__list-title'>
                            <AiOutlineCheck/>
                            <p>Курсы и мастер-классы</p>
                        </div>
                        <p className='header-bottom__list-text'>
                            На платформе доступны онлайн-курсы и мастер-классы по различным темам, связанным с бизнесом, такими как управление продажами, маркетинг, финансы и другие.
                        </p>
                    </div>
                    <div className='header-card__bottom-list'>
                        <div className='header-bottom__list-title'>
                            <AiOutlineCheck/>
                            <p>Опытные специалисты</p>
                        </div>
                        <p className='header-bottom__list-text'>
                            Курсы ведут опытные специалисты, которые делятся своими знаниями и опытом.
                        </p>
                    </div>
                    <div className='header-card__bottom-list'>
                        <div className='header-bottom__list-title'>
                            <AiOutlineCheck/>
                            <p>Обучись и начни свое дело</p>
                        </div>
                        <p className='header-bottom__list-text'>
                            Пользователи которые успешно прошли курсы имеют возможность присоединиться к торговой площадке Coozin.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}
