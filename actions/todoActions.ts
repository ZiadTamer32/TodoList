"use server";
import { tableSchemaType } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function getTodosAction(userId: string | null) {
  const todos = await prisma.todo.findMany({
    where: { userId: userId as string },
    orderBy: { created_at: "desc" },
  });
  return todos;
}
export async function createTodoAction(
  title: string,
  body?: string | undefined,
  completed?: boolean | undefined,
  userId?: string | null
) {
  const newTodo = await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      userId: userId as string,
    },
  });
  revalidatePath("/");
  return newTodo;
}
export async function updateTodoAction({
  id,
  title,
  body,
  completed,
}: tableSchemaType) {
  await prisma.todo.update({ where: { id }, data: { title, body, completed } });
  revalidatePath("/");
}
export async function deleteTodoAction(id: string) {
  await prisma.todo.delete({ where: { id: id } });
  revalidatePath("/");
}
