import React from "react";

function Title({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold hover:text-blue-500 transition-all">
        {text}
      </h1>
      <div className="w-40 h-2 bg-blue-500"></div>
      <div className="w-40 h-2 bg-green-500 translate-x-2"></div>
    </div>
  );
}

export default Title;
