import { useState } from "react";

export default function useModal(intialValue = false) {
    const [isOpen, setIsOpen] = useState(intialValue);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    return [isOpen, setIsOpen, toggleIsOpen];
}