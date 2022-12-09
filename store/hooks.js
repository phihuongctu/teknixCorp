import Context from './Context';
import { useContext } from 'react';

const useStore = () => {
    const [states, dispatch] = useContext(Context);
    return [states, dispatch];
};

export { useStore };
