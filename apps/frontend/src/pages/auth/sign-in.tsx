import * as React from "react";
import { FormEvent } from "@students-app/types";
import { Button, Input, Label } from "../../components/ui";
import { Wrapper } from "../../components/wrapper";

export default function SignInPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!email || !password) return;

    console.log({ email, password });
  }

  return (
    <Wrapper>
      <h2 className="font-semibold text-4xl text-center">Signin</h2>
      <form
        className="w-full max-w-4xl flex flex-col gap-4 mt-12 px-12"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            required
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit">Sign in</Button>
      </form>
    </Wrapper>
  );
}
