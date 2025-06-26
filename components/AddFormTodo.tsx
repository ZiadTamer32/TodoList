"use client";
import { createTodoAction } from "@/actions/todoActions";
import { todoSchemaType } from "@/schema";
import DataForm from "./DataForm";
function AddFormTodo({ userId }: { userId: string | null }) {
  const onSubmit = async (values: todoSchemaType) => {
    await createTodoAction(values.title, values.body, values.completed, userId);
  };
  return (
    <DataForm
      onSubmit={onSubmit}
      buttonName="New Todo"
      todoTitle="Create Todo"
      type="create"
    />
  );
}
export default AddFormTodo;
