import { Inter, Roboto, Poppins, Satisfy, Source_Code_Pro, Montserrat_Alternates } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const fontPrimary = Poppins({
    subsets: ['latin'],
    weight: ['400', '500']
})

export const alaska = Satisfy({
  subsets: ['latin'],
  weight: '400'
})

export const categories = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500']
})

export const title404 = Montserrat_Alternates({ 
  subsets: ['latin'],
  weight: ['500', '700'],
});