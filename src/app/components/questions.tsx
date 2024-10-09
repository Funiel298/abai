export default function Questions({ grade, setGrade, setSubject, subject }: any) {
    const sections = [
      [
        {
            name: 'Сложение и вычитание',
            exercises: [
              { label: 'Оценка', options: Array.from({ length: 10 }, (_, i) => i + 1) }, 
              { label: 'Решение', options: ['С подсказками', 'Без подсказок', 'Не смог решить'] },
            ],
          },
          {
            name: 'Умножение',
            exercises: [
              { label: 'Оценка', options: Array.from({ length: 10 }, (_, i) => i + 1) },
              { label: 'Решение', options: ['С подсказками', 'Без подсказок', 'Не смог решить'] },
            ],
          },
          {
            name: 'Деление',
            exercises: [
              { label: 'Оценка', options: Array.from({ length: 10 }, (_, i) => i + 1) },
              { label: 'Решение', options: ['С подсказками', 'Без подсказок', 'Не смог решить'] },
            ],
          },
      ],
    ]
  
    return (
      <div className="w-2/3 p-5 m-3 rounded-2xl bg-white shadow-lg h-[90vh]">
  
        {sections[subject].map((section, index) => (
          <div key={index} className="mt-4">
            <h2 className="text-xl font-bold">{section.name}</h2>
  
            {section.exercises.map((exercise, i) => (
              <div key={i} className="flex items-center mt-2">
                <label className="mr-2">{exercise.label}:</label>
                <select className="p-2 rounded-md bg-gray-100 outline-none border">
                  {exercise.options.map((option, j) => (
                    <option key={j} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  