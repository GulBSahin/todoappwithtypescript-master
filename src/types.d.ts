
interface TodoType {
    id: string|number;
    isDone: boolean;
    task: string;
  };  

  interface ITodoList{
    todos: TodoType[];
    toggleTodo : ToggleFn;
    deleteTodo : DeleteFn;
  }

  type AddFn = (text:string) =>void;

  type ToggleFn = (item:TodoType) =>void;

  type DeleteFn = (item:string|number) =>void;