// Core
import { func } from 'prop-types';
import React, { PureComponent } from 'react';

class Coffee extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Действуй!',
      counter: 0,
    };

    this.onDrinkClick = this.onDrinkClick.bind(this);
    this.onPourClick = this.onPourClick.bind(this);
  }

  onDrinkClick() {
    const { handelIndexChange, handelGirlsActiveStateChange, handelCoffeActiveSateChange } = this.props;
    const { counter } = this.state;

    switch (counter) {
      case 0:
        this.setState({
          message: 'Между первой и второй перерывчик небольшой. Ещё чашечку?',
          counter: 2,
        });
        break;

      case 2:
        this.setState({
          message: 'Там где одна, там и три. Ещё чашечку?',
          counter: 5,
        });
        break;

      case 5:
        this.setState({
          message: 'Может стоит остановиться? Ещё чашечку?',
          counter: 16,
        });
        break;

      case 16:
        this.setState({
          message: 'Так много кофе, и так мало кофейн... Ещё чашечку?',
          counter: 42,
        });
        break;

      case 42:
        this.setState({
          message: 'Я есть кофе...',
          counter: 100,
        });
        break;

      default:
        handelCoffeActiveSateChange(false);
        handelIndexChange();
        handelGirlsActiveStateChange(true);
    }
  }

  onPourClick() {
    const { handelIndexChange, handelGirlsActiveStateChange, handelCoffeActiveSateChange } = this.props;
    const { counter } = this.state;

    switch (counter) {
      case 0:
        this.setState({
          message: 'Выпить, нельзя вылить. Что дальше?',
          counter: 2,
        });
        break;

      case 2:
        this.setState({
          message: 'Глупо выливать такой хороший кофе. Что дальше?',
          counter: 5,
        });
        break;

      default:
        handelCoffeActiveSateChange(false);
        handelIndexChange();
        handelGirlsActiveStateChange(true);
    }
  }

  render() {
    const { message, counter } = this.state;

    return (
      <section className="challenge" data-aos="fade-in">
        <h2 className="challenge__title">Кофейная экспертиза</h2>
        <p className="challenge__rules">Со времён начала Супернатуралов по Земле ходят легенды о том сколько кофе в день ты можешь выпить.</p>
        <div className="challenge__game">
          <p className="challenge__text">Это чашка со вкусным кофе:</p>
          <img className="challenge__coffee" src="/img/coffee.svg" width="200" height="200" alt="" />
          <p className="challenge__text">{message}</p>
          {
            counter !== 0 && (
            <p className="challenge__counter">{`Поголощено: ${counter}`}</p>
            )
          }
          <button className="challenge__button" type="button" onClick={this.onDrinkClick}>Выпить</button>
          <button className="challenge__button" type="button" onClick={this.onPourClick}>Вылить</button>
        </div>
      </section>
    );
  }
}

Coffee.propTypes = {
  handelIndexChange: func.isRequired,
  handelGirlsActiveStateChange: func.isRequired,
  handelCoffeActiveSateChange: func.isRequired,
};

export default Coffee;
