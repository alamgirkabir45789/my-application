import React, { useState } from 'react';
import RegistrationForm from '../account/registration/form/RegistrationForm';

const TodoApp = () => {
  const [state, setState] = useState({profileName:''});
  console.log(state)
  const [tableData, setTableData] = useState([
    {id:101,profileName:'Abc'},
    {id:102,profileName:'Def'},
  ])
  const handleInputChange = (e) => { 
    const {name,value}=e.target
    console.log({name,value})
    setState(prev=>({...state,[name]:value}))
   }
  const addProfileName = () => { 
    if(!state.id){
      console.log('res')
      const payload={
        id:Math.floor(Math.random() * 100),
        profileName:state.profileName
      }
     setTableData([...tableData,payload])
    }else{
      console.log('res3')
      const payload={
        id:state.id,
        profileName:state.profileName
      }
      console.log([...tableData,payload,payload.id])
    }
    
    
   }
   const EditItem = (item) => { 
   const data={
     id:item.id,
     profileName:item.profileName
   }
   console.log(data)
   setState(data)
    }
   const RemoveItem = (idx) => { 
     const _tableData=[...tableData]
   _tableData.splice(idx,1)
     setTableData(_tableData)
    }
  return (
    <div className='container'>
      
      <div>
        <RegistrationForm></RegistrationForm>
      </div>
        <div>
          <label htmlFor='profileName'>Profile Name:</label>
            <input type='text' value={state.profileName} name="profileName" onChange={handleInputChange}></input>
        </div>
       <button onClick={addProfileName}>Add</button>
       <div>
         <table>
           <thead>
             <tr>
               <th>A</th>
               <th>A</th>
             </tr>
           </thead>
           <tbody>
             {
               tableData.map((td,idx)=>(
                 <tr key={td.id}>
                   <td>{idx+1}</td>
                   <td>{td.profileName}</td>
                   <td>
                     <button type='button' className='bg-success' onClick={()=>EditItem(td)}>Edit</button>
                   </td>
                   <td>
                     <button type='button' className='bg-danger' onClick={()=>RemoveItem(idx)}>Delete</button>
                   </td>
                 </tr>
               ))
             }
           </tbody>
         </table>
       </div>
    </div>
  )
}

export default TodoApp