// app/data/horses.ts

// Definindo a interface Horse
export interface Horse {
  id: number;
  name: string;
  fatherId?: number; // IDs dos pais são opcionais
  motherId?: number;
}

// Tipagem do objeto horses
export const horses: Record<number, Horse> = {
  1: { id: 1, name: "Thunder", fatherId: 2, motherId: 3 },
  2: { id: 2, name: "Lightning", fatherId: 4, motherId: 5 },
  3: { id: 3, name: "Storm" },
  4: { id: 4, name: "Wind" },
  5: { id: 5, name: "Rain" },
};

// Função para buscar um cavalo por ID (simulação de API)
export const fetchHorseById = async (
  id: number
): Promise<Horse | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(horses[id]); // Retorna o cavalo ou undefined se o ID não existir
    }, 500);
  });
};
