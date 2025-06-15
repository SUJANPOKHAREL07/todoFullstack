export const UpdateTAsk = async (id,updatedTask) => {
  try {
    const res = await fetch(`http://localhost:3000/task/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
    if (!res.ok) throw new Error('Failed to update task');
    return true;
  } catch (error) {
    console.error('Update error:', error);
    return false;
  }
};