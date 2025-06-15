import React, { useEffect, useState } from "react";
import { deleteTask } from "./deleteTask";
import { CreateTask } from "./createTask";
import TaskCreationForm from "./taskCreationForm";
import Modal from "../components/modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import { UpdateTAsk } from "./updateTask";
import UpdateTaskForrm from "./updateTaskForm";

export default function GetAllTask() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreate, setIsCreate] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);
    const [editTaskId, setEditTaskId] = useState(2);
  const [newStatus, setNewStatus] = useState("Pending");
  const [newAssigendID, setnewAssigendID] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:3000/task");
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const json = await res.json();
        setData(json);
        setIsError(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);
  const handleDelete = async (id) => {
    const success = await deleteTask(id);
    if (success) {
      window.location.reload();
      fetchTasks();
    }
  };
  const handleCreate = async () => {
    const success = await CreateTask({
      title: newTitle,
      status: newStatus,
      userID: Number(newAssigendID),
    });
    if (success) {
      setNewTitle("");
      setNewStatus("Pending");
      newAssigendID("");
      setIsCreate(false);
    
      await fetchTasks();
    }
  };
  const handleUpdate = async () => {
    const success = await UpdateTAsk(editTaskId,{
      title: newTitle,
      status: newStatus,
      userID: newAssigendID,
    
    });
    if (success) {
      setIsEdit(false);
     setNewTitle("");
      setNewStatus("Pending");
      newAssigendID("");
      await fetchTasks();
    }
  };
   

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Error fetching data
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div className="mb-5 flex justify-center">
        <button
          className="bg-green-600 text-white px-4 py-1 rounded mt-2"
          onClick={() => {
            setIsCreate(true);
          }}
        >
          Create New Task
        </button>
      </div>
      <div className=" grid grid-cols-3 gap-4 p-4">
        {data.map((item) => (
          <div key={item.id} className="bg-gray-100 w-[18rem] rounded-md">
            <div className="font-bold">{item.title}</div>
            <label htmlFor="">
              Status:{" "}
              {item.status === "Completed"
                ? "✅ Completed"
                : item.status === "Cancled"
                ? "❌ Cancled"
                : "⏲️ Pending"}
            </label>
            <div className="flex space-x-3">
              <button
                className="bg-red-500 rounded-md font-bold flex justify-center text-white w-20 "
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setEditTaskId(item.id)
                  setNewTitle(item.title)
                  setNewStatus(item.status)
                  setnewAssigendID(item.userID)
                  setIsEdit(true);
                }}
                className="bg-blue-500 rounded-md font-bold flex justify-center text-white w-20"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {isCreate && (
        <Modal>
          <div className="bg-white">
            <button
              className="hover:cursor-pointer "
              onClick={() => {
                setIsCreate(false);
              }}
            >
              {" "}
              <IoCloseCircleOutline className="bg-white ml-[20rem] text-xl  text-red-500" />
            </button>
            <TaskCreationForm
              newTitle={newTitle}
              newStatus={newStatus}
              newAssigendID={newAssigendID}
              setNewTitle={setNewTitle}
              setNewStatus={setNewStatus}
              setnewAssigendID={setnewAssigendID}
              handleCreate={handleCreate}
            />
          </div>
        </Modal>
      )}
      {isEdit && (
        <Modal>
          <div className="bg-white">
            <button
              onClick={() => {
                setIsEdit(false);
              }}
            >
              {" "}
              <IoCloseCircleOutline className="bg-white ml-[20rem] text-xl  text-red-500" />
            </button>
            <UpdateTaskForrm
                newTitle={newTitle}
              newStatus={newStatus}
              newAssigendID={newAssigendID}
              setNewTitle={setNewTitle}
              setNewStatus={setNewStatus}
              setnewAssigendID={setnewAssigendID}
              handleUpdate={handleUpdate}
            
            />
          </div>
        </Modal>
      )}
    </>
  );
}
