/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// Core
import { number, func } from 'prop-types';
import React, { PureComponent } from 'react';
import Typed from 'react-typed';

class Girls extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      girls: [
        {
          id: 1,
          src: '/img/pand_idle.png',
          name: 'Пандемоника',
          message: ['Добрый день, Евгения Бойкова...', 'Секунду...', 'Бойко', 'Прошу прощения за столь нелепую ошибку. Я Пандемоника. Сейчас я расскажу вам, как играть в эту невероятную игру. Чтобы продолжить нажмите на экран.'],
          gamePoint: false,
        },
        {
          id: 2,
          src: '/img/pand_idle.png',
          name: 'Пандемоника',
          message: ['Замечательно, вы справились с этой задачей. В дальнейшем продолжайте в том же духе.'],
          gamePoint: false,
        },
        {
          id: 3,
          src: '/img/pand_flust.png',
          name: 'Пандемоника',
          message: ['Седьмое пекло... Это утомляет... Ты не представляешь сколько я тебя ждала, тебе стоит следить за временем.'],
          gamePoint: false,
        },
        {
          id: 4,
          src: '',
          name: 'Пандемоника',
          message: ['Я отойду на минутку...'],
          gamePoint: false,
        },
        {
          id: 5,
          src: '/img/pand_drink.png',
          name: 'Пандемоника',
          message: ['...'],
          gamePoint: false,
        },
        {
          id: 6,
          src: '/img/pand_cup.png',
          name: 'Пандемоника',
          message: ['Так то лучше... Этот прекрасный вкус страданий черных, собиравших эти кофейные зерна...'],
          gamePoint: false,
        },
        {
          id: 7,
          src: '/img/pand_cup.png',
          name: 'Пандемоника',
          message: ['О чём это я? Ах да, тебе предстоит пройти ряд испытаный, чтобы доказать, что ты именно та Женя.'],
          gamePoint: false,
        },
        {
          id: 8,
          src: '/img/pand_cup.png',
          name: 'Пандемоника',
          message: ['Думаю, ты уже догадалась с чем связано первое испытание. Как будешь готова жми на экран, а я пойду ещё кофейку накачаю.'],
          gamePoint: true,
        },
        {
          id: 9,
          src: '/img/pandS_drink.png',
          name: 'Кофемоника',
          message: ['...'],
          gamePoint: false,
        },
        {
          id: 10,
          src: '/img/pandS_cup.png',
          name: 'Кофемоника',
          message: ['Моя прелесть...'],
          gamePoint: false,
        },
        {
          id: 11,
          src: '/img/pandS_idle.png',
          name: 'Кофемоника',
          message: ['Хм... Возможно, ты именно та за кого себя выдаешь. Кофе есть начало и конец, альфа и омега, протон и электрон, обычный человек и негр...'],
          gamePoint: false,
        },
        {
          id: 12,
          src: '/img/pandS_idle.png',
          name: 'Кофемоника',
          message: ['Полагаю, ты поняла. Была рада знакомству, а теперь отпраляйся дальше, а меня ждёт кофе.'],
          gamePoint: false,
        },
        {
          id: 13,
          src: '/img/cer_happy.png',
          name: 'Цербер',
          message: ['Привет, ЖеНя!'],
          gamePoint: false,
        },
        {
          id: 14,
          src: '/img/cer_idle.png',
          name: 'Цербер',
          message: ['Или НежеНя. Хи-хи. Нам ещё предстоит выяснить ты ли это. Нас зовут - Цербер. Давай поиграем? *Нюх-нюх* Ты человек или кофе?'],
          gamePoint: false,
        },
        {
          id: 15,
          src: '/img/cer_idle.png',
          name: 'Цербер',
          message: ['НеважНя! Давай поиграем? Нам сказали, что ты любишь пёсиков! Тут неподалёку на детской площадке гуляет сиба...'],
          gamePoint: false,
        },
        {
          id: 16,
          src: '/img/cer_idle.png',
          name: 'Цербер',
          message: ['Попробуй поймать его!'],
          gamePoint: true,
        },
        {
          id: 17,
          src: '/img/LH_angry.png',
          name: 'Люцифер',
          message: ['Отвали от Электродерли! Цербер, какого хрена ты ей позволяешь!...'],
          gamePoint: false,
        },
        {
          id: 18,
          src: '/img/cer_bad.png',
          name: 'Цербер',
          message: ['Это было близко... Люся очень не довольна...'],
          gamePoint: false,
        },
        {
          id: 19,
          src: '/img/cer_bad.png',
          name: 'Цербер',
          message: ['Знаешь... Воровать чужих питомцев не очень хорошо, но...'],
          gamePoint: false,
        },
        {
          id: 20,
          src: '/img/cer_idle.png',
          name: 'Цербер',
          message: ['И в такой ситуации есть выход! Хи-хи. Если у пёсика нет хозяиНя, то его можно приютить. Поэтому, в следующий раз используй бутылку!'],
          gamePoint: false,
        },
        {
          id: 21,
          src: '/img/cer_happy.png',
          name: 'Цербер',
          message: ['Было весело, но нам нужно бежать! Азазель расскажет тебе о последнем испытании.'],
          gamePoint: false,
        },
        {
          id: 22,
          src: '/img/az_shock.png',
          name: 'Азазель',
          message: ['Куда катится моя жизнь... Я учавствую в недовизуальной новелле... Надо было ехать в старый лагерь...'],
          gamePoint: false,
        },
        {
          id: 23,
          src: '/img/az_idle.png',
          name: 'Азазель',
          message: ['О! Ты уже здесь? Я тебя не заметила. Что ж, зовут меня Азазель, все мои регалии можешь изучить на Википедии позже, а сейчас перейдем к последнему и самому важному испытанию!'],
          gamePoint: false,
        },
        {
          id: 24,
          src: '/img/az_idle.png',
          name: 'Азазель',
          message: ['Кстати, ты не забыла попить воды? И выпрями спину!'],
          gamePoint: false,
        },
        {
          id: 25,
          src: '/img/az_note.png',
          name: 'Азазель',
          message: ['И так, тебе предстоит ответить на очень сложный вопрос, который подготовил автор. Ты готова?'],
          gamePoint: true,
        },
        {
          id: 26,
          src: '/img/az_shock.png',
          name: 'Азазель',
          message: ['Такой креатив...'],
          gamePoint: false,
        },
        {
          id: 27,
          src: '/img/az_shock.png',
          name: 'Азазель',
          message: ['Поздравляю... Ты прошла все испытания, тебя ждет Люцифер... Я пока тут постою...'],
          gamePoint: false,
        },
        {
          id: 28,
          src: '/img/LW_pc.png',
          name: 'Люцифер',
          message: ['Добавить сгущенку или варенье? А может нутеллу бахнуть... И так сойдет.'],
          gamePoint: false,
        },
        {
          id: 29,
          src: '/img/LW_yum.png',
          name: 'Люцифер',
          message: ['*Ням*'],
          gamePoint: false,
        },
        {
          id: 30,
          src: '/img/LW_talk.png',
          name: 'Люцифер',
          message: ['А это ты. *Хрум-хрум* Ну, здравствуй, Женя.'],
          gamePoint: false,
        },
        {
          id: 31,
          src: '/img/LW_unsure.png',
          name: 'Люцифер',
          message: ['Подожди. Это не ты случаем хотела украсть мою Электродрель? Ты понимаешь, что у неё теперь душевная травма?'],
          gamePoint: false,
        },
        {
          id: 32,
          src: '/img/LW_unsure.png',
          name: 'Люцифер',
          message: ['Ладно, я тебя прощаю, ведь у меня есть блинчики. Ты хочешь узнать зачем ты здесь?'],
          gamePoint: false,
        },
        {
          id: 33,
          src: '/img/LW_pc.png',
          name: 'Люцифер',
          message: ['Ответ просто - *Придумать обоснование сюжетной дыры*'],
          gamePoint: false,
        },
        {
          id: 34,
          src: '/img/LW_pc.png',
          name: 'Люцифер',
          message: ['Как-то так. Автор поздравляет тебя с Днюшкой и желает тебе всего наилучшего! А я за тебя скушаю блинчик. *Хрум*'],
          gamePoint: false,
        },
        {
          id: 35,
          src: '/img/LW_yum.png',
          name: '',
          message: ['Конец'],
          gamePoint: false,
        },
      ],
    };

    this.onGirlClick = this.onGirlClick.bind(this);
  }

  onGirlClick() {
    const {
      activeIndex,
      handelIndexChange,
      handelGirlsActiveStateChange,
      handelCoffeActiveSateChange,
      handelDogeActiveSateChange,
      handelQuestionActiveSateChange,
    } = this.props;
    const { girls } = this.state;

    if (girls[activeIndex].gamePoint === true) {
      if (girls[activeIndex].id === 8) {
        handelCoffeActiveSateChange(true);
      }

      if (girls[activeIndex].id === 16) {
        handelDogeActiveSateChange(true);
      }

      if (girls[activeIndex].id === 25) {
        handelQuestionActiveSateChange(true);
      }

      handelGirlsActiveStateChange(false);
      return;
    }

    if (girls.length > activeIndex + 1) {
      handelIndexChange(activeIndex + 1);

      this.typed.reset();
      this.typed.start();
    }
  }

  render() {
    const { activeIndex } = this.props;
    const { girls } = this.state;
    const activeGirl = girls[activeIndex];

    return (
      <section className="girls" onClick={this.onGirlClick} data-aos="fade-in">
        <div className="girls__sector" />
        <figure className="girls__figure">
          {
            activeGirl.src !== '' && (
              <img className="girls__image" src={activeGirl.src} alt="" />
            )
          }
        </figure>
        <div className="girls__sector">
          <div className="girls__content">
            <p className="girls__name">{activeGirl.name}</p>
            <p className="girls__story">
              <Typed
                typedRef={(typed) => { this.typed = typed; }}
                strings={activeGirl.message}
                typeSpeed={40}
              />
            </p>
          </div>
        </div>
      </section>
    );
  }
}

Girls.propTypes = {
  activeIndex: number.isRequired,
  handelIndexChange: func.isRequired,
  handelGirlsActiveStateChange: func.isRequired,
  handelCoffeActiveSateChange: func.isRequired,
  handelDogeActiveSateChange: func.isRequired,
  handelQuestionActiveSateChange: func.isRequired,
};

export default Girls;
