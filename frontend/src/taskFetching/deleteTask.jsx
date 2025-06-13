export const deleteTask = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/task/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete');
    return true;
  } catch (error) {
    console.error('Delete error:', error);
    return false;
  }
};
