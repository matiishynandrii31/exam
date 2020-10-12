// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.
// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.
// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – 
//Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking.
// Додати можливість додати нове поле для всіх юзерів – job (true/false);
// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.
// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.


// 1/
// let arr = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];

// console.log(Math.max(...arr));

//2
// let arr1 = ["test", 12, undefined, null, -5, "javascript", "1", false, true, 0 , "!"];
// let arr2 = [];
// function isString(value) {
// 	return typeof value === 'string' || value instanceof String;
// }

// for (let i = 0; i < arr1.length; i++) {
// 	if(isString(arr1[i])) {
// 		arr2.push(arr1[i]);
// 	}
// }

//3

// let team = [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}];

// function searchAdmin() {
// 	 for (let i = 0; i < team.length; i++) {
// 	 	if (team[i].type === "user") {
// 	 		console.log(team[i].name);
// 	 	}	 
// 	 }
// 	}

// searchAdmin();

// function hiking() {
// 	 for (let i = 0; i < team.length; i++) {
// 	 	for (let j = 0; j < team[i].hobby.length; j++ ) {
// 	 	if (team[i].hobby[j] === "hiking") {
// 	 		console.log(team[i].name);
// 	 	}	 
// 	 }
// 	}
// 	}

// 	hiking();

// 	function addJob() {
// 	 for (let i = 0; i < team.length; i++) {
// 	 	if (confirm(`You want add job ${team[i].name} ?`)) {
// 	 		team[i].job = 'Programming'
// 	 	}	 
// 	}
// 	}
// addJob();

//4

// document.addEventListener('copy', (event) => {
//     alert('All Rights Reserved.');
// });

//5
//не встиг ознайомитись з останнім заняттям тому і не зробив:)(
