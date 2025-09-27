import { useEffect, useState } from "react";
import { GrFormSchedule } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToTask = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      toast.success(`${ticket.title} added to Task Status`);
    }
  };

  const handleComplete = (ticket) => {
    setResolved([...resolved, ticket]);
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.success(`${ticket.title} marked as Resolved`);
  };

  useEffect(() => {
    fetch("tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);
  return (
    <div className="p-4 md:p-6 md:px-20 px-10 bg-gray-100 min-h-screen">
      {/* Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="banner1 flex items-center justify-center bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white md:h-64 p-6 rounded-lg shadow text-center">
          <div>
            <h2 className="text-xl">In-Progress</h2>
            <p className="text-5xl font-bold mt-3">{inProgress.length}</p>
          </div>
        </div>
        <div className="banner2 flex items-center justify-center  text-white md:h-64 p-6 rounded-lg shadow text-center">
          <div>
            <h2 className="text-xl">Resolved</h2>
            <p className="text-5xl font-bold mt-3">{resolved.length}</p>
          </div>
        </div>
      </div>

      <div className="md:flex md:space-x-10 py-10">
        <div className="md:w-9/12">
          <h3 className="text-xl font-semibold mb-4">Customer Tickets</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition"
                onClick={() => handleAddToTask(ticket)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {ticket.title}
                  </h4>
                  <span
                    className={`font-semibold px-2 py-1 rounded-full flex  items-center gap-1 ${
                      ticket.status === "Open"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    <span
                      className={`h-3 w-3 border rounded-full ${
                        ticket.status === "Open"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    ></span>
                    {ticket.status}
                  </span>
                </div>
                <p className="text-sm text-[#627382] font-semibold">
                  {ticket.description}
                </p>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <div>
                    <span className="font-semibold">#{ticket.id}</span>
                    <span
                      className={`ml-5 font-semibold ${
                        ticket.priority === "High"
                          ? "text-red-500"
                          : ticket.priority === "Medium"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    >
                      {ticket.priority} Priority
                    </span>
                  </div>
                  <div className="flex items-center font-semibold">
                    <span>{ticket.customer}</span>
                    <span className="ml-5 flex items-center gap-1">
                      <GrFormSchedule className="text-3xl" />
                      <span>{ticket.createdAt}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-3/12 mt-6 md:mt-0">
          <h3 className="text-2xl text-gray-600 font-semibold mb-4">
            Task Status
          </h3>
          {inProgress.length === 0 ? (
            <p className="text-gray-500">No tasks in progress.</p>
          ) : (
            inProgress.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white p-4 rounded-lg shadow mb-3"
              >
                <h4 className="font-semibold text-sm sm:text-base">
                  {ticket.title}
                </h4>
                <button
                  onClick={() => handleComplete(ticket)}
                  className="mt-3 cursor-pointer font-semibold w-full text-center py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                >
                  Complete
                </button>
              </div>
            ))
          )}
          <h3 className="text-2xl text-gray-600 font-semibold mt-6 mb-4">
            Resolved Task
          </h3>
          {resolved.length === 0 ? (
            <p className="text-gray-500">No resolved tasks yet.</p>
          ) : (
            resolved.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-[#E0E7FF] p-4 rounded-lg shadow mb-2"
              >
                <h4 className="text-sm font-medium">{ticket.title}</h4>
              </div>
            ))
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Dashboard;
