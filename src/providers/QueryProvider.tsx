import type { ReactNode } from "react";
import {
    QueryClient,
    QueryClientProvider,
    QueryCache,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 2,
            staleTime: 1000 * 60 * 5,
        },
    },
    queryCache: new QueryCache({
        onError: (error) => {
            console.error("Query Error:", error);
        },
    }),
});

interface QueryProviderProps {
    children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
