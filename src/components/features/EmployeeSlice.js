import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../Pages/EmployeeData";


export const EmployeeSlice =createSlice({
    name:"users",
    initialState:{
        value:UserData
    },
    reducers:{
      addEmployee:(state,action)=>{
           state.value.push(action.payload);
      },
      deleteEmployee :(state,action)=>{ 
            
          state.value = state.value.filter((item,index) =>  index !== action.payload)
      },
      updateEmployee:(state,action)=>{
        state.value.map((emp,index)=> {
            if(index === action.payload.Index)
            {  
                index=action.payload.Index
                emp.Name=action.payload.Name;
                emp.Designation=action.payload.Designation;
                emp.PhoneNumber=action.payload.PhoneNumber;
                emp.DateOFJoining=action.payload.DateOFJoining;
                emp.Salary=action.payload.Salary;
                emp.Address=action.payload.Address;                
            }
        })
       
      }
    }
})
export const {addEmployee,deleteEmployee,updateEmployee} =EmployeeSlice.actions
export default EmployeeSlice.reducer;