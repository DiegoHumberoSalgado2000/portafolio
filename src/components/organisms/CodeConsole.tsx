import { ConsoleHeader } from "../molecules/ConsoleHeader";
import { ConsoleBody } from "../molecules/ConsoleBody";

const CodeConsole = () => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <ConsoleHeader />
      <ConsoleBody />
    </div>
  );
};

export default CodeConsole;

