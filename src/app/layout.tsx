import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Salancy",
  keywords:
    "salario, sueldo, remuneración, valor de mercado, valoración, programación, frontend, backend, react, angular, vue, ux, ui, glassdoor, ilovemondays",
  description:
    "Fijate si tu salario está en valor de mercado. Recordá tomar los valores como referencia y no como un absoluto. Esta aplicación toma más de 500 respuestas de gente de la comunidad acerca de sus salarios, de forma anónima, para distintas posiciones.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] gap-4 bg-background px-4 font-sans antialiased md:gap-8">
        <header className="text-xl font-bold leading-[4rem]">Salancy</header>
        <main>{children}</main>
        <footer className="flex min-h-16 items-center justify-center text-center text-foreground">
          <p>
            <a className="underline" href="https://github.com/goncy/salancy">
              Salancy
            </a>{" "}
            fue hecho con 🖤 por{" "}
            <a className="underline" href="https://goncy.dev">
              Goncy
            </a>{" "}
            - Página actualizada al {new Date().toLocaleString("es-AR")}.
          </p>
        </footer>
      </body>
    </html>
  );
}
