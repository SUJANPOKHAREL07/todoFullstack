

export default function UpdateTaskForrm({
  newTitle,
  newStatus,
  newAssigendID,
  setNewTitle,
  setNewStatus,
  setnewAssigendID,
handleUpdate}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
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
        Update
      </button>
    </form>
  );
}

