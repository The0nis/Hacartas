import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 export const apkDownloadUrl =  import.meta.env.VITE_APK_FILE ?? "https://hacartas.com/download/dont_know/hacartas.apk";
