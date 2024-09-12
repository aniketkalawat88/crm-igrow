import React from 'react'

const page = () => {
  return (
    <div>
        <div className="p-4">
  <h1 className="text-3xl font-bold text-primary-main mb-6">Add Leave</h1>
  <form>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block mb-2 text-white ">Employee</label>
        <input
          type="text"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
      <div>
        <label className="block mb-2 text-white ">Leave Type</label>
        <input
          type="text"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
      <div>
        <label className="block mb-2 text-white ">From*</label>
        <input
          type="text"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
      <div>
        <label className="block mb-2 text-white ">To*</label>
        <input
          type="text"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
      </div>
    <div className="mb-4 ">
      <label className="block mb-2 text-white ">Reason</label>
      <input
        type="text"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
      />
    </div>
    </div>
    <div>
      <button
        type="submit"
        className="w-1/4 p-2 bg-primary-main text-gray-900 font-bold rounded "
      >
        Save
      </button>
    </div>
  </form>
</div>

    </div>
  )
}

export default page