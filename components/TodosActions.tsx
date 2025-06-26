"use client";
import { Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { deleteTodoAction, updateTodoAction } from "@/actions/todoActions";
import { tableSchemaType, todoSchemaType } from "@/schema";
import Spinner from "./Spinner";
import DataForm from "./DataForm";

function TodoActions({ todo }: { todo: tableSchemaType }) {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: todoSchemaType) => {
    await updateTodoAction({
      id: todo.id,
      title: values.title,
      body: values.body as string,
      completed: values.completed as boolean,
    });
  };
  return (
    <>
      <DataForm
        onSubmit={onSubmit}
        buttonName={<Pen size={18} />}
        todoTitle="Edit Todo"
        title={todo.title}
        body={todo.body as string}
        completed={todo.completed}
        type="edit"
      />
      <Button
        variant="destructive"
        size="icon"
        disabled={isLoading}
        className="cursor-pointer"
        onClick={async () => {
          setIsLoading(true);
          await deleteTodoAction(todo?.id as string);
          setIsLoading(false);
        }}
      >
        {isLoading ? <Spinner /> : <Trash size={18} />}
      </Button>
    </>
  );
}
export default TodoActions;
