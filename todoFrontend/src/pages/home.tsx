import { useState, useEffect } from "react";

type TodoItem = {
  id: string | number;
  title: string;
  status: string;
  createdAt: string;
  user?: {
    userName: string;
  };
};

export default function HomePage() {
  const [data, setData] = useState<TodoItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/task`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log("Fetched data:", result); // For debugging
        setData(result);
      } catch (error: any) {
        setError(error?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {Array.isArray(data) && data.length > 0
        ? data.map((item) => (
            <div key={item.id} className="bg-gray-100 p-4 rounded shadow mb-4">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p>
                Status:{" "}
                {item.status.toLowerCase() === "completed"
                  ? "✅ Completed"
                  : "❌ Not completed"}
              </p>

              {item.user && (
                <p className="text-sm text-gray-600">
                  By: {item.user.userName}
                </p>
              )}
            </div>
          ))
        : !loading && <p>No todo items found.</p>}
    </div>
  );
}
