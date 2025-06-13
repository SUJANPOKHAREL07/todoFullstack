// import React from 'react'
// // taskCreationForm
// export default function TaskCreationForm() {
//   return (
//   <>
//     <div className="">
//         <form action="POST">
//           <label htmlFor="">Task Name</label>
//           <input type="text" placeholder='Enter new task' />
//           <label htmlFor="">Enter Assigned Worker id</label>
//           <input type="number" placeholder='Enter new task' />
//           <label htmlFor="">Task Name</label>
//           <select name="task" id="">
//             <option value="">Completed</option>
//             <option value="">Pending</option>
//             <option value="">Cancled</option>
//           </select>
//           <button type='submit'>Create NOW</button>
//         </form>
//     </div>
//   </>
//   )
// }

import React from 'react';
import Modal from '../components/modal';

export default function TaskCreationForm({
  newTitle,
  newStatus,
  newAssigendID,
  setNewTitle,
  setNewStatus,
  setnewAssigendID,
  handleCreate
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
      className="p-6"
    >
      <label>Task Name</label>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Enter new task"
        className="block mb-2 border p-1 w-full"
      />

      <label>Assigned Worker ID</label>
      <input
        type="number"
        value={newAssigendID}
        onChange={(e) => setnewAssigendID((e.target.value))}
        placeholder="Worker ID"
        className="block mb-2 border p-1 w-full"
      />

      <label>Status</label>
      <select
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
        className="block mb-2 border p-1 w-full"
      >
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Cancled">Cancled</option>
      </select>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-1 rounded mt-2 hover:cursor-pointer"
        
      >
        Create NOW
      </button>
    </form>
  );
}

