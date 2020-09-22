/* eslint-disable default-case */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable class-methods-use-this */
// Core
import { func } from 'prop-types';
import React, { PureComponent } from 'react';

class Doge extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Хватай сибу!',
      dogePosition: 5,
      counter: 1,
    };

    this.randomIntFromInterval = this.randomIntFromInterval.bind(this);
    this.onDogeClick = this.onDogeClick.bind(this);
  }

  onDogeClick() {
    const {
      handelDogeActiveSateChange,
      handelIndexChange,
      handelGirlsActiveStateChange,
    } = this.props;
    const { dogePosition, counter } = this.state;
    let newPosition = this.randomIntFromInterval(1, 9);

    while (newPosition === dogePosition) {
      newPosition = this.randomIntFromInterval(1, 9);
    }

    switch (counter) {
      case 1:
        this.setState({
          message: 'Попробуй ещё раз!',
        });
        break;

      case 2:
        this.setState({
          message: 'Он быстр...',
        });
        break;

      case 3:
        this.setState({
          message: 'Стой, чертяга!',
        });
        break;

      case 4:
        this.setState({
          message: 'Себяшка была так близко...',
        });
        break;

      case 5:
        this.setState({
          message: 'У меня плохое предчувствие...',
        });
        break;

      case 6:
        this.setState({
          message: 'Приближается хозяин! Последний шанс!',
        });
        break;

      default:
        handelDogeActiveSateChange(false);
        handelIndexChange();
        handelGirlsActiveStateChange(true);
    }

    this.setState({
      counter: counter + 1,
      dogePosition: newPosition,
    });
  }

  randomIntFromInterval(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
  }

  render() {
    const { message, dogePosition } = this.state;

    return (
      <section className="challenge" data-aos="fade-in">
        <h2 className="challenge__title">Поймай пёселя</h2>
        <p className="challenge__rules">Хозяин ушел! Есть возможность обзавестить собакеном. Действуй!</p>
        <div className="challenge__game">
          <div className="challenge__sandbox">
            <span />
            <span />
            <span />
            <img className={`challenge__doge challenge__doge--${dogePosition}`} src="/img/doge.png" width="100" height="100" alt="" onClick={this.onDogeClick} />
          </div>
          <p className="challenge__text">{message}</p>
        </div>
      </section>
    );
  }
}

Doge.propTypes = {
  handelIndexChange: func.isRequired,
  handelGirlsActiveStateChange: func.isRequired,
  handelDogeActiveSateChange: func.isRequired,
};

export default Doge;
