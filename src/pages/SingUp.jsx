export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Create Your Account</h2>
        <p className="text-center text-gray-500 mb-6 text-sm">Join Innovate Tech to unlock your innovation potential.</p>

        <form className="space-y-4">
          <div>
            <label className="text-gray-600 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Raj"
              className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm">Email Address</label>
            <input
              type="email"
              placeholder="e.g. hello@example.com"
              className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              placeholder="At least 8 characters"
              className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg shadow"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
