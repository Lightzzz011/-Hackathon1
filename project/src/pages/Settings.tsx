import React from "react";

const Settings = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="space-y-4">
        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between">
          <label htmlFor="dark-mode" className="text-lg font-medium">
            Dark Mode
          </label>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"
            }`}
          >
            {isDarkMode ? "Disable" : "Enable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;