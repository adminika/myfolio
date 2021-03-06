import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Главная" />
    <header className={styles.header}>
      <section>
        <h1>Пономарёв Николай</h1>
        <h6>Front-end developer</h6>
        <p>
          Выберите себе работу по душе, и вам не придётся работать ни одного дня
          в своей жизни.
          <br />― Конфуций
        </p>
      </section>
    </header>
    <main className={styles.container}>
      <div className={styles.aboutContainer}>
        <p>Приветствую Вас, на моём сайте !</p>
        <p>
          Я Front-End developer / Верстальщик. Получаю удовольствие от создания
          чистых, функциональных и оптимизированных сайтов !
        </p>
        <p>
          Мой предыдущий опыт работы был далек от IT сферы. Параллельно с
          работой, я начал изучать Frontend технологии. В процессе учебы, я
          понял, что IT-отрасль мне очень интересна, что максимально эффективным
          я могу быть только здесь. И свою профессиональную деятельность я хочу
          связать только с миром Frontend-разработок.
        </p>
        <ul>
          <li>
            Закончил интенсивы на HTML Academy. (Базовый HTML и CSS, Продвинутый
            курс по HTML и CSS){" "}
          </li>
          <li>Прошёл курсы Flexbox, CSS Grid верстки в WebForMySelf. </li>
          <li>
            Получил базовые знания работы с Photoshop, Figma. Нарезка графики,
            работа с SVG-графикой, шрифтами, спрайтами.
          </li>
          <li>
            Верстаю PSD макеты с нуля. Чтение чужого кода не вызывает
            затруднений.
          </li>
          <li>Придерживаюсь код-гайдам, методологии БЭМ.</li>
          <li>
            Кроссбраузерная верстка IE11+, семантическая верстка. Адаптивная
            верстка под мобильные телефоны, планшеты.
          </li>
          <li>Знание технологии Pixel Perfect.</li>
          <li>
            Владение Gulp, подключение плагинов, сборка и автоматизации простых
            проектов. Для работы использую Git.
          </li>
          <li>
            Анимация, плавные переходы, двумерные трансформации (CSS3).
            Препроцессоры SASS/SCSS.
          </li>
          <li>Начальные знания JavaScript.</li>
          <li>Понимание DOM.</li>
          <li>
            Понимание эволюции верстки: Табличной, inline-block, float, flexbox.
          </li>
        </ul>
        <p>
          В данный момент прохожу курсы JavaScript. Изучаю оптимизацию векторной
          графики, построение svg-библиотек. В свободное время учу английский
          язык, осваиваю экосистему JavaScript, ищу новые подходы и решения для
          лучшей реализации задач.
        </p>
        <p>
          Цель - стать полноценным frontend разработчиком, развиваться дальше,
          изучать новые фреймворки.
        </p>
        <p>
          Верю в постоянное обучение, которое всё больше и больше улучшает мои
          навыки программирования !!!
        </p>
      </div>
    </main>
  </Layout>
)

export default IndexPage
