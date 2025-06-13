// task creation operation

export const CreateTask = async ({title,status,userID}) => {
  try {
    const res = await fetch(`http://localhost:3000/task/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, status, userID:parseInt(userID) }),
    });
    if (!res.ok) throw new Error('Failed to create task');
    return true;
  } catch (error) {
    console.error('Creation error:', error);
    return false;
  }
};
