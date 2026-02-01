let input = document.getElementById("input");
let save = document.getElementById("save");
let place = document.getElementById("place");

// گرفتن تسک‌ها از localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// رندر کردن تسک‌ها
function renderTodos() {
  place.innerHTML = "";

  todos.forEach((todo, index) => {
    place.innerHTML += `
      <div class="todo flex justify-center items-center text-center rounded-lg p-2" data-index="${index}">
        <span>${todo}</span>
        <input type="checkbox" class="ml-2 todo-checkbox">
      </div>
      `
    ;
  });
}

// ذخیره در localStorage
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// اضافه کردن تسک
save.addEventListener("click", () => {
  let value = input.value.trim();

  if (value === "") return;

  todos.push(value);
  saveToLocalStorage();
  renderTodos();

  input.value = "";
});



// حذف تسک با تیک
place.addEventListener("change", (e) => {
  if (e.target.classList.contains("todo-checkbox")) {
    let index = e.target.parentElement.dataset.index;

    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
  }
});

// اجرای اولیه
renderTodos();





  