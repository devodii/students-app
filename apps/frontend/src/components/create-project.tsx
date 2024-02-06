import * as React from "react";

type FormEvent = React.FormEvent<HTMLFormElement>;

export function CreateProject() {
  const [name, setName] = React.useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name) return;

    console.log({ name });
  }

  return (
    <form className="w-full mx-auto max-w-4xl" onSubmit={e => handleSubmit(e)}>
      <input
        className="w-full border px-6 py-2"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button type="submit">Create</button>
    </form>
  );
}
