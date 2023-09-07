import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";

import {useAppDispatch} from "@/store/hooks.ts";
import {addTodo} from "@/store/todoSlice.ts";

import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Длина названия должна быть не меньше 5 символов",
  }),
})

const TodoHeader = () => {
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const title = values.title;
    dispatch(addTodo(title));
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-b" data-testid="todo-form">
        <FormField
          control={form.control}
          name="title"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input
                  data-testid="todo-input"
                  placeholder="What needs to be done?"
                  className="text-2xl placeholder:italic placeholder:font-light py-8 px-4 rounded-none"
                  {...field}
                />
              </FormControl>
              <FormMessage
                data-testid="error-message"
                className="font-light text-md px-4 pb-2"
              />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default TodoHeader;