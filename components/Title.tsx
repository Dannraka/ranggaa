import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const Title = ({ text, icon }: Props) => {
  return (
    <div className="flex items-center gap-4 text-2xl pb-8">
      <h3 className="font-semibold overflow-hidden">
        {text}
        <span className="w-full h-[2px] bottom-0 left-0 bg-blue-600"></span>
      </h3>
      <span className="text-blue-600">{icon}</span>
    </div>
  );
};

export default Title;
