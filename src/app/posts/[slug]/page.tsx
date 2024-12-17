import { notFound } from 'next/navigation'
import Link from 'next/link'
import Comments from '@/component/Comments'

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    slug: "future-of-ai-in-web-development",
    content: `
      <p>Artificial Intelligence (AI) is rapidly transforming the landscape of web development. As we move into the future, AI is set to play an increasingly significant role in how we design, develop, and maintain websites and web applications.</p>
      
      <h2>1. AI-Powered Design Assistance</h2>
      <p>AI algorithms are becoming sophisticated enough to assist in the design process. They can generate layout suggestions, color schemes, and even entire mockups based on a set of parameters or by analyzing trending designs.</p>
      
      <h2>2. Intelligent Coding Assistants</h2>
      <p>AI-powered coding assistants are evolving beyond simple autocomplete. They can now suggest entire functions, refactor code, and even write tests based on the context of your project.</p>
      
      <h2>3. Automated Testing and Bug Detection</h2>
      <p>AI can significantly improve the testing process by automatically generating test cases, identifying potential bugs, and even suggesting fixes.</p>
      
      <h2>4. Personalized User Experiences</h2>
      <p>AI algorithms can analyze user behavior to create highly personalized experiences, dynamically adjusting content, layout, and functionality to suit individual preferences.</p>
      
      <h2>Conclusion</h2>
      <p>As AI continues to advance, its integration into web development will only deepen, leading to more efficient development processes and more sophisticated, user-centric web experiences.</p>
    `
  },
  {
    id: 2,
    title: "10 Essential CSS Tricks Every Developer Should Know",
    slug: "10-essential-css-tricks",
    content: `
      <p>CSS is a powerful tool for styling web pages, but there are many tricks that can make your life easier and your code more efficient. Here are 10 essential CSS tricks every developer should know:</p>
      
      <h2>1. Use CSS Variables</h2>
      <p>CSS variables (custom properties) allow you to store specific values to be reused throughout a document.</p>
      <pre><code>
:root {
  --main-color: #007bff;
}
.button {
  background-color: var(--main-color);
}
      </code></pre>
      
      <h2>2. Flexbox for Easy Layouts</h2>
      <p>Flexbox makes it simple to create flexible responsive layout structures.</p>
      <pre><code>
.container {
  display: flex;
  justify-content: space-between;
}
      </code></pre>
      
      <h2>3. CSS Grid for Complex Layouts</h2>
      <p>CSS Grid is perfect for creating complex, two-dimensional layouts.</p>
      <pre><code>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
      </code></pre>
      
      <h2>4. Use rem for Responsive Typography</h2>
      <p>Using rem units for font sizes allows for easy scaling across different screen sizes.</p>
      <pre><code>
html {
  font-size: 16px;
}
h1 {
  font-size: 2rem; /* 32px */
}
      </code></pre>
      
      <h2>5. CSS Transitions for Smooth Effects</h2>
      <p>CSS transitions can add smooth animation effects to your elements.</p>
      <pre><code>
.button {
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: #0056b3;
}
      </code></pre>
      
      <p>These are just a few of the many CSS tricks that can enhance your web development skills. Stay tuned for the next 5 tricks in our follow-up post!</p>
    `
  },
  {
    id: 3,
    title: "Building Scalable Node.js Applications",
    slug: "building-scalable-nodejs-applications",
    content: `
      <p>Node.js has become a popular choice for building scalable web applications. Here are some key principles to keep in mind when building scalable Node.js applications:</p>

      <h2>1. Use Asynchronous Programming</h2>
      <p>Node.js is designed to be non-blocking and asynchronous. Utilize this feature to handle I/O operations efficiently.</p>

      <h2>2. Implement Caching</h2>
      <p>Use caching mechanisms like Redis to store frequently accessed data and reduce database load.</p>

      <h2>3. Load Balancing</h2>
      <p>Distribute incoming network traffic across multiple servers to ensure no single server bears too much load.</p>

      <h2>4. Database Optimization</h2>
      <p>Optimize your database queries and consider using ORM tools for better database management.</p>

      <h2>5. Microservices Architecture</h2>
      <p>Consider breaking down your application into smaller, independent services for better scalability and maintainability.</p>

      <p>By following these principles, you can build Node.js applications that can handle growth and increased load effectively.</p>
    `
  },
  {
    id: 4,
    title: "The Rise of JAMstack: What You Need to Know",
    slug: "rise-of-jamstack",
    content: `
      <p>JAMstack (JavaScript, APIs, and Markup) is a modern web development architecture that's gaining popularity. Here's what you need to know:</p>

      <h2>1. What is JAMstack?</h2>
      <p>JAMstack is a web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.</p>

      <h2>2. Benefits of JAMstack</h2>
      <p>JAMstack offers better performance, higher security, cheaper scaling, and better developer experience.</p>

      <h2>3. Key Technologies</h2>
      <p>Popular JAMstack technologies include static site generators like Gatsby and Next.js, and headless CMS solutions.</p>

      <h2>4. When to Use JAMstack</h2>
      <p>JAMstack is ideal for content-heavy sites, blogs, e-commerce sites, and sites that don't require real-time data.</p>

      <h2>5. Challenges</h2>
      <p>While powerful, JAMstack may not be suitable for all types of web applications, especially those requiring real-time server-side operations.</p>

      <p>Understanding JAMstack can help you make informed decisions about your web development architecture.</p>
    `
  },
  {
    id: 5,
    title: "Mastering React Hooks: A Comprehensive Guide",
    slug: "mastering-react-hooks",
    content: `
      <p>React Hooks have revolutionized the way we write React components. Here's a comprehensive guide to mastering them:</p>

      <h2>1. useState</h2>
      <p>useState allows you to add state to functional components. It returns a stateful value and a function to update it.</p>

      <h2>2. useEffect</h2>
      <p>useEffect lets you perform side effects in functional components. It's used for data fetching, subscriptions, or manually changing the DOM.</p>

      <h2>3. useContext</h2>
      <p>useContext accepts a context object and returns the current context value for that context.</p>

      <h2>4. useReducer</h2>
      <p>useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values.</p>

      <h2>5. Custom Hooks</h2>
      <p>You can create your own Hooks to reuse stateful behavior between different components.</p>

      <p>Mastering these hooks will greatly enhance your ability to create efficient and reusable React components.</p>
    `
  }
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to all posts</Link>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      <Comments />
    </div>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

