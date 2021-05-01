import { useEffect } from "react";

export default function useTimeout(callback, timeoutMs, argumentList) {
    useEffect(() => {
        const id = setTimeout(callback, timeoutMs);

        return () => clearTimeout(id);
    }, argumentList);
}