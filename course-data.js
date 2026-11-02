/* Оригинальные материалы Pre-A1 и Beginner A1. Индексы evidence: с нуля. */
const courseLessons = [
  {
    "id": "alphabet",
    "title": "Алфавит",
    "level": "Pre-A1",
    "icon": "🔤",
    "intro": "Знакомимся с 26 буквами английского алфавита. Название буквы и звук в слове — не одно и то же.",
    "rules": [
      "Начни с названий A [эй], B [би], C [си]. В слове cat буква C обозначает звук /k/, хотя называется «си». Русские подсказки приблизительны: слушай английскую озвучку.",
      "Пары A/a, B/b — это большая и маленькая буква. Имена начинаются с большой буквы: Ben. В алфавите 26 букв, из них A, E, I, O, U обычно называют гласными; Y тоже может передавать гласный звук.",
      "В историях много знакомых опор: This is… — «Это…», Here is… — «Вот…». Прочитай с помощью взрослого; сегодня главное — находить буквы и слушать слова."
    ],
    "examples": [
      [
        "A is for apple.",
        "A — первая буква слова apple (яблоко)."
      ],
      [
        "B is for ball.",
        "B — первая буква слова ball (мяч)."
      ],
      [
        "This is a cat.",
        "Это кот."
      ]
    ],
    "vocab": [
      [
        "apple",
        "яблоко"
      ],
      [
        "ball",
        "мяч"
      ],
      [
        "cat",
        "кот"
      ],
      [
        "dog",
        "собака"
      ],
      [
        "egg",
        "яйцо"
      ],
      [
        "fish",
        "рыба"
      ],
      [
        "hat",
        "шляпа"
      ],
      [
        "box",
        "коробка"
      ]
    ],
    "practice": [
      {
        "q": "Какая маленькая буква соответствует B?",
        "opts": [
          "d",
          "b",
          "p"
        ],
        "a": 1,
        "why": "Большая B и маленькая b — одна буква."
      },
      {
        "q": "С какой буквы начинается apple?",
        "opts": [
          "A",
          "B",
          "C"
        ],
        "a": 0,
        "why": "Apple начинается с A."
      },
      {
        "q": "Что означает cat?",
        "opts": [
          "собака",
          "кот",
          "рыба"
        ],
        "a": 1,
        "why": "Cat — кот; dog — собака."
      }
    ],
    "test": [
      {
        "q": "Сколько букв в английском алфавите?",
        "opts": [
          "26",
          "33",
          "20"
        ],
        "a": 0,
        "why": "В английском алфавите 26 букв."
      },
      {
        "q": "Какая буква идёт после B?",
        "opts": [
          "A",
          "D",
          "C"
        ],
        "a": 2,
        "why": "Начало алфавита: A, B, C, D."
      },
      {
        "q": "Какая маленькая буква соответствует D?",
        "opts": [
          "b",
          "d",
          "g"
        ],
        "a": 1,
        "why": "D и d — одна буква."
      },
      {
        "q": "Какая буква начинает слово ball?",
        "opts": [
          "B",
          "D",
          "A"
        ],
        "a": 0,
        "why": "Ball начинается с B."
      },
      {
        "q": "Выбери гласную букву.",
        "opts": [
          "B",
          "C",
          "E"
        ],
        "a": 2,
        "why": "E — одна из гласных букв: A, E, I, O, U."
      }
    ],
    "order": [
      "This is a cat",
      "Это кот."
    ],
    "pattern": "\\b[A-Za-z]\\b",
    "stories": [
      {
        "title": "Бен и коробка букв",
        "icon": "📦",
        "sentences": [
          [
            "This is Ben.",
            "Это Бен."
          ],
          [
            "Ben is a boy.",
            "Бен — мальчик."
          ],
          [
            "Here is a box.",
            "Вот коробка."
          ],
          [
            "The box is blue.",
            "Коробка синяя."
          ],
          [
            "Here is a letter.",
            "Вот буква."
          ],
          [
            "The letter is A.",
            "Эта буква — A."
          ],
          [
            "A is for apple.",
            "A — первая буква слова apple."
          ],
          [
            "Here is an apple.",
            "Вот яблоко."
          ],
          [
            "The apple is red.",
            "Яблоко красное."
          ],
          [
            "Here is B.",
            "Вот B."
          ],
          [
            "B is for ball.",
            "B — первая буква слова ball."
          ],
          [
            "The ball is small.",
            "Мяч маленький."
          ],
          [
            "Here is C.",
            "Вот C."
          ],
          [
            "C is for cat.",
            "C — первая буква слова cat."
          ],
          [
            "The cat is in the box.",
            "Кот в коробке."
          ],
          [
            "The cat is funny.",
            "Кот смешной."
          ],
          [
            "Here is D.",
            "Вот D."
          ],
          [
            "D is for dog.",
            "D — первая буква слова dog."
          ],
          [
            "The dog is a toy.",
            "Собака — игрушечная."
          ],
          [
            "Ben is happy.",
            "Бен счастлив."
          ]
        ],
        "questions": [
          {
            "q": "Как зовут мальчика?",
            "opts": [
              "Ben",
              "Pip",
              "Milo"
            ],
            "a": 0,
            "evidence": 0
          },
          {
            "q": "Какого цвета коробка?",
            "opts": [
              "красная",
              "синяя",
              "жёлтая"
            ],
            "a": 1,
            "evidence": 3
          },
          {
            "q": "Какое слово начинается с A?",
            "opts": [
              "ball",
              "dog",
              "apple"
            ],
            "a": 2,
            "evidence": 6
          },
          {
            "q": "Кто в коробке?",
            "opts": [
              "кот",
              "рыба",
              "птица"
            ],
            "a": 0,
            "evidence": 14
          },
          {
            "q": "Какая собака в истории?",
            "opts": [
              "большая",
              "игрушечная",
              "зелёная"
            ],
            "a": 1,
            "evidence": 18
          }
        ],
        "tf": [
          {
            "q": "The box is blue.",
            "a": true,
            "evidence": 3
          },
          {
            "q": "The apple is green.",
            "a": false,
            "evidence": 8
          },
          {
            "q": "B is for ball.",
            "a": true,
            "evidence": 10
          },
          {
            "q": "The cat is in the box.",
            "a": true,
            "evidence": 14
          },
          {
            "q": "Ben is sad.",
            "a": false,
            "evidence": 19
          }
        ],
        "vocab": [
          [
            "boy",
            "мальчик"
          ],
          [
            "box",
            "коробка"
          ],
          [
            "letter",
            "буква"
          ],
          [
            "apple",
            "яблоко"
          ],
          [
            "ball",
            "мяч"
          ],
          [
            "cat",
            "кот"
          ],
          [
            "dog",
            "собака"
          ],
          [
            "toy",
            "игрушка"
          ],
          [
            "blue",
            "синий"
          ],
          [
            "happy",
            "счастливый"
          ]
        ]
      },
      {
        "title": "Карта для кота",
        "icon": "🗺️",
        "sentences": [
          [
            "This is a cat.",
            "Это кот."
          ],
          [
            "His name is Kit.",
            "Его зовут Кит."
          ],
          [
            "Here is a map.",
            "Вот карта."
          ],
          [
            "The map is big.",
            "Карта большая."
          ],
          [
            "Here is E.",
            "Вот E."
          ],
          [
            "E is for egg.",
            "E — первая буква слова egg."
          ],
          [
            "The egg is white.",
            "Яйцо белое."
          ],
          [
            "Here is F.",
            "Вот F."
          ],
          [
            "F is for fish.",
            "F — первая буква слова fish."
          ],
          [
            "The fish is a picture.",
            "Рыба — это картинка."
          ],
          [
            "Here is H.",
            "Вот H."
          ],
          [
            "H is for hat.",
            "H — первая буква слова hat."
          ],
          [
            "The hat is yellow.",
            "Шляпа жёлтая."
          ],
          [
            "Here is B.",
            "Вот B."
          ],
          [
            "B is for box.",
            "B — первая буква слова box."
          ],
          [
            "The box is under the hat.",
            "Коробка под шляпой."
          ],
          [
            "Here is a ball.",
            "Вот мяч."
          ],
          [
            "The ball is in the box.",
            "Мяч в коробке."
          ],
          [
            "The ball is for Kit.",
            "Мяч для Кита."
          ],
          [
            "Kit is happy.",
            "Кит счастлив."
          ]
        ],
        "questions": [
          {
            "q": "Как зовут кота?",
            "opts": [
              "Ben",
              "Kit",
              "Dot"
            ],
            "a": 1,
            "evidence": 1
          },
          {
            "q": "Какая карта?",
            "opts": [
              "большая",
              "маленькая",
              "красная"
            ],
            "a": 0,
            "evidence": 3
          },
          {
            "q": "С какой буквы начинается egg?",
            "opts": [
              "H",
              "F",
              "E"
            ],
            "a": 2,
            "evidence": 5
          },
          {
            "q": "Какого цвета шляпа?",
            "opts": [
              "жёлтая",
              "синяя",
              "чёрная"
            ],
            "a": 0,
            "evidence": 12
          },
          {
            "q": "Что в коробке?",
            "opts": [
              "яблоко",
              "мяч",
              "яйцо"
            ],
            "a": 1,
            "evidence": 17
          }
        ],
        "tf": [
          {
            "q": "The map is small.",
            "a": false,
            "evidence": 3
          },
          {
            "q": "The egg is white.",
            "a": true,
            "evidence": 6
          },
          {
            "q": "F is for fish.",
            "a": true,
            "evidence": 8
          },
          {
            "q": "The hat is blue.",
            "a": false,
            "evidence": 12
          },
          {
            "q": "The ball is for Kit.",
            "a": true,
            "evidence": 18
          }
        ],
        "vocab": [
          [
            "cat",
            "кот"
          ],
          [
            "map",
            "карта"
          ],
          [
            "egg",
            "яйцо"
          ],
          [
            "fish",
            "рыба"
          ],
          [
            "picture",
            "картинка"
          ],
          [
            "hat",
            "шляпа"
          ],
          [
            "box",
            "коробка"
          ],
          [
            "ball",
            "мяч"
          ],
          [
            "white",
            "белый"
          ],
          [
            "yellow",
            "жёлтый"
          ]
        ]
      }
    ]
  },
  {
    "id": "numbers",
    "title": "Числа 1–20",
    "level": "Pre-A1",
    "icon": "🔢",
    "intro": "Считаем игрушки, звёзды и маленькие сокровища. Сначала освой числа 1–10, затем 11–20.",
    "rules": [
      "1–10: one, two, three, four, five, six, seven, eight, nine, ten. Считай на пальцах, слушай и повторяй.",
      "11–20: eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty. Не торопись: thirteen и thirty (30) — разные числа.",
      "How many? — «Сколько?» После чисел больше одного обычно нужно множественное число: two cats. В этом уроке учимся прежде всего понимать количество."
    ],
    "examples": [
      [
        "One star.",
        "Одна звезда."
      ],
      [
        "Three cats.",
        "Три кота."
      ],
      [
        "How many balls? Ten!",
        "Сколько мячей? Десять!"
      ]
    ],
    "vocab": [
      [
        "one",
        "один"
      ],
      [
        "two",
        "два"
      ],
      [
        "three",
        "три"
      ],
      [
        "four",
        "четыре"
      ],
      [
        "five",
        "пять"
      ],
      [
        "six",
        "шесть"
      ],
      [
        "seven",
        "семь"
      ],
      [
        "eight",
        "восемь"
      ],
      [
        "nine",
        "девять"
      ],
      [
        "ten",
        "десять"
      ]
    ],
    "practice": [
      {
        "q": "Three — это…",
        "opts": [
          "2",
          "3",
          "4"
        ],
        "a": 1,
        "why": "Three означает три."
      },
      {
        "q": "Как сказать «пять»?",
        "opts": [
          "four",
          "five",
          "nine"
        ],
        "a": 1,
        "why": "Five — пять."
      },
      {
        "q": "Число после nine — …",
        "opts": [
          "ten",
          "eight",
          "six"
        ],
        "a": 0,
        "why": "Nine — девять, ten — десять."
      }
    ],
    "test": [
      {
        "q": "Twelve — это…",
        "opts": [
          "20",
          "12",
          "2"
        ],
        "a": 1,
        "why": "Twelve — двенадцать."
      },
      {
        "q": "Как сказать «двадцать»?",
        "opts": [
          "twenty",
          "twelve",
          "ten"
        ],
        "a": 0,
        "why": "Twenty — двадцать."
      },
      {
        "q": "Eleven — это…",
        "opts": [
          "7",
          "11",
          "1"
        ],
        "a": 1,
        "why": "Eleven — одиннадцать."
      },
      {
        "q": "Как сказать «семнадцать»?",
        "opts": [
          "seven",
          "seventeen",
          "sixteen"
        ],
        "a": 1,
        "why": "Seventeen — семнадцать."
      },
      {
        "q": "Число после nineteen — …",
        "opts": [
          "eighteen",
          "thirteen",
          "twenty"
        ],
        "a": 2,
        "why": "После nineteen (19) идёт twenty (20)."
      }
    ],
    "order": [
      "I see three stars",
      "Я вижу три звезды."
    ],
    "pattern": "\\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)\\b",
    "stories": [
      {
        "title": "Звёзды для Пипа",
        "icon": "⭐",
        "sentences": [
          [
            "This is Pip.",
            "Это Пип."
          ],
          [
            "Pip is a dragon.",
            "Пип — дракон."
          ],
          [
            "Here is one star.",
            "Вот одна звезда."
          ],
          [
            "The star is a toy.",
            "Эта звезда — игрушка."
          ],
          [
            "Here are two boxes.",
            "Вот две коробки."
          ],
          [
            "The boxes are blue.",
            "Коробки синие."
          ],
          [
            "Here are three balls.",
            "Вот три мяча."
          ],
          [
            "The balls are red.",
            "Мячи красные."
          ],
          [
            "Here are four cats.",
            "Вот четыре кота."
          ],
          [
            "The cats are toys.",
            "Коты — игрушечные."
          ],
          [
            "Here are five hats.",
            "Вот пять шляп."
          ],
          [
            "The hats are yellow.",
            "Шляпы жёлтые."
          ],
          [
            "Here are six cups.",
            "Вот шесть чашек."
          ],
          [
            "The cups are small.",
            "Чашки маленькие."
          ],
          [
            "Here are seven bags.",
            "Вот семь сумок."
          ],
          [
            "Here are eight books.",
            "Вот восемь книг."
          ],
          [
            "Here are nine pencils.",
            "Вот девять карандашей."
          ],
          [
            "Here are ten stars.",
            "Вот десять звёзд."
          ],
          [
            "The stars are for Pip.",
            "Звёзды для Пипа."
          ],
          [
            "Pip is happy.",
            "Пип счастлив."
          ]
        ],
        "questions": [
          {
            "q": "Кто такой Пип?",
            "opts": [
              "кот",
              "дракон",
              "робот"
            ],
            "a": 1,
            "evidence": 1
          },
          {
            "q": "Сколько коробок?",
            "opts": [
              "one",
              "three",
              "two"
            ],
            "a": 2,
            "evidence": 4
          },
          {
            "q": "Какого цвета мячи?",
            "opts": [
              "красные",
              "синие",
              "белые"
            ],
            "a": 0,
            "evidence": 7
          },
          {
            "q": "Сколько шляп?",
            "opts": [
              "five",
              "four",
              "six"
            ],
            "a": 0,
            "evidence": 10
          },
          {
            "q": "Для кого звёзды?",
            "opts": [
              "Kit",
              "Pip",
              "Ben"
            ],
            "a": 1,
            "evidence": 18
          }
        ],
        "tf": [
          {
            "q": "Here are two boxes.",
            "a": true,
            "evidence": 4
          },
          {
            "q": "The balls are blue.",
            "a": false,
            "evidence": 7
          },
          {
            "q": "Here are four cats.",
            "a": true,
            "evidence": 8
          },
          {
            "q": "The cups are big.",
            "a": false,
            "evidence": 13
          },
          {
            "q": "Here are ten stars.",
            "a": true,
            "evidence": 17
          }
        ],
        "vocab": [
          [
            "one",
            "один"
          ],
          [
            "two",
            "два"
          ],
          [
            "three",
            "три"
          ],
          [
            "four",
            "четыре"
          ],
          [
            "five",
            "пять"
          ],
          [
            "six",
            "шесть"
          ],
          [
            "seven",
            "семь"
          ],
          [
            "eight",
            "восемь"
          ],
          [
            "nine",
            "девять"
          ],
          [
            "ten",
            "десять"
          ]
        ]
      },
      {
        "title": "Праздник чисел",
        "icon": "🎈",
        "sentences": [
          [
            "This is a toy shop.",
            "Это магазин игрушек."
          ],
          [
            "Mia is here.",
            "Мия здесь."
          ],
          [
            "Here are eleven balls.",
            "Вот одиннадцать мячей."
          ],
          [
            "The balls are blue.",
            "Мячи синие."
          ],
          [
            "Here are twelve kites.",
            "Вот двенадцать воздушных змеев."
          ],
          [
            "The kites are red.",
            "Воздушные змеи красные."
          ],
          [
            "Here are thirteen ducks.",
            "Вот тринадцать уток."
          ],
          [
            "The ducks are toys.",
            "Утки — игрушечные."
          ],
          [
            "Here are fourteen cars.",
            "Вот четырнадцать машинок."
          ],
          [
            "The cars are small.",
            "Машинки маленькие."
          ],
          [
            "Here are fifteen bears.",
            "Вот пятнадцать медведей."
          ],
          [
            "The bears are brown.",
            "Медведи коричневые."
          ],
          [
            "Here are sixteen stars.",
            "Вот шестнадцать звёзд."
          ],
          [
            "The stars are yellow.",
            "Звёзды жёлтые."
          ],
          [
            "Here are seventeen blocks.",
            "Вот семнадцать кубиков."
          ],
          [
            "Here are eighteen boats.",
            "Вот восемнадцать лодочек."
          ],
          [
            "Here are nineteen flags.",
            "Вот девятнадцать флажков."
          ],
          [
            "Here are twenty balloons.",
            "Вот двадцать воздушных шаров."
          ],
          [
            "One balloon is for Mia.",
            "Один воздушный шар для Мии."
          ],
          [
            "Mia is happy.",
            "Мия счастлива."
          ]
        ],
        "questions": [
          {
            "q": "Где Мия?",
            "opts": [
              "в саду",
              "в магазине игрушек",
              "в школе"
            ],
            "a": 1,
            "evidence": 0
          },
          {
            "q": "Сколько воздушных змеев?",
            "opts": [
              "twelve",
              "eleven",
              "twenty"
            ],
            "a": 0,
            "evidence": 4
          },
          {
            "q": "Какого цвета медведи?",
            "opts": [
              "синие",
              "жёлтые",
              "коричневые"
            ],
            "a": 2,
            "evidence": 11
          },
          {
            "q": "Сколько лодочек?",
            "opts": [
              "eighteen",
              "eight",
              "seventeen"
            ],
            "a": 0,
            "evidence": 15
          },
          {
            "q": "Что получает Мия?",
            "opts": [
              "шляпу",
              "воздушный шар",
              "книгу"
            ],
            "a": 1,
            "evidence": 18
          }
        ],
        "tf": [
          {
            "q": "Here are eleven balls.",
            "a": true,
            "evidence": 2
          },
          {
            "q": "The kites are green.",
            "a": false,
            "evidence": 5
          },
          {
            "q": "Here are fifteen bears.",
            "a": true,
            "evidence": 10
          },
          {
            "q": "Here are twenty balloons.",
            "a": true,
            "evidence": 17
          },
          {
            "q": "Mia is sad.",
            "a": false,
            "evidence": 19
          }
        ],
        "vocab": [
          [
            "eleven",
            "одиннадцать"
          ],
          [
            "twelve",
            "двенадцать"
          ],
          [
            "thirteen",
            "тринадцать"
          ],
          [
            "fourteen",
            "четырнадцать"
          ],
          [
            "fifteen",
            "пятнадцать"
          ],
          [
            "sixteen",
            "шестнадцать"
          ],
          [
            "seventeen",
            "семнадцать"
          ],
          [
            "eighteen",
            "восемнадцать"
          ],
          [
            "nineteen",
            "девятнадцать"
          ],
          [
            "twenty",
            "двадцать"
          ]
        ]
      }
    ]
  },
  {
    "id": "colours",
    "title": "Цвета",
    "level": "Pre-A1",
    "icon": "🎨",
    "intro": "Открываем мастерскую красок. Слушай название цвета и находи его вокруг себя.",
    "rules": [
      "Основные цвета: red — красный, blue — синий, yellow — жёлтый, green — зелёный. Цвет обычно стоит перед предметом: a red ball.",
      "Ещё цвета: pink — розовый, purple — фиолетовый, orange — оранжевый, brown — коричневый, black — чёрный, white — белый.",
      "What colour is it? — «Какого это цвета?» Можно ответить коротко: Red! Или полным предложением: It is red. — «Это красное». Цвет в английском не меняется по родам."
    ],
    "examples": [
      [
        "A blue kite.",
        "Синий воздушный змей."
      ],
      [
        "It is green.",
        "Это зелёное."
      ],
      [
        "What colour is it?",
        "Какого это цвета?"
      ]
    ],
    "vocab": [
      [
        "red",
        "красный"
      ],
      [
        "blue",
        "синий"
      ],
      [
        "yellow",
        "жёлтый"
      ],
      [
        "green",
        "зелёный"
      ],
      [
        "pink",
        "розовый"
      ],
      [
        "purple",
        "фиолетовый"
      ],
      [
        "orange",
        "оранжевый"
      ],
      [
        "brown",
        "коричневый"
      ],
      [
        "black",
        "чёрный"
      ],
      [
        "white",
        "белый"
      ]
    ],
    "practice": [
      {
        "q": "Как сказать «зелёный»?",
        "opts": [
          "red",
          "green",
          "blue"
        ],
        "a": 1,
        "why": "Green — зелёный."
      },
      {
        "q": "A red ball — это…",
        "opts": [
          "красный мяч",
          "синий мяч",
          "зелёная книга"
        ],
        "a": 0,
        "why": "Red — красный, ball — мяч."
      },
      {
        "q": "Как спросить о цвете?",
        "opts": [
          "How many?",
          "What colour is it?",
          "Hello!"
        ],
        "a": 1,
        "why": "What colour is it? — «Какого это цвета?»"
      }
    ],
    "test": [
      {
        "q": "Purple — это…",
        "opts": [
          "фиолетовый",
          "коричневый",
          "жёлтый"
        ],
        "a": 0,
        "why": "Purple — фиолетовый."
      },
      {
        "q": "Как сказать «белый»?",
        "opts": [
          "black",
          "white",
          "pink"
        ],
        "a": 1,
        "why": "White — белый."
      },
      {
        "q": "Как сказать «оранжевый мяч»?",
        "opts": [
          "an orange ball",
          "a ball orange",
          "a blue ball"
        ],
        "a": 0,
        "why": "Цвет ставим перед предметом: an orange ball."
      },
      {
        "q": "Brown — это…",
        "opts": [
          "чёрный",
          "зелёный",
          "коричневый"
        ],
        "a": 2,
        "why": "Brown — коричневый."
      },
      {
        "q": "It is pink. — Это…",
        "opts": [
          "розовое",
          "синее",
          "красное"
        ],
        "a": 0,
        "why": "Pink — розовый цвет."
      }
    ],
    "order": [
      "The ball is red",
      "Мяч красный."
    ],
    "pattern": "\\b(red|blue|yellow|green|pink|purple|orange|brown|black|white)\\b",
    "stories": [
      {
        "title": "Кисточка и белый кот",
        "icon": "🖌️",
        "sentences": [
          [
            "This is Eva.",
            "Это Ева."
          ],
          [
            "Eva is an artist.",
            "Ева — художница."
          ],
          [
            "Here is a white cat.",
            "Вот белый кот."
          ],
          [
            "His name is Snow.",
            "Его зовут Сноу."
          ],
          [
            "Here is a red ball.",
            "Вот красный мяч."
          ],
          [
            "The ball is for Snow.",
            "Мяч для Сноу."
          ],
          [
            "Here is a blue cup.",
            "Вот синяя чашка."
          ],
          [
            "The cup is small.",
            "Чашка маленькая."
          ],
          [
            "Here is a yellow brush.",
            "Вот жёлтая кисточка."
          ],
          [
            "The brush is in the cup.",
            "Кисточка в чашке."
          ],
          [
            "Here is a green tree.",
            "Вот зелёное дерево."
          ],
          [
            "The tree is a picture.",
            "Дерево — это картинка."
          ],
          [
            "Here is a pink flower.",
            "Вот розовый цветок."
          ],
          [
            "The flower is a picture too.",
            "Цветок — тоже картинка."
          ],
          [
            "Here is a black hat.",
            "Вот чёрная шляпа."
          ],
          [
            "The hat is on Snow.",
            "Шляпа на Сноу."
          ],
          [
            "Snow is funny.",
            "Сноу смешной."
          ],
          [
            "Eva is happy.",
            "Ева счастлива."
          ],
          [
            "The picture is for Snow.",
            "Картина для Сноу."
          ],
          [
            "Snow is a good friend.",
            "Сноу — хороший друг."
          ]
        ],
        "questions": [
          {
            "q": "Кто Ева?",
            "opts": [
              "художница",
              "врач",
              "пекарь"
            ],
            "a": 0,
            "evidence": 1
          },
          {
            "q": "Какого цвета кот?",
            "opts": [
              "чёрный",
              "белый",
              "синий"
            ],
            "a": 1,
            "evidence": 2
          },
          {
            "q": "Какого цвета чашка?",
            "opts": [
              "red",
              "green",
              "blue"
            ],
            "a": 2,
            "evidence": 6
          },
          {
            "q": "Где кисточка?",
            "opts": [
              "в чашке",
              "в сумке",
              "на дереве"
            ],
            "a": 0,
            "evidence": 9
          },
          {
            "q": "Для кого картина?",
            "opts": [
              "для Мии",
              "для Сноу",
              "для Пипа"
            ],
            "a": 1,
            "evidence": 18
          }
        ],
        "tf": [
          {
            "q": "The ball is red.",
            "a": true,
            "evidence": 4
          },
          {
            "q": "The brush is blue.",
            "a": false,
            "evidence": 8
          },
          {
            "q": "The tree is a picture.",
            "a": true,
            "evidence": 11
          },
          {
            "q": "The hat is white.",
            "a": false,
            "evidence": 14
          },
          {
            "q": "Eva is happy.",
            "a": true,
            "evidence": 17
          }
        ],
        "vocab": [
          [
            "artist",
            "художник"
          ],
          [
            "white",
            "белый"
          ],
          [
            "red",
            "красный"
          ],
          [
            "blue",
            "синий"
          ],
          [
            "yellow",
            "жёлтый"
          ],
          [
            "green",
            "зелёный"
          ],
          [
            "pink",
            "розовый"
          ],
          [
            "black",
            "чёрный"
          ],
          [
            "brush",
            "кисточка"
          ],
          [
            "picture",
            "картина"
          ]
        ]
      },
      {
        "title": "Радужная лодка",
        "icon": "⛵",
        "sentences": [
          [
            "This is a boat.",
            "Это лодка."
          ],
          [
            "The boat is purple.",
            "Лодка фиолетовая."
          ],
          [
            "This is Leo.",
            "Это Лео."
          ],
          [
            "Leo is on the boat.",
            "Лео на лодке."
          ],
          [
            "Here is a brown bear.",
            "Вот коричневый медведь."
          ],
          [
            "The bear is a toy.",
            "Медведь — игрушечный."
          ],
          [
            "Here is an orange bag.",
            "Вот оранжевая сумка."
          ],
          [
            "The bag is for Leo.",
            "Сумка для Лео."
          ],
          [
            "Here is a yellow hat.",
            "Вот жёлтая шляпа."
          ],
          [
            "The hat is in the bag.",
            "Шляпа в сумке."
          ],
          [
            "Here is a green frog.",
            "Вот зелёная лягушка."
          ],
          [
            "The frog is small.",
            "Лягушка маленькая."
          ],
          [
            "Here is a pink flag.",
            "Вот розовый флажок."
          ],
          [
            "The flag is on the boat.",
            "Флажок на лодке."
          ],
          [
            "Here is a blue fish.",
            "Вот синяя рыбка."
          ],
          [
            "The fish is under the boat.",
            "Рыбка под лодкой."
          ],
          [
            "The sky is blue.",
            "Небо синее."
          ],
          [
            "The sun is yellow.",
            "Солнце жёлтое."
          ],
          [
            "Leo is happy.",
            "Лео счастлив."
          ],
          [
            "The frog is happy too.",
            "Лягушка тоже счастлива."
          ]
        ],
        "questions": [
          {
            "q": "Какого цвета лодка?",
            "opts": [
              "purple",
              "red",
              "black"
            ],
            "a": 0,
            "evidence": 1
          },
          {
            "q": "Кто на лодке?",
            "opts": [
              "Eva",
              "Leo",
              "Kit"
            ],
            "a": 1,
            "evidence": 3
          },
          {
            "q": "Какого цвета сумка?",
            "opts": [
              "зелёная",
              "белая",
              "оранжевая"
            ],
            "a": 2,
            "evidence": 6
          },
          {
            "q": "Где шляпа?",
            "opts": [
              "в сумке",
              "под лодкой",
              "на рыбке"
            ],
            "a": 0,
            "evidence": 9
          },
          {
            "q": "Какого цвета лягушка?",
            "opts": [
              "blue",
              "green",
              "pink"
            ],
            "a": 1,
            "evidence": 10
          }
        ],
        "tf": [
          {
            "q": "The bear is brown.",
            "a": true,
            "evidence": 4
          },
          {
            "q": "The hat is black.",
            "a": false,
            "evidence": 8
          },
          {
            "q": "The flag is pink.",
            "a": true,
            "evidence": 12
          },
          {
            "q": "The fish is on the boat.",
            "a": false,
            "evidence": 15
          },
          {
            "q": "The sun is yellow.",
            "a": true,
            "evidence": 17
          }
        ],
        "vocab": [
          [
            "boat",
            "лодка"
          ],
          [
            "purple",
            "фиолетовый"
          ],
          [
            "brown",
            "коричневый"
          ],
          [
            "orange",
            "оранжевый"
          ],
          [
            "yellow",
            "жёлтый"
          ],
          [
            "green",
            "зелёный"
          ],
          [
            "pink",
            "розовый"
          ],
          [
            "blue",
            "синий"
          ],
          [
            "flag",
            "флажок"
          ],
          [
            "frog",
            "лягушка"
          ]
        ]
      }
    ]
  },
  {
    "id": "animals",
    "title": "Животные",
    "level": "Pre-A1",
    "icon": "🐾",
    "intro": "Знакомимся с животными через маленькие приключения. Скажи название, найди животное и послушай слово.",
    "rules": [
      "Домашние животные: cat — кот, dog — собака, rabbit — кролик. Fish — рыба, bird — птица.",
      "На ферме живут duck — утка и horse — лошадь. В сказочном лесу можно встретить bear — медведя, fox — лису и frog — лягушку.",
      "This is a… — «Это…». Перед одним животным часто ставим a: a cat. Звук, который издаёт животное, и его название — разные слова."
    ],
    "examples": [
      [
        "This is a rabbit.",
        "Это кролик."
      ],
      [
        "The fox is orange.",
        "Лиса оранжевая."
      ],
      [
        "A duck and a frog.",
        "Утка и лягушка."
      ]
    ],
    "vocab": [
      [
        "cat",
        "кот"
      ],
      [
        "dog",
        "собака"
      ],
      [
        "rabbit",
        "кролик"
      ],
      [
        "fish",
        "рыба"
      ],
      [
        "bird",
        "птица"
      ],
      [
        "duck",
        "утка"
      ],
      [
        "horse",
        "лошадь"
      ],
      [
        "bear",
        "медведь"
      ],
      [
        "fox",
        "лиса"
      ],
      [
        "frog",
        "лягушка"
      ]
    ],
    "practice": [
      {
        "q": "Кто такой rabbit?",
        "opts": [
          "кролик",
          "утка",
          "лиса"
        ],
        "a": 0,
        "why": "Rabbit — кролик."
      },
      {
        "q": "Как сказать «лошадь»?",
        "opts": [
          "house",
          "horse",
          "bird"
        ],
        "a": 1,
        "why": "Horse — лошадь; house — дом."
      },
      {
        "q": "Выбери перевод слова frog.",
        "opts": [
          "рыба",
          "кот",
          "лягушка"
        ],
        "a": 2,
        "why": "Frog — лягушка."
      }
    ],
    "test": [
      {
        "q": "Duck — это…",
        "opts": [
          "утка",
          "собака",
          "птица в общем"
        ],
        "a": 0,
        "why": "Duck — именно утка."
      },
      {
        "q": "Как сказать «лиса»?",
        "opts": [
          "frog",
          "fox",
          "fish"
        ],
        "a": 1,
        "why": "Fox — лиса."
      },
      {
        "q": "Bear — это…",
        "opts": [
          "медведь",
          "кролик",
          "лошадь"
        ],
        "a": 0,
        "why": "Bear — медведь."
      },
      {
        "q": "This is a cat. — Это…",
        "opts": [
          "собака",
          "кошка",
          "утка"
        ],
        "a": 1,
        "why": "Cat — кот или кошка."
      },
      {
        "q": "Как сказать «птица»?",
        "opts": [
          "bird",
          "bear",
          "ball"
        ],
        "a": 0,
        "why": "Bird — птица."
      }
    ],
    "order": [
      "This is a rabbit",
      "Это кролик."
    ],
    "pattern": "\\b(cat|dog|rabbit|fish|bird|duck|horse|bear|fox|frog)\\b",
    "stories": [
      {
        "title": "Пикник у пруда",
        "icon": "🦆",
        "sentences": [
          [
            "This is a duck.",
            "Это утка."
          ],
          [
            "Her name is Dot.",
            "Её зовут Дот."
          ],
          [
            "Dot is yellow.",
            "Дот жёлтая."
          ],
          [
            "Here is a frog.",
            "Вот лягушка."
          ],
          [
            "The frog is green.",
            "Лягушка зелёная."
          ],
          [
            "His name is Fin.",
            "Его зовут Фин."
          ],
          [
            "Here is a rabbit.",
            "Вот кролик."
          ],
          [
            "The rabbit is white.",
            "Кролик белый."
          ],
          [
            "Her name is Rose.",
            "Её зовут Роуз."
          ],
          [
            "Here is a picnic.",
            "Вот пикник."
          ],
          [
            "The picnic is by a pond.",
            "Пикник у пруда."
          ],
          [
            "Here is a red apple.",
            "Вот красное яблоко."
          ],
          [
            "The apple is for Rose.",
            "Яблоко для Роуз."
          ],
          [
            "Here is a blue cup.",
            "Вот синяя чашка."
          ],
          [
            "The cup is for Fin.",
            "Чашка для Фина."
          ],
          [
            "Here is a little fish.",
            "Вот маленькая рыбка."
          ],
          [
            "The fish is in the pond.",
            "Рыбка в пруду."
          ],
          [
            "Dot is by the pond.",
            "Дот у пруда."
          ],
          [
            "The friends are together.",
            "Друзья вместе."
          ],
          [
            "The picnic is fun.",
            "Пикник весёлый."
          ]
        ],
        "questions": [
          {
            "q": "Кто Дот?",
            "opts": [
              "утка",
              "кот",
              "рыба"
            ],
            "a": 0,
            "evidence": 0
          },
          {
            "q": "Какого цвета Фин?",
            "opts": [
              "белый",
              "зелёный",
              "красный"
            ],
            "a": 1,
            "evidence": 4
          },
          {
            "q": "Кто Роуз?",
            "opts": [
              "лиса",
              "лошадь",
              "кролик"
            ],
            "a": 2,
            "evidence": 6
          },
          {
            "q": "Для кого яблоко?",
            "opts": [
              "для Роуз",
              "для Дот",
              "для Фина"
            ],
            "a": 0,
            "evidence": 12
          },
          {
            "q": "Где рыбка?",
            "opts": [
              "в чашке",
              "в пруду",
              "в сумке"
            ],
            "a": 1,
            "evidence": 16
          }
        ],
        "tf": [
          {
            "q": "Dot is yellow.",
            "a": true,
            "evidence": 2
          },
          {
            "q": "The rabbit is black.",
            "a": false,
            "evidence": 7
          },
          {
            "q": "The picnic is by a pond.",
            "a": true,
            "evidence": 10
          },
          {
            "q": "The cup is for Rose.",
            "a": false,
            "evidence": 14
          },
          {
            "q": "The fish is little.",
            "a": true,
            "evidence": 15
          }
        ],
        "vocab": [
          [
            "duck",
            "утка"
          ],
          [
            "frog",
            "лягушка"
          ],
          [
            "rabbit",
            "кролик"
          ],
          [
            "fish",
            "рыба"
          ],
          [
            "pond",
            "пруд"
          ],
          [
            "picnic",
            "пикник"
          ],
          [
            "apple",
            "яблоко"
          ],
          [
            "cup",
            "чашка"
          ],
          [
            "friends",
            "друзья"
          ],
          [
            "together",
            "вместе"
          ]
        ]
      },
      {
        "title": "Гость в лесном домике",
        "icon": "🦊",
        "sentences": [
          [
            "This is a fox.",
            "Это лиса."
          ],
          [
            "His name is Rusty.",
            "Его зовут Расти."
          ],
          [
            "Rusty is orange.",
            "Расти оранжевый."
          ],
          [
            "Here is a little house.",
            "Вот маленький домик."
          ],
          [
            "The house is for Rusty.",
            "Домик для Расти."
          ],
          [
            "Here is a bear.",
            "Вот медведь."
          ],
          [
            "The bear is brown.",
            "Медведь коричневый."
          ],
          [
            "Her name is Bea.",
            "Её зовут Беа."
          ],
          [
            "Bea is at the door.",
            "Беа у двери."
          ],
          [
            "Here is a dog.",
            "Вот собака."
          ],
          [
            "The dog is small.",
            "Собака маленькая."
          ],
          [
            "His name is Patch.",
            "Его зовут Пэтч."
          ],
          [
            "Here is a horse.",
            "Вот лошадь."
          ],
          [
            "The horse is a toy.",
            "Лошадь — игрушечная."
          ],
          [
            "The toy is for Rusty.",
            "Игрушка для Расти."
          ],
          [
            "Here is a bird.",
            "Вот птица."
          ],
          [
            "The bird is on the roof.",
            "Птица на крыше."
          ],
          [
            "Rusty is happy.",
            "Расти счастлив."
          ],
          [
            "The house is warm.",
            "В доме тепло."
          ],
          [
            "The friends are happy too.",
            "Друзья тоже счастливы."
          ]
        ],
        "questions": [
          {
            "q": "Кто Расти?",
            "opts": [
              "медведь",
              "лиса",
              "птица"
            ],
            "a": 1,
            "evidence": 0
          },
          {
            "q": "Какого цвета Беа?",
            "opts": [
              "синяя",
              "белая",
              "коричневая"
            ],
            "a": 2,
            "evidence": 6
          },
          {
            "q": "Где Беа?",
            "opts": [
              "у двери",
              "на крыше",
              "в пруду"
            ],
            "a": 0,
            "evidence": 8
          },
          {
            "q": "Какая лошадь?",
            "opts": [
              "настоящая",
              "игрушечная",
              "огромная"
            ],
            "a": 1,
            "evidence": 13
          },
          {
            "q": "Где птица?",
            "opts": [
              "на крыше",
              "в чашке",
              "под столом"
            ],
            "a": 0,
            "evidence": 16
          }
        ],
        "tf": [
          {
            "q": "Rusty is orange.",
            "a": true,
            "evidence": 2
          },
          {
            "q": "Bea is a dog.",
            "a": false,
            "evidence": 5
          },
          {
            "q": "Patch is small.",
            "a": true,
            "evidence": 10
          },
          {
            "q": "The toy is for Bea.",
            "a": false,
            "evidence": 14
          },
          {
            "q": "The house is warm.",
            "a": true,
            "evidence": 18
          }
        ],
        "vocab": [
          [
            "fox",
            "лиса"
          ],
          [
            "bear",
            "медведь"
          ],
          [
            "dog",
            "собака"
          ],
          [
            "horse",
            "лошадь"
          ],
          [
            "bird",
            "птица"
          ],
          [
            "house",
            "дом"
          ],
          [
            "door",
            "дверь"
          ],
          [
            "roof",
            "крыша"
          ],
          [
            "warm",
            "тёплый"
          ],
          [
            "toy",
            "игрушка"
          ]
        ]
      }
    ]
  },
  {
    "id": "family",
    "title": "Семья",
    "level": "Pre-A1",
    "icon": "🏡",
    "intro": "Учимся представлять близких. Семьи бывают разными: можно говорить о своей семье или о семье героев.",
    "rules": [
      "Mum — мама, dad — папа, sister — сестра, brother — брат. Mother и father — более полные варианты слов «мама» и «папа».",
      "Grandma — бабушка, grandpa — дедушка. Aunt — тётя, uncle — дядя, cousin — двоюродный брат или двоюродная сестра.",
      "My — «мой, моя, моё, мои»: my mum, my family. В историях This is my… означает «Это мой/моя…». Не нужно рассказывать о своей семье: можно представить игрушек."
    ],
    "examples": [
      [
        "This is my mum.",
        "Это моя мама."
      ],
      [
        "This is my brother.",
        "Это мой брат."
      ],
      [
        "My family is here.",
        "Моя семья здесь."
      ]
    ],
    "vocab": [
      [
        "mum",
        "мама"
      ],
      [
        "dad",
        "папа"
      ],
      [
        "sister",
        "сестра"
      ],
      [
        "brother",
        "брат"
      ],
      [
        "grandma",
        "бабушка"
      ],
      [
        "grandpa",
        "дедушка"
      ],
      [
        "aunt",
        "тётя"
      ],
      [
        "uncle",
        "дядя"
      ],
      [
        "cousin",
        "двоюродный брат или сестра"
      ],
      [
        "family",
        "семья"
      ]
    ],
    "practice": [
      {
        "q": "Sister — это…",
        "opts": [
          "сестра",
          "брат",
          "тётя"
        ],
        "a": 0,
        "why": "Sister — сестра."
      },
      {
        "q": "Как сказать «мой папа»?",
        "opts": [
          "my mum",
          "my dad",
          "my aunt"
        ],
        "a": 1,
        "why": "Dad — папа, my — мой."
      },
      {
        "q": "Grandma — это…",
        "opts": [
          "мама",
          "тётя",
          "бабушка"
        ],
        "a": 2,
        "why": "Grandma — бабушка."
      }
    ],
    "test": [
      {
        "q": "Brother — это…",
        "opts": [
          "брат",
          "дедушка",
          "сестра"
        ],
        "a": 0,
        "why": "Brother — брат."
      },
      {
        "q": "Как сказать «дедушка»?",
        "opts": [
          "grandma",
          "grandpa",
          "cousin"
        ],
        "a": 1,
        "why": "Grandpa — дедушка."
      },
      {
        "q": "Uncle — это…",
        "opts": [
          "тётя",
          "сестра",
          "дядя"
        ],
        "a": 2,
        "why": "Uncle — дядя."
      },
      {
        "q": "Как сказать «моя семья»?",
        "opts": [
          "my family",
          "my friend",
          "my fish"
        ],
        "a": 0,
        "why": "Family — семья."
      },
      {
        "q": "Cousin — это…",
        "opts": [
          "только брат",
          "двоюродный брат или сестра",
          "мама"
        ],
        "a": 1,
        "why": "Cousin может обозначать двоюродного брата или сестру."
      }
    ],
    "order": [
      "This is my family",
      "Это моя семья."
    ],
    "pattern": "\\b(mum|dad|sister|brother|grandma|grandpa|aunt|uncle|cousin|family|my)\\b",
    "stories": [
      {
        "title": "Семейный воздушный змей",
        "icon": "🪁",
        "sentences": [
          [
            "My name is Amy.",
            "Меня зовут Эми."
          ],
          [
            "This is my family.",
            "Это моя семья."
          ],
          [
            "This is my mum.",
            "Это моя мама."
          ],
          [
            "Her name is May.",
            "Её зовут Мэй."
          ],
          [
            "This is my dad.",
            "Это мой папа."
          ],
          [
            "His name is Dan.",
            "Его зовут Дэн."
          ],
          [
            "This is my sister.",
            "Это моя сестра."
          ],
          [
            "Her name is Lily.",
            "Её зовут Лили."
          ],
          [
            "This is my brother.",
            "Это мой брат."
          ],
          [
            "His name is Tom.",
            "Его зовут Том."
          ],
          [
            "Here is a kite.",
            "Вот воздушный змей."
          ],
          [
            "The kite is big.",
            "Воздушный змей большой."
          ],
          [
            "The kite is red.",
            "Воздушный змей красный."
          ],
          [
            "Mum is by the tree.",
            "Мама у дерева."
          ],
          [
            "Dad is by the kite.",
            "Папа у воздушного змея."
          ],
          [
            "Lily is on the grass.",
            "Лили на траве."
          ],
          [
            "Tom is by Lily.",
            "Том рядом с Лили."
          ],
          [
            "The sky is blue.",
            "Небо синее."
          ],
          [
            "My family is together.",
            "Моя семья вместе."
          ],
          [
            "I am happy.",
            "Я счастлива."
          ]
        ],
        "questions": [
          {
            "q": "Кто рассказывает историю?",
            "opts": [
              "Amy",
              "May",
              "Lily"
            ],
            "a": 0,
            "evidence": 0
          },
          {
            "q": "Как зовут маму?",
            "opts": [
              "Lily",
              "May",
              "Amy"
            ],
            "a": 1,
            "evidence": 3
          },
          {
            "q": "Кто Том?",
            "opts": [
              "дедушка",
              "дядя",
              "брат"
            ],
            "a": 2,
            "evidence": 8
          },
          {
            "q": "Какого цвета воздушный змей?",
            "opts": [
              "красный",
              "синий",
              "жёлтый"
            ],
            "a": 0,
            "evidence": 12
          },
          {
            "q": "Где Лили?",
            "opts": [
              "в доме",
              "на траве",
              "на лодке"
            ],
            "a": 1,
            "evidence": 15
          }
        ],
        "tf": [
          {
            "q": "Dan is Amy’s dad.",
            "a": true,
            "evidence": 5
          },
          {
            "q": "Lily is Amy’s mum.",
            "a": false,
            "evidence": 6
          },
          {
            "q": "The kite is big.",
            "a": true,
            "evidence": 11
          },
          {
            "q": "The sky is green.",
            "a": false,
            "evidence": 17
          },
          {
            "q": "The family is together.",
            "a": true,
            "evidence": 18
          }
        ],
        "vocab": [
          [
            "family",
            "семья"
          ],
          [
            "mum",
            "мама"
          ],
          [
            "dad",
            "папа"
          ],
          [
            "sister",
            "сестра"
          ],
          [
            "brother",
            "брат"
          ],
          [
            "kite",
            "воздушный змей"
          ],
          [
            "tree",
            "дерево"
          ],
          [
            "grass",
            "трава"
          ],
          [
            "sky",
            "небо"
          ],
          [
            "together",
            "вместе"
          ]
        ]
      },
      {
        "title": "Фото с бумажной короной",
        "icon": "👑",
        "sentences": [
          [
            "My name is Jo.",
            "Меня зовут Джо."
          ],
          [
            "Here is my grandma.",
            "Вот моя бабушка."
          ],
          [
            "Her name is Ann.",
            "Её зовут Энн."
          ],
          [
            "Here is my grandpa.",
            "Вот мой дедушка."
          ],
          [
            "His name is Sam.",
            "Его зовут Сэм."
          ],
          [
            "Here is my aunt.",
            "Вот моя тётя."
          ],
          [
            "Her name is Sue.",
            "Её зовут Сью."
          ],
          [
            "Here is my uncle.",
            "Вот мой дядя."
          ],
          [
            "His name is Max.",
            "Его зовут Макс."
          ],
          [
            "Here is my cousin.",
            "Вот мой двоюродный брат."
          ],
          [
            "His name is Tim.",
            "Его зовут Тим."
          ],
          [
            "Here is a paper crown.",
            "Вот бумажная корона."
          ],
          [
            "The crown is yellow.",
            "Корона жёлтая."
          ],
          [
            "The crown is for Grandma.",
            "Корона для бабушки."
          ],
          [
            "Grandma is funny.",
            "Бабушка смешная."
          ],
          [
            "Grandpa is happy.",
            "Дедушка счастлив."
          ],
          [
            "Here is a photo.",
            "Вот фотография."
          ],
          [
            "My family is in the photo.",
            "Моя семья на фотографии."
          ],
          [
            "The crown is in the photo too.",
            "Корона тоже на фотографии."
          ],
          [
            "The photo is for me.",
            "Фотография для меня."
          ]
        ],
        "questions": [
          {
            "q": "Как зовут бабушку?",
            "opts": [
              "Sue",
              "Ann",
              "Jo"
            ],
            "a": 1,
            "evidence": 2
          },
          {
            "q": "Кто Сэм?",
            "opts": [
              "дедушка",
              "дядя",
              "брат"
            ],
            "a": 0,
            "evidence": 3
          },
          {
            "q": "Кто Макс?",
            "opts": [
              "папа",
              "дедушка",
              "дядя"
            ],
            "a": 2,
            "evidence": 7
          },
          {
            "q": "Какого цвета корона?",
            "opts": [
              "белая",
              "жёлтая",
              "зелёная"
            ],
            "a": 1,
            "evidence": 12
          },
          {
            "q": "Для кого корона?",
            "opts": [
              "для бабушки",
              "для Тима",
              "для Макса"
            ],
            "a": 0,
            "evidence": 13
          }
        ],
        "tf": [
          {
            "q": "Tim is Jo’s cousin.",
            "a": true,
            "evidence": 9
          },
          {
            "q": "Sue is Jo’s grandma.",
            "a": false,
            "evidence": 5
          },
          {
            "q": "The crown is yellow.",
            "a": true,
            "evidence": 12
          },
          {
            "q": "The crown is for Grandpa.",
            "a": false,
            "evidence": 13
          },
          {
            "q": "The family is in the photo.",
            "a": true,
            "evidence": 17
          }
        ],
        "vocab": [
          [
            "grandma",
            "бабушка"
          ],
          [
            "grandpa",
            "дедушка"
          ],
          [
            "aunt",
            "тётя"
          ],
          [
            "uncle",
            "дядя"
          ],
          [
            "cousin",
            "двоюродный брат или сестра"
          ],
          [
            "paper",
            "бумажный"
          ],
          [
            "crown",
            "корона"
          ],
          [
            "photo",
            "фотография"
          ],
          [
            "funny",
            "смешной"
          ],
          [
            "happy",
            "счастливый"
          ]
        ]
      }
    ]
  },
  {
    "id": "toys",
    "title": "Игрушки",
    "level": "Pre-A1",
    "icon": "🧸",
    "intro": "Собираем игрушки для маленького путешествия. Называй предмет, слушай слово и находи перевод.",
    "rules": [
      "Ball — мяч, doll — кукла, teddy bear — плюшевый мишка, robot — робот. Teddy bear — два слова, но одна игрушка.",
      "Car — машинка или автомобиль, train — поезд, boat — лодка, kite — воздушный змей, puzzle — пазл, block — кубик.",
      "My toy — «моя игрушка». This is my… — «Это мой/моя…». Для первых занятий достаточно назвать игрушку одним словом, а затем повторить предложение за взрослым."
    ],
    "examples": [
      [
        "This is my robot.",
        "Это мой робот."
      ],
      [
        "The train is blue.",
        "Поезд синий."
      ],
      [
        "A teddy bear.",
        "Плюшевый мишка."
      ]
    ],
    "vocab": [
      [
        "ball",
        "мяч"
      ],
      [
        "doll",
        "кукла"
      ],
      [
        "teddy bear",
        "плюшевый мишка"
      ],
      [
        "robot",
        "робот"
      ],
      [
        "car",
        "машинка"
      ],
      [
        "train",
        "поезд"
      ],
      [
        "boat",
        "лодка"
      ],
      [
        "kite",
        "воздушный змей"
      ],
      [
        "puzzle",
        "пазл"
      ],
      [
        "block",
        "кубик"
      ]
    ],
    "practice": [
      {
        "q": "Doll — это…",
        "opts": [
          "кукла",
          "мяч",
          "лодка"
        ],
        "a": 0,
        "why": "Doll — кукла."
      },
      {
        "q": "Как сказать «поезд»?",
        "opts": [
          "tree",
          "train",
          "toy"
        ],
        "a": 1,
        "why": "Train — поезд."
      },
      {
        "q": "Teddy bear — это…",
        "opts": [
          "робот",
          "пазл",
          "плюшевый мишка"
        ],
        "a": 2,
        "why": "Teddy bear — плюшевый мишка."
      }
    ],
    "test": [
      {
        "q": "Как сказать «лодка»?",
        "opts": [
          "boat",
          "ball",
          "block"
        ],
        "a": 0,
        "why": "Boat — лодка."
      },
      {
        "q": "Kite — это…",
        "opts": [
          "машинка",
          "воздушный змей",
          "кукла"
        ],
        "a": 1,
        "why": "Kite — воздушный змей."
      },
      {
        "q": "Как сказать «пазл»?",
        "opts": [
          "robot",
          "train",
          "puzzle"
        ],
        "a": 2,
        "why": "Puzzle — пазл."
      },
      {
        "q": "Block — это…",
        "opts": [
          "кубик",
          "мяч",
          "медведь"
        ],
        "a": 0,
        "why": "Block — игрушечный кубик."
      },
      {
        "q": "This is my robot. — Это…",
        "opts": [
          "мой поезд",
          "мой робот",
          "моя лодка"
        ],
        "a": 1,
        "why": "Robot — робот."
      }
    ],
    "order": [
      "This is my robot",
      "Это мой робот."
    ],
    "pattern": "\\b(teddy bear|ball|doll|robot|car|train|boat|kite|puzzle|block)\\b",
    "stories": [
      {
        "title": "Поезд для мишки",
        "icon": "🚂",
        "sentences": [
          [
            "This is my room.",
            "Это моя комната."
          ],
          [
            "Here is my train.",
            "Вот мой поезд."
          ],
          [
            "The train is blue.",
            "Поезд синий."
          ],
          [
            "Here is my teddy bear.",
            "Вот мой плюшевый мишка."
          ],
          [
            "His name is Bob.",
            "Его зовут Боб."
          ],
          [
            "Bob is on the train.",
            "Боб в поезде."
          ],
          [
            "Here is my doll.",
            "Вот моя кукла."
          ],
          [
            "Her name is Ada.",
            "Её зовут Ада."
          ],
          [
            "Ada is on the train too.",
            "Ада тоже в поезде."
          ],
          [
            "Here is a ball.",
            "Вот мяч."
          ],
          [
            "The ball is red.",
            "Мяч красный."
          ],
          [
            "The ball is by the train.",
            "Мяч рядом с поездом."
          ],
          [
            "Here is a block.",
            "Вот кубик."
          ],
          [
            "The block is yellow.",
            "Кубик жёлтый."
          ],
          [
            "The block is a station.",
            "Кубик — это станция."
          ],
          [
            "Here is a robot.",
            "Вот робот."
          ],
          [
            "The robot is at the station.",
            "Робот на станции."
          ],
          [
            "The train is full.",
            "Поезд полон."
          ],
          [
            "The toys are together.",
            "Игрушки вместе."
          ],
          [
            "The trip is fun.",
            "Поездка весёлая."
          ]
        ],
        "questions": [
          {
            "q": "Какого цвета поезд?",
            "opts": [
              "синий",
              "красный",
              "зелёный"
            ],
            "a": 0,
            "evidence": 2
          },
          {
            "q": "Кто Боб?",
            "opts": [
              "робот",
              "мишка",
              "кот"
            ],
            "a": 1,
            "evidence": 3
          },
          {
            "q": "Как зовут куклу?",
            "opts": [
              "Amy",
              "Jo",
              "Ada"
            ],
            "a": 2,
            "evidence": 7
          },
          {
            "q": "Что изображает станцию?",
            "opts": [
              "кубик",
              "мяч",
              "лодка"
            ],
            "a": 0,
            "evidence": 14
          },
          {
            "q": "Где робот?",
            "opts": [
              "под столом",
              "на станции",
              "в сумке"
            ],
            "a": 1,
            "evidence": 16
          }
        ],
        "tf": [
          {
            "q": "The train is blue.",
            "a": true,
            "evidence": 2
          },
          {
            "q": "Bob is a doll.",
            "a": false,
            "evidence": 3
          },
          {
            "q": "Ada is on the train.",
            "a": true,
            "evidence": 8
          },
          {
            "q": "The ball is green.",
            "a": false,
            "evidence": 10
          },
          {
            "q": "The block is yellow.",
            "a": true,
            "evidence": 13
          }
        ],
        "vocab": [
          [
            "room",
            "комната"
          ],
          [
            "train",
            "поезд"
          ],
          [
            "teddy bear",
            "плюшевый мишка"
          ],
          [
            "doll",
            "кукла"
          ],
          [
            "ball",
            "мяч"
          ],
          [
            "block",
            "кубик"
          ],
          [
            "station",
            "станция"
          ],
          [
            "robot",
            "робот"
          ],
          [
            "trip",
            "поездка"
          ],
          [
            "toys",
            "игрушки"
          ]
        ]
      },
      {
        "title": "Лодка для робота",
        "icon": "🤖",
        "sentences": [
          [
            "This is my robot.",
            "Это мой робот."
          ],
          [
            "His name is Zip.",
            "Его зовут Зип."
          ],
          [
            "Zip is small.",
            "Зип маленький."
          ],
          [
            "Here is a boat.",
            "Вот лодка."
          ],
          [
            "The boat is green.",
            "Лодка зелёная."
          ],
          [
            "Zip is in the boat.",
            "Зип в лодке."
          ],
          [
            "Here is a car.",
            "Вот машинка."
          ],
          [
            "The car is orange.",
            "Машинка оранжевая."
          ],
          [
            "Here is a puzzle.",
            "Вот пазл."
          ],
          [
            "The puzzle is on the floor.",
            "Пазл на полу."
          ],
          [
            "Here is a kite.",
            "Вот воздушный змей."
          ],
          [
            "The kite is pink.",
            "Воздушный змей розовый."
          ],
          [
            "Here is a doll.",
            "Вот кукла."
          ],
          [
            "The doll is by the boat.",
            "Кукла рядом с лодкой."
          ],
          [
            "Here is a teddy bear.",
            "Вот плюшевый мишка."
          ],
          [
            "The bear is in the car.",
            "Мишка в машинке."
          ],
          [
            "The floor is a sea.",
            "Пол — это море."
          ],
          [
            "The puzzle is an island.",
            "Пазл — это остров."
          ],
          [
            "Zip is a captain.",
            "Зип — капитан."
          ],
          [
            "The game is fun.",
            "Игра весёлая."
          ]
        ],
        "questions": [
          {
            "q": "Как зовут робота?",
            "opts": [
              "Zip",
              "Bob",
              "Tom"
            ],
            "a": 0,
            "evidence": 1
          },
          {
            "q": "Какого цвета лодка?",
            "opts": [
              "красная",
              "зелёная",
              "синяя"
            ],
            "a": 1,
            "evidence": 4
          },
          {
            "q": "Где пазл?",
            "opts": [
              "на столе",
              "в лодке",
              "на полу"
            ],
            "a": 2,
            "evidence": 9
          },
          {
            "q": "Какого цвета воздушный змей?",
            "opts": [
              "розовый",
              "чёрный",
              "коричневый"
            ],
            "a": 0,
            "evidence": 11
          },
          {
            "q": "Что изображает остров?",
            "opts": [
              "машинка",
              "пазл",
              "кукла"
            ],
            "a": 1,
            "evidence": 17
          }
        ],
        "tf": [
          {
            "q": "Zip is big.",
            "a": false,
            "evidence": 2
          },
          {
            "q": "The boat is green.",
            "a": true,
            "evidence": 4
          },
          {
            "q": "The car is orange.",
            "a": true,
            "evidence": 7
          },
          {
            "q": "The bear is in the boat.",
            "a": false,
            "evidence": 15
          },
          {
            "q": "Zip is a captain.",
            "a": true,
            "evidence": 18
          }
        ],
        "vocab": [
          [
            "robot",
            "робот"
          ],
          [
            "boat",
            "лодка"
          ],
          [
            "car",
            "машинка"
          ],
          [
            "puzzle",
            "пазл"
          ],
          [
            "kite",
            "воздушный змей"
          ],
          [
            "doll",
            "кукла"
          ],
          [
            "teddy bear",
            "плюшевый мишка"
          ],
          [
            "floor",
            "пол"
          ],
          [
            "island",
            "остров"
          ],
          [
            "captain",
            "капитан"
          ]
        ]
      }
    ]
  },
  {
    "id": "greetings",
    "title": "Приветствия",
    "level": "Pre-A1",
    "icon": "👋",
    "intro": "Здороваемся, знакомимся и прощаемся. Вежливые слова помогают начать дружбу.",
    "rules": [
      "Hello! и Hi! — «Привет!» Good morning! — «Доброе утро!», Good afternoon! — «Добрый день!», Good evening! — «Добрый вечер!»",
      "What is your name? — «Как тебя зовут?» My name is… — «Меня зовут…». How are you? — «Как дела?» I am fine, thank you. — «Хорошо, спасибо».",
      "Goodbye! — «До свидания!» Bye! — «Пока!» Please — «пожалуйста» в просьбе, Thank you — «спасибо», You are welcome — ответ на благодарность. Можно тренироваться с вымышленным именем."
    ],
    "examples": [
      [
        "Hello! My name is Mia.",
        "Привет! Меня зовут Мия."
      ],
      [
        "How are you? I am fine.",
        "Как дела? У меня всё хорошо."
      ],
      [
        "Goodbye, Ben!",
        "До свидания, Бен!"
      ]
    ],
    "vocab": [
      [
        "hello",
        "привет"
      ],
      [
        "hi",
        "привет (неформально)"
      ],
      [
        "good morning",
        "доброе утро"
      ],
      [
        "good afternoon",
        "добрый день"
      ],
      [
        "good evening",
        "добрый вечер"
      ],
      [
        "goodbye",
        "до свидания"
      ],
      [
        "please",
        "пожалуйста (в просьбе)"
      ],
      [
        "thank you",
        "спасибо"
      ],
      [
        "fine",
        "хорошо"
      ],
      [
        "friend",
        "друг"
      ]
    ],
    "practice": [
      {
        "q": "Как поздороваться утром?",
        "opts": [
          "Good morning!",
          "Goodbye!",
          "Thank you!"
        ],
        "a": 0,
        "why": "Good morning! — Доброе утро!"
      },
      {
        "q": "Как спросить имя?",
        "opts": [
          "How are you?",
          "What is your name?",
          "Goodbye!"
        ],
        "a": 1,
        "why": "What is your name? — Как тебя зовут?"
      },
      {
        "q": "Thank you — это…",
        "opts": [
          "пока",
          "привет",
          "спасибо"
        ],
        "a": 2,
        "why": "Thank you означает «спасибо»."
      }
    ],
    "test": [
      {
        "q": "Как сказать «до свидания»?",
        "opts": [
          "Goodbye!",
          "Hello!",
          "Please!"
        ],
        "a": 0,
        "why": "Goodbye! — До свидания!"
      },
      {
        "q": "Как ответить на How are you?",
        "opts": [
          "My name is Ben.",
          "I am fine, thank you.",
          "Good evening!"
        ],
        "a": 1,
        "why": "How are you? — Как дела? I am fine — У меня всё хорошо."
      },
      {
        "q": "Good evening! — это…",
        "opts": [
          "доброе утро",
          "добрый день",
          "добрый вечер"
        ],
        "a": 2,
        "why": "Evening — вечер."
      },
      {
        "q": "Как представиться?",
        "opts": [
          "My name is Jo.",
          "How are you?",
          "Thank you."
        ],
        "a": 0,
        "why": "My name is Jo. — Меня зовут Джо."
      },
      {
        "q": "Как ответить на благодарность?",
        "opts": [
          "Goodbye.",
          "You are welcome.",
          "What is your name?"
        ],
        "a": 1,
        "why": "You are welcome — вежливый ответ на Thank you."
      }
    ],
    "order": [
      "My name is Mia",
      "Меня зовут Мия."
    ],
    "pattern": "\\b(hello|hi|good morning|good afternoon|good evening|goodbye|bye|thank you|please|my name is|how are you|what is your name|you are welcome)\\b",
    "stories": [
      {
        "title": "Знакомство у ворот",
        "icon": "🚪",
        "sentences": [
          [
            "It is morning.",
            "Сейчас утро."
          ],
          [
            "Mia is at the gate.",
            "Мия у ворот."
          ],
          [
            "A boy is at the gate too.",
            "Мальчик тоже у ворот."
          ],
          [
            "His name is Ben.",
            "Его зовут Бен."
          ],
          [
            "Hello, Ben!",
            "Привет, Бен!"
          ],
          [
            "Hello, Mia!",
            "Привет, Мия!"
          ],
          [
            "How are you?",
            "Как дела?"
          ],
          [
            "I am fine, thank you.",
            "У меня всё хорошо, спасибо."
          ],
          [
            "A little robot is here.",
            "Здесь маленький робот."
          ],
          [
            "Good morning!",
            "Доброе утро!"
          ],
          [
            "What is your name?",
            "Как тебя зовут?"
          ],
          [
            "My name is Beep.",
            "Меня зовут Бип."
          ],
          [
            "Beep is green.",
            "Бип зелёный."
          ],
          [
            "Here is a ball.",
            "Вот мяч."
          ],
          [
            "The ball is for Beep.",
            "Мяч для Бипа."
          ],
          [
            "Thank you, Mia!",
            "Спасибо, Мия!"
          ],
          [
            "You are welcome!",
            "Пожалуйста!"
          ],
          [
            "Beep is happy.",
            "Бип счастлив."
          ],
          [
            "Goodbye, Beep!",
            "До свидания, Бип!"
          ],
          [
            "Bye, friends!",
            "Пока, друзья!"
          ]
        ],
        "questions": [
          {
            "q": "Какое время суток?",
            "opts": [
              "утро",
              "вечер",
              "ночь"
            ],
            "a": 0,
            "evidence": 0
          },
          {
            "q": "Где Мия?",
            "opts": [
              "у пруда",
              "у ворот",
              "дома"
            ],
            "a": 1,
            "evidence": 1
          },
          {
            "q": "Как зовут робота?",
            "opts": [
              "Dot",
              "Zip",
              "Beep"
            ],
            "a": 2,
            "evidence": 11
          },
          {
            "q": "Какого цвета Бип?",
            "opts": [
              "зелёный",
              "синий",
              "красный"
            ],
            "a": 0,
            "evidence": 12
          },
          {
            "q": "Что подарили Бипу?",
            "opts": [
              "шляпу",
              "мяч",
              "книгу"
            ],
            "a": 1,
            "evidence": 14
          }
        ],
        "tf": [
          {
            "q": "Ben is at the gate.",
            "a": true,
            "evidence": 2
          },
          {
            "q": "It is evening.",
            "a": false,
            "evidence": 0
          },
          {
            "q": "Beep is a robot.",
            "a": true,
            "evidence": 8
          },
          {
            "q": "The ball is for Ben.",
            "a": false,
            "evidence": 14
          },
          {
            "q": "Beep is happy.",
            "a": true,
            "evidence": 17
          }
        ],
        "vocab": [
          [
            "morning",
            "утро"
          ],
          [
            "gate",
            "ворота"
          ],
          [
            "boy",
            "мальчик"
          ],
          [
            "hello",
            "привет"
          ],
          [
            "fine",
            "хорошо"
          ],
          [
            "robot",
            "робот"
          ],
          [
            "name",
            "имя"
          ],
          [
            "ball",
            "мяч"
          ],
          [
            "thank you",
            "спасибо"
          ],
          [
            "goodbye",
            "до свидания"
          ]
        ]
      },
      {
        "title": "Вежливый чайный клуб",
        "icon": "☕",
        "sentences": [
          [
            "It is afternoon.",
            "Сейчас день."
          ],
          [
            "Nora is in a garden.",
            "Нора в саду."
          ],
          [
            "A rabbit is here.",
            "Здесь кролик."
          ],
          [
            "Good afternoon!",
            "Добрый день!"
          ],
          [
            "Hello!",
            "Привет!"
          ],
          [
            "What is your name?",
            "Как тебя зовут?"
          ],
          [
            "My name is Ruby.",
            "Меня зовут Руби."
          ],
          [
            "My name is Nora.",
            "Меня зовут Нора."
          ],
          [
            "How are you, Ruby?",
            "Как дела, Руби?"
          ],
          [
            "I am fine, thank you.",
            "У меня всё хорошо, спасибо."
          ],
          [
            "Here is a little table.",
            "Вот маленький столик."
          ],
          [
            "Here is a cup.",
            "Вот чашка."
          ],
          [
            "Tea, please!",
            "Чаю, пожалуйста!"
          ],
          [
            "Here is your tea.",
            "Вот твой чай."
          ],
          [
            "Thank you!",
            "Спасибо!"
          ],
          [
            "You are welcome!",
            "Пожалуйста!"
          ],
          [
            "Ruby is happy.",
            "Руби счастлива."
          ],
          [
            "Nora is happy too.",
            "Нора тоже счастлива."
          ],
          [
            "Goodbye, Ruby!",
            "До свидания, Руби!"
          ],
          [
            "Bye, Nora!",
            "Пока, Нора!"
          ]
        ],
        "questions": [
          {
            "q": "Когда происходит встреча?",
            "opts": [
              "днём",
              "ночью",
              "утром"
            ],
            "a": 0,
            "evidence": 0
          },
          {
            "q": "Где Нора?",
            "opts": [
              "в школе",
              "в саду",
              "на лодке"
            ],
            "a": 1,
            "evidence": 1
          },
          {
            "q": "Кто Руби?",
            "opts": [
              "кот",
              "дракон",
              "кролик"
            ],
            "a": 2,
            "evidence": 2
          },
          {
            "q": "Что просит Руби?",
            "opts": [
              "чай",
              "мяч",
              "сок"
            ],
            "a": 0,
            "evidence": 12
          },
          {
            "q": "Какое слово означает «спасибо»?",
            "opts": [
              "Hello",
              "Thank you",
              "Goodbye"
            ],
            "a": 1,
            "evidence": 14
          }
        ],
        "tf": [
          {
            "q": "It is afternoon.",
            "a": true,
            "evidence": 0
          },
          {
            "q": "Ruby is a cat.",
            "a": false,
            "evidence": 2
          },
          {
            "q": "Nora is in a garden.",
            "a": true,
            "evidence": 1
          },
          {
            "q": "Ruby asks for a ball.",
            "a": false,
            "evidence": 12
          },
          {
            "q": "Nora is happy.",
            "a": true,
            "evidence": 17
          }
        ],
        "vocab": [
          [
            "afternoon",
            "день (после полудня)"
          ],
          [
            "garden",
            "сад"
          ],
          [
            "rabbit",
            "кролик"
          ],
          [
            "hello",
            "привет"
          ],
          [
            "name",
            "имя"
          ],
          [
            "table",
            "стол"
          ],
          [
            "cup",
            "чашка"
          ],
          [
            "tea",
            "чай"
          ],
          [
            "please",
            "пожалуйста"
          ],
          [
            "goodbye",
            "до свидания"
          ]
        ]
      }
    ]
  },
  {
    "id": "pronouns",
    "title": "Личные местоимения",
    "level": "Beginner A1",
    "icon": "🙋",
    "intro": "Заменяем имена короткими словами: я, ты, он, она, оно, мы, вы, они.",
    "rules": [
      "I — я (всегда с большой буквы). You — ты или вы: английское слово одно и для одного собеседника, и для группы.",
      "He — он, she — она. It — оно/это, когда говорим о предмете или животном, пол которого не важен. О любимом питомце можно говорить he или she, если мы знаем его пол.",
      "We — мы, they — они. Местоимение-подлежащее показывает, о ком предложение: Mia is kind. → She is kind. Здесь формы am/is/are пока служат опорой; подробно разберём их в следующем уроке."
    ],
    "examples": [
      [
        "I am Ben.",
        "Я Бен."
      ],
      [
        "Mia is happy. She is happy.",
        "Мия счастлива. Она счастлива."
      ],
      [
        "Ben and Mia are friends. They are friends.",
        "Бен и Мия — друзья. Они друзья."
      ]
    ],
    "vocab": [
      [
        "I",
        "я"
      ],
      [
        "you",
        "ты или вы"
      ],
      [
        "he",
        "он"
      ],
      [
        "she",
        "она"
      ],
      [
        "it",
        "оно, это"
      ],
      [
        "we",
        "мы"
      ],
      [
        "they",
        "они"
      ],
      [
        "friend",
        "друг"
      ],
      [
        "team",
        "команда"
      ],
      [
        "kind",
        "добрый"
      ]
    ],
    "practice": [
      {
        "q": "Mia is a girl. ___ is kind.",
        "opts": [
          "He",
          "She",
          "They"
        ],
        "a": 1,
        "why": "Mia — девочка. Заменяем её имя местоимением she."
      },
      {
        "q": "Ben and I are friends. ___ are friends.",
        "opts": [
          "We",
          "He",
          "It"
        ],
        "a": 0,
        "why": "Я и кто-то ещё — это we, «мы»."
      },
      {
        "q": "The box is blue. ___ is small.",
        "opts": [
          "She",
          "They",
          "It"
        ],
        "a": 2,
        "why": "О предмете в единственном числе говорим it."
      }
    ],
    "test": [
      {
        "q": "Ben is a boy. ___ is happy.",
        "opts": [
          "He",
          "She",
          "They"
        ],
        "a": 0,
        "why": "Вместо имени мальчика Ben используем he."
      },
      {
        "q": "Mia and Jo are here. ___ are friends.",
        "opts": [
          "It",
          "They",
          "He"
        ],
        "a": 1,
        "why": "Два человека — they, «они»."
      },
      {
        "q": "Какое местоимение всегда пишется с большой буквы?",
        "opts": [
          "we",
          "you",
          "I"
        ],
        "a": 2,
        "why": "Местоимение I («я») всегда пишется с большой буквы."
      },
      {
        "q": "___ am a friend.",
        "opts": [
          "I",
          "He",
          "They"
        ],
        "a": 0,
        "why": "I — «я»: I am a friend."
      },
      {
        "q": "Какое слово означает и «ты», и «вы»?",
        "opts": [
          "we",
          "you",
          "it"
        ],
        "a": 1,
        "why": "You может означать одного собеседника или нескольких."
      }
    ],
    "order": [
      "They are my friends",
      "Они мои друзья."
    ],
    "pattern": "\\b(I|you|he|she|it|we|they)\\b",
    "stories": [
      {
        "title": "Команда летающего коврика",
        "icon": "🪄",
        "sentences": [
          [
            "I am Mia.",
            "Я Мия."
          ],
          [
            "I am a girl.",
            "Я девочка."
          ],
          [
            "He is Ben.",
            "Он Бен."
          ],
          [
            "He is my friend.",
            "Он мой друг."
          ],
          [
            "She is Jo.",
            "Она Джо."
          ],
          [
            "She is kind.",
            "Она добрая."
          ],
          [
            "We are a team.",
            "Мы команда."
          ],
          [
            "We are in a garden.",
            "Мы в саду."
          ],
          [
            "It is a rug.",
            "Это коврик."
          ],
          [
            "It is purple.",
            "Он фиолетовый."
          ],
          [
            "It is a magic rug.",
            "Это волшебный коврик."
          ],
          [
            "You are our captain, Jo!",
            "Ты наш капитан, Джо!"
          ],
          [
            "You are brave.",
            "Ты храбрая."
          ],
          [
            "We are on the rug.",
            "Мы на коврике."
          ],
          [
            "We are happy.",
            "Мы счастливы."
          ],
          [
            "They are birds.",
            "Они птицы."
          ],
          [
            "They are above us.",
            "Они над нами."
          ],
          [
            "He is by me.",
            "Он рядом со мной."
          ],
          [
            "She is by Ben.",
            "Она рядом с Беном."
          ],
          [
            "We are together.",
            "Мы вместе."
          ]
        ],
        "questions": [
          {
            "q": "Кто рассказывает историю?",
            "opts": [
              "Mia",
              "Jo",
              "Ben"
            ],
            "a": 0,
            "evidence": 0
          },
          {
            "q": "Кто Бен для Мии?",
            "opts": [
              "брат",
              "друг",
              "папа"
            ],
            "a": 1,
            "evidence": 3
          },
          {
            "q": "Какой коврик?",
            "opts": [
              "красный",
              "белый",
              "фиолетовый"
            ],
            "a": 2,
            "evidence": 9
          },
          {
            "q": "Кто капитан?",
            "opts": [
              "Jo",
              "Ben",
              "Mia"
            ],
            "a": 0,
            "evidence": 11
          },
          {
            "q": "Кто над командой?",
            "opts": [
              "кошки",
              "птицы",
              "рыбы"
            ],
            "a": 1,
            "evidence": 16
          }
        ],
        "tf": [
          {
            "q": "Mia is a boy.",
            "a": false,
            "evidence": 1
          },
          {
            "q": "Jo is kind.",
            "a": true,
            "evidence": 5
          },
          {
            "q": "The rug is purple.",
            "a": true,
            "evidence": 9
          },
          {
            "q": "Ben is the captain.",
            "a": false,
            "evidence": 11
          },
          {
            "q": "The team is together.",
            "a": true,
            "evidence": 19
          }
        ],
        "vocab": [
          [
            "I",
            "я"
          ],
          [
            "he",
            "он"
          ],
          [
            "she",
            "она"
          ],
          [
            "we",
            "мы"
          ],
          [
            "it",
            "это, оно"
          ],
          [
            "you",
            "ты или вы"
          ],
          [
            "they",
            "они"
          ],
          [
            "team",
            "команда"
          ],
          [
            "rug",
            "коврик"
          ],
          [
            "captain",
            "капитан"
          ]
        ]
      },
      {
        "title": "Портрет для друга",
        "icon": "🖼️",
        "sentences": [
          [
            "I am Eli.",
            "Я Эли."
          ],
          [
            "I am an artist.",
            "Я художник."
          ],
          [
            "You are my guest, Nia.",
            "Ты моя гостья, Ния."
          ],
          [
            "You are my friend.",
            "Ты моя подруга."
          ],
          [
            "She is Nia.",
            "Она Ния."
          ],
          [
            "She is a dancer.",
            "Она танцовщица."
          ],
          [
            "He is Pip.",
            "Он Пип."
          ],
          [
            "He is a little dragon.",
            "Он маленький дракон."
          ],
          [
            "It is a pencil.",
            "Это карандаш."
          ],
          [
            "It is green.",
            "Он зелёный."
          ],
          [
            "We are in my room.",
            "Мы в моей комнате."
          ],
          [
            "We are ready.",
            "Мы готовы."
          ],
          [
            "They are pictures.",
            "Они картины."
          ],
          [
            "They are on the wall.",
            "Они на стене."
          ],
          [
            "It is a new picture.",
            "Это новая картина."
          ],
          [
            "It is for Nia.",
            "Она для Нии."
          ],
          [
            "She is in the picture.",
            "Она на картине."
          ],
          [
            "He is in the picture too.",
            "Он тоже на картине."
          ],
          [
            "They are funny.",
            "Они смешные."
          ],
          [
            "We are happy.",
            "Мы счастливы."
          ]
        ],
        "questions": [
          {
            "q": "Кто художник?",
            "opts": [
              "Eli",
              "Nia",
              "Pip"
            ],
            "a": 0,
            "evidence": 1
          },
          {
            "q": "Кто Ния?",
            "opts": [
              "пекарь",
              "танцовщица",
              "капитан"
            ],
            "a": 1,
            "evidence": 5
          },
          {
            "q": "Кто Пип?",
            "opts": [
              "кот",
              "робот",
              "дракон"
            ],
            "a": 2,
            "evidence": 7
          },
          {
            "q": "Какого цвета карандаш?",
            "opts": [
              "зелёный",
              "синий",
              "красный"
            ],
            "a": 0,
            "evidence": 9
          },
          {
            "q": "Для кого новая картина?",
            "opts": [
              "для Пипа",
              "для Нии",
              "для Эли"
            ],
            "a": 1,
            "evidence": 15
          }
        ],
        "tf": [
          {
            "q": "Eli is an artist.",
            "a": true,
            "evidence": 1
          },
          {
            "q": "Nia is a dragon.",
            "a": false,
            "evidence": 5
          },
          {
            "q": "The pencil is green.",
            "a": true,
            "evidence": 9
          },
          {
            "q": "The pictures are on the floor.",
            "a": false,
            "evidence": 13
          },
          {
            "q": "Pip is in the new picture.",
            "a": true,
            "evidence": 17
          }
        ],
        "vocab": [
          [
            "I",
            "я"
          ],
          [
            "you",
            "ты или вы"
          ],
          [
            "she",
            "она"
          ],
          [
            "he",
            "он"
          ],
          [
            "it",
            "это, оно"
          ],
          [
            "we",
            "мы"
          ],
          [
            "they",
            "они"
          ],
          [
            "artist",
            "художник"
          ],
          [
            "guest",
            "гость"
          ],
          [
            "picture",
            "картина"
          ]
        ]
      }
    ]
  },
  {
    "id": "to-be",
    "title": "Глагол to be: am, is, are",
    "level": "Beginner A1",
    "icon": "✨",
    "intro": "Учимся говорить, кто мы, какие мы и где находимся. В английском «есть» обычно нельзя просто пропустить.",
    "rules": [
      "I am; he/she/it is; you/we/they are. В русском «Я счастлив», а в английском I am happy. Сокращения: I’m, he’s, she’s, it’s, you’re, we’re, they’re.",
      "Для отрицания добавь not: I am not sad. She is not sad. They are not sad. Is not = isn’t, are not = aren’t; am not обычно сокращается в I’m not.",
      "Для вопроса переставь am/is/are перед подлежащим: Is she happy? Are you ready? Короткие ответы: Yes, she is. / No, she isn’t. Помощники do и does здесь не нужны."
    ],
    "examples": [
      [
        "I am a child.",
        "Я ребёнок."
      ],
      [
        "The dragon is not angry.",
        "Дракон не сердитый."
      ],
      [
        "Are they here? Yes, they are.",
        "Они здесь? Да."
      ]
    ],
    "vocab": [
      [
        "happy",
        "счастливый"
      ],
      [
        "sad",
        "грустный"
      ],
      [
        "ready",
        "готовый"
      ],
      [
        "small",
        "маленький"
      ],
      [
        "big",
        "большой"
      ],
      [
        "room",
        "комната"
      ],
      [
        "here",
        "здесь"
      ],
      [
        "angry",
        "сердитый"
      ],
      [
        "child",
        "ребёнок"
      ],
      [
        "quiet",
        "тихий"
      ]
    ],
    "practice": [
      {
        "q": "I ___ happy.",
        "opts": [
          "is",
          "am",
          "are"
        ],
        "a": 1,
        "why": "С I используем am."
      },
      {
        "q": "The dragon ___ small.",
        "opts": [
          "is",
          "are",
          "am"
        ],
        "a": 0,
        "why": "The dragon = it, поэтому is."
      },
      {
        "q": "___ you ready?",
        "opts": [
          "Is",
          "Am",
          "Are"
        ],
        "a": 2,
        "why": "С you нужна форма are, в вопросе она стоит первой."
      }
    ],
    "test": [
      {
        "q": "We ___ a team.",
        "opts": [
          "are",
          "is",
          "am"
        ],
        "a": 0,
        "why": "С we используем are."
      },
      {
        "q": "She ___ not sad.",
        "opts": [
          "are",
          "is",
          "am"
        ],
        "a": 1,
        "why": "С she используем is, затем not."
      },
      {
        "q": "Как спросить «Они здесь?»",
        "opts": [
          "They here?",
          "Do they are here?",
          "Are they here?"
        ],
        "a": 2,
        "why": "В вопросе с to be ставим Are перед they."
      },
      {
        "q": "Is he kind? — Yes, he ___.",
        "opts": [
          "is",
          "are",
          "am"
        ],
        "a": 0,
        "why": "Короткий ответ повторяет is: Yes, he is."
      },
      {
        "q": "Выбери сокращение They are not.",
        "opts": [
          "They isn’t",
          "They aren’t",
          "They am not"
        ],
        "a": 1,
        "why": "Are not сокращается до aren’t."
      }
    ],
    "order": [
      "The dragon is not angry",
      "Дракон не сердитый."
    ],
    "pattern": "\\b(am not|is not|are not|am|is|are|isn’t|aren’t)\\b",
    "stories": [
      {
        "title": "Дракон в тихой комнате",
        "icon": "🐉",
        "sentences": [
          [
            "I am Nora.",
            "Я Нора."
          ],
          [
            "I am in a quiet room.",
            "Я в тихой комнате."
          ],
          [
            "The room is blue.",
            "Комната синяя."
          ],
          [
            "Pip is at the door.",
            "Пип у двери."
          ],
          [
            "He is a dragon.",
            "Он дракон."
          ],
          [
            "He is not big.",
            "Он не большой."
          ],
          [
            "Is he angry?",
            "Он сердитый?"
          ],
          [
            "No, he is not.",
            "Нет."
          ],
          [
            "He is sad.",
            "Он грустный."
          ],
          [
            "His hat is not here.",
            "Его шляпы здесь нет."
          ],
          [
            "Is it under the chair?",
            "Она под стулом?"
          ],
          [
            "No, it is not.",
            "Нет."
          ],
          [
            "It is in a box.",
            "Она в коробке."
          ],
          [
            "The box is small.",
            "Коробка маленькая."
          ],
          [
            "Pip is happy now.",
            "Теперь Пип счастлив."
          ],
          [
            "I am happy too.",
            "Я тоже счастлива."
          ],
          [
            "We are friends.",
            "Мы друзья."
          ],
          [
            "Are we ready?",
            "Мы готовы?"
          ],
          [
            "Yes, we are.",
            "Да."
          ],
          [
            "We are ready for a picnic.",
            "Мы готовы к пикнику."
          ]
        ],
        "questions": [
          {
            "q": "Где Нора?",
            "opts": [
              "в тихой комнате",
              "в лодке",
              "в школе"
            ],
            "a": 0,
            "evidence": 1
          },
          {
            "q": "Какого цвета комната?",
            "opts": [
              "зелёная",
              "синяя",
              "жёлтая"
            ],
            "a": 1,
            "evidence": 2
          },
          {
            "q": "Пип большой?",
            "opts": [
              "да",
              "он огромный",
              "нет"
            ],
            "a": 2,
            "evidence": 5
          },
          {
            "q": "Где шляпа?",
            "opts": [
              "в коробке",
              "под стулом",
              "у двери"
            ],
            "a": 0,
            "evidence": 12
          },
          {
            "q": "К чему готовы друзья?",
            "opts": [
              "ко сну",
              "к пикнику",
              "к уроку плавания"
            ],
            "a": 1,
            "evidence": 19
          }
        ],
        "tf": [
          {
            "q": "Pip is a dragon.",
            "a": true,
            "evidence": 4
          },
          {
            "q": "Pip is angry.",
            "a": false,
            "evidence": 7
          },
          {
            "q": "The hat is under the chair.",
            "a": false,
            "evidence": 11
          },
          {
            "q": "The box is small.",
            "a": true,
            "evidence": 13
          },
          {
            "q": "Nora and Pip are friends.",
            "a": true,
            "evidence": 16
          }
        ],
        "vocab": [
          [
            "quiet",
            "тихий"
          ],
          [
            "room",
            "комната"
          ],
          [
            "dragon",
            "дракон"
          ],
          [
            "door",
            "дверь"
          ],
          [
            "angry",
            "сердитый"
          ],
          [
            "sad",
            "грустный"
          ],
          [
            "hat",
            "шляпа"
          ],
          [
            "chair",
            "стул"
          ],
          [
            "box",
            "коробка"
          ],
          [
            "ready",
            "готовый"
          ]
        ]
      },
      {
        "title": "Школа облаков",
        "icon": "☁️",
        "sentences": [
          [
            "We are clouds.",
            "Мы облака."
          ],
          [
            "We are in a little school.",
            "Мы в маленькой школе."
          ],
          [
            "I am Puff.",
            "Я Пафф."
          ],
          [
            "I am white.",
            "Я белый."
          ],
          [
            "She is Mist.",
            "Она Мист."
          ],
          [
            "She is grey.",
            "Она серая."
          ],
          [
            "He is Fluff.",
            "Он Флафф."
          ],
          [
            "He is not grey.",
            "Он не серый."
          ],
          [
            "He is pink.",
            "Он розовый."
          ],
          [
            "Our teacher is a bird.",
            "Наш учитель — птица."
          ],
          [
            "Is the bird small?",
            "Птица маленькая?"
          ],
          [
            "Yes, it is.",
            "Да."
          ],
          [
            "The lesson is not hard.",
            "Урок не трудный."
          ],
          [
            "Are we quiet?",
            "Мы тихие?"
          ],
          [
            "No, we are not.",
            "Нет."
          ],
          [
            "We are funny.",
            "Мы смешные."
          ],
          [
            "Mist is a sheep now.",
            "Теперь Мист — овечка."
          ],
          [
            "Fluff is a rabbit.",
            "Флафф — кролик."
          ],
          [
            "I am a boat.",
            "Я лодка."
          ],
          [
            "Our teacher is happy.",
            "Наш учитель счастлив."
          ]
        ],
        "questions": [
          {
            "q": "Кто ученики?",
            "opts": [
              "облака",
              "кошки",
              "роботы"
            ],
            "a": 0,
            "evidence": 0
          },
          {
            "q": "Какого цвета Пафф?",
            "opts": [
              "серый",
              "белый",
              "синий"
            ],
            "a": 1,
            "evidence": 3
          },
          {
            "q": "Какого цвета Флафф?",
            "opts": [
              "серый",
              "белый",
              "розовый"
            ],
            "a": 2,
            "evidence": 8
          },
          {
            "q": "Кто учитель?",
            "opts": [
              "птица",
              "дракон",
              "лягушка"
            ],
            "a": 0,
            "evidence": 9
          },
          {
            "q": "Кем стал Пафф?",
            "opts": [
              "кроликом",
              "лодкой",
              "овечкой"
            ],
            "a": 1,
            "evidence": 18
          }
        ],
        "tf": [
          {
            "q": "Mist is grey.",
            "a": true,
            "evidence": 5
          },
          {
            "q": "Fluff is grey.",
            "a": false,
            "evidence": 7
          },
          {
            "q": "The teacher is a small bird.",
            "a": true,
            "evidence": 11
          },
          {
            "q": "The lesson is hard.",
            "a": false,
            "evidence": 12
          },
          {
            "q": "Puff is a boat at the end.",
            "a": true,
            "evidence": 18
          }
        ],
        "vocab": [
          [
            "cloud",
            "облако"
          ],
          [
            "school",
            "школа"
          ],
          [
            "white",
            "белый"
          ],
          [
            "grey",
            "серый"
          ],
          [
            "pink",
            "розовый"
          ],
          [
            "teacher",
            "учитель"
          ],
          [
            "bird",
            "птица"
          ],
          [
            "hard",
            "трудный"
          ],
          [
            "sheep",
            "овца"
          ],
          [
            "boat",
            "лодка"
          ]
        ]
      }
    ]
  },
  {
    "id": "articles",
    "title": "Артикли a и an",
    "level": "Beginner A1",
    "icon": "🍎",
    "intro": "Маленькие слова a и an помогают представить один предмет или одного героя: какой-то, один из многих.",
    "rules": [
      "A/an ставим перед исчисляемым существительным в единственном числе, когда называем один предмет впервые: a cat — кот, an apple — яблоко. С множественным числом a/an не ставятся.",
      "A — перед согласным звуком: a book, a red apple. An — перед гласным звуком: an egg, an orange. Смотрим на звук следующего слова, а не только на букву: an hour, но a unicorn.",
      "Если предмет уже известен, часто встречается the: Here is a box. The box is blue. Перед my a/an не нужны: my bag. В историях будем искать a/an вместе со следующим словом."
    ],
    "examples": [
      [
        "This is a rabbit.",
        "Это кролик."
      ],
      [
        "It is an egg.",
        "Это яйцо."
      ],
      [
        "A green apple and an orange.",
        "Зелёное яблоко и апельсин."
      ]
    ],
    "vocab": [
      [
        "apple",
        "яблоко"
      ],
      [
        "egg",
        "яйцо"
      ],
      [
        "orange",
        "апельсин"
      ],
      [
        "umbrella",
        "зонт"
      ],
      [
        "box",
        "коробка"
      ],
      [
        "bag",
        "сумка"
      ],
      [
        "unicorn",
        "единорог"
      ],
      [
        "hour",
        "час"
      ],
      [
        "idea",
        "идея"
      ],
      [
        "gift",
        "подарок"
      ]
    ],
    "practice": [
      {
        "q": "This is ___ apple.",
        "opts": [
          "a",
          "an",
          "—"
        ],
        "a": 1,
        "why": "Apple начинается с гласного звука: an apple."
      },
      {
        "q": "It is ___ bag.",
        "opts": [
          "a",
          "an",
          "—"
        ],
        "a": 0,
        "why": "Bag начинается с согласного звука: a bag."
      },
      {
        "q": "Here is ___ red egg.",
        "opts": [
          "an",
          "—",
          "a"
        ],
        "a": 2,
        "why": "Следующее слово red начинается с согласного звука: a red egg."
      }
    ],
    "test": [
      {
        "q": "Here is ___ umbrella.",
        "opts": [
          "an",
          "a",
          "—"
        ],
        "a": 0,
        "why": "Umbrella начинается с гласного звука: an umbrella."
      },
      {
        "q": "It is ___ unicorn.",
        "opts": [
          "an",
          "a",
          "—"
        ],
        "a": 1,
        "why": "Unicorn начинается со звука /j/ («й»), поэтому a unicorn."
      },
      {
        "q": "I have ___ apples.",
        "opts": [
          "a",
          "an",
          "—"
        ],
        "a": 2,
        "why": "Apples — множественное число, a/an не нужны."
      },
      {
        "q": "It is ___ hour.",
        "opts": [
          "an",
          "a",
          "—"
        ],
        "a": 0,
        "why": "В hour буква h не произносится: an hour."
      },
      {
        "q": "This is ___ my bag.",
        "opts": [
          "a",
          "—",
          "an"
        ],
        "a": 1,
        "why": "Перед my артикль a/an не ставим."
      }
    ],
    "order": [
      "This is an orange",
      "Это апельсин."
    ],
    "pattern": "\\b(a|an)\\s+[A-Za-z]+",
    "stories": [
      {
        "title": "Зонт для единорога",
        "icon": "🦄",
        "sentences": [
          [
            "This is a unicorn.",
            "Это единорог."
          ],
          [
            "His name is Uno.",
            "Его зовут Уно."
          ],
          [
            "Uno is a kind friend.",
            "Уно — добрый друг."
          ],
          [
            "Here is a bag.",
            "Вот сумка."
          ],
          [
            "An umbrella is in the bag.",
            "В сумке зонт."
          ],
          [
            "It is a yellow umbrella.",
            "Это жёлтый зонт."
          ],
          [
            "Here is an apple.",
            "Вот яблоко."
          ],
          [
            "It is a green apple.",
            "Это зелёное яблоко."
          ],
          [
            "Here is an orange.",
            "Вот апельсин."
          ],
          [
            "It is a gift for Uno.",
            "Это подарок для Уно."
          ],
          [
            "Here is an egg.",
            "Вот яйцо."
          ],
          [
            "It is a toy egg.",
            "Это игрушечное яйцо."
          ],
          [
            "Here is a rabbit.",
            "Вот кролик."
          ],
          [
            "The rabbit is a guest.",
            "Кролик — гость."
          ],
          [
            "An idea is in Uno’s head.",
            "В голове Уно есть идея."
          ],
          [
            "The umbrella is a little tent.",
            "Зонт — это маленькая палатка."
          ],
          [
            "A leaf is a plate.",
            "Лист — это тарелка."
          ],
          [
            "The apple is on the leaf.",
            "Яблоко на листе."
          ],
          [
            "The orange is by the apple.",
            "Апельсин рядом с яблоком."
          ],
          [
            "It is a lovely picnic.",
            "Это чудесный пикник."
          ]
        ],
        "questions": [
          {
            "q": "Кто Уно?",
            "opts": [
              "единорог",
              "кот",
              "робот"
            ],
            "a": 0,
            "evidence": 0
          },
          {
            "q": "Где зонт?",
            "opts": [
              "под деревом",
              "в сумке",
              "в чашке"
            ],
            "a": 1,
            "evidence": 4
          },
          {
            "q": "Какого цвета яблоко?",
            "opts": [
              "красное",
              "жёлтое",
              "зелёное"
            ],
            "a": 2,
            "evidence": 7
          },
          {
            "q": "Какое яйцо?",
            "opts": [
              "игрушечное",
              "настоящее",
              "огромное"
            ],
            "a": 0,
            "evidence": 11
          },
          {
            "q": "Что стало палаткой?",
            "opts": [
              "сумка",
              "зонт",
              "лист"
            ],
            "a": 1,
            "evidence": 15
          }
        ],
        "tf": [
          {
            "q": "Uno is a unicorn.",
            "a": true,
            "evidence": 0
          },
          {
            "q": "The umbrella is blue.",
            "a": false,
            "evidence": 5
          },
          {
            "q": "The orange is a gift.",
            "a": true,
            "evidence": 9
          },
          {
            "q": "The rabbit is a teacher.",
            "a": false,
            "evidence": 13
          },
          {
            "q": "The leaf is a plate.",
            "a": true,
            "evidence": 16
          }
        ],
        "vocab": [
          [
            "unicorn",
            "единорог"
          ],
          [
            "bag",
            "сумка"
          ],
          [
            "umbrella",
            "зонт"
          ],
          [
            "apple",
            "яблоко"
          ],
          [
            "orange",
            "апельсин"
          ],
          [
            "egg",
            "яйцо"
          ],
          [
            "guest",
            "гость"
          ],
          [
            "tent",
            "палатка"
          ],
          [
            "leaf",
            "лист"
          ],
          [
            "plate",
            "тарелка"
          ]
        ]
      },
      {
        "title": "Яйцо в музее чудес",
        "icon": "🥚",
        "sentences": [
          [
            "This is a museum.",
            "Это музей."
          ],
          [
            "Nia is a visitor.",
            "Ния — посетительница."
          ],
          [
            "Here is an old box.",
            "Вот старая коробка."
          ],
          [
            "An egg is in the box.",
            "В коробке яйцо."
          ],
          [
            "It is a purple egg.",
            "Это фиолетовое яйцо."
          ],
          [
            "Here is a label.",
            "Вот табличка."
          ],
          [
            "It is a dragon egg.",
            "Это яйцо дракона."
          ],
          [
            "Here is an artist.",
            "Вот художник."
          ],
          [
            "His name is Eli.",
            "Его зовут Эли."
          ],
          [
            "Eli is a museum guide too.",
            "Эли ещё и музейный гид."
          ],
          [
            "Here is an umbrella.",
            "Вот зонт."
          ],
          [
            "It is a tiny umbrella.",
            "Это крошечный зонт."
          ],
          [
            "Here is an orange hat.",
            "Вот оранжевая шляпа."
          ],
          [
            "The hat is a nest.",
            "Шляпа — это гнездо."
          ],
          [
            "A little dragon is in the hat.",
            "В шляпе маленький дракон."
          ],
          [
            "The dragon is a toy.",
            "Дракон — игрушечный."
          ],
          [
            "Nia is a happy visitor.",
            "Ния — счастливая посетительница."
          ],
          [
            "Here is a postcard.",
            "Вот открытка."
          ],
          [
            "The postcard is a gift.",
            "Открытка — подарок."
          ],
          [
            "It is a picture of the egg.",
            "Это изображение яйца."
          ]
        ],
        "questions": [
          {
            "q": "Где Ния?",
            "opts": [
              "в музее",
              "в школе",
              "на корабле"
            ],
            "a": 0,
            "evidence": 0
          },
          {
            "q": "Какого цвета яйцо?",
            "opts": [
              "зелёное",
              "фиолетовое",
              "белое"
            ],
            "a": 1,
            "evidence": 4
          },
          {
            "q": "Кто Эли?",
            "opts": [
              "врач",
              "пекарь",
              "художник и гид"
            ],
            "a": 2,
            "evidence": 7
          },
          {
            "q": "Что стало гнездом?",
            "opts": [
              "шляпа",
              "коробка",
              "зонт"
            ],
            "a": 0,
            "evidence": 13
          },
          {
            "q": "Что подарили Нии?",
            "opts": [
              "мяч",
              "открытку",
              "живого дракона"
            ],
            "a": 1,
            "evidence": 18
          }
        ],
        "tf": [
          {
            "q": "The box is old.",
            "a": true,
            "evidence": 2
          },
          {
            "q": "The egg is yellow.",
            "a": false,
            "evidence": 4
          },
          {
            "q": "Eli is a museum guide.",
            "a": true,
            "evidence": 9
          },
          {
            "q": "The dragon is real.",
            "a": false,
            "evidence": 15
          },
          {
            "q": "The postcard shows the egg.",
            "a": true,
            "evidence": 19
          }
        ],
        "vocab": [
          [
            "museum",
            "музей"
          ],
          [
            "visitor",
            "посетитель"
          ],
          [
            "box",
            "коробка"
          ],
          [
            "egg",
            "яйцо"
          ],
          [
            "label",
            "табличка"
          ],
          [
            "artist",
            "художник"
          ],
          [
            "guide",
            "гид"
          ],
          [
            "umbrella",
            "зонт"
          ],
          [
            "nest",
            "гнездо"
          ],
          [
            "postcard",
            "открытка"
          ]
        ]
      }
    ]
  },
  {
    "id": "plurals",
    "title": "Множественное число",
    "level": "Beginner A1",
    "icon": "🧺",
    "intro": "Один предмет — и много предметов. Учимся замечать, как меняется слово, когда предметов больше одного.",
    "rules": [
      "Чаще всего добавляем -s: cat → cats, book → books. Перед множественным числом не ставим a/an: a cat, но two cats.",
      "После -s, -ss, -sh, -ch, -x обычно добавляем -es: bus → buses, box → boxes, dish → dishes. После согласной + y: baby → babies; после гласной + y просто -s: toy → toys.",
      "Есть особые формы: child → children, mouse → mice, foot → feet, tooth → teeth. Их запоминаем. В историях one означает один предмет, а two/three — несколько."
    ],
    "examples": [
      [
        "One cat, two cats.",
        "Один кот, два кота."
      ],
      [
        "One box, three boxes.",
        "Одна коробка, три коробки."
      ],
      [
        "One child, two children.",
        "Один ребёнок, двое детей."
      ]
    ],
    "vocab": [
      [
        "cat",
        "кот"
      ],
      [
        "box",
        "коробка"
      ],
      [
        "toy",
        "игрушка"
      ],
      [
        "baby",
        "малыш"
      ],
      [
        "child",
        "ребёнок"
      ],
      [
        "mouse",
        "мышь"
      ],
      [
        "foot",
        "ступня"
      ],
      [
        "tooth",
        "зуб"
      ],
      [
        "bus",
        "автобус"
      ],
      [
        "dish",
        "тарелка"
      ]
    ],
    "practice": [
      {
        "q": "One cat, two ___.",
        "opts": [
          "cat",
          "cats",
          "cates"
        ],
        "a": 1,
        "why": "Обычно добавляем -s: cats."
      },
      {
        "q": "One box, three ___.",
        "opts": [
          "boxes",
          "boxs",
          "box"
        ],
        "a": 0,
        "why": "После x добавляем -es: boxes."
      },
      {
        "q": "One baby, two ___.",
        "opts": [
          "babys",
          "babyes",
          "babies"
        ],
        "a": 2,
        "why": "Согласная b + y: заменяем y на ies, babies."
      }
    ],
    "test": [
      {
        "q": "One toy, four ___.",
        "opts": [
          "toys",
          "toies",
          "toyes"
        ],
        "a": 0,
        "why": "Перед y стоит гласная o, просто добавляем -s: toys."
      },
      {
        "q": "One child, two ___.",
        "opts": [
          "childs",
          "children",
          "childes"
        ],
        "a": 1,
        "why": "Особая форма: child → children."
      },
      {
        "q": "One mouse, three ___.",
        "opts": [
          "mouses",
          "mouse",
          "mice"
        ],
        "a": 2,
        "why": "Особая форма: mouse → mice."
      },
      {
        "q": "One bus, two ___.",
        "opts": [
          "buses",
          "buss",
          "bus"
        ],
        "a": 0,
        "why": "После s добавляем -es: buses."
      },
      {
        "q": "One tooth, many ___.",
        "opts": [
          "tooths",
          "teeth",
          "toothes"
        ],
        "a": 1,
        "why": "Особая форма: tooth → teeth."
      }
    ],
    "order": [
      "The boxes are blue",
      "Коробки синие."
    ],
    "pattern": "\\b(cats|boxes|toys|babies|children|mice|feet|teeth|buses|dishes|books|hats|birds|rabbits|foxes|brushes|wishes|cakes|stars)\\b",
    "stories": [
      {
        "title": "Две мышки и три коробки",
        "icon": "🐭",
        "sentences": [
          [
            "One mouse is in a shop.",
            "Одна мышь в магазине."
          ],
          [
            "Two mice are at the door.",
            "Две мышки у двери."
          ],
          [
            "The mice are friends.",
            "Мышки — друзья."
          ],
          [
            "One box is red.",
            "Одна коробка красная."
          ],
          [
            "Three boxes are blue.",
            "Три коробки синие."
          ],
          [
            "One toy is a robot.",
            "Одна игрушка — робот."
          ],
          [
            "Two toys are cats.",
            "Две игрушки — коты."
          ],
          [
            "The cats are small.",
            "Коты маленькие."
          ],
          [
            "One child is by the window.",
            "Один ребёнок у окна."
          ],
          [
            "Two children are in the shop.",
            "Двое детей в магазине."
          ],
          [
            "The children are happy.",
            "Дети счастливы."
          ],
          [
            "One dish is yellow.",
            "Одна тарелка жёлтая."
          ],
          [
            "Two dishes are green.",
            "Две тарелки зелёные."
          ],
          [
            "The dishes are for the mice.",
            "Тарелки для мышек."
          ],
          [
            "One cake is big.",
            "Одно пирожное большое."
          ],
          [
            "Three cakes are small.",
            "Три пирожных маленькие."
          ],
          [
            "The cakes are on the dishes.",
            "Пирожные на тарелках."
          ],
          [
            "The boxes are little tables.",
            "Коробки — маленькие столы."
          ],
          [
            "The mice are at the tables.",
            "Мышки за столами."
          ],
          [
            "The shop is a cafe now.",
            "Теперь магазин — кафе."
          ]
        ],
        "questions": [
          {
            "q": "Сколько мышек у двери?",
            "opts": [
              "две",
              "одна",
              "три"
            ],
            "a": 0,
            "evidence": 1
          },
          {
            "q": "Какого цвета три коробки?",
            "opts": [
              "красные",
              "синие",
              "зелёные"
            ],
            "a": 1,
            "evidence": 4
          },
          {
            "q": "Какие две игрушки?",
            "opts": [
              "собаки",
              "машинки",
              "коты"
            ],
            "a": 2,
            "evidence": 6
          },
          {
            "q": "Для кого тарелки?",
            "opts": [
              "для мышек",
              "для робота",
              "для птиц"
            ],
            "a": 0,
            "evidence": 13
          },
          {
            "q": "Во что превратился магазин?",
            "opts": [
              "в школу",
              "в кафе",
              "в лодку"
            ],
            "a": 1,
            "evidence": 19
          }
        ],
        "tf": [
          {
            "q": "Two mice are at the door.",
            "a": true,
            "evidence": 1
          },
          {
            "q": "Three boxes are red.",
            "a": false,
            "evidence": 4
          },
          {
            "q": "Two children are in the shop.",
            "a": true,
            "evidence": 9
          },
          {
            "q": "Two dishes are yellow.",
            "a": false,
            "evidence": 12
          },
          {
            "q": "The boxes are little tables.",
            "a": true,
            "evidence": 17
          }
        ],
        "vocab": [
          [
            "mouse",
            "мышь"
          ],
          [
            "mice",
            "мыши"
          ],
          [
            "box",
            "коробка"
          ],
          [
            "boxes",
            "коробки"
          ],
          [
            "toy",
            "игрушка"
          ],
          [
            "toys",
            "игрушки"
          ],
          [
            "child",
            "ребёнок"
          ],
          [
            "children",
            "дети"
          ],
          [
            "dishes",
            "тарелки"
          ],
          [
            "cakes",
            "пирожные"
          ]
        ]
      },
      {
        "title": "Парад игрушек",
        "icon": "🎊",
        "sentences": [
          [
            "One bus is at the gate.",
            "Один автобус у ворот."
          ],
          [
            "Two buses are in the garden.",
            "Два автобуса в саду."
          ],
          [
            "The buses are toys.",
            "Автобусы — игрушечные."
          ],
          [
            "One baby is on a rug.",
            "Один малыш на коврике."
          ],
          [
            "Two babies are by the rug.",
            "Два малыша рядом с ковриком."
          ],
          [
            "The babies are dolls.",
            "Малыши — куклы."
          ],
          [
            "One rabbit is white.",
            "Один кролик белый."
          ],
          [
            "Three rabbits are pink.",
            "Три кролика розовые."
          ],
          [
            "The rabbits are toys too.",
            "Кролики тоже игрушечные."
          ],
          [
            "One fox is orange.",
            "Одна лиса оранжевая."
          ],
          [
            "Two foxes are purple.",
            "Две лисы фиолетовые."
          ],
          [
            "The foxes are funny.",
            "Лисы смешные."
          ],
          [
            "One child is a captain.",
            "Один ребёнок — капитан."
          ],
          [
            "Three children are in the parade.",
            "Трое детей на параде."
          ],
          [
            "The children are ready.",
            "Дети готовы."
          ],
          [
            "One foot is on a box.",
            "Одна ступня на коробке."
          ],
          [
            "Two feet are on the grass.",
            "Две ступни на траве."
          ],
          [
            "One hat is red.",
            "Одна шляпа красная."
          ],
          [
            "Four hats are yellow.",
            "Четыре шляпы жёлтые."
          ],
          [
            "The parade is fun.",
            "Парад весёлый."
          ]
        ],
        "questions": [
          {
            "q": "Сколько автобусов в саду?",
            "opts": [
              "два",
              "три",
              "один"
            ],
            "a": 0,
            "evidence": 1
          },
          {
            "q": "Кто малыши в истории?",
            "opts": [
              "роботы",
              "куклы",
              "птицы"
            ],
            "a": 1,
            "evidence": 5
          },
          {
            "q": "Какого цвета три кролика?",
            "opts": [
              "белые",
              "серые",
              "розовые"
            ],
            "a": 2,
            "evidence": 7
          },
          {
            "q": "Кто капитан?",
            "opts": [
              "ребёнок",
              "лиса",
              "кролик"
            ],
            "a": 0,
            "evidence": 12
          },
          {
            "q": "Какого цвета четыре шляпы?",
            "opts": [
              "красные",
              "жёлтые",
              "синие"
            ],
            "a": 1,
            "evidence": 18
          }
        ],
        "tf": [
          {
            "q": "The buses are toys.",
            "a": true,
            "evidence": 2
          },
          {
            "q": "The babies are real.",
            "a": false,
            "evidence": 5
          },
          {
            "q": "Two foxes are purple.",
            "a": true,
            "evidence": 10
          },
          {
            "q": "Two feet are on the box.",
            "a": false,
            "evidence": 16
          },
          {
            "q": "The parade is fun.",
            "a": true,
            "evidence": 19
          }
        ],
        "vocab": [
          [
            "bus",
            "автобус"
          ],
          [
            "buses",
            "автобусы"
          ],
          [
            "baby",
            "малыш"
          ],
          [
            "babies",
            "малыши"
          ],
          [
            "rabbit",
            "кролик"
          ],
          [
            "rabbits",
            "кролики"
          ],
          [
            "fox",
            "лиса"
          ],
          [
            "foxes",
            "лисы"
          ],
          [
            "foot",
            "ступня"
          ],
          [
            "feet",
            "ступни"
          ]
        ]
      }
    ]
  },
  {
    "id": "have-got",
    "title": "Have got / has got",
    "level": "Beginner A1",
    "icon": "🎒",
    "intro": "Рассказываем, что у нас есть. Have got и has got обозначают обладание, а не действие «получить» в наших примерах.",
    "rules": [
      "I/you/we/they have got; he/she/it has got. I have got a bag. — «У меня есть сумка». She has got a kite. — «У неё есть воздушный змей». Сокращения: I’ve got, she’s got.",
      "Отрицание: have not got = haven’t got; has not got = hasn’t got. We have not got a boat. — «У нас нет лодки». Здесь не нужны do/does.",
      "Вопрос: Have you got a pen? Has she got a pet? Короткий ответ: Yes, I have. / No, I haven’t. Yes, she has. / No, she hasn’t. В коротком ответе got не повторяем."
    ],
    "examples": [
      [
        "I have got a red bag.",
        "У меня есть красная сумка."
      ],
      [
        "Pip has not got a hat.",
        "У Пипа нет шляпы."
      ],
      [
        "Has she got a cat? Yes, she has.",
        "У неё есть кот? Да."
      ]
    ],
    "vocab": [
      [
        "bag",
        "сумка"
      ],
      [
        "map",
        "карта"
      ],
      [
        "key",
        "ключ"
      ],
      [
        "coin",
        "монета"
      ],
      [
        "pocket",
        "карман"
      ],
      [
        "hat",
        "шляпа"
      ],
      [
        "pet",
        "питомец"
      ],
      [
        "pen",
        "ручка"
      ],
      [
        "shell",
        "ракушка"
      ],
      [
        "treasure",
        "сокровище"
      ]
    ],
    "practice": [
      {
        "q": "She ___ got a map.",
        "opts": [
          "have",
          "has",
          "is"
        ],
        "a": 1,
        "why": "С she используем has got."
      },
      {
        "q": "We ___ got a boat.",
        "opts": [
          "have",
          "has",
          "are"
        ],
        "a": 0,
        "why": "С we используем have got."
      },
      {
        "q": "___ Pip got a hat?",
        "opts": [
          "Have",
          "Is",
          "Has"
        ],
        "a": 2,
        "why": "Pip = he, поэтому вопрос начинается с Has."
      }
    ],
    "test": [
      {
        "q": "I ___ got a key.",
        "opts": [
          "have",
          "has",
          "am"
        ],
        "a": 0,
        "why": "С I используем have got."
      },
      {
        "q": "He has ___ got a pet.",
        "opts": [
          "no",
          "not",
          "don’t"
        ],
        "a": 1,
        "why": "Отрицание: has not got."
      },
      {
        "q": "Have you got a pen? — Yes, I ___.",
        "opts": [
          "got",
          "has",
          "have"
        ],
        "a": 2,
        "why": "Короткий ответ: Yes, I have. Без got."
      },
      {
        "q": "They ___ got a map. (У них нет карты.)",
        "opts": [
          "haven’t",
          "hasn’t",
          "isn’t"
        ],
        "a": 0,
        "why": "С they: have not got = haven’t got."
      },
      {
        "q": "Как спросить «У неё есть сумка?»",
        "opts": [
          "Have she got a bag?",
          "Has she got a bag?",
          "Does she has got a bag?"
        ],
        "a": 1,
        "why": "С she используем Has перед подлежащим."
      }
    ],
    "order": [
      "She has got a map",
      "У неё есть карта."
    ],
    "pattern": "\\b(have not got|has not got|have got|has got|have|has|haven’t got|hasn’t got)\\b",
    "stories": [
      {
        "title": "Карта без сокровища",
        "icon": "🗝️",
        "sentences": [
          [
            "I have got a map.",
            "У меня есть карта."
          ],
          [
            "My name is Leo.",
            "Меня зовут Лео."
          ],
          [
            "Mia has got a bag.",
            "У Мии есть сумка."
          ],
          [
            "She has got a red hat.",
            "У неё есть красная шляпа."
          ],
          [
            "We have got a little boat.",
            "У нас есть маленькая лодка."
          ],
          [
            "The boat has got a flag.",
            "У лодки есть флажок."
          ],
          [
            "I have not got a key.",
            "У меня нет ключа."
          ],
          [
            "Has Mia got a key?",
            "У Мии есть ключ?"
          ],
          [
            "No, she has not.",
            "Нет."
          ],
          [
            "She has got a shiny shell.",
            "У неё есть блестящая ракушка."
          ],
          [
            "The shell is in her bag.",
            "Ракушка в её сумке."
          ],
          [
            "We have got a box too.",
            "У нас ещё есть коробка."
          ],
          [
            "The box has got a lid.",
            "У коробки есть крышка."
          ],
          [
            "It has not got a lock.",
            "У неё нет замка."
          ],
          [
            "Mia has got an idea.",
            "У Мии есть идея."
          ],
          [
            "The shell is our treasure.",
            "Ракушка — наше сокровище."
          ],
          [
            "Have we got a treasure now?",
            "У нас теперь есть сокровище?"
          ],
          [
            "Yes, we have.",
            "Да."
          ],
          [
            "We have got a funny map.",
            "У нас есть забавная карта."
          ],
          [
            "We have got a good story too.",
            "У нас ещё есть хорошая история."
          ]
        ],
        "questions": [
          {
            "q": "У кого карта?",
            "opts": [
              "у Лео",
              "у Мии",
              "у Пипа"
            ],
            "a": 0,
            "evidence": 0
          },
          {
            "q": "Какого цвета шляпа Мии?",
            "opts": [
              "синяя",
              "красная",
              "зелёная"
            ],
            "a": 1,
            "evidence": 3
          },
          {
            "q": "Есть ли у Мии ключ?",
            "opts": [
              "да",
              "два ключа",
              "нет"
            ],
            "a": 2,
            "evidence": 8
          },
          {
            "q": "Что в сумке Мии?",
            "opts": [
              "ракушка",
              "кот",
              "ручка"
            ],
            "a": 0,
            "evidence": 10
          },
          {
            "q": "Есть ли у коробки замок?",
            "opts": [
              "да",
              "нет",
              "два замка"
            ],
            "a": 1,
            "evidence": 13
          }
        ],
        "tf": [
          {
            "q": "Leo has got a map.",
            "a": true,
            "evidence": 0
          },
          {
            "q": "Mia has got a blue hat.",
            "a": false,
            "evidence": 3
          },
          {
            "q": "The boat has got a flag.",
            "a": true,
            "evidence": 5
          },
          {
            "q": "The box has got a lock.",
            "a": false,
            "evidence": 13
          },
          {
            "q": "The shell is their treasure.",
            "a": true,
            "evidence": 15
          }
        ],
        "vocab": [
          [
            "map",
            "карта"
          ],
          [
            "bag",
            "сумка"
          ],
          [
            "hat",
            "шляпа"
          ],
          [
            "boat",
            "лодка"
          ],
          [
            "flag",
            "флажок"
          ],
          [
            "key",
            "ключ"
          ],
          [
            "shell",
            "ракушка"
          ],
          [
            "lid",
            "крышка"
          ],
          [
            "lock",
            "замок"
          ],
          [
            "treasure",
            "сокровище"
          ]
        ]
      },
      {
        "title": "Карманный театр",
        "icon": "🎭",
        "sentences": [
          [
            "Nora has got a little bag.",
            "У Норы есть маленькая сумка."
          ],
          [
            "She has got three puppets.",
            "У неё есть три куклы для театра."
          ],
          [
            "One puppet is a cat.",
            "Одна кукла — кот."
          ],
          [
            "It has got a yellow hat.",
            "У него есть жёлтая шляпа."
          ],
          [
            "One puppet is a rabbit.",
            "Одна кукла — кролик."
          ],
          [
            "It has got long ears.",
            "У него есть длинные уши."
          ],
          [
            "One puppet is a dragon.",
            "Одна кукла — дракон."
          ],
          [
            "It has not got wings.",
            "У него нет крыльев."
          ],
          [
            "Ben has got a box.",
            "У Бена есть коробка."
          ],
          [
            "He has got a green pen.",
            "У него есть зелёная ручка."
          ],
          [
            "He has not got a drum.",
            "У него нет барабана."
          ],
          [
            "Has Nora got a drum?",
            "У Норы есть барабан?"
          ],
          [
            "No, she has not.",
            "Нет."
          ],
          [
            "She has got a little bell.",
            "У неё есть маленький колокольчик."
          ],
          [
            "They have got a stage now.",
            "Теперь у них есть сцена."
          ],
          [
            "The stage has got a red curtain.",
            "У сцены есть красный занавес."
          ],
          [
            "Have they got a story?",
            "У них есть история?"
          ],
          [
            "Yes, they have.",
            "Да."
          ],
          [
            "Their story has got a happy ending.",
            "У их истории счастливый конец."
          ],
          [
            "Their friends have got a surprise.",
            "У их друзей сюрприз."
          ]
        ],
        "questions": [
          {
            "q": "Сколько кукол у Норы?",
            "opts": [
              "три",
              "две",
              "одна"
            ],
            "a": 0,
            "evidence": 1
          },
          {
            "q": "Какая шляпа у кота?",
            "opts": [
              "красная",
              "жёлтая",
              "синяя"
            ],
            "a": 1,
            "evidence": 3
          },
          {
            "q": "Есть ли крылья у дракона?",
            "opts": [
              "да",
              "четыре крыла",
              "нет"
            ],
            "a": 2,
            "evidence": 7
          },
          {
            "q": "Что есть у Бена?",
            "opts": [
              "зелёная ручка",
              "барабан",
              "синяя лодка"
            ],
            "a": 0,
            "evidence": 9
          },
          {
            "q": "Что заменяет барабан?",
            "opts": [
              "мяч",
              "колокольчик",
              "ракушка"
            ],
            "a": 1,
            "evidence": 13
          }
        ],
        "tf": [
          {
            "q": "Nora has got three puppets.",
            "a": true,
            "evidence": 1
          },
          {
            "q": "The rabbit has got short ears.",
            "a": false,
            "evidence": 5
          },
          {
            "q": "Ben has got a drum.",
            "a": false,
            "evidence": 10
          },
          {
            "q": "The stage has got a red curtain.",
            "a": true,
            "evidence": 15
          },
          {
            "q": "Their story has got a happy ending.",
            "a": true,
            "evidence": 18
          }
        ],
        "vocab": [
          [
            "bag",
            "сумка"
          ],
          [
            "puppet",
            "театральная кукла"
          ],
          [
            "hat",
            "шляпа"
          ],
          [
            "ears",
            "уши"
          ],
          [
            "wings",
            "крылья"
          ],
          [
            "pen",
            "ручка"
          ],
          [
            "drum",
            "барабан"
          ],
          [
            "bell",
            "колокольчик"
          ],
          [
            "stage",
            "сцена"
          ],
          [
            "curtain",
            "занавес"
          ]
        ]
      }
    ]
  }
];
