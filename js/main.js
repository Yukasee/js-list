// База данных
let listData = [
    {
        name: 'Олег',
        lastname: 'Петров',
        age: '20',
        hobby: 'Игры',
    },
    {
        name: 'Иван',
        lastname: 'Иванов',
        age: '18',
        hobby: 'Спорт',
    },
    {
        name: 'Юлия',
        lastname: 'Петрова',
        age: '21',
        hobby: 'Рисование',
    },
    {
        name: 'Василий',
        lastname: 'Васильев',
        age: '22',
        hobby: 'Футбол',
    },
    {
        name: 'Алексей',
        lastname: 'Алексеев',
        age: '19',
        hobby: 'Танцы',
    }
]

console.log(listData)

//Создание Элементов
const $app = document.getElementById('app');
const $table = document.createElement('table');
const $tableHead = document.createElement('thead');
const $tableBody = document.createElement('tbody');

const $tableHeadTr = document.createElement('tr')
const $tableHeadThName = document.createElement('th')
const $tableHeadThAge = document.createElement('th')
const $tableHeadThBirthDate = document.createElement('th')
const $tableHeadThHobby = document.createElement('th')

$table.classList.add('table', 'table-striped-columns')

$tableHeadThName.textContent = 'ФИО'
$tableHeadThAge.textContent = 'Возраст'
$tableHeadThBirthDate.textContent = 'Год рождения'
$tableHeadThHobby.textContent = 'Хобби'

$tableHeadTr.append($tableHeadThName)
$tableHeadTr.append($tableHeadThAge)
$tableHeadTr.append($tableHeadThBirthDate)
$tableHeadTr.append($tableHeadThHobby)

$tableHead.append($tableHeadTr)
$table.append($tableHead)
$table.append($tableBody)
$app.append($table)

//Render
//Подготовка
const copyListData = [...listData]
for (const oneUser of copyListData) {
    oneUser.fio = oneUser.name + ' ' + oneUser.lastname
    oneUser.BirthDate = 2024 - oneUser.age
}

//Отрисовка
for (const oneUser of copyListData) {
    const $userTr = document.createElement('tr')
    const $userName = document.createElement('th')
    const $userAge = document.createElement('th')
    const $userBirthDate = document.createElement('th')
    const $userHobby = document.createElement('th')

    $userName.textContent = oneUser.fio
    $userAge.textContent = oneUser.age
    $userBirthDate.textContent = oneUser.BirthDate
    $userHobby.textContent = oneUser.hobby

    $userTr.append($userName)
    $userTr.append($userAge)
    $userTr.append($userBirthDate)
    $userTr.append($userHobby)

    $tableBody.append($userTr)

}

