import { CodeBlock } from "./code-block"

interface DocumentationContentProps {
  language: string
  topic: string
  method: string
}

// This would be your JSON data structure
const documentationData = {
  javascript: {
    basics: {
      comments: {
        title: "Comments",
        description: "Good comments explain why the code is written a certain way, especially when it's not obvious. They don’t repeat the code they add helpful context so others (or future you) can understand it faster.",
        syntax: `//This is a Comment
/*This is also a Comment*/`,
        parameters: [],
        returnValue: "",
        examples: [
          {
            title: "One line comment",
            code: `let x = 5;      // Declare x, give it the value of 5
let y = x + 2;`,
          },
          {
            title: "Multiple line comment",
            code: `let x = 5;
/*
Inside this everything is a comment
let y = x + 2;
*/`,
          },
          
        ],
        notes: [
          "Clear and simple: Easy to read and understand.",
          "Useful: Explains why something is done, not just what is done.",
          "Not repeating the code: If the code says count++, don’t write // Increase count by 1. That’s obvious.",
          "Up-to-date: If you change the code, update the comment too.",
        ],
      },
      let: {
        title: "Let",
        description: "Good use of let shows that a variable’s value will change later. It’s clearer than var and safer, because it only exists inside the block where it’s defined.",
        syntax: `let variableName;
let variableName = value;
let variableNameA, variableNameB;`,
        parameters: [{ name: "variableName", description: "Usually written in camelCase. It should describe what the variable stores." }, { name: "value", description: "The initial value assigned to the variable. It can be a string, number, boolean, array, object, etc." },],
        returnValue: "",
        examples: [
          {
            title: "Declare with an initial value",
            code: `let apple = 10; // Declares and sets the value immediately`,
          },
          {
            title: "Declare without a value",
            code: `// Declares a variable without setting a value (undefined for now)
let clicks;
clicks = 10; // You can assign a value later`,
          },
          {
            title: "Declare multiple variables",
            code: `let a, b, c; // Declares three variables
a = 1;
b = 2;
c = 3;`,
          },
          {
            title: "Block Scope",
            code: `function demoBlockScope() {
  if (true) {
    let blockScopedVariable = "I am inside the block";
    console.log(blockScopedVariable); // Works fine inside the block
  }

  // Outside the block
  console.log(blockScopedVariable); // Error: blockScopedVariable is not defined
}

demoBlockScope();`,
          },
          {
            title: "Cannot redeclare",
            code: `let x = 5;
let x = 10;  // Error: Cannot redeclare block-scoped variable 'x'`,
          },
          
          
        ],
        notes: [
          "Block-scoped: Variables declared with let are limited to the block (enclosed by curly braces {}) in which they are defined. This makes let safer than var, which is function-scoped.",
          "Reassignable: You can assign new values to a let variable after its initial declaration.",
          "No Hoisting: Unlike var, let is not hoisted to the top of its scope. It will result in a ReferenceError if you try to access it before declaring.",
        
        ],
      },
      var: {
        title: "Var",
        description: "var is used to declare variables in JavaScript, but it is function-scoped (rather than block-scoped like let). It can be redeclared in the same scope and is hoisted to the top of its scope.",
        syntax: `var variableName;
var variableName = value;
var variableNameA, variableNameB;`,
        parameters: [{ name: "variableName", description: "Usually written in camelCase. It should describe what the variable stores." }, { name: "value", description: "The initial value assigned to the variable. It can be a string, number, boolean, array, object, etc." },],
        returnValue: "",
        examples: [
          {
            title: "Basic Declaration",
            code: `var name = "David";
console.log(name);  // Outputs: David`,
          },
          {
            title: "Redeclaring in the Same Scope",
            code: `var x = 5;
var x = 10;  // No error, x is redeclared
console.log(x);  // Outputs: 10`,
          },
          {
            title: "Hoisting with var",
            code: `console.log(x);  // Outputs: undefined (due to hoisting)
var x = 5;`,
          },
        ],
        notes: [
          "Hoisting: Variables declared with var are hoisted to the top of their scope. However, only the declaration is hoisted, not the initialization.",
          "Function-scoped: var is scoped to the function it is declared in (or globally if not in a function). It is not limited to the block (like let or const).",
          "Redeclaration: Unlike let, you can redeclare a var variable in the same scope without errors, which can lead to unexpected bugs.",
        
        ],
      },
      const: {
        title: "Const",
        description: "const is used to declare constants, which are variables whose values cannot be reassigned after their initial assignment. However, if the value is an object or an array, its contents can still be modified. const is block-scoped, meaning it only exists within the block it is declared in.",
        syntax: `const variableName;
const variableName = value;
const variableNameA, variableNameB;`,
        parameters: [{ name: "variableName", description: "Usually written in camelCase. It should describe what the variable stores." }, { name: "value", description: "The initial value assigned to the variable. It can be a string, number, boolean, array, object, etc." },],
        returnValue: "",
        examples: [
          {
            title: "Basic Declaration",
            code: `const pi = 3.14;
console.log(pi);  // Outputs: 3.14`,
          },
          {
            title: "Attempt to Reassign a const Variable",
            code: `const num = 10;
num = 20;  // TypeError: Assignment to constant variable.`,
          },
          {
            title: "Block-Scoped",
            code: `if (true) {
  const blockScoped = "Inside block";
  console.log(blockScoped);  // Works fine inside the block
}

console.log(blockScoped);  // ReferenceError: blockScoped is not defined (out of scope)`,
          },
          {
            title: "Const Object",
            code: `const person = { name: "David", age: 25 };
person.age = 26;  // Works fine
console.log(person.age);  // Outputs: 26`,
          },
          {
            title: "Const Array",
            code: `const numbers = [1, 2, 3];
numbers.push(4);  // Works fine
console.log(numbers);  // Outputs: [1, 2, 3, 4]`,
          },
        ],
        notes: [
          `Immutability: const ensures that the reference to the variable cannot change. However, if the value is an object or array, the contents can be modified. Example: You can't do const person = {name: "David"}; person = {name: "John"} but you can do person.name = "John".`,
          "Block-Scoped: Like let, const is block-scoped, meaning it is only accessible within the block (such as inside an if statement, loop, or function) where it is declared.",
          "Hoisting: Variables declared with const are hoisted to the top of their block, but they cannot be accessed until they are initialized (i.e., the code will throw a ReferenceError if you try to use them before the assignment).",
        
        ],
      },
    },
    arrays: {

      push: {
        title: "Array.push()",
        description: "Adds one or more elements to the end of an array.",
        syntax: "array.push(element1, element2, ...);",
        parameters: [{ name: "element1, element2, ...", description: "The elements to add to the end of the array." }],
        returnValue: "The new length of the array.",
        examples: [
          {
            title: "Basic usage",
            code: `const numbers = [1, 2];
numbers.push(3, 4);
console.log(numbers);

// [1, 2, 3, 4]`,
          },
          {
            title: "Adding multiple elements",
            code: `const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange', 'pear', 'grape');

console.log(fruits);
// ['apple', 'banana', 'orange', 'pear', 'grape']

console.log(newLength);
// 5`,
          },
          {
            title: "Using push() with spread syntax",
            code: `const vegetables = ['broccoli', 'cauliflower'];
const moreVeggies = ['carrot', 'celery'];

// Add all elements from moreVeggies to vegetables
vegetables.push(...moreVeggies);

console.log(vegetables);
// ['broccoli', 'cauliflower', 'carrot', 'celery']`,
          },
        ],
        notes: [
          "The push() method changes the length of the array and modifies the original array.",
          "To add elements to the beginning of an array, use unshift() instead.",
        ],
      },
      pop: {
        title: "Array.pop()",
        description:
          "Creates a new array populated with the results of calling a provided function on every element in the calling array.",
        syntax: "array.pop(function(currentValue, index, arr), thisValue)",
        parameters: [
          {
            name: "function(currentValue, index, arr)",
            description: "A function to execute for each element in the array.",
          },
          { name: "thisValue", description: "Optional. A value to use as this when executing the callback." },
        ],
        returnValue: "A new array with each element being the result of the callback function.",
        examples: [
          {
            title: "Basic usage",
            code: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// [2, 4, 6, 8]`,
          },
          {
            title: "Using the index parameter",
            code: `const numbers = [1, 2, 3, 4];
const indexed = numbers.map((num, index) => \`\${index}: \${num}\`);
console.log(indexed);
// ["0: 1", "1: 2", "2: 3", "3: 4"]`,
          },
        ],
        notes: [
          "map() does not execute the function for array elements without values.",
          "map() does not change the original array.",
        ],
      },
      map: {
        title: "Array.map()",
        description:
          "Creates a new array populated with the results of calling a provided function on every element in the calling array.",
        syntax: "array.map(function(currentValue, index, arr), thisValue)",
        parameters: [
          {
            name: "function(currentValue, index, arr)",
            description: "A function to execute for each element in the array.",
          },
          { name: "thisValue", description: "Optional. A value to use as this when executing the callback." },
        ],
        returnValue: "A new array with each element being the result of the callback function.",
        examples: [
          {
            title: "Basic usage",
            code: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// [2, 4, 6, 8]`,
          },
          {
            title: "Using the index parameter",
            code: `const numbers = [1, 2, 3, 4];
const indexed = numbers.map((num, index) => \`\${index}: \${num}\`);
console.log(indexed);
// ["0: 1", "1: 2", "2: 3", "3: 4"]`,
          },
        ],
        notes: [
          "map() does not execute the function for array elements without values.",
          "map() does not change the original array.",
        ],
      },
    },
    objects: {
      keys: {
        title: "Object.keys()",
        description: "Returns an array of a given object's own enumerable property names.",
        syntax: "Object.keys(obj)",
        parameters: [
          { name: "obj", description: "The object of which the enumerable's own properties are to be returned." },
        ],
        returnValue: "An array of strings representing the object's own enumerable properties.",
        examples: [
          {
            title: "Basic usage",
            code: `const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// ["a", "b", "c"]`,
          },
        ],
        notes: [
          "Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object.",
          "The ordering of the properties is the same as that given by looping over the properties of the object manually.",
        ],
      },
    },
  },
}

