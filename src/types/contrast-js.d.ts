declare module 'contrast-js' {
  const contrast: {
    isAccessible: (color1: string, color2: string) => boolean;
    ratio: (color1: string, color2: string) => number;
    score: (color1: string, color2: string) => string;
  };
  
  export default contrast;
}