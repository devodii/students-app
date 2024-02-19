import * as React from "react";
import { FormEvent } from "@students-app/types";
import { Button, Input, Label } from "../../components/ui";
import { Wrapper } from "../../components/wrapper";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!email || !password) return;

    const { data } = await axios.post(`/api/auth/signin`, { email, password });

    // todo: add type for data
    if (data.status) {
      navigate("/dashboard");
    } else {
      // todo: emit toast
      alert(data.message);
    }
  }

  // todo: create Form component and add onSuccess prop to redirect at application level
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
