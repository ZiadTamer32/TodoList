import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import AddFormTodo from "./AddFormTodo";

function NavBar({ userId }: { userId: string | null }) {
  return (
    <nav className="flex items-center justify-between py-4">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <div className="flex justify-between items-center gap-2">
        <ModeToggle />
        <AddFormTodo userId={userId} />
      </div>
    </nav>
  );
}
export default NavBar;
