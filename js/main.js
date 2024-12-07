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

let sortColumnFlag = 'fio';
let sortDirFlag = true;

console.log(listData)

//Создание Элементов
const $app = document.getElementById('app');
const $addForm = document.getElementById('add-form');
const $nameInp = document.getElementById('add-form_name-inp');
const $lastnameInp = document.getElementById('add-form_lastname-inp');
const $ageInp = document.getElementById('add-form_age-inp');
const $hobbyInp = document.getElementById('add-form_hobby-inp');
const $sortFIOBtn = document.getElementById('sort__fio');
const $sortAgeBtn = document.getElementById('sort__age');

const $filterForm = document.getElementById('filter-form');
const $fioFilterInp = document.getElementById('filter-form__fio-inp');
const $hobbyFilterInp = document.getElementById('filter-form__hobby-inp');

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

// Создание Tr одного пользователя
function createUserTr(oneUser) {
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




    return $userTr
}

//Фильтрация
function filter(arr, prop, value) {
    return arr.filter(function(oneUser) {
        if (oneUser[prop].includes(value.trim())) return true
    });
}

//Render
function render(arrData) {
    $tableBody.innerHTML = '';
    let copyListData = [...listData]

//Подготовка
for (const oneUser of copyListData) {
    oneUser.fio = oneUser.name + ' ' + oneUser.lastname
    oneUser.BirthDate = 2024 - oneUser.age
}

console.log(copyListData);
//Сортировка
copyListData = copyListData.sort(function(a, b) {
    if (a[sortColumnFlag] < b[sortColumnFlag]) {
        return -1;
    }
    if (a[sortColumnFlag] > b[sortColumnFlag]) {
        return 1;
    }
    return 0;
})
console.log(copyListData);

//Фильтрация
if ($fioFilterInp.value.trim() !=="") {
    copyListData = filter(copyListData, 'fio', $fioFilterInp.value)
}
if ($hobbyFilterInp.value.trim() !=="") {
    copyListData = filter(copyListData, 'hobby', $hobbyFilterInp.value)
}

//Отрисовка
for (const oneUser of copyListData) {
    const $newTr = createUserTr(oneUser)
    $tableBody.append($newTr)
}}

render(listData)

//Добавление
$addForm.addEventListener('submit', function(event) {
    event.preventDefault()

    //Валидация
    if ($nameInp.value.trim() == "") {
        alert('Имя не введено!')
        return
    }
    if ($lastnameInp.value.trim() == "") {
        alert('Фамилия не введена!')
        return
    }
    if ($ageInp.value.trim() == "") {
        alert('Возраст не введен!')
        return
    }
    if ($nameInp.value.trim() == "") {
        alert('Имя не введено!')
        return
    }
    if ($hobbyInp.value.trim() == "") {
        alert('Хобби не введено!')
        return
    }
    listData.push(  {
            name: $nameInp.value.trim(),
            lastname: $lastnameInp.value.trim(),
            age: parseInt($ageInp.value.trim()),
            hobby: $hobbyInp.value.trim(),
        }    )
    render(listData)
})

//Клики сортировки
$sortFIOBtn.addEventListener('click', function() {
    sortColumnFlag = 'fio';
    render(listData)
})
$sortAgeBtn.addEventListener('click', function() {
    sortColumnFlag = 'age';
    render(listData)
})

//Фильтр
$filterForm.addEventListener('submit', function(event) {
    event.preventDefault()
})

$fioFilterInp.addEventListener('input', function() {
    render(listData)
})
$hobbyFilterInp.addEventListener('input', function() {
    render(listData)
})

