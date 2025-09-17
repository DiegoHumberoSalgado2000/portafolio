import { FC, ReactNode } from "react";

interface MainTemplateProps {
  children: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <main className="bg-black text-white font-sans h-screen flex items-center justify-center">
      {children}
    </main>
  );
};

export default MainTemplate;
