import React   from "react";
import Dashboard from "../../components/DashboardLayout";
import UsersTable from "../../components/admin/CoursesTable"

const ManagerUsers =()=>{
    
    return(
        <>
        <Dashboard menuSelectorIndex="3">
             <UsersTable/>
        </Dashboard>
         
       </>
    )
}
export default ManagerUsers;