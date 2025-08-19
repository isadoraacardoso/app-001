import React, { createContext, useState, ReactNode } from "react";

interface Item {
  id: string;
  titulo: string;
  descricao: string;
  img: any;
}

interface ItemContextType {
  item: Item | null;
  setItem: (item: Item) => void;
}

export const ItemContext = createContext<ItemContextType>({
  item: null,
  setItem: () => {},
});

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [item, setItem] = useState<Item | null>(null);

  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
};
