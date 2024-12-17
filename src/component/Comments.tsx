'use client'

import { useState } from 'react'

interface Comment {
  name: string;
  content: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({ name: '', content: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.name.trim() && newComment.content.trim()) {
      setComments([...comments, newComment])
      setNewComment({ name: '', content: '' })
    }
  }

  return (
    <div className="mt-12 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            id="comment"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            rows={3}
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Post Comment
        </button>
      </form>
      <ul className="space-y-6">
        {comments.map((comment, index) => (
          <li key={index} className="bg-gray-50 p-4 rounded-lg shadow">
            <p className="font-semibold text-gray-800">{comment.name}</p>
            <p className="mt-2 text-gray-600">{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

