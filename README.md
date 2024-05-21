## EN

# WATER TRACKER "AQUATRACKER"

Water Tracker is an application for tracking and analyzing water consumption.
The application allows users to enter data about their water intake, view
statistics for different periods, and receive recommendations for maintaining a
healthy hydration level.

## Features

- Registration and account management.
- Determining daily water consumption norm based on personal activity and
  physical condition.

- Entering data about water consumption.

- Displaying daily, weekly, and monthly water consumption statistics.
- Graphical representation of data.
- Viewing water consumption history. Installation and Launch

## Installation

1.  Clone the repository
    ```sh
    git clone: https://github.com/WAYLIIKE/watertrack-project-nodejs-react.git
    ```
2.  Install dependencies
    ```sh
    npm install
    ```
3.  Launch the application
    ```sh
    npm run dev
    ```

## Routing

The application uses the react-router-dom library for routing management. The
routes used in the application are described below:

1.  / - HomePage

The homepage contains the app's logo, main background image, a static list of
app benefits, dynamic display of the total number of users, and the total amount
of water consumed by all users. It includes links that redirect the user to the
registration and login pages.

![](/src/assets/img/main.jpg)

2.  /signup - SignUpPage

The registration page allows new users to create an account in the application.
It contains a form to enter the necessary information and a button to submit the
data. A notable feature is the convenient password preview functionality.

![](/src/assets/img/sign.jpg)

3.  /signin - SignInPage

The login page allows existing users to sign in to their accounts. It contains a
form to enter the email and password, along with a button to submit the data.

![](/src/assets/img/signin.jpg)

4.  /tracker - TrackerPage

The tracker page is the main functional page of the application. It allows users
to track their water consumption, view daily and monthly data, and add new water
consumption records. It includes a user panel displaying a greeting, photo,
application settings access, and the ability to set the daily water consumption
norm according to personal needs. A notable feature is the ability to view water
consumption both as a percentage and in graphical form.

![](/src/assets/img/tracker.jpg)

5. NotFoundPage

The error page, also known as the 404 page, is displayed when the user tries to
navigate to a non-existent route. It informs the user that the requested page
was not found and provides an option to return to the homepage.

![](/src/assets/img/error.jpg)

## Technologies Used

- **React**: An open-source JavaScript library for building user interfaces,
  primarily for single-page applications, where it is used for handling the view
  layer for web and mobile apps.

- **Redux**: An open-source JavaScript library for managing application state.
  It stores the state of the entire application in a single tree, making
  debugging and testing easier.

- **Recharts**: A library for creating charts and graphs.
- **date-fns**: A library for working with dates.
- **CSS Modules**: Locally-scoped CSS for components.
- **Axios**: A promise-based HTTP client for the browser and Node.js. Axios
  provides a simple-to-use library in a small package with a very extensible
  interface.
- **Vite**: A build tool that serves your code locally.
- **Node.js**: A server-side JavaScript runtime environment. Developers can use
  the same programming language for both the front-end and back-end parts of web
  applications.
- **Express**: A simple and flexible web framework for Node.js that provides
  powerful tools for creating server-side applications and APIs. Mongoose: An
  Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a
  schema-based solution for modeling application data.
- **Swagger-ui-express**: A library to integrate Swagger UI with an Express
  application, making it easy to document APIs.

  And others ...

