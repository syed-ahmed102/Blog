import Link from 'next/link'

// Mock data for blog posts
const blogPosts = [
  { id: 1, title: "The Future of AI in Web Development", slug: "future-of-ai-in-web-development" },
  { id: 2, title: "10 Essential CSS Tricks Every Developer Should Know", slug: "10-essential-css-tricks" },
  { id: 3, title: "Building Scalable Node.js Applications", slug: "building-scalable-nodejs-applications" },
  { id: 4, title: "The Rise of JAMstack: What You Need to Know", slug: "rise-of-jamstack" },
  { id: 5, title: "Mastering React Hooks: A Comprehensive Guide", slug: "mastering-react-hooks" },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">TechInsights Blog</h1>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <li key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <Link href={`/posts/${post.slug}`} className="block p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2 hover:underline">{post.title}</h2>
              <p className="text-gray-600">Click to read more...</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

