import React from 'react'

const page = () => {
  return (
    <div>
        <div className="w-[80%] px-4">
  <h1 className="text-primary-main text-3xl font-bold mb-6">Profile Details</h1>
  <form>
    <div className="mb-4">
      <label className="block mb-2 text-white">Name</label>
      <input
        type="text"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-white">Phone</label>
      <input
        type="text"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-white">Photo</label>
      <input
        type="text"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-white">Email</label>
      <input
        type="email"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-white">Password</label>
      <input
        type="password"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-2 text-white">Status</label>
      <input
        type="text"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
  </form>
</div>

    </div>
  )
}

export default page