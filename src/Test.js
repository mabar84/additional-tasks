import React from 'react';

export const Test = () => {

//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку,
// состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

    const repeatString = (str, n, divider) => {
        let res = str
        for (let i = 1; i < n; i++) {
            res = res + divider + str
        }
        return n > 0 ? res : ''
    }
    console.log('#1')
    console.log(repeatString("yo", 3, " "))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается
// с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
    const checkStart = (str, subStr) => str.indexOf(subStr) === 0

    console.log('#2')
    console.log(checkStart("Incubator", "Inc"))
    console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из
// параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
    const truncateString = (str, n) => {
        let res = ''
        for (let i = 0; i < n; i++) {
            res += str[i]
        }
        return res + '...'
    }
    console.log('#3');
    console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))


//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово
// в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
    const getMinLengthWord = (str) => {
        if (str === '') return null
        let res = str.split(' ')
        let min = res[0]
        for (let i = 0; i < res.length; i++) {
            if (res[i].length < min.length) {
                min = res[i]
            }
        }
        return min
    }
    console.log('#4');
    console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
    console.log(getMinLengthWord(''))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение,
// где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
    const setUpperCase = (str) => str
        .toLowerCase()
        .split(' ')
        .map(w => w.split('')
            .map((l, i) => i === 0 ? l.toUpperCase() : l)
            .join('')).join(' ')

    console.log('#5');
    console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))


// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

    const isIncludes = (str) => {

        return str
    }
    console.log('#6');
    console.log(isIncludes(isIncludes("Incubator", "Cut")))
    console.log(isIncludes(isIncludes("Incubator", "table")))
    console.log(isIncludes(isIncludes("Incubator", "inbba")))
    console.log(isIncludes(isIncludes("Incubator", "inba")))
    console.log(isIncludes(isIncludes("Incubator", "Incubatorrr")))


    return (
        <div>
            Test
        </div>
    );
};

