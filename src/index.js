document.addEventListener("DOMContentLoaded", () => {
  let form = 
  document.getElementById('create-task-form');
  form.addEventListener, ('submit' e => {
    e.preventDefault()
    buildTodo(e.target['new-task-description'].value)
    form.reset()
  }
});
