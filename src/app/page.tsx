import { SkillsCarousel } from "@/components/molecules/SkillsCarousel";
import CodeConsole from "@/components/organisms/CodeConsole";
import { ExpertiseSection } from "@/components/organisms/ExpertiseSection";
import MainTemplate from "@/components/templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <div className="flex flex-col gap-8">
        <section className="grid md:grid-cols-2 gap-10 px-8 py-12 max-w-7xl mx-auto items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Hola, soy <span className="text-blue-400">Diego Humberto Salgado</span>
            </h1>
            <p className="text-xl text-gray-300">
              Ingeniero de Software especializado en desarrollo web y backend.
            </p>
          </div>
          <CodeConsole />
        </section>
        <section className="px-8 py-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Mis Skills</h2>
          <SkillsCarousel />
        </section>
        <ExpertiseSection />
      </div>
    </MainTemplate>
  );
}
