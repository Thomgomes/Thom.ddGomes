import React from "react";

const Button = ({
  children,
  text,
  variant = "primary",
  border = "none",
  type = 1,
  ...props
}) => {
  const baseStyles = "flex items-center justify-center font-semibold";

  const variants = {
    primary: "px-6 py-2 rounded-lg",
    secundary: "px-3 py-1 rounded-full",
    skills: "p-3 rounded-xl",
  };

  const borders = {
    none: "",
    1: "border-1",
    2: "border-2",
    3: "border-3",
  };

  const typeColor = {
    1: "bg-ots-base text-dark hover:bg-ots-dark hover:text-primary-600 hover:cursor-pointer",
    2: "bg-transparent text-light border-light hover:bg-light hover:text-dark hover:border-gray-200 hover:cursor-pointer",
    3: "group bg-gray-800/40 border-ots-base hover:bg-gray-800/60 hover:border-ots-dark hover:cursor-pointer",
    4: "bg-transparent text-ots-yellow border-ots-yellow ",
    5: "bg-transparent text-ots-yellow border-ots-yellow hover:border-ots-dark hover:cursor-pointer",
    6: "bg-transparent text-ots-base border-ots-base hover:bg-ots-base hover:text-primary-800 hover:border-ots-dark hover:cursor-pointer",
  };

  return (
    <button
      {...props}
      className={`whitespace-nowrap flex text-center justify-center ${variants[variant]}  ${borders[border]} ${typeColor[type]} ${baseStyles} transition-all `}
    >
      <p>{text}</p>
      {children}
    </button>
  );
};

export default Button;


//         <Button
//           buttonClass={""}
//           text="react"
//           variant="secundary"
//           type={4}
//           border="2"
//         />
//         <Button text="" variant="secundary" type={5} border="2">
//           <img src="Vector.svg" alt="" className="" width={20} />
//         </Button>
//         <Button
//           buttonClass={""}
//           text="Visualizar projeto ->"
//           variant="secundary"
//           type={6}
//           border="2"
//         /> 