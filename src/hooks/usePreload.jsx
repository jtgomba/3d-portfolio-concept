import { create } from 'zustand'

export const usePreload = create((set) => ({
    preload: false,
    secondPreload: false,
    setPreload: () => set({ preload: true }),
    setSecondPreload: () => set({ secondPreload: true }),
}))