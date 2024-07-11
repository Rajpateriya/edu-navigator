

import React, { useState } from 'react';

const TeacherProfile = () => {
  const [activeTab, setActiveTab] = useState('class_schedule');

  return (
    <div className="flex flex-col max-w-[100%] bg-[#021025fc] text-white">

      {/* Profile and Basic Details Section */}

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 mb-2 p-2">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-[200px] rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4537/4537019.png"
              width="200"
              height="200"
              alt="Teacher Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid gap-2 text-center">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <div className="text-gray-200">Teacher ID: T12345</div>
          </div>
        </div>
        <div className="grid gap-6 bg-[#071a2c] p-7 rounded-lg shadow-lg ">
          <div className="grid gap-2">
            <div className="bg-[#091c30] p-4 rounded-lg shadow">
              <div className="text-lg font-semibold">Personal Details</div>
              <div className="grid grid-cols-3 gap-4 ">
                <div className="grid gap-1">
                  <div className="text-gray-400">DOB</div>
                  <div>01/01/1980</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Gender</div>
                  <div>Male</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Marital Status</div>
                  <div>Married</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Phone</div>
                  <div>+1 (555) 123-4567</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Address</div>
                  <div>123 Main St, Cityville</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Email</div>
                  <div>john.doe@example.com</div>
                </div>
              </div>
            </div>
            <div className="bg-[#091c30] p-4 rounded-lg shadow">
              <div className="text-lg font-semibold">Professional Details</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-gray-400">Date of Joining</div>
                  <div>01/09/2010</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Department</div>
                  <div>Mathematics</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Position</div>
                  <div>Senior Lecturer</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Employment Status</div>
                  <div>Full-time</div>
                </div>
              </div>
            </div>
            <div className="bg-[#091c30] p-4 rounded-lg shadow">
              <div className="text-lg font-semibold">Financial Details</div>
              <div className="grid grid-cols-3 gap-4 ">
                <div className="grid gap-1">
                  <div className="text-gray-400">Bank Account Information</div>
                  <div>Bank of Example, Account No. 123456789</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Salary</div>
                  <div>$60,000/year</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Tax ID</div>
                  <div>XX-XXXXXXX</div>
                </div>
              </div>
            </div>
            <div className="bg-[#091c30] p-4 rounded-lg shadow">
              <div className="text-lg font-semibold">Previous Employment</div>
              <div className="grid gap-1 ">
                <div className="text-gray-400">Previous Employment History</div>
                <div>ABC High School (2006-2010)</div>
              </div>
            </div>
            <div className="bg-[#091c30] p-4 rounded-lg shadow">
              <div className="text-lg font-semibold">Performance and Attendance</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1">
                  <div className="text-gray-400">Performance Review</div>
                  <div>Excellent</div>
                </div>
                <div className="grid gap-1">
                  <div className="text-gray-400">Attendance</div>
                  <div>98%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Component Section */}
      <div className="flex flex-col overflow-y-auto">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="flex h-9 items-center justify-around rounded-lg bg-[#14263c] p-1 text-gray-300 border-b border-gray-500"
          tabIndex="0"
          style={{ outline: 'none' }}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'class_schedule'}
            aria-controls="class_schedule"
            className={`inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 w-40 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              activeTab === 'class_schedule' ? 'bg-white text-[#021025fc] shadow' : ''
            }`}
            onClick={() => setActiveTab('class_schedule')}
          >
            Class Schedule
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'qualifications'}
            aria-controls="qualifications"
            className={`inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              activeTab === 'qualifications' ? 'bg-white text-[#021025fc] shadow' : ''
            }`}
            onClick={() => setActiveTab('qualifications')}
          >
            Qualifications
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'performance_review'}
            aria-controls="performance_review"
            className={`inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              activeTab === 'performance_review' ? 'bg-white text-[#021025fc] shadow' : ''
            }`}
            onClick={() => setActiveTab('performance_review')}
          >
            Performance Review
          </button>
        </div>
        <div
          role="tabpanel"
          aria-labelledby="class_schedule"
          id="class_schedule"
          tabIndex="0"
          className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 flex-1 p-4 bg-[#0a1c30] rounded-lg shadow-lg ${
            activeTab === 'class_schedule' ? '' : 'hidden'
          }`}
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Class Schedule</div>
              <div className="text-gray-400">Monday:</div>
              <div>8:00 AM - 9:00 AM: Algebra</div>
              <div>10:00 AM - 11:00 AM: Geometry</div>
              <div className="text-gray-400">Tuesday:</div>
              <div>8:00 AM - 9:00 AM: Calculus</div>
              <div>10:00 AM - 11:00 AM: Statistics</div>
              {/* Add more schedule details here */}
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          aria-labelledby="qualifications"
          id="qualifications"
          tabIndex="0"
          className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 flex-1 p-4 bg-[#0a1c30] rounded-lg shadow-lg ${
            activeTab === 'qualifications' ? '' : 'hidden'
          }`}
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Qualifications</div>
              <div className="text-gray-400">Degrees / Qualifications:</div>
              <div>Bachelor of Science in Mathematics</div>
              <div>Master of Science in Mathematics Education</div>
              <div className="text-gray-400">Institutions Attended:</div>
              <div>University of Example (Graduated 2005)</div>
              <div>Example State University (Graduated 2008)</div>
              <div className="text-gray-400">Certifications and Licenses:</div>
              <div>Certified Mathematics Teacher</div>
              <div>Advanced Teaching License</div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          aria-labelledby="performance_review"
          id="performance_review"
          tabIndex="0"
          className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 flex-1 p-4 bg-[#0a1c30] rounded-lg shadow-lg ${
            activeTab === 'performance_review' ? '' : 'hidden'
          }`}
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Performance Review</div>
              <div className="text-gray-400">2023 Review:</div>
              <div>
                Outstanding performance in classroom management and student
                engagement. Consistently meets and exceeds educational
                standards.
              </div>
              <div className="text-gray-400">2022 Review:</div>
              <div>
                Excellent grasp of subject matter and effective teaching
                methods. Demonstrated commitment to student success.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
