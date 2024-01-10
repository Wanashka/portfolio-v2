import {createSlice} from '@reduxjs/toolkit';
import todoJS from '../../sourse/image/todo_js.png';
import todoReact from '../../sourse/image/todo_react.png';
import layoutWelbex from '../../sourse/image/layout-welbex.jpg';
import portfolioV1 from "../../sourse/image/portfolioV1.png";
import portfolioV2 from "../../sourse/image/portfolioV2.png";
import clinic from "../../sourse/image/clinic.png"

const initialState = {
    project: [
        {
            id: 1,
            title: 'Todo React',
            description: [
                "Это приложение на React для создания и управления задачами. " +
                "Создавайте, редактируйте и управляйте задачами, указывая описания, время выполнения и приоритет. " +
                "Индикаторы времени и приоритета делают управление процессом эффективным. " +
                "Просматривайте и редактируйте задачи, ищите по названию, а также перемещайте их между вкладками с помощью drag and drop."
            ],
            image: todoReact,
            site: 'https://wanashka.github.io/todolist-react/',
            Github: 'https://github.com/Wanashka/todolist-react',
            skills: ["ReactJS", "Redux", "CSS-modules", "HTML5"],
        },
        {
            id: 2,
            title: 'Todo JS',
            description: [
                "Проект представляет собой эффективное приложение для управления задачами. " +
                "Реализовано на ванильном JS Вы можете создавать задачи с описанием и указывать время выполнения. " +
                "Задачи могут быть легко редактированы, отмечены как выполненные, а выполненные могут быть удалены. " +
                "Поиск, фильтрация по статусу и пагинация обеспечивают удобство использования. " +
                "Данные сохраняются, что делает приложение практичным и функциональным инструментом для организации задач."
            ],
            image: todoJS,
            site: 'https://wanashka.github.io/TodoJS/',
            Github: 'https://github.com/Wanashka/TodoJS',
            skills: ["JavaScript", "CSS", "HTML5"],
        },
        {
            id: 3,
            title: 'Адаптивная верстка сайта',
            description: [
                "Адаптивный сайт обеспечивает комфортное взаимодействие с контентом на любом устройстве. " +
                "Сайт автоматически регулирует свою структуру и внешний вид для разных экранов, " +
                "обеспечивая удобный просмотр и навигацию на компьютерах, планшетах и мобильных устройствах. " +
                "Интуитивная навигация и оптимизированный пользовательский интерфейс делают взаимодействие с сайтом удовольствием.",
            ],
            image: layoutWelbex,
            site: 'https://wanashka.github.io/adaptive-site-layout-test-/',
            Github: 'https://github.com/Wanashka/adaptive-site-layout-test-',
            skills: ["CSS-modules", "HTML5"],
        },
        {
            id: 4,
            title: 'Портфолио V1',
            description: [
                "Мое первое портфолио - это отпечаток моего начального пути в веб-разработке. " +
                "Хотя его дизайн может показаться простым, " +
                "каждая страница воплощает мои первые усилия в освоении различных технологий" +
                " и создании интерактивных веб-сайтов."],
            image: portfolioV1,
            site: 'https://wanashka.github.io/portfolio/',
            Github: 'https://github.com/Wanashka/portfolio',
            skills: ["CSS-modules", "HTML5", "ReactJS", "Redux"],
        },
        {
            id: 5,
            title: 'Портфолио V2',
            description: [

                "Мое второе портфолио - это тщательно разработанный веб-сайт, объединяющий стиль и технологии. " +
                "С его минималистичным, но элегантным дизайном, " +
                "портфолио демонстрирует не только мои навыки в веб-разработке, " +
                "но и мой профессионализм в создании пользовательских интерфейсов. " +
                "Каждая секция сайта подчеркивает мои проекты и технологические достижения, " +
                "предоставляя посетителям полноценный обзор моих навыков и креативного подхода к работе."],
            image: portfolioV2,
            site: '@',
            Github: 'https://github.com/Wanashka/portfolio-v2',
            skills: ["CSS-modules", "HTML5", "ReactJS", "Redux", "TypeScript"],
        },
        {
            id: 6,
            title: 'Сайт клиники',
            description: [
                "Я разработал адаптивный сайт для клиники с использованием методологии БЭМ " +
                "и внедрил слайдер для улучшения визуального опыта пользователей."],
            image: clinic,
            site: 'https://wanashka.github.io/clinic-s-website/',
            Github: 'https://github.com/Wanashka/clinic-s-website',
            skills: ["CSS", "HTML5", "JavaScript", "БЭМ"],
        },
    ],
    value: 0,
}
export const projectReducer = createSlice({
    name: 'project',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const {increment, decrement, incrementByAmount} = projectReducer.actions

export default projectReducer.reducer;
