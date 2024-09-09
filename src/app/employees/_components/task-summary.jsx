import React from 'react'

const TaskSummary = () => {
  return (
    <div>
        <div className="bg-[#1D232C] p-6 rounded-xl shadow-lg">
  <p className="text-white text-2xl font-semibold mb-4">
    Task Summary By Resource
  </p>
  <div className="overflow-x-auto border border-white rounded-xl">
    <table className="min-w-full text-white">
      <thead>
        <tr className="bg-[#4C48EC] text-sm rounded-xl">
          <td className="p-2 border-r border-b border-white text-left">Resource</td>
          <td className="p-2 border-r border-b border-white text-left">Planned Task</td>
          <td className="p-2 border-r border-b border-white text-left">Closed Task</td>
          <td className="p-2 border-r border-b border-white text-left">Utilized Work Hours</td>
          <td className="p-2 border-b border-white text-left">Completion</td>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-white text-xs text-[#809FB8]">
          <td className="py-2 px-4">Backend Developer</td>
          <td className="py-2 px-4">14</td>
          <td className="py-2 px-4">14</td>
          <td className="py-2 px-4">100%</td>
          <td className="py-2 px-4">
            <span className="bg-[#1AD598] text-black px-4 py-1 rounded-full">
              75%
            </span>
          </td>
        </tr>
        <tr className="border-b border-white">
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
        </tr>
        <tr className="border-b border-white">
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
        </tr>
        <tr className="border-b border-white">
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
        </tr>
        <tr className="border-b border-white">
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
        </tr>
        <tr className="border-b border-white">
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
        </tr>
        <tr className="border-b border-white">
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
        </tr>
        <tr className="border-b border-white">
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
        </tr>
        <tr className="">
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
          <td className="py-2 px-4">&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
}

export default TaskSummary