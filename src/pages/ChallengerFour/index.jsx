import { useState } from "react";
import { ChallengerFourSection, TodoLi } from "./style";

import { BsTrash } from "react-icons/bs";
import { Header } from "../../components/Header";
import { ModalDeleteTodo } from "../../components/ModalDeleteTodo";

export const ChallengerFour = () => {
  const [todoList, setTodoList] = useState([]);
  const [removeTodo, setRemoveTodo] = useState(false);
  const [indexTodo, setIndexTodo] = useState("");

  function addTodoList() {
    let inputValue = document.querySelector(".addInput");
    if (inputValue.value !== "") {
      setTodoList([{ todo: inputValue.value, checked: false }, ...todoList]);
      inputValue.value = "";
    }
  }

  function removeTodoList(removeTodo) {
    setTodoList(todoList.filter((elem, index) => index !== removeTodo));
  }

  function checkedTodo(indexTodo) {
    setTodoList(
      todoList.filter((elem, index) => {
        if (index === indexTodo) {
          elem.checked = !elem.checked;
        }
        return elem;
      })
    );
  }

  return (
    <>
      <Header />
      <ChallengerFourSection>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addTodoList();
          }}
        >
          <input type="text" placeholder="Adicionar tarefa" className="addInput" />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          <h2>Lista de tarefas</h2>
          {todoList.map((todo, index) => (
            <TodoLi checked={todo.checked} key={index}>
              <div>
                <input
                  type="checkbox"
                  onChange={() => {
                    checkedTodo(index);
                  }}
                  checked={todo.checked}
                />
                <p>{todo.todo}</p>
              </div>
              <BsTrash
                color="red"
                cursor="pointer"
                onClick={() => {
                  setRemoveTodo(true);
                  setIndexTodo(index);
                }}
              />
            </TodoLi>
          ))}
        </ul>
        {removeTodo && (
          <ModalDeleteTodo
            setRemoveTodo={setRemoveTodo}
            removeTodoList={removeTodoList}
            index={indexTodo}
          />
        )}
      </ChallengerFourSection>
    </>
  );
};
