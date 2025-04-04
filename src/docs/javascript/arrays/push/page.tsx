import { DocsLayout } from "@/components/myComponents/docs-layout"
import { CodeBlock } from "@/components/myComponents/code-block"

export default function ArrayPushPage() {
  return (
    <DocsLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Array.push()</h1>
          <p className="text-muted-foreground">Adds one or more elements to the end of an array.</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Syntax</h2>
          <CodeBlock language="javascript" code={`array.push(element1, element2, ...);`} showLineNumbers={false} />
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Parameters:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <code>element1, element2, ...</code> - The elements to add to the end of the array.
              </li>
            </ul>
            <p className="text-sm">
              <strong>Return value:</strong> The new length of the array.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Example</h2>
          <CodeBlock
            language="javascript"
            code={`const numbers = [1, 2];
numbers.push(3, 4);
console.log(numbers);

// [1, 2, 3, 4]`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Description</h2>
          <p>
            The <code>push()</code> method adds one or more elements to the end of an array and returns the new length
            of the array.
          </p>
          <p>
            The <code>push()</code> method changes the length of the array and modifies the original array.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">More Examples</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Adding multiple elements</h3>
              <CodeBlock
                language="javascript"
                code={`const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange', 'pear', 'grape');

console.log(fruits);
// ['apple', 'banana', 'orange', 'pear', 'grape']

console.log(newLength);
// 5`}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Using push() with spread syntax</h3>
              <CodeBlock
                language="javascript"
                code={`const vegetables = ['broccoli', 'cauliflower'];
const moreVeggies = ['carrot', 'celery'];

// Add all elements from moreVeggies to vegetables
vegetables.push(...moreVeggies);

console.log(vegetables);
// ['broccoli', 'cauliflower', 'carrot', 'celery']`}
              />
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}

