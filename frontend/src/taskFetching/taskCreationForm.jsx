import { useState } from "react";
import Modal from "../components/modal";

export default function TaskCreationForm({
  newTitle,
  newStatus,
  newAssigendID,
  setNewTitle,
  setNewStatus,
  setnewAssigendID,
  handleCreate,
}) {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <>
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
          required
        />

        <label>Assigned Worker ID</label>
        <input
          type="number"
          value={newAssigendID}
          onChange={(e) => setnewAssigendID(e.target.value)}
          placeholder="Worker ID"
          className="block mb-2 border p-1 w-full"
          required
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
          onClick={() => {
            setIsSuccess(false);
          }}
        >
          Create NOW
        </button>
      </form>
      {isSuccess && (
        <Modal>
          <button
            onClick={() => {
              setIsSuccess(false);
            }}
            className="bg-green-700 text-amber-50 "
          >
            Go to homepage
          </button>
        </Modal>
      )}
    </>
  );
}
