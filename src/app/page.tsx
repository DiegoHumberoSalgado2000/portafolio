import { SkillsCarousel } from "@/components/molecules/SkillsCarousel";
import CodeConsole from "@/components/organisms/CodeConsole";
import { ExpertiseSection } from "@/components/organisms/ExpertiseSection";
import { WorkSection } from "@/components/organisms/WorkSection";
import MainTemplate from "@/components/templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <div className="flex flex-col gap-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-8 py-12 max-w-7xl mx-auto items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hola, soy{" "}
              <span className="text-blue-400">Diego Humberto Salgado</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Ingeniero de Software especializado en desarrollo web y backend.
            </p>
          </div>
          <CodeConsole />
          <div className="col-span-1 md:col-span-2 w-full">
            <SkillsCarousel />
          </div>
        </section>

        <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full">
          <ExpertiseSection />
        </section>

        <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full">
          <WorkSection/>
        </section>
      </div>
    </MainTemplate>
  );
}
