
const questions = [

    
    // JAVASCRIPT - EASY (10 QUESTIONS)
    

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

    // JAVASCRIPT - MEDIUM (10 QUESTIONS)
    
    
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


    
    // JAVASCRIPT - HARD (10 QUESTIONS)
    

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
    }

];

