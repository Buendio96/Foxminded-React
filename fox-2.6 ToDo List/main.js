const form = document.getElementById('ToDo-Form');
const input = document.getElementById('ToDo-Input');
const tasksList = document.getElementById('ToDo-List');
const emptyBox = document.getElementById('ToDo-Empty');
const clear = document.getElementById('ToDo-Clear');
const clearCompleted = document.getElementById('ToDo-Clear-Completed');
const tasks = [];


function showEmptyBox(array) {
	if (array.length === 0) {
		const emptyListHTML = `
			<li class="to-do__item-clear" id="ToDo-Empty">
				<h2 class="to-do__text">
				Your to-do list is empty. <br>
				Don't be lazy like a sloth!
				</h2>
				<div class="to-do__img-clear">
				<img src="/img/ToDo.jpg" alt="">
				</div>
			</li>`;
		tasksList.insertAdjacentHTML('afterbegin', emptyListHTML);
	} else {
		if (emptyBox) {
			emptyBox.remove();
		}
	}
};


function saveDataToCookie(data, cookieName) {
	const dataJSON = JSON.stringify(data);
	const expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + 7);
	document.cookie = `${cookieName}=${dataJSON}; expires=${expirationDate.toUTCString()}`;
};
function loadDataFromCookie(cookieName) {
	const cookies = document.cookie.split(';');
	const dataCookie = cookies.find(cookie => cookie.trim().startsWith(`${cookieName}=`));
	if (dataCookie) {
		const dataJSON = dataCookie.split('=')[1];
		return JSON.parse(dataJSON);
	}
	return null;
};


const renderTasks = (tasks) => {
	tasksList.innerHTML = '';
	tasks.forEach(task => {
		const cssClass = task.done ? 'item__text item-done' : 'item__text';
		const taskHtml = `
			<li id="${task.id}" class="to-do__item item">
				<span class="${cssClass}">
				${task.text}
				</span>
				<div class="item__text-commands">
				<button data-action="done" type="button" class="item__text-command">
					<img src="/img/create.png" alt="create">
				</button>
				<button data-action="edit" type="button" class="item__text-command">
					<img src="/img/edit.png" alt="edit">
				</button>
				<button data-action="delete" type="button" class="item__text-command">
					<img src="/img/delete.png" alt="delete">
				</button>
				</div>
			</li>`;
		tasksList.insertAdjacentHTML('beforeend', taskHtml);
	});
	showEmptyBox(tasks);
};


const createTask = (taskText) => {
	if (taskText === '') return;
	else {
		const newTask = {
			id: Date.now(),
			text: taskText,
			done: false,
		};
		tasks.push(newTask);
	}
	input.value = '';
	input.focus();
};
const deleteTask = (id, array) => {
	const taskIndex = array.findIndex(task => task.id == id);
	if (taskIndex === -1) return;
	array.splice(taskIndex, 1);
	const taskElement = document.getElementById(id);
	if (taskElement) {
		taskElement.remove();
	}
	showEmptyBox(array);
};
const doneTask = (id, array) => {
	const task = array.find(task => task.id == id);
	task.done = !task.done;
	const taskElement = document.getElementById(id);
	const taskName = taskElement.querySelector('.item__text');
	taskName.classList.toggle('item-done');
};
const updateTask = (array) => {
	const taskName = array.querySelector('.item__text');
	const taskText = taskName.textContent.trim();
	const editBoxId = 'ToDo-EditBox';
	const existingEditBox = document.getElementById(editBoxId);
	if (existingEditBox) return;
	const editBox = `
		<div class="item__edit-box" id="ToDo-EditBox">
		<textarea type="text" class="item__edit-text"  id="ToDo-NewText">${taskText}</textarea>
		<button data-action="update" type="button" class="item__edit-button" id="ToDo-Ok">
		OK
		</button>
		</div>
		`;
	array.insertAdjacentHTML('beforeend', editBox);
	const textFromEditBox = document.getElementById('ToDo-NewText');
	const idEditBox = document.getElementById('ToDo-EditBox');
	const clickOk = document.getElementById('ToDo-Ok');
	textFromEditBox.focus();
	const textLength = textFromEditBox.value.length;
	textFromEditBox.setSelectionRange(textLength, textLength);
	clickOk.addEventListener('click', () => {
		if (idEditBox) idEditBox.remove();
		const updatedText = textFromEditBox.value;
		taskName.textContent = updatedText;
		const taskId = parseInt(array.id);
		const taskToUpdate = tasks.find(task => task.id === taskId);
		if (taskToUpdate) {
			taskToUpdate.text = updatedText;
			saveDataToCookie(tasks, 'Task');
		};
	});
};

const clearList = (list) => {
	if (list.length === 0) {
		return;
	}
	list.length = 0
	tasksList.innerHTML = '';
	showEmptyBox(list);
};
const deleteCompletedTasks = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i].done) {
			array.splice(i, 1);
		}
	}
	renderTasks(array);
};


showEmptyBox(tasks);

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const taskText = input.value.trim();
	createTask(taskText);
	renderTasks(tasks);
	saveDataToCookie(tasks, 'Task');
});

tasksList.addEventListener('click', function (event) {
	const action = event.target.dataset.action;
	const parentNode = event.target.closest('.to-do__item');
	const id = parentNode.id;
	if (action === 'done') {
		doneTask(id, tasks)
	} else if (action === 'delete') {
		deleteTask(id, tasks);
	} else if (action === 'edit') {
		updateTask(parentNode);
	};
	saveDataToCookie(tasks, 'Task')
});

clear.addEventListener('click', () => {
	clearList(tasks)
	saveDataToCookie(tasks, 'Task')
});
clearCompleted.addEventListener('click', () => {
	deleteCompletedTasks(tasks)
	saveDataToCookie(tasks, 'Task')
});

window.addEventListener('load', () => {
	const savedTasks = loadDataFromCookie('Task');
	if (savedTasks) {
		tasks.push(...savedTasks);
		renderTasks(tasks);
	}
});
