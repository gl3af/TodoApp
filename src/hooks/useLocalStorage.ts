import {useCallback} from "react";

export const useLocalStorage = <T>(key: string) => {
  const getMany = useCallback(() => {
    const raw = localStorage.getItem(key) || "[]";
    return JSON.parse(raw) as T[];
  }, [key])

  return {getMany};
}