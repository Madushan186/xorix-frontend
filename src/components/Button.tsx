import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: string;
  text: string;
}

const Button = ({ mode, text, ...props }: ButtonProps) => {
  const baseClasses =
    "text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base transition-all duration-300 ease-in-out";

  return (
    <>
      {mode === "white" && (
        <button
          {...props}
          className={`${baseClasses} bg-white text-black border border-gray-400 hover:bg-black hover:text-white hover:scale-105`}
        >
          {text}
        </button>
      )}

      {mode === "brown" && (
        <button
          {...props}
          className={`${baseClasses} bg-secondaryBrown text-white hover:bg-black hover:text-white hover:scale-105`}
        >
          {text}
        </button>
      )}

      {mode === "transparent" && (
        <button
          {...props}
          className={`${baseClasses} bg-transparent text-white border-2 border-white hover:bg-white hover:text-black hover:scale-105`}
        >
          {text}
        </button>
      )}

      {mode !== "white" && mode !== "brown" && mode !== "transparent" && (
        <p>No valid mode selected</p>
      )}
    </>
  );
};

export default Button;
