import NavBar from "@/components/NavBar";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";
import { getTodosAction } from "@/actions/todoActions";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getTodosAction(userId);
  return (
    <div className="container py-3 mx-auto font-[family-name:var(--font-geist-sans)]">
      <NavBar userId={userId} />
      <TodoTable todos={todos} />
    </div>
  );
}
