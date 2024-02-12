import * as React from "react";

export function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
