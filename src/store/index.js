import create from 'zustand';

export const useStore = create((set) => ({
  damping: 1,
  restLength: 0.5,
  stiffness: 100,
  setDamping: (newDamping) => set((state) => ({ damping: newDamping })),
  setRestLength: (newRestLength) => set((state) => ({ restLength: newRestLength })),
  setStiffness: (newStiffness) => set((state) => ({ stiffness: newStiffness }))
}))
