import React, { useState } from 'react'
import './HomePage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, deleteEmployee,updateEmployee } from '../features/EmployeeSlice';
import {CiBookmarkRemove} from'react-icons/ci'



const HomePage = () => {

  const[addEmp,setAddEmp]=useState(false);
  const[name,setName]=useState(null);
  const[desig,setDesig] =useState(null);
  const[salery,setSalary]=useState(0);
  const[phnumber,setPhnumber]=useState(null);
  const[doj,setDoj] =useState(Date);
  const[Adrrs,setAddrs]=useState(null);
  const[uindex,setUindex]=useState(null)
  const userdata =useSelector(state => state.users.value)
  const dispatch =useDispatch();
  const submitClicked=(e)=>{
    e.preventDefault(); 
    setName(null);
         setDesig(null);
         setPhnumber(null);
         setSalary(null)
         setAddrs(null);
         setDoj(null) 
         setUindex(null)
    const push =Validations();
    if(push){
      
        if(uindex != null){
          debugger;
          dispatch(updateEmployee({Index:uindex,Name:name,Designation:desig,PhoneNumber:phnumber,Salary:salery,Address:Adrrs,DateOFJoining:doj}))
          setAddEmp(addEmp ? false : true)
          
        }
        else{
          dispatch(addEmployee({Name:name,
            Designation:desig,
            Salary:salery,
            PhoneNumber:phnumber,
            DateOFJoining:doj,
            Address :Adrrs}));
           
            toast("Thank You! Your Data is added")
        }
        
    }
    
    
    
      
  }
 const Validations=()=>{  
      if(name == null || phnumber == null ||desig == null || Adrrs == null){
        
        toast("Please Fill Required Field")
        return false;
      }
      return true;
  }
  function deleteClicked(index){
    dispatch(deleteEmployee(index))
  }
  function editClicked(emp,index){
    setAddEmp(addEmp ? false : true)
         setName(emp.Name);
         setDesig(emp.Designation);
         setPhnumber(emp.PhoneNumber);
         setSalary(emp.Salary)
         setAddrs(emp.Address);
         setDoj(emp.DateOFJoining) 
         setUindex(index)
                 
  }
  return (
   
    <div className='employee'>  
    <div>
    <h2 >Employee Data</h2>
        <button onClick={()=>setAddEmp(addEmp ? false : true)} className='add_employee'>Add Employee</button>  
    </div>     
        <table className='table_data'>
            <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Phone Number</th>
                <th>Date of joing</th>
                <th>Address</th>
                <th></th>
            </tr>
            {
                  userdata.map((emp,index)=> (   <tr>
                    <td>{emp.Name}</td>
                    <td>{emp.Designation}</td>
                    <td>{emp.Salary}</td>
                    <td>{emp.PhoneNumber}</td>
                    <td>{emp.DateOFJoining}</td>
                    <td>{emp.Address}               
                    </td>
                    <td className='buttons' ><button onClick={()=>deleteClicked(index)}>Delete</button>
                    <button onClick={()=>editClicked(emp,index)}>Edit</button></td>                    
                </tr>))
            } 
            <ToastContainer />          
        </table>
        <div className={addEmp ? 'overlayer' : null} ></div>
        {
           addEmp ? (<aside className='modal_container'>
           <div>
           
           </div>
           <form onSubmit={submitClicked} className='form'>
           <CiBookmarkRemove onClick={()=>setAddEmp(addEmp ? false : true)} className='remove-icon'/>            
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'/>
            <input type='text'  value={desig} onChange={(e)=>setDesig(e.target.value)} placeholder='Enter Your Designation'/>
            <input type='number'  value={salery} onChange={(e)=>setSalary(e.target.value)} placeholder='Salary'/>
            <input type='number'  value={phnumber} onChange={(e)=>setPhnumber(e.target.value)} placeholder='Phone Number'/>
            <label>Date of Joining</label>
            <input  value={doj} type='datetime-local' onChange={(e)=>setDoj(e.target.value)} placeholder='Select Date of Joining'/>
            <textarea  value={Adrrs} onChange={(e)=>setAddrs(e.target.value)} placeholder='Enter Your Address'></textarea>
            <button type='submit'>Submit</button>
           </form>
        </aside>) : null
        }
        
    </div>
    
  )
}

export default HomePage