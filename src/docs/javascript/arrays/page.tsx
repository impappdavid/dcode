import { MainLayout } from "@/components/myComponents/main-layout"
import { CodeBlock } from "@/components/myComponents/code-block"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

export default function JavaScriptArraysPage() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">JavaScript Arrays</h1>
          <p className="text-muted-foreground">
            Arrays in JavaScript are used to store multiple values in a single variable.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Array Methods</h2>

          <div className="space-y-8">
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-bold">Array.push()</h3>
              <p className="mb-4 text-muted-foreground">
                The <code className="rounded bg-secondary px-1 py-0.5">push()</code> method adds one or more elements to
                the end of an array and returns the new length of the array.
              </p>
              <CodeBlock
                language="javascript"
                code={`
// Syntax
array.push(element1, element2, ..., elementN)

// Example
const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange');
console.log(fruits);    // ['apple', 'banana', 'orange']
console.log(newLength); // 3

// Adding multiple elements
fruits.push('mango', 'kiwi');
console.log(fruits);    // ['apple', 'banana', 'orange', 'mango', 'kiwi']
              `}
              />
              <div className="mt-6 flex items-center justify-between">
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Bookmark
                </Button>
                <div className="text-sm text-muted-foreground">Last updated: April 2, 2023</div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-bold">Array.map()</h3>
              <p className="mb-4 text-muted-foreground">
                The <code className="rounded bg-secondary px-1 py-0.5">map()</code> method creates a new array populated
                with the results of calling a provided function on every element in the calling array.
              </p>
              <CodeBlock
                language="javascript"
                code={`
// Syntax
array.map(function(currentValue, index, arr), thisValue)

// Example
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// With index
const indexed = numbers.map((num, index) => \`\${index}: \${num}\`);
console.log(indexed); // ["0: 1", "1: 2", "2: 3", "3: 4"]
              `}
              />
              <div className="mt-6 flex items-center justify-between">
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Bookmark
                </Button>
                <div className="text-sm text-muted-foreground">Last updated: April 3, 2023</div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-bold">Array.filter()</h3>
              <p className="mb-4 text-muted-foreground">
                The <code className="rounded bg-secondary px-1 py-0.5">filter()</code> method creates a new array with
                all elements that pass the test implemented by the provided function.
              </p>
              <CodeBlock
                language="javascript"
                code={`
// Syntax
array.filter(function(currentValue, index, arr), thisValue)

// Example
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

// Filtering objects
const products = [
  { name: 'Phone', price: 999 },
  { name: 'Laptop', price: 1299 },
  { name: 'Tablet', price: 699 }
];
const expensive = products.filter(product => product.price > 1000);
console.log(expensive); // [{ name: 'Laptop', price: 1299 }]
              `}
              />
              <div className="mt-6 flex items-center justify-between">
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Bookmark
                </Button>
                <div className="text-sm text-muted-foreground">Last updated: April 3, 2023</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

