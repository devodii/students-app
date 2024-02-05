import * as React from "react";

export function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      {children}
    </div>
  );
}
