import React from 'react'
import EmployeeNavbar from './_components/employee-navbar'
import TopPerformance from './_components/top-performance'
import TeamRole from './_components/team-role'
import PlannedActualWork from './_components/planned-actual-work'
import TaskStatus from './_components/task-status'
import TotalUtilize from './_components/total-utilize'
import TaskSummary from './_components/task-summary'
import PlannedHours from './_components/planned-hours'

const page = () => {
  return (
    <div className="text-white">
        <EmployeeNavbar />
        <TopPerformance />
        <div className="grid grid-cols-12 my-6 gap-6">
            <div className="col-span-6 ">
                <TeamRole />
            </div>
            <div className="col-span-6">
                <PlannedActualWork />
            </div>
            <div className="col-span-6">
              <TaskStatus />
            </div>
            <div className="col-span-6">
              <TotalUtilize />
            </div>
            <div className="col-span-6">
              <TaskSummary />
            </div>
            <div className="col-span-6">
              <PlannedHours />
            </div>
        </div>

    </div>
  )
}

export default page