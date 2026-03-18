import { WISHLIST_KEY } from "../../common";
import useLocalStorage from "./useLocalStorage";

export function useWishlist() {
  const { storedValue, setValue } = useLocalStorage<number[]>(WISHLIST_KEY, []);

  const toggle = (id: number) => {
    setValue((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  const isWishlisted = (id: number) => storedValue.includes(id);

  return { wishlist: storedValue, toggle, isWishlisted };
}
