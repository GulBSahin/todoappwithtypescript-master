
interface TodoType {
    id: string|number;
    isDone: boolean;
    task: string;
  };  

  type AddFn = (text:string) =>void;