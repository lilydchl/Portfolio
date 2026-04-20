/// <reference types="vite/client" />

declare module '*&as=picture' {
  const out: import('../lib/picture').Picture;
  export default out;
}

declare module '*?as=picture' {
  const out: import('../lib/picture').Picture;
  export default out;
}
