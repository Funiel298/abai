'use client';

import React, { useState, useMemo } from "react";

const kids = [
  [
    {
      id: "arith",
      name: "Арифметика",
      state: "0",
    },
    {
      id: "equat",
      name: "Уравнения",
      state: "1",
    },
    {
      id: "text",
      name: "Текстовые задачи",
      state: "2",
    },
  ],
  [
    {
      id: "fract",
      name: "Дроби",
      state: "3",
    },
    {
      id: "dec",
      name: "Десятичные дроби",
      state: "4",
    },
    {
      id: "proc",
      name: "Проценты",
      state: "5",
    },
    {
      id: "text2",
      name: "Текстовые задачи",
      state: "2",
    },
  ],
  [
    {
      id: "neg",
      name: "Отрицательные числа",
      state: "6",
    },
    {
      id: "equat2",
      name: "Уравнения",
      state: "1",
    },
    {
      id: "ineq",
      name: "Неравенства",
      state: "7",
    },
    {
      id: "geom",
      name: "Геометрия",
      state: "8",
    },
  ],
];

export default function Settings({ grade, setGrade, setSubject }: any) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const options = useMemo(() => Array.from({ length: 10 }, (_, i) => i + 2), []);

  const selectedKids = useMemo(() => {
    if (grade === 5 || grade === 6) {
      return kids[1];
    } else if (grade >= 7) {
      return kids[2];
    } else {
      return kids[0];
    }
  }, [grade]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGrade(Number(event.target.value));
  };

  const handleClick = (state: string) => {
    setSelectedSubject(state);
    setSubject(state); // Это, вероятно, передается извне для установки текущего предмета
  };

  return (
    <div className="relative h-screen w-1/3 flex flex-col items-center p-4 bg-gray-300">
      <input
        type="text"
        placeholder="Имя Ученика"
        className="w-full bg-gray-100 p-4 outline-none rounded-xl m-1"
      />
      <input
        type="text"
        placeholder="Имя Преподавателя"
        className="w-full bg-gray-100 p-4 outline-none rounded-xl m-3"
      />

      <select
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-gray-100 outline-none border m-1"
        value={grade}
        name="settings"
        id="settings"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="flex flex-col items-start text-xl mt-4 w-full">
        {selectedKids.map((section) => (
          <button
            onClick={() => handleClick(section.state)}
            key={section.id}
            className={`p-3 mt-4 rounded-2xl transition-colors w-full text-left ${
              selectedSubject === section.state
                ? 'bg-blue-500 text-white'
                : 'bg-white text-black'
            }`}
          >
            {section.name}
          </button>
        ))}
      </div>
    </div>
  );
}
