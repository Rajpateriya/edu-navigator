import React, { useState } from 'react';

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState('marksheet');

  return (
    <div className="flex flex-col w-full bg-[#021025fc] text-white">
      {/* Profile and Basic Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 mb-2 p-2">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-[200px] rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4537/4537019.png"
              width="200"
              height="200"
              alt="Student Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid gap-2 text-center">
            <h2 className="text-2xl font-bold">Raj Pateriya</h2>
            <div className="text-gray-200">Student ID: 12345</div>
          </div>
        </div>
        <div className="grid gap-6 bg-[#071a2c] p-7 rounded-lg shadow-lg">
          <div className="grid gap-2">
            <div className="bg-[#091c30] p-4 rounded-lg shadow">
              <div className="text-lg font-semibold">Student Details</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-gray-400">Phone</div>
                  <div>+1 (555) 123-4567</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Email</div>
                  <div>rpateriya111@gmail.com</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Class</div>
                  <div>10th Grade, Section A</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Class Teacher</div>
                  <div>Ms. Emily Johnson</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="bg-[#091c30] p-4 rounded-lg shadow">
              <div className="text-lg font-semibold">Parents</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-gray-400">Father</div>
                  <div>John Anderson</div>
                  <div>+1 (555) 987-6543</div>
                  <div>Accountant</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Mother</div>
                  <div>Sarah Anderson</div>
                  <div>+1 (555) 987-6543</div>
                  <div>Homemaker</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="bg-[#091c30] p-4 rounded-lg shadow">
              <div className="text-lg font-semibold">Siblings</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-gray-400">Brother</div>
                  <div>Michael Anderson</div>
                  <div>Age 15</div>
                  <div>9th Grade</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Sister</div>
                  <div>Emily Anderson</div>
                  <div>Age 12</div>
                  <div>7th Grade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Component Section */}
      <div className="flex flex-col w-full overflow-y-auto">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="flex h-9 items-center  justify-around rounded-lg bg-[#14263c] p-1 text-gray-300 border-b border-gray-500"
          tabIndex="0"
          style={{ outline: 'none' }}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'marksheet'}
            aria-controls="marksheet"
            className={`inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 w-40 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              activeTab === 'marksheet' ? 'bg-white text-[#021025fc] shadow' : ''
            }`}
            onClick={() => setActiveTab('marksheet')}
          >
            Marksheet
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'academic'}
            aria-controls="academic"
            className={`inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              activeTab === 'academic' ? 'bg-white text-[#021025fc] shadow' : ''
            }`}
            onClick={() => setActiveTab('academic')}
          >
            Academic Records
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'feedback'}
            aria-controls="feedback"
            className={`inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              activeTab === 'feedback' ? 'bg-white text-[#021025fc] shadow' : ''
            }`}
            onClick={() => setActiveTab('feedback')}
          >
            Feedback
          </button>
        </div>
        <div
          role="tabpanel"
          aria-labelledby="marksheet"
          id="marksheet"
          tabIndex="0"
          className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 flex-1 p-4 bg-[#071a2c] rounded-lg shadow-lg ${
            activeTab === 'marksheet' ? '' : 'hidden'
          }`}
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Previous Class Marksheet</div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 border border-gray-400 bg-[#021025fc] hover:bg-blue-700 hover:text-white h-9 rounded-md px-3 justify-self-end">
                View
              </button>
            </div>
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Current Class Marksheet</div>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 border border-gray-400 bg-[#021025fc] hover:bg-blue-700 hover:text-white h-9 rounded-md px-3 justify-self-end">
                View
              </button>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          aria-labelledby="academic"
          id="academic"
          tabIndex="0"
          className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 flex-1 p-4 bg-[#071a2c] rounded-lg shadow-lg ${
            activeTab === 'academic' ? '' : 'hidden'
          }`}
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Academic Records</div>
              {/* Academic Records Content */}
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          aria-labelledby="feedback"
          id="feedback"
          tabIndex="0"
          className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 flex-1 p-4 bg-[#071a2c] rounded-lg shadow-lg ${
            activeTab === 'feedback' ? '' : 'hidden'
          }`}
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Feedback</div>
              {/* Feedback Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
