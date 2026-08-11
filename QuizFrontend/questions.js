const questions = [

    // ==================================================
    // JAVASCRIPT - EASY
    // ==================================================

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        correctAnswer: "var",
        subject: "javascript",
        difficulty: "easy"
    },

    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["//", "/*", "#", "<!--"],
        correctAnswer: "//",
        subject: "javascript",
        difficulty: "easy"
    },

    {
        question: "Which method is used to print a message in the console?",
        options: [
            "console.log()",
            "print()",
            "console.print()",
            "log.console()"
        ],
        correctAnswer: "console.log()",
        subject: "javascript",
        difficulty: "easy"
    },

    {
        question: "Which of the following is a JavaScript data type?",
        options: ["Number", "Character", "Float", "Decimal"],
        correctAnswer: "Number",
        subject: "javascript",
        difficulty: "easy"
    },

    {
        question: "Which operator is used for addition?",
        options: ["+", "-", "*", "/"],
        correctAnswer: "+",
        subject: "javascript",
        difficulty: "easy"
    },

    {
        question: "Which keyword is used to declare a constant?",
        options: ["const", "constant", "let", "static"],
        correctAnswer: "const",
        subject: "javascript",
        difficulty: "easy"
    },

    {
        question: "Which brackets are used to create an array?",
        options: ["[]", "{}", "()", "<>"],
        correctAnswer: "[]",
        subject: "javascript",
        difficulty: "easy"
    },

    {
        question: "Which keyword is used to define a function?",
        options: ["function", "func", "define", "method"],
        correctAnswer: "function",
        subject: "javascript",
        difficulty: "easy"
    },

    {
        question: "Which value represents a Boolean value?",
        options: ["true", "yes", "1", "on"],
        correctAnswer: "true",
        subject: "javascript",
        difficulty: "easy"
    },

    {
        question: "Which operator is used for multiplication?",
        options: ["*", "x", "%", "#"],
        correctAnswer: "*",
        subject: "javascript",
        difficulty: "easy"
    },


    // ==================================================
    // JAVASCRIPT - MEDIUM
    // ==================================================

    {
        question: "What does the === operator check?",
        options: [
            "Only value",
            "Only data type",
            "Both value and data type",
            "Neither value nor data type"
        ],
        correctAnswer: "Both value and data type",
        subject: "javascript",
        difficulty: "medium"
    },

    {
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()",
        subject: "javascript",
        difficulty: "medium"
    },

    {
        question: "Which method removes the last element from an array?",
        options: ["push()", "pop()", "shift()", "slice()"],
        correctAnswer: "pop()",
        subject: "javascript",
        difficulty: "medium"
    },

    {
        question: "What is the output of typeof 'Hello'?",
        options: ["text", "String", "string", "char"],
        correctAnswer: "string",
        subject: "javascript",
        difficulty: "medium"
    },

    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
        ],
        correctAnswer: "JSON.parse()",
        subject: "javascript",
        difficulty: "medium"
    },

    {
        question: "Which function executes code after a specified delay?",
        options: [
            "setTimeout()",
            "setDelay()",
            "delay()",
            "wait()"
        ],
        correctAnswer: "setTimeout()",
        subject: "javascript",
        difficulty: "medium"
    },

    {
        question: "Which method removes the first element from an array?",
        options: ["shift()", "pop()", "remove()", "delete()"],
        correctAnswer: "shift()",
        subject: "javascript",
        difficulty: "medium"
    },

    {
        question: "Which method adds an element to the beginning of an array?",
        options: ["unshift()", "push()", "addFirst()", "prepend()"],
        correctAnswer: "unshift()",
        subject: "javascript",
        difficulty: "medium"
    },

    {
        question: "Which keyword allows a variable to be reassigned?",
        options: ["let", "const", "fixed", "constant"],
        correctAnswer: "let",
        subject: "javascript",
        difficulty: "medium"
    },

    {
        question: "What does the length property of an array return?",
        options: [
            "Number of elements",
            "Last element",
            "First element",
            "Size in bytes"
        ],
        correctAnswer: "Number of elements",
        subject: "javascript",
        difficulty: "medium"
    },


    // ==================================================
    // JAVASCRIPT - HARD
    // ==================================================

    {
        question: "What is a closure in JavaScript?",
        options: [
            "A function that remembers its outer scope",
            "A function that stops execution",
            "A method used to close a browser",
            "A type of loop"
        ],
        correctAnswer: "A function that remembers its outer scope",
        subject: "javascript",
        difficulty: "hard"
    },

    {
        question: "What does the map() method return?",
        options: [
            "A new array",
            "The original array only",
            "A string",
            "A number"
        ],
        correctAnswer: "A new array",
        subject: "javascript",
        difficulty: "hard"
    },

    {
        question: "What does the async keyword do?",
        options: [
            "Makes a function return a Promise",
            "Stops a function",
            "Creates a loop",
            "Creates a constant"
        ],
        correctAnswer: "Makes a function return a Promise",
        subject: "javascript",
        difficulty: "hard"
    },

    {
        question: "Which method is commonly used to handle a rejected Promise?",
        options: ["catch()", "error()", "reject()", "handle()"],
        correctAnswer: "catch()",
        subject: "javascript",
        difficulty: "hard"
    },

    {
        question: "What does the spread operator (...) do?",
        options: [
            "Expands elements of an iterable",
            "Deletes an array",
            "Creates a loop",
            "Converts a number to a string"
        ],
        correctAnswer: "Expands elements of an iterable",
        subject: "javascript",
        difficulty: "hard"
    },

    {
        question: "What is hoisting in JavaScript?",
        options: [
            "The behavior of declarations being processed before execution",
            "Moving HTML elements",
            "Deleting unused variables",
            "Copying objects"
        ],
        correctAnswer: "The behavior of declarations being processed before execution",
        subject: "javascript",
        difficulty: "hard"
    },

    {
        question: "Which method creates a new array containing elements that pass a condition?",
        options: ["filter()", "map()", "reduce()", "forEach()"],
        correctAnswer: "filter()",
        subject: "javascript",
        difficulty: "hard"
    },

    {
        question: "What does Promise.all() do?",
        options: [
            "Waits for all promises to resolve",
            "Runs only the first promise",
            "Cancels all promises",
            "Creates a new function"
        ],
        correctAnswer: "Waits for all promises to resolve",
        subject: "javascript",
        difficulty: "hard"
    },

    {
        question: "What is the purpose of the reduce() method?",
        options: [
            "To reduce an array to a single value",
            "To remove the last element",
            "To sort an array",
            "To create a new object"
        ],
        correctAnswer: "To reduce an array to a single value",
        subject: "javascript",
        difficulty: "hard"
    },

    {
        question: "What does the 'this' keyword generally refer to?",
        options: [
            "The object associated with the current execution context",
            "The previous function",
            "The global variable only",
            "The HTML document only"
        ],
        correctAnswer: "The object associated with the current execution context",
        subject: "javascript",
        difficulty: "hard"
    },


    // ==================================================
    // GENERAL KNOWLEDGE - EASY
    // ==================================================

    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        correctAnswer: "New Delhi",
        subject: "gk",
        difficulty: "easy"
    },

    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
        subject: "gk",
        difficulty: "easy"
    },

    {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        subject: "gk",
        difficulty: "easy"
    },

    {
        question: "Which is the largest ocean on Earth?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        correctAnswer: "Pacific Ocean",
        subject: "gk",
        difficulty: "easy"
    },

    {
        question: "How many colors are traditionally found in a rainbow?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        subject: "gk",
        difficulty: "easy"
    },

    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Lion", "Elephant", "Leopard"],
        correctAnswer: "Lion",
        subject: "gk",
        difficulty: "easy"
    },

    {
        question: "Which is the largest continent?",
        options: ["Africa", "Europe", "Asia", "Australia"],
        correctAnswer: "Asia",
        subject: "gk",
        difficulty: "easy"
    },

    {
        question: "Which gas do humans need to breathe?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: "Oxygen",
        subject: "gk",
        difficulty: "easy"
    },

    {
        question: "How many months are there in a year?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12",
        subject: "gk",
        difficulty: "easy"
    },

    {
        question: "Which is the fastest land animal?",
        options: ["Lion", "Horse", "Cheetah", "Tiger"],
        correctAnswer: "Cheetah",
        subject: "gk",
        difficulty: "easy"
    },


    // ==================================================
    // GENERAL KNOWLEDGE - MEDIUM
    // ==================================================

    {
        question: "Who wrote the Indian national anthem?",
        options: [
            "Rabindranath Tagore",
            "Bankim Chandra Chattopadhyay",
            "Sarojini Naidu",
            "Subhash Chandra Bose"
        ],
        correctAnswer: "Rabindranath Tagore",
        subject: "gk",
        difficulty: "medium"
    },

    {
        question: "Which is the longest river in India?",
        options: ["Yamuna", "Ganga", "Godavari", "Narmada"],
        correctAnswer: "Ganga",
        subject: "gk",
        difficulty: "medium"
    },

    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        correctAnswer: "Japan",
        subject: "gk",
        difficulty: "medium"
    },

    {
        question: "Which vitamin is mainly produced when human skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctAnswer: "Vitamin D",
        subject: "gk",
        difficulty: "medium"
    },

    {
        question: "Who was the first person to walk on the Moon?",
        options: [
            "Yuri Gagarin",
            "Neil Armstrong",
            "Buzz Aldrin",
            "Michael Collins"
        ],
        correctAnswer: "Neil Armstrong",
        subject: "gk",
        difficulty: "medium"
    },

    {
        question: "Which is the smallest continent by land area?",
        options: ["Europe", "Australia", "South America", "Antarctica"],
        correctAnswer: "Australia",
        subject: "gk",
        difficulty: "medium"
    },

    {
        question: "What is the currency of Japan?",
        options: ["Won", "Yuan", "Yen", "Dollar"],
        correctAnswer: "Yen",
        subject: "gk",
        difficulty: "medium"
    },

    {
        question: "Which organ pumps blood throughout the human body?",
        options: ["Lungs", "Brain", "Heart", "Kidney"],
        correctAnswer: "Heart",
        subject: "gk",
        difficulty: "medium"
    },

    {
        question: "Which is the largest planet in our Solar System?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: "Jupiter",
        subject: "gk",
        difficulty: "medium"
    },

    {
        question: "Who is known as the Father of the Indian Constitution?",
        options: [
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
            "B. R. Ambedkar",
            "Sardar Patel"
        ],
        correctAnswer: "B. R. Ambedkar",
        subject: "gk",
        difficulty: "medium"
    },


    // ==================================================
    // GENERAL KNOWLEDGE - HARD
    // ==================================================

    {
        question: "Which Indian state has the longest coastline?",
        options: ["Maharashtra", "Gujarat", "Tamil Nadu", "Andhra Pradesh"],
        correctAnswer: "Gujarat",
        subject: "gk",
        difficulty: "hard"
    },

    {
        question: "What is the SI unit of electric resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correctAnswer: "Ohm",
        subject: "gk",
        difficulty: "hard"
    },

    {
        question: "Which treaty formally ended World War I?",
        options: [
            "Treaty of Paris",
            "Treaty of Versailles",
            "Treaty of Vienna",
            "Treaty of Rome"
        ],
        correctAnswer: "Treaty of Versailles",
        subject: "gk",
        difficulty: "hard"
    },

    {
        question: "Which is the deepest ocean trench in the world?",
        options: [
            "Java Trench",
            "Tonga Trench",
            "Mariana Trench",
            "Puerto Rico Trench"
        ],
        correctAnswer: "Mariana Trench",
        subject: "gk",
        difficulty: "hard"
    },

    {
        question: "Who discovered the law of universal gravitation?",
        options: [
            "Albert Einstein",
            "Galileo Galilei",
            "Isaac Newton",
            "Johannes Kepler"
        ],
        correctAnswer: "Isaac Newton",
        subject: "gk",
        difficulty: "hard"
    },

    {
        question: "Which is the hardest naturally occurring mineral?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        correctAnswer: "Diamond",
        subject: "gk",
        difficulty: "hard"
    },

    {
        question: "Which Indian mission was India's first mission to Mars?",
        options: [
            "Chandrayaan-1",
            "Mangalyaan",
            "Chandrayaan-2",
            "Aditya-L1"
        ],
        correctAnswer: "Mangalyaan",
        subject: "gk",
        difficulty: "hard"
    },

    {
        question: "Which branch of science deals with earthquakes?",
        options: [
            "Seismology",
            "Ecology",
            "Astronomy",
            "Meteorology"
        ],
        correctAnswer: "Seismology",
        subject: "gk",
        difficulty: "hard"
    },

    {
        question: "Which element has the chemical symbol Au?",
        options: ["Silver", "Gold", "Copper", "Aluminium"],
        correctAnswer: "Gold",
        subject: "gk",
        difficulty: "hard"
    },

    {
        question: "Which ancient civilization built Machu Picchu?",
        options: ["Roman", "Maya", "Inca", "Egyptian"],
        correctAnswer: "Inca",
        subject: "gk",
        difficulty: "hard"
    }

];