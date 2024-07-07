import { createSignal } from "solid-js";

export type TodoType = {
  id: number;
  text: string;
};

const addList = (list: TodoType[], _text: string) => {
  const newList = list.concat({
    id: list.length + 1,
    text: _text,
  });
  return newList;
};

const removeList = (list: TodoType[], id: number) => {
  const newList = list.filter((todo) => id !== todo.id);
  return newList;
};

const editList = (list: TodoType[], id: number, newText: string) => {
  const newList = list.map((todo) =>
    todo.id === id ? { ...todo, text: newText } : todo
  );
  return newList;
};

const useList = () => {
  const [list, setList] = createSignal<TodoType[]>([]);
  const [text, setText] = createSignal<string>("");
  const [editingId, setEditingId] = createSignal<number | null>(null);
  const [editingText, setEditingText] = createSignal<string>("");

  const updateList = (list: TodoType[]) => {
    setList(list);
  };

  const updateText = (_text: string) => {
    setText(_text);
  };

  const updateEditingText = (_text: string) => {
    setEditingText(_text);
  };

  const onAddButon = () => {
    if (text().trim() === "") {
      updateText("");
      return;
    }
    const newList = addList([...list()], text());
    updateList(newList);
    updateText("");
  };

  const onInputText = (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) => {
    updateText(e.target.value);
  };

  const onEditInputText = (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) => {
    updateEditingText(e.target.value);
  };

  const onEditButton = (id: number, text: string) => {
    setEditingId(id);
    updateEditingText(text);
  };

  const onSaveEditButton = (id: number) => {
    const newList = editList([...list()], id, editingText());
    updateList(newList);
    setEditingId(null);
    updateEditingText("");
  };

  const onCancelEditButton = () => {
    setEditingId(null);
    updateEditingText("");
  };

  const onRemoveButton = (id: number) => {
    const newList = removeList([...list()], id);
    updateList(newList);
  };
  return {
    list,
    text,
    editingId,
    editingText,
    onInputText,
    onEditInputText,
    onAddButon,
    onEditButton,
    onSaveEditButton,
    onRemoveButton,
    onCancelEditButton,
  };
};

export default useList;
