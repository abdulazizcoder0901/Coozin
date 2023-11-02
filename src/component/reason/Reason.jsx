import React from "react";
import "./Reason.css";

export default function Reason() {
  return (
    <div className="reason container">
      <p className="reason-title">Почему Сооzin?</p>
      <div className="reason-cards">
        <div className="reason-card">
          <div className="reason-card__img">
            <img src="./assets/1.png" alt="" />
          </div>
          <p className="reason-card__title">Универсальная платформа</p>
          <p className="reason-card__text">Предназначенная для самозанятых женщин превратить свое хобби в прибыльный бизнес</p>
        </div>
        <div className="reason-card">
          <div className="reason-card__img">
            <img src="./assets/2.png" alt="" />
          </div>
          <p className="reason-card__title">Обучение и бизнес</p>
          <p className="reason-card__text">Женщины экономят время и ресурсы, которые могут быть направлены на развитие своего бизнеса</p>
        </div>
        <div className="reason-card">
          <div className="reason-card__img">
            <img src="./assets/3.png" alt="" />
          </div>
          <p className="reason-card__title">Дополнительный заработок</p>
          <p className="reason-card__text">Домохозяйки могут стать партнерами нашего проекта и получить инструменты для управления своим бизнесом.</p>
        </div>
      </div>
    </div>
  );
}
