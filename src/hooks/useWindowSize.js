import { useCallback, useEffect, useState } from 'react';

export const useWindowSize = () => {
    const [size, setSize] = useState({
        height: 0,
        width: 0,
    });

    const getWindowSize = useCallback(
        () =>
            setSize({
                height: window.innerHeight,
                width: window.innerWidth,
            }),
        []
    );

    useEffect(() => {
        window.addEventListener('resize', getWindowSize);

        return () => {
            window.removeEventListener('resize', getWindowSize);
        };
    }, [getWindowSize]);

    return size;
};