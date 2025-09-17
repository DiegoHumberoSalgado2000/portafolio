import CodeConsole from "@/components/organisms/CodeConsole";
import MainTemplate from "@/components/templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <section className="grid md:grid-cols-2 gap-12 px-8 max-w-7xl items-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Hola, soy <span className="text-blue-400">Diego Humberto Salgado</span>
          </h1>
          <p className="text-xl text-gray-300">
            Ingeniero de Software especializado en desarrollo web y backend.
          </p>
        </div>
        <CodeConsole/>
      </section>
    </MainTemplate>
  );
}
