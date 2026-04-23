// 1. Importamos la función 'create' de la librería Zustand que instalamos antes
import { create } from 'zustand';

// 2. Definimos y exportamos nuestro "Store" (el almacén de datos)
export const useCartStore = create((set) => ({
  
  // ESTADO: Aquí guardamos la información
  cart: [], // Empezamos con una lista de productos vacía [ ]

  // ACCIÓN: Función para agregar un producto al carrito
  addToCart: (product) => 
    set((state) => ({ 
      // Crea una nueva lista con lo que ya había (...state.cart) más el nuevo producto
      cart: [...state.cart, product] 
    })),

  // ACCIÓN: Función para vaciar todo el carrito de un solo golpe
  clearCart: () => set({ cart: [] }),

  // ACCIÓN: Función para eliminar un producto específico (por su ID)
  removeFromCart: (productId) =>
    set((state) => ({
      // Filtra la lista y deja solo los productos que NO tengan el ID que queremos borrar
      cart: state.cart.filter((item) => item.id !== productId),
    })),
}));
