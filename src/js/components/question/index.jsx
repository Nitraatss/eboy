/* eslint-disable no-param-reassign */
// Core
import { func } from 'prop-types';
import React, { PureComponent } from 'react';

class Question extends PureComponent {
  constructor(props) {
    super(props);

    this.onButtonCLick = this.onButtonCLick.bind(this);
  }

  onButtonCLick(evtC) {
    const { handelIndexChange, handelGirlsActiveStateChange, handelQuestionActiveSateChange } = this.props;

    if (evtC.target.textContent !== 'Нью-Йорк') {
      evtC.target.textContent = 'Нью-Йорк';
    } else {
      handelQuestionActiveSateChange(false);
      handelIndexChange();
      handelGirlsActiveStateChange(true);
    }
  }

  render() {
    return (
      <section className="challenge" data-aos="fade-in">
        <h2 className="challenge__title">Судьбоносное решение</h2>
        <p className="challenge__rules">Узри же главный вопрос жизни, вселенной и всего такого. Тщательно подумай перед тем как отвечать.</p>
        <p className="challenge__text">Какой город очень не любит создатель этой игры:</p>
        <div className="challenge__game">
          <button className="challenge__button" type="button" onClick={this.onButtonCLick}>Москва</button>
          <button className="challenge__button" type="button" onClick={this.onButtonCLick}>Париж</button>
          <button className="challenge__button" type="button" onClick={this.onButtonCLick}>Лондон</button>
          <button className="challenge__button" type="button" onClick={this.onButtonCLick}>Омск</button>
          <button className="challenge__button" type="button" onClick={this.onButtonCLick}>Токио</button>
        </div>
      </section>
    );
  }
}

Question.propTypes = {
  handelIndexChange: func.isRequired,
  handelGirlsActiveStateChange: func.isRequired,
  handelQuestionActiveSateChange: func.isRequired,
};

export default Question;
