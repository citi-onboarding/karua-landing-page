declare module '*.jpg';
declare module '*.svg';
declare module '*.png';
declare module '*.mp4' {
    const src: string;
    export default src;
}