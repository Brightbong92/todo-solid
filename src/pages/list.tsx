import { For, Match, Switch } from "solid-js";
import useList from "../hooks/useList";

export function ListPage() {
  const {
    setTextRef,
    list,
    text,
    editingId,
    editingText,
    onInputText,
    onEditInputText,
    onAddButton,
    onEditButton,
    onSaveEditButton,
    onRemoveButton,
    onCancelEditButton,
  } = useList();
  return (
    <>
      <p>
        <strong>Your text is:</strong> {text()}
      </p>

      <input
        ref={setTextRef}
        placeholder="입력해주세요."
        value={text()}
        onInput={onInputText}
      />
      <button type="button" onClick={onAddButton}>
        등록
      </button>

      <h1>list</h1>

      <Switch fallback={<p>list is empty</p>}>
        <Match when={list().length > 0}>
          <ul>
            <For each={list()}>
              {(todo, index) => (
                <li class="flex mb-[4px]">
                  {editingId() === todo.id ? (
                    <>
                      <input value={editingText()} onInput={onEditInputText} />
                      <button
                        type="button"
                        onClick={() => onSaveEditButton(todo.id)}
                      >
                        save
                      </button>
                      <button type="button" onClick={onCancelEditButton}>
                        cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <p class="m-0 p-0 mr-[4px]">{todo.text}</p>
                      <button
                        type="button"
                        class="mr-[4px]"
                        onClick={() =>
                          onEditButton(todo.id, todo.text)
                        }
                      >
                        edit
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveButton(todo.id)}
                      >
                        remove
                      </button>
                    </>
                  )}
                </li>
              )}
            </For>
          </ul>
        </Match>
      </Switch>
    </>
  );
}
