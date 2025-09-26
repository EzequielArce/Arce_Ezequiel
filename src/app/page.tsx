import Reloj from "@/components/Reloj";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-12 text-center">
        Relojes por Zona Horaria
      </h1>
      <p className="text-sm text-gray-500 mb-12 text-center">
        Presione F5 para actualizar la hora
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Reloj timeZone="America/New_York" label="Nueva York" imgSrc="/images/new-york.jpeg"/>
        <Reloj timeZone="Europe/Berlin" label="Berlin" imgSrc="/images/berlin.jpg"/>
        <Reloj timeZone="Asia/Tokyo" label="Tokyo" imgSrc="/images/tokyo.jpg"/>
      </div>
    </main>
  );
}