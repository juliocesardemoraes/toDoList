console.log("AQUI");
// PEGAR O FORMULARIO
const form = document.getElementById("addCard");
const main = document.getElementsByTagName("main")[0];

const showForm = () => {
  // MOSTRAR O FORMULARIO
  form.classList.toggle("hidden");
  // ESCONDER OS CARDS (ESTÃO NA MAIN)
  main.classList.toggle("hidden");
};

const addCard = (event) => {
  event.preventDefault();
  // PEGAR OS ELEMENTOS DO FORMULARIO OK
  // PEGAR OS VALORES DESSES ELEMENTOS OK
  const title = form.children[0].value;
  const description = form.children[1].value;
  const date = form.children[2].children[0].value;

  const newTask = {
    title,
    description,
    date,
    status: "todo",
  };

  // localStorage.getItem("tasks") || RETORNA STRING
  // TRANSFORMA EM OBJETO -> JSON.parse -> TRANSFORMA STRING EM OBJETO
  let allTasks = [newTask];
  const oldTasks = JSON.parse(localStorage.getItem("tasks"));

  // EU VERIFICO SE EXISTE TAREFAS ANTIGAS.
  if (oldTasks) {
    allTasks = [...oldTasks, newTask];
  }

  // PERSISTIR ESTES VALORES NO LOCALSTORAGE
  localStorage.setItem("tasks", JSON.stringify(allTasks));

  //PEGAR SEÇÃO TODOSECTION
  const todoSection = document.getElementById("todolist");
  // CRIAR DIV CARD CONTAINER
  const cardContainer = document.createElement("div");
  // CRIAR DIV CLASS INFO
  const cardInfo = document.createElement("div");
  // CRIAR TITULO DO CLASS INFO
  const cardTitle = document.createElement("h3");
  // CRIO A DESCRIÇÃO
  const cardDescription = document.createElement("p");
  // CRIO A DATA
  const cardDate = document.createElement("span");

  cardTitle.innerHTML = newTask.title;
  cardDescription.innerHTML = newTask.description;
  cardDate.innerHTML = newTask.date;

  // ESTILIZO, DANDO CLASSES PARA CADA UM
  cardInfo.classList.add("info");
  cardDate.classList.add("date");
  cardContainer.classList.add("card", "card__todo");

  // INSERIR UM ELEMENTO DENTRO DO OUTRO
  cardInfo.append(cardTitle, cardDescription);
  cardContainer.append(cardInfo, cardDate);
  todoSection.append(cardContainer);

  showForm();
};
