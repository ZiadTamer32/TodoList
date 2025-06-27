"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tableSchemaType } from "@/schema";
import TodoActions from "./TodosActions";
import { Badge } from "./ui/badge";
function TodoTable({ todos }: { todos: tableSchemaType[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo?.id}>
            <TableCell className="font-medium">{todo?.title}</TableCell>
            <TableCell>{todo?.body}</TableCell>
            <TableCell>
              {todo?.completed ? (
                <Badge variant="secondary">Completed</Badge>
              ) : (
                <Badge>Uncompleted</Badge>
              )}
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <TodoActions todo={todo} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{todos?.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
export default TodoTable;
