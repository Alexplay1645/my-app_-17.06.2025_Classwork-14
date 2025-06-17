// Задание 1

// Реализуйте приложение, которое при нажатии на кнопку меняет цвет фона и текста.
// Должно быть создано три кнопки с разными вариантами цветов.
//  Используйте стили и функциональные компоненты.


import React, { useState } from "react";

function App() {
  const [colors, setColors] = useState({ background: "white", color: "black" });

  return (
    <div
      style={{ 
        background: colors.background, 
        color: colors.color, 
        padding: "20px", 
        textAlign: "center", 
        minHeight: "100vh" 
      }}
    >
      <h1>Нажмите на кнопку, чтобы изменить цвет Фона и самого Текста</h1>

      <button onClick={() => setColors({ background: "red", color: "yellow" })}>
        Красный
      </button>

      <button onClick={() => setColors({ background: "green", color: "lightgreen" })}>
        Зелёный
      </button>

      <button onClick={() => setColors({ background: "blue", color: "orange" })}>
        Синий
      </button>
      
    </div>
  )
}

export default App;



// Задание 2

// Создайте приложение «Великий человек».
// Приложение должно отображать информацию об этом человеке: ФИО, дату рождения, портрет, краткую биографию.
// Разбейте приложение на компоненты. Обязательно используйте классовые компоненты.


// import React, { Component } from "react";

// class Picture extends Component {
//   render() {
//     return <img src={this.props.src} alt="portrait" style={{ width: "500px", borderRadius: "10px" }}/>
//   }
// }

// class FullName extends Component {
//   render() {
//     return <h1>{this.props.name}</h1>;
//   }
// }

// class BirthDate extends Component {
//   render() {
//     return <p>Дата рождения: {this.props.date}</p>;
//   }
// }

// class Biography extends Component {
//   render() {
//     return <p>{this.props.text}</p>;
//   }
// }

// class App extends Component {
//   render() {
//     const person = {
//       name: "Mr.Beast(Джимми Дональдсон)",
//       birthDate: "7 мая 1998 года",
//       photo: "MrBeast.jpg",
//       biography: "Мистер Бист(Джимми Дональдсон) - это всемирный и очень популярный Ютубер из США, известен блогодаря своими масштабными челенджами, розыграшами денег и добрыми делами"
//     };
  
//     return (
//       <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
//         <Picture src={person.photo} />
//         <FullName name={person.name} />
//         <BirthDate date={person.birthDate} />
//         <Biography text={person.biography} />
//       </div>
//     )
//   }
// }

// export default App;



// Задание 3

// Измените первое задание, реализовав его через классо-вые компоненты. 
// Обязательно необходимо использовать props и state.


// import React, { Component } from "react";

// class ColorButton extends Component {
//   render() {
//     return (
//       <button
//         onClick={() => this.props.onClick(this.props.bg, this.props.text)}
//         style={{ margin: "10px", padding: "10px" }}
//       >
//         {this.props.textBtn}
//       </button>
//     )
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       background: "black",
//       color: "white",
//     };
//   }
  
//   topicColors = (newBackground, newColor) => {
//     this.setState({ background: newBackground, color: newColor });
//   };
  
//   render() {
//     return (
//       <div
//         style={{ 
//           background: this.state.background, 
//           color: this.state.color, 
//           height:'100vh',
//           padding:'20px'
//         }}
//       >
//         <h1>Нажмите на кнопку, чтобы сменить тему</h1>

//         <ColorButton 
//           textBtn="Голубая тема" 
//           bg="#87CEFA" 
//           text="blue" 
//           onClick={this.topicColors} 
//         />

//         <ColorButton 
//           textBtn="Тёмно-зелёная тема" 
//           bg="darkgreen" 
//           text="yellow" 
//           onClick={this.topicColors} 
//         />

//         <ColorButton 
//           textBtn="Красное-темное тема" 
//           bg="darkred" 
//           text="orange" 
//           onClick={this.topicColors} 
//         />

//       </div>
//     )
//   }
// }

// export default App;



// Задание 4

// Создайте приложение «Цитата дня». 
// По нажатию на кнопку должна появляться цитата дня с информацией об авторе. 
// Используйте классовые компоненты, props, state и стили.



// import React, { Component } from "react";

// class Quote extends Component {
//   render() {
//     return (
//       <div style={{ padding:'20px', border:'1px solid black', margin:'20px', background:'lightyellow' }}>
//         <p style={{ fontSize:'20px', fontWeight:'bold' }}>“{this.props.text}”</p>
//         <p style={{ color:'gray' }}>{this.props.author}</p>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quotes: [
//         { text: "Не позволяй людям говорить, что ты чего‑либо не можешь.", author: "Дуэйн «Скала» Джонсон" },
//         { text: "Когда сдаешься, ты можешь потерять всё что ты имел.", author: "Миямото Мусаси - легендарный Мастер Меча из Японии" },
//         { text: "Без пота, крови и слёз не бывает побед.", author: "Кристиано Роналдо" },
//         { text: "Не смотри на препятствия, смотри на путь.", author: "Брюс Ли" },
//         { text: "Ошибаться — нормально. Главное — вставать и идти дальше.", author: "Джеки Чан" },
//         { text: "Не позволяй никому говорить, что ты недостаточно хорош.", author: "Уилл Смит" },
//         { text: "Когда кажется всё потеряно, помни: всё зависит лишь от тебя.", author: "Арнольд Шварценеггер" },
//         { text: "Готовность работать — главная черта победителя.", author: "Майкл Джордан" },
//         { text: "Не сдавайся, даже когда всё кажется невозможным.", author: "Сильвестр Сталлоне" },
//         { text: "Ошибки — лишь ступеньки на пути к успеху.", author: "Джеки Чан" }
//       ],
//       currentQuote: null
//     };
//   }
  
//   showRandomQuote = () => {
//     const { quotes } = this.state;
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     this.setState({ currentQuote: quotes[randomIndex] });
//   };
  
//   render() {
//     return (
//       <div style={{ textAlign:'center', padding:'20px' }}>
//         <h1>Цитата дня</h1>
//         <button 
//           onClick={this.showRandomQuote} 
//           style={{ padding:'10px 20px', marginBottom:'20px' }}
//         >
//           Показать цитату
//         </button>

//         {this.state.currentQuote && 
//           <Quote 
//             text={this.state.currentQuote.text} 
//             author={this.state.currentQuote.author} 
//           />}
//       </div>
//     )
//   }
// }

// export default App;
