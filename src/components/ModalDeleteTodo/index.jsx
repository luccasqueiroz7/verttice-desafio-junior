import { ModalDiv } from "./style";

export const ModalDeleteTodo = ({ setRemoveTodo, removeTodoList, index }) => {
  return (
    <ModalDiv>
      <h2>
        <p>Deletar Tarefa</p>
        <button onClick={() => setRemoveTodo(false)}>X</button>
      </h2>
      <form>
        <button
          type="button"
          onClick={() => {
            removeTodoList(index);
            setRemoveTodo(false);
          }}
        >
          Sim
        </button>
        <button type="button" onClick={() => setRemoveTodo(false)}>
          Não
        </button>
      </form>
    </ModalDiv>
  );
};
