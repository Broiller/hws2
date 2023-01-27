import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName("")


    }
    // если имя пустое - показать ошибку: setError('Ошибка! Введите имя!'),
    // иначе - добавить юзера при помощи addUserCallback и очистить инпут засетав ''
    // проверить на пустоту можно при помощи метода trim(). К примеру: name.trim() !== ''
    // ЕСЛИ НЕ БУДЕТ ПОЛУЧАТЬСЯ, НЕ РАССТРАИВАЙСЯ. НА ЧЕТВЕРТОМ ЗАНЯТИИ ПО ТУДУЛИСТУ НАУЧИМ), НО ВСЕ ТАКИ ПОПЫТАЙСЯ))
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => { // если имя пустое - показать ошибку
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if (e.key === "Enter") {
        addUser()
        console.log(e.key)

    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedNane = e.currentTarget.value.trim()

        if (trimmedNane) {
            setName(trimmedNane)
            error && setError('')
        } else {
            name && setName('')
            setError('name is require!')
        }

    }
    const addUser = () => {
        // это всего лишь функция стрелочник- она всего лишь получает
        //сигнал из компоненты <Greeting/> и вызывает pureAddUser (с кучей аргументов)
        // ЗДЕСЬ НИЧЕГО ПИСАТЬ НЕ НУЖНО-ВСЕ ОК

        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        // все тоже самое, что и в addUser -функция стрелочник
        // всего лишь получает сигнали из компоненты <Greeting/> и вызывает pureOnBlur (с кучкой аргументов)
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        // и здесь все тоже самое...)
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    let lastUserName = "last"
    if(totalUsers>0) {
        lastUserName = users[users.length-1].name
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer


// import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
// import Greeting from './Greeting'
// import {UserType} from './HW3'
// import {Simulate} from "react-dom/test-utils";
// import error = Simulate.error;
//
// type GreetingContainerPropsType = {
//     users: UserType[] // need to fix any
//     addUserCallback: (name: string) => void // need to fix any
// }
//
// export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
//     if(name) {
//         addUserCallback(name)
//         setName('')
//         console.log(name)
//     } else {
//         setError('Warning!!!')
//         console.log(error)
//     }
//
//         // name ?  addUserCallback(name) && setName('') : setError('Warning!!!')
//         // trimmedNane ? setName(trimmedNane) : error && setError('Worning!!!')
//     // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
// }
//
// export const pureOnBlur = (name: string, setError: any) => { // если имя пустое - показать ошибку
//     if(!name) setError('Warning!!!')
// }
//
// export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
// if(e.key === "13"){
//     addUser()
// }
// }
//
// // более простой и понятный для новичков
// // function GreetingContainer(props: GreetingPropsType) {
//
// // более современный и удобный для про :)
// const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
//                                                                      users,
//                                                                      addUserCallback,
//                                                                  }) => {
//     // деструктуризация пропсов
//     const [name, setName] = useState<string>('') // need to fix any
//     const [error, setError] = useState<string>('') // need to fix any
//
//     const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
//         const trimmedNane = e.currentTarget.value.trim()
//
//         trimmedNane ? setName(trimmedNane) : error && setError('Warning!!!')
//
//     }
//     const addUser = () => {
//         pureAddUser(name, setError, setName, addUserCallback)
//     }
//
//     const onBlur = () => {
//         pureOnBlur(name, setError)
//     }
//
//     const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
//         pureOnEnter(e, addUser)
//     }
//
//     const totalUsers = users.length // need to fix
//     const lastUserName = users[users.length - 1] // need to fix
//
//     return (
//         <Greeting
//             name={name}
//             setNameCallback={setNameCallback}
//             addUser={addUser}
//             onBlur={onBlur}
//             onEnter={onEnter}
//             error={error}
//             totalUsers={totalUsers}
//             lastUserName={lastUserName}
//         />
//     )
// }
//
// export default GreetingContainer
