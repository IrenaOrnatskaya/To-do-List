document.forms.toDo.addEventListener('submit', submitOnForm);
const tasksList = document.querySelector('#tasksToDo');
const input = document.querySelector('#tasks_input');
const toDoForm = document.forms.toDo;

function submitOnForm(event) {
	event.preventDefault();
	let {
		value
	} = input;
	if (!!value) {
		const removeButton = document.createElement('button');
		const newTask = document.createElement('li');
		const newTaskParagraph = document.createElement('p');
		newTaskParagraph.classList.add('bg');
		removeButton.classList.add('remove-button');
		newTask.classList.add('list__item');
		newTask.classList.add('list-item__remove');
		newTask.appendChild(newTaskParagraph);
		newTaskParagraph.textContent = input.value;
		newTaskParagraph.addEventListener('click', () => {
			newTaskParagraph.classList.toggle('remove-element');
		});
		newTask.appendChild(removeButton);
		resetForm();
		tasksList.appendChild(newTask);
	}
}
function resetForm() {
    toDoForm.reset();
}

tasksList.addEventListener('click', function({
	target
}) {
	if (target.matches('.remove-button')) {
		target.parentNode.remove();
	}
});