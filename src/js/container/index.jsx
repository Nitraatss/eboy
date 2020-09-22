/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// Core
import React, { PureComponent } from 'react';

// Components
import Girls from '../components/girls';
import Coffee from '../components/coffee';
import Doge from '../components/doge';
import Question from '../components/question';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      girlsActive: true,
      coffeeActive: false,
      dogeActive: false,
      questionActive: false,
      activeIndex: 0,
    };

    this.handelIndexChange = this.handelIndexChange.bind(this);
    this.handelGirlsActiveStateChange = this.handelGirlsActiveStateChange.bind(this);
    this.handelCoffeActiveSateChange = this.handelCoffeActiveSateChange.bind(this);
    this.handelDogeActiveSateChange = this.handelDogeActiveSateChange.bind(this);
    this.handelQuestionActiveSateChange = this.handelQuestionActiveSateChange.bind(this);
  }

  handelIndexChange(newIndex = null) {
    const { activeIndex } = this.state;

    this.setState({
      activeIndex: newIndex === null ? activeIndex + 1 : newIndex,
    });
  }

  handelGirlsActiveStateChange(newState) {
    this.setState({
      girlsActive: newState,
    });
  }

  handelCoffeActiveSateChange(newState) {
    this.setState({
      coffeeActive: newState,
    });
  }

  handelDogeActiveSateChange(newState) {
    this.setState({
      dogeActive: newState,
    });
  }

  handelQuestionActiveSateChange(newState) {
    this.setState({
      questionActive: newState,
    });
  }

  render() {
    const {
      activeIndex,
      girlsActive,
      coffeeActive,
      dogeActive,
      questionActive,
    } = this.state;

    const girlsProps = {
      activeIndex,
      handelIndexChange: this.handelIndexChange,
      handelGirlsActiveStateChange: this.handelGirlsActiveStateChange,
      handelCoffeActiveSateChange: this.handelCoffeActiveSateChange,
      handelDogeActiveSateChange: this.handelDogeActiveSateChange,
      handelQuestionActiveSateChange: this.handelQuestionActiveSateChange,
    };

    const coffeeProps = {
      handelIndexChange: this.handelIndexChange,
      handelGirlsActiveStateChange: this.handelGirlsActiveStateChange,
      handelCoffeActiveSateChange: this.handelCoffeActiveSateChange,
    };

    const dogeProps = {
      handelIndexChange: this.handelIndexChange,
      handelGirlsActiveStateChange: this.handelGirlsActiveStateChange,
      handelDogeActiveSateChange: this.handelDogeActiveSateChange,
    };

    const questionProps = {
      handelIndexChange: this.handelIndexChange,
      handelGirlsActiveStateChange: this.handelGirlsActiveStateChange,
      handelQuestionActiveSateChange: this.handelQuestionActiveSateChange,
    };

    return (
      <main className="main-container" data-aos="fade-in">
        <h1 className="visually-hidden">Secret</h1>

        {
          girlsActive === true && (
            <Girls {...girlsProps} />
          )
        }
        {
          coffeeActive === true && (
            <Coffee {...coffeeProps} />
          )
        }
        {
          dogeActive === true && (
            <Doge {...dogeProps} />
          )
        }
        {
          questionActive === true && (
            <Question {...questionProps} />
          )
        }
      </main>
    );
  }
}

export default App;
