import React, { useState } from 'react';
import { ExpandableCardDemo } from './ChooseCourse';
import PurchasedCourses from './FetchBoughtCourses';

type ViewType = 'explore' | 'bought' | 'classes';

const Dashboard: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('explore');

  const renderContent = () => {
    switch (activeView) {
      case 'explore':
        return <ExpandableCardDemo/>;
      case 'bought':
        return <PurchasedCourses/>;
      case 'classes':
        return <p className="text-lg font-semibold">Your Classes will appear here</p>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-30 flex bg-yellow-50">
      {/* Sidebar */}

      <div className="w-80 p-6 border-r border-t border-black">
        <h2 className="text-xl font-bold mb-6  text-black"> Dashboard</h2>
        <div className="space-y-4">
          <button
            onClick={() => setActiveView('explore')}
            className={`w-full py-2 px-4 rounded-md text-left font-medium ${
              activeView === 'explore'
                ? 'bg-yellow-300 text-yellow-900'
                : 'bg-white text-yellow-800 hover:bg-yellow-200'
            }`}
          >
            Explore Courses
          </button>
          <button
            onClick={() => setActiveView('bought')}
            className={`w-full py-2 px-4 rounded-md text-left font-medium ${
              activeView === 'bought'
                ? 'bg-yellow-300 text-yellow-900'
                : 'bg-white text-yellow-800 hover:bg-yellow-200'
            }`}
          >
            Bought Courses
          </button>
          <button
            onClick={() => setActiveView('classes')}
            className={`w-full py-2 px-4 rounded-md text-left font-medium ${
              activeView === 'classes'
                ? 'bg-yellow-300 text-yellow-900'
                : 'bg-white text-yellow-800 hover:bg-yellow-200'
            }`}
          >
            Classes
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 border-t border-black p-8">

        <div className=" ">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
