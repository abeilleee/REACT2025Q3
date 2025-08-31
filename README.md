# React Perfomance

## 📖 Description

The application is created as a part of the REACT2025Q3 course

## 📈 Performance Profiling

This section outlines the performance improvements achieved through optimization efforts, including before-and-after screenshots from the React Profiler.

### Modal component

_Before optimization_

- Commit Duration: 3.1s
- Render Duration: 381.7ms

![Modal-before](public/modal.png)

_After optimization_

- Commit Duration: 1.3s
- Render Duration: 311.6ms

![Modal-after](public/modal-after.png)
![Modal-after1](public/modal-after1.png)

### Select year

_Before optimization_

- Commit Duration: 4.2s
- Render Duration: 412.8ms

![Select-year-before](public/select-year-before.png)

_After optimization_

- Commit Duration: 3.2s
- Render Duration: 357.2ms

![Select-year-after](public/select-year-after.png)
![Select-year-after1](public/select-year-after1.png)

### Searching a country

_Before optimization_

- Commit Duration: 1.8s
- Render Duration: 82.5ms

![Search-before](public/search-before1.png)
![Search-before2](public/search-before2.png)

_After optimization_

- Commit Duration: 1.2s
- Render Duration: 78.3ms

![Search-after](public/search-after1.png)

### Adding/removing columns

_Before optimization_

- Commit Duration: 1.5s
- Render Duration: 249.1ms

![Table-before](public/table-before.png)
![Table-before2](public/table-before1.png)

_After optimization_

- Commit Duration: 1.3s
- Render Duration: 172ms

![Table-after](public/table-after.png)
![Table-after](public/table-after1.png)

## 🛠️ Technologies

[![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Husky](https://img.shields.io/badge/husky-DD0700?style=for-the-badge&logo=&logoColor=white)](https://typicode.github.io/husky/#/)
[![Eslint](https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)
[![Lint Staged](https://img.shields.io/badge/lint--staged-blueviolet?style=for-the-badge&logo=git&logoColor=white)](https://github.com/okonet/lint-staged)
[![Commitlint](https://img.shields.io/badge/commitlint-000000?style=for-the-badge&logo=commitlint&logoColor=white)](https://commitlint.js.org/#/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## 🎯 Requirements

- [React Performance](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/performance.md)

## 💻 Available Scripts

- `npm run dev` - run the application in development mode using Vite
- `npm run build` - build the production version of the application
- `npm run lint` - run ESLint to check for code style issues and errors
- `npm run prepare` - set up Husky Git hooks (automatically called by npm on install)
- `npm run format:fix` - format code automatically using Prettier
- `npm run commitlint` - validate commit messages against conventional commit rules
- `npm run preview` - preview the production build locally on a dev server

# 🚀 Installation

1. Clone the repository on your computer

```bash
git clone https://github.com/abeilleee/REACT2025Q3.git
```

2. Install all dependencies

```bash
npm install
```

3. Switch to the branch

```bash
git checkout perfomance
```

4. Run the application in the development mode

```bash
npm run dev
```
