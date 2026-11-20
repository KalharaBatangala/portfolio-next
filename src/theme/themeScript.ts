// Applies the saved theme before first paint, so dark mode doesn't flash light on load.
// Used by app/layout.tsx and app/global-not-found.tsx.
export const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`;
