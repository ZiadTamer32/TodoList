"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { formSchema, todoSchemaType } from "@/schema";
import Spinner from "./Spinner";
function DataForm({
  buttonName,
  todoTitle,
  onSubmit,
  title,
  body,
  completed,
  type,
}: {
  buttonName: string | React.ReactNode;
  todoTitle: string;
  onSubmit: (values: todoSchemaType) => Promise<void>;
  title?: string;
  body?: string | undefined;
  completed?: boolean;
  type?: string;
}) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const process: object =
    type === "edit"
      ? {
          title: title,
          body: body,
          completed: completed,
        }
      : { title: "", body: "", completed: false };
  const form = useForm<todoSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: process,
  });
  useEffect(() => {
    if (open && type === "create") {
      form.reset({ title: "", body: "", completed: false });
    }
  }, [open, type, form]);
  async function handleTodoSubmit(values: todoSchemaType) {
    setIsLoading(true);
    await onSubmit(values);
    setOpen(false);
    setIsLoading(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">{buttonName}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{todoTitle}</DialogTitle>
          <DialogDescription>
            Add or edit a new todo to your list
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleTodoSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-3">
              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          id="completed"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel htmlFor="completed">Completed</FormLabel>
                    </div>
                    <FormDescription>
                      Your todo item will be uncompleted by default unless you
                      checked it.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <DialogClose asChild></DialogClose>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? <Spinner /> : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
export default DataForm;