[Link Swagger](https://server-watertrack-project-nodejs.onrender.com/api-docs/)

## OUR TEAM

Team Lead - [Valentyn Savytskyi](https://www.linkedin.com/in/wayliike/)

Scrum Muster - [Iryna Lender](www.linkedin.com/in/iryna-lender)

### Developers:

[Anna Semonenko](https://www.linkedin.com/in/anna-semonenko/)

[Dmytro Yatskovskiy](https://www.linkedin.com/in/dyatskovskiy/)

[Valentyn Hromadskyi ](https://www.linkedin.com/in/valentyn-hromadskyi/)

[Oleksii Husak ](https://www.linkedin.com/in/oleksii-husak-4ba638137/)

[Artem Skyba](https://www.linkedin.com/in/artem-skyba-a47a90275/)

[Sofiia Nadkernychna](https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEng7j0BF54s9q8CkhHMiox9Y_SC1uRRWys&keywords=sofiia%20nadkernychna&origin=RICH_QUERY_SUGGESTION&position=0&searchId=90fe6f0e-f1a4-4290-9f31-2d51160ece0d&sid=mme&spellCorrectionEnabled=false)

[Maksym Kasian](https://www.linkedin.com)

## API

[Додаток AQUATRACKER](https://wayliike.github.io/watertrack-project-nodejs-react/)

## UA

# WATER TRACKER "AQUATRACKER"

Трекер води - це додаток для відстеження та аналізу споживання води. Додаток
дозволяє користувачам вводити дані про спожиту воду, переглядати статистику за
різні періоди, а також отримувати рекомендації щодо підтримання здорового рівня
гідратації.

## Функціональні можливості

- Реэстрація власного акаунту та управління ним.
- Визначення денної норми споживання води на підставі власної активності та
  фізичної форми.
- Введення даних про споживання води.
- Відображення щоденної, щотижневої та щомісячної статистики споживання води.
- Графічне відображення даних.
- Можливість перегляду історії споживання води.

## Встановлення та запуск

1.  Клонувати репозиторій
    ```sh
    git clone: https://github.com/WAYLIIKE/watertrack-project-nodejs-react.git
    ```
2.  Встановити залежності:
    ```sh
    npm install
    ```
3.  Запустити додаток:
    ```sh
    npm run dev
    ```

## Маршрутизація

Додаток використовує бібліотеку react-router-dom для керування маршрутизацією.
Нижче описані маршрути, які використовуються в додатку:

1.  / - HomePage.

Сторінка ,що містить логотип додатку, головне фонове зображення, статичний
список переваг використання застосунку, динамічне відображення загальної
кількості користувачів та загальну кількість випитої води всіма користувачами.
Містить посилання , що перенаправляють користувача на сторінки реєстрації та
авторизації.

![](/src/assets/img/main.jpg)

2.  /signup - SignUpPage

Сторінка реєстрації дозволяє новим користувачам створити обліковий запис у
додатку. Вона містить форму для введення необхідної інформації та кнопку для
надсилання даних. Особливістю є зручний функціонал перегляду паролю

![](/src/assets/img/sign.jpg)

3. /signin - SignInPage

Сторінка авторизації дозволяє існуючим користувачам увійти до своїх облікових
записів у додатку. Вона містить форму для введення електронної пошти та пароля,а
також кнопку для надсилання даних.

![](/src/assets/img/signin.jpg)

4. /tracker - TrackerPage

Сторінка трекера є головною функціональною сторінкою додатку . Вона надає
користувачам можливість відстежувати споживання води, переглядати щоденні та
місячні дані, а також додавати нові записи про споживану воду. Містить
функціональну панель користувача, де відображається: привітання, фото,
можливість скористатися налаштуваннями додатку, та визначити добову норму
споживання води згідно з вашими потребами. Особливістю є можливість переглянути
об'єм спожитої води ,як у відсотках так і у вигляді графічних данних.

![](/src/assets/img/tracker.jpg)

5. NotFoundPage

Сторінка помилки, також відома як сторінка 404, відображається у випадках, коли
користувач намагається перейти за маршрутом, який не існує. Вона повідомляє
користувача про те, що запитана сторінка не знайдена, і надає можливість
повернутися на головну сторінку.

![](/src/assets/img/error.jpg)

## Використані технології

- **React**: відкрита JavaScript бібліотека для створення інтерфейсів
  користувача, яка покликана вирішувати проблеми часткового оновлення вмісту
  вебсторінки, з якими стикаються в розробці односторінкових застосунків

- **Redux**: відкрита JavaScript бібліотека призначена для керування станом
  програм JavaScript.Redux зберігає стан всього застосунку в дереві об'єктів в
  одному сховищі. Одне дерево станів полегшує налагодження або перевірку
  програми; це також дозволяє зберігати стан вашого застосунку в процесі
  розробки, для прискорення циклу розробки.
- **Recharts**: Бібліотека для створення графіків і діаграм.
- **date-fns**: Бібліотека для роботи з датами.
- **CSS Modules**: Локально-обмежені стилі для компонентів
- **Axios**: HTTP-клієнт для браузера та node.js на основі Promise. Axios надає
  просту у використанні бібліотеку в невеликому пакеті з дуже розширюваним
  інтерфейсом.
- **Vite**: це локальний сервер розробки.
- **Node.js** :це середовище виконання JavaScript на стороні сервера. Pозробники
  можуть використовувати ту саму мову програмування як для front-end, так і для
  back-end частини вебзастосунків, над якими вони працюють.
- **Express**: Простий і гнучкий веб-фреймворк для Node.js, який забезпечує
  потужні можливості для створення серверних додатків та API.
- **Mongoose**: Об'єктно-документний маппер (ODM) для MongoDB, який дозволяє
  легко працювати з базами даних, використовуючи схеми та моделі.
- **Swagger-ui-express**: Бібліотека для інтеграції Swagger UI з Express
  додатком, що дозволяє легко документувати API.

[Посилання на Swagger](https://server-watertrack-project-nodejs.onrender.com/api-docs/)

## Команда розробників

Team Lead - [Valentyn Savytskyi](https://www.linkedin.com/in/wayliike/)

Scrum Muster - [Iryna Lender](www.linkedin.com/in/iryna-lender)

### Developers:

[Anna Semonenko](https://www.linkedin.com/in/anna-semonenko/)

[Dmytro Yatskovskiy](https://www.linkedin.com/in/dyatskovskiy/)

[Valentyn Hromadskyi ](https://www.linkedin.com/in/valentyn-hromadskyi/)

[Oleksii Husak ](https://www.linkedin.com/in/oleksii-husak-4ba638137/)

[Artem Skyba](https://www.linkedin.com/in/artem-skyba-a47a90275/)

[Sofiia Nadkernychna](https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEng7j0BF54s9q8CkhHMiox9Y_SC1uRRWys&keywords=sofiia%20nadkernychna&origin=RICH_QUERY_SUGGESTION&position=0&searchId=90fe6f0e-f1a4-4290-9f31-2d51160ece0d&sid=mme&spellCorrectionEnabled=false)

[Maksym Kasian](https://www.linkedin.com)

## API

[Додаток AQUATRACKER](https://wayliike.github.io/watertrack-project-nodejs-react/)
