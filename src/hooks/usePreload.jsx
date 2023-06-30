import { create } from 'zustand'

export const usePreload = create((set) => ({
    preload: false,
    secondPreload: false,
    theme: "light-theme",
    setPreload: () => set({ preload: true }),
    setSecondPreload: () => set({ secondPreload: true }),
    setLightTheme: () => set({ theme: "light-theme" }),
    setDarkTheme: () => set({ theme: "dark-theme" })
}))