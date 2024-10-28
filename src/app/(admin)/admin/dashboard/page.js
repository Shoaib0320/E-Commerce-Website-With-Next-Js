
export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 md:p-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Welcome to Your Dashboard</h1>
        <p className="text-base md:text-lg font-light">
          Get insights, manage your tasks, and track your progress.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Card 1 */}
        <div className="bg-white text-black rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">User Statistics</h2>
          <p className="text-sm md:text-base">Track your activity and performance with detailed statistics.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Tasks Overview</h2>
          <p className="text-sm md:text-base">View and manage your tasks efficiently from here.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Project Insights</h2>
          <p className="text-sm md:text-base">Get an overview of your projects and milestones.</p>
        </div>
      </div>
    </div>
  );
}
