import { useEffect, useState } from 'react';
import { getUrl } from '../helpers/geturl';

const useGetCharacters = (url) => {
    const [state, setState] = useState({
        characters: [],
        isLoading: true,
        hasError: null
    });

    const fetchCharacters = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        try {
            const response = await getUrl(url);
            const data = await response.json();
            setState({
                characters: data.items,
                isLoading: false,
                hasError: null
            });
        } catch (error) {
            setState({
                characters: [],
                isLoading: false,
                hasError: error
            });
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, [url]);

    return {
        characters: state.characters,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
};