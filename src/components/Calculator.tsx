"use client";
import { useState } from "react";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (calc.num.toString().length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === 0
            ? "0"
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
      });
    }
  };

  const commaClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      sign: value,
      num: 0,
      res: !calc.res && calc.num ? calc.num : calc.res,
    });
  };

  const equalClickHandler = () => {
    if (calc.sign && calc.num) {
      //@ts-ignore
      const calcul = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res: calcul(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const clearClickHandler = () => {
    setCalc({ ...calc, sign: "", num: 0, res: 0 });
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
    });
  };

  const percentClickHandler = () => {
    //@ts-ignore
    const percent = (a, b) => +(a * b) / 100;

    setCalc({
      ...calc,
      num: percent(Number(calc.num), Number(calc.res)),
    });
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="text-7xl flex justify-center my-5 mb-10">Calculator</div>
      <div className="w-[390px] flex flex-col pb-[1.3331rem] rounded-xl bg-indigo-100 shadow-xl">
        <div className="h-[125px] w-full flex flex-col items-end rounded-t-xl bg-zinc-100 pb-[1.3331rem]">
          <div className="mt-auto mr-8 text-sm">{`${calc.sign} ${calc.num}`}</div>
          <div className="text-2xl mr-8 pr-[1.3331ren]">{calc.res}</div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-2 mt-8 mx-8">
            {btnValues.flat().map((btn, index) => {
              let buttonStyle =
                "rounded-xl p-[1.3331rem] shadow-lg text-xl flex items-center justify-center";

              if (
                ["C", "+-", "%", "/", "X", "-", "+"].includes(btn as string)
              ) {
                buttonStyle +=
                  " bg-violet-200 text-indigo-600 active:bg-violet-300";
              } else if (btn === "=") {
                buttonStyle += " bg-indigo-600 text-white active:bg-indigo-700";
              } else if (btn === 0) {
                buttonStyle += " bg-zinc-100 col-span-2 active:bg-zinc-200";
              } else {
                buttonStyle += " bg-zinc-100 active:bg-zinc-200";
              }
              return (
                <button
                  className={buttonStyle}
                  key={index}
                  onClick={
                    btn === "."
                      ? commaClickHandler
                      : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                      ? signClickHandler
                      : btn === "="
                      ? equalClickHandler
                      : btn === "C"
                      ? clearClickHandler
                      : btn === "+-"
                      ? invertClickHandler
                      : btn === "%"
                      ? percentClickHandler
                      : numClickHandler
                  }
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
