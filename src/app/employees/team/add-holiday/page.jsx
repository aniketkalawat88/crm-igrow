import React from 'react'

const page = () => {
  return (
    <div>
        <div className="w-[70%] p-2">
  <h1 className="text-primary-main text-3xl font-bold mb-6">Add Holiday</h1>
  <form>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2 text-white" htmlFor="date">
        Date
      </label>
      <input
        className="w-full p-3 bg-gray-800 text-white rounded"
        type="text"
        id="date"
        name="date"
      />
    </div>
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2 text-white" htmlFor="description">
        Description
      </label>
      <input
        className="w-full p-3 bg-gray-800 text-white rounded"
        type="text"
        id="description"
        name="description"
      />
    </div>
    <button
      className="w-full bg-primary-main text-black font-bold py-3 rounded mt-10 w-1/3"
      type="submit"
    >
      Save
    </button>
  </form>
</div>

    </div>
  )
}

export default page