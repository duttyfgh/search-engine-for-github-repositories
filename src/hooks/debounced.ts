import { useEffect } from 'react';
import { useState } from 'react';

export const useDebounse = (value: string, delay = 300): string => {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(handler)// убираем setTimeout
    }, [value, delay])

    return debounced
}