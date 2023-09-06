import {useState} from "react";

export const useFetching = (callback: Function) : [Function, boolean, string] => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const[eror, setError] = useState<string>('');

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback()
        } catch (e: any) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, eror];
}