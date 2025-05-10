import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Provider } from "./components/ui/provider";

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        {children}
      </Provider>
    </QueryClientProvider>
  );
};
