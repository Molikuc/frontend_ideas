"use client";
import { useState } from "react";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "DEL", "="],
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
    <div>
      <div className="w-[390px] flex flex-col">
        <div className="h-[100px] flex flex-col items-end my-[1.3331rem] mx-8">
          <div className="mt-auto text-sm">{`${calc.sign} ${calc.num}`}</div>
          <div className="text-2xl">{calc.res}</div>
        </div>
        <div className="">
          <div className="grid grid-cols-4 gap-2 mx-8">
            {btnValues.flat().map((btn, index) => {
              let buttonStyle =
                "border-2 rounded-xl p-[1.3331rem] shadow-lg text-xl flex items-center justify-center";

              if (
                ["C", "+-", "%", "/", "X", "-", "+"].includes(btn as string)
              ) {
                buttonStyle += " bg-violet-200 text-indigo-600";
              } else if (btn === "=") {
                buttonStyle += " bg-indigo-600 text-white";
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