export function DocumentationContent({ language, topic, method }: DocumentationContentProps) {
  // Get the documentation data for the selected method
  const docData = documentationData[language as keyof typeof documentationData]?.[topic as any]?.[method as any]

  // If no data is found, show a message
  if (!docData) {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Documentation not found</h1>
        <p className="text-muted-foreground mt-2">
          The documentation for {language}/{topic}/{method} is not available yet.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{docData.title}</h1>
        <p className="text-muted-foreground">{docData.description}</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Syntax</h2>
        <CodeBlock language={language} code={docData.syntax} showLineNumbers={false} />
        <div className="space-y-2">
          <p className="text-sm">
            <strong>Parameters:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {docData.parameters.map((param, index) => (
              <li key={index}>
                <code className="font-semibold">{param.name}</code> - {param.description}
              </li>
            ))}
          </ul>
          <p className="text-sm">
            <strong>Return value:</strong> {docData.returnValue}
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Examples</h2>
        <div className="space-y-6">
          {docData.examples.map((example, index) => (
            <div key={index}>
              {example.title && <h3 className="text-lg font-medium mb-2">{example.title}</h3>}
              <CodeBlock language={language} code={example.code} />
            </div>
          ))}
        </div>
      </section>

      {docData.notes && docData.notes.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Notes</h2>
          <ul className="list-disc pl-5 space-y-1">
            {docData.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </section>
      )}

      
    </div>
  )
}

