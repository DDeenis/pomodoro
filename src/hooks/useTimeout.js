import { useEffect } from "react";

export default function useTimeout(callback, timeoutMs, dependencyList) {
    useEffect(() => {
        const id = setTimeout(callback, timeoutMs);

        return () => clearTimeout(id);
    }, [...dependencyList, callback, timeoutMs]);
}