export interface IImage {
  src: string;
  alt: string;

  layout?: "fill" | "fixed" | "intrinsic" | "responsive" | undefined;
  objectFit?: "fill" | "contain" | "cover" | "none" | "inherit" | undefined;
  className?: string;
  quality?: number;
  srcError?: string;
}