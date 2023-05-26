declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
declare module '*.mp4' {
    const src: string;
    export default src;
}