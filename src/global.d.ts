declare global {
  interface Window {
    toggleSidebar?: () => void;
    initSidebar?: () => void;
  }
}

export {};