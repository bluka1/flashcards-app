import { useState } from 'react';
import { useTheme } from '../../hooks/useDarkMode';
import { Moon, Sun } from 'lucide-react';

const Settings = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [notifications, setNotifications] = useState(false);
  const [studyReminder, setStudyReminder] = useState('daily');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="space-y-4">
        {/* Dark Mode s ikonom */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {isDarkMode ? 
                <Moon size={20} className="text-gray-600 dark:text-gray-300" /> : 
                <Sun size={20} className="text-gray-600 dark:text-gray-300" />
              }
              <span className="font-medium">Dark Mode</span>
            </div>
            <button 
              onClick={toggleDarkMode}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
            >
              {isDarkMode ? 'On' : 'Off'}
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium">Notifications</span>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              Configure
            </button>
          </div>
        </div>

        {/* Study Reminder */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium">Study Reminder</span>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              Daily
            </button>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="mt-8 space-y-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium">Account</span>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              Manage
            </button>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium">Privacy</span>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;