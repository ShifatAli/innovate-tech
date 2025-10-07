import { useState } from 'react'
export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('All fields are required')
      return
    }
    if (!email.includes('@')) {
      setError('Invalid email format')
      return
    }
    setError('')
    alert('Sign in successful')
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4 p-2 border rounded" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" />
      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded">Sign In</button>
    </form>
  )
}
