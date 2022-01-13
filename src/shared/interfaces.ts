// enum example
type Status = "not-started" | "started" | "completed";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  image?: string | null | undefined;
  status?: Status,
  // any key name = any type value
  [key: string]: any,
}

const example: Todo = {
  id: "123",
  title: "Ex title",
  completed: false,
  anyKeyName: {}
}

const example2: Todo = {
  id: "1232",
  title: "Ex title2",
  completed: false,
  anyKeyName2: "any type value",
};