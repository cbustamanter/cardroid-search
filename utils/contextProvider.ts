import { PropsWithChildren } from "react";

export interface ContextProvider<T>
  extends React.FC<PropsWithChildren<{ context: T }>> {}
