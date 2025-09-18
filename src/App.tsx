import { 
  MdMenu, 
  MdSearch, 
  MdSettings, 
  MdApps, 
  MdTune, 
  MdEdit, 
  MdInbox, 
  MdStar, 
  MdAccessTime, 
  MdLabelImportant, 
  MdSend, 
  MdDrafts 
} from "react-icons/md"
import GmailLogo from "./assets/Gmail_Logo.svg"

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 py-2 border-b shadow-sm bg-white/60 backdrop-blur-md">
        
        {/* Left Section: Menu + Logo */}
        <div className="flex items-center gap-6">
          <MdMenu className="text-2xl cursor-pointer" />
          <div className="flex items-center gap-2">
            <img src={GmailLogo} alt="Gmail Logo" className="w-7 h-7" />
            <span className="text-xl font-bold text-gray-800">Gmail</span>
          </div>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="flex flex-1 justify-start ml-12">
          <div className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 shadow-inner w-[500px]">
            <MdSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search mail"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
            <MdTune className="text-gray-500 text-xl cursor-pointer" />
          </div>
        </div>

        {/* Right Section: Settings, Apps, User */}
        <div className="flex items-center gap-4">
          <MdSettings className="text-2xl cursor-pointer text-gray-600 hover:text-black" />
          <MdApps className="text-2xl cursor-pointer text-gray-600 hover:text-black" />
          <div className="w-9 h-9 bg-green-600 rounded-full cursor-pointer"></div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar Section */}
        <aside className="w-64 p-4 border-r shadow-sm bg-white/60 backdrop-blur-md">
          {/* Compose Button */}
          <button className="flex items-center gap-3 bg-gradient-to-r from-pink-300 to-yellow-200 hover:from-pink-200 hover:to-yellow-100 text-black font-medium py-3 px-6 rounded-[12px] shadow-md transition mb-4">
            <MdEdit className="text-xl" />
            Compose
          </button>

          {/* Menu Box */}
          <div className="rounded-xl bg-gray-50 shadow-md p-2 flex flex-col gap-1">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-100 to-green-200 cursor-pointer">
              <div className="flex items-center gap-3">
                <MdInbox className="text-gray-700 text-xl" />
                <span className="text-gray-900 font-medium">Inbox</span>
              </div>
              <span className="text-sm font-semibold text-gray-800 bg-white/50 px-2 py-0.5 rounded-md">
                1,000
              </span>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <MdStar className="text-gray-600 text-xl" />
              <span>Starred</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <MdAccessTime className="text-gray-600 text-xl" />
              <span>Snoozed</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <MdLabelImportant className="text-gray-600 text-xl" />
              <span>Important</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <MdSend className="text-gray-600 text-xl" />
              <span>Sent</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <MdDrafts className="text-gray-600 text-xl" />
              <span>Drafts</span>
            </div>
          </div>
        </aside>

        {/* Email List Section */}
        <section className="flex-1 border-r bg-white/60 backdrop-blur-md p-4">
          {/* Unread Section */}
          <h2 className="text-sm font-semibold text-gray-500 mb-2">Unread</h2>

          {/* Email Item */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
            <MdStar className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
            <div className="flex-1 overflow-hidden">
              <h3 className="font-medium text-gray-900 truncate">Google</h3>
              <p className="text-sm text-gray-600 truncate">Exciting Updates to Your Google Account...</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
            <MdStar className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
            <div className="flex-1 overflow-hidden">
              <h3 className="font-medium text-gray-900 truncate">Spotify</h3>
              <p className="text-sm text-gray-600 truncate">Discover Your Personalized Playlist...</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
            <MdStar className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
            <div className="flex-1 overflow-hidden">
              <h3 className="font-medium text-gray-900 truncate">Amazon</h3>
              <p className="text-sm text-gray-600 truncate">Your Order Has Shipped...</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t my-3"></div>
          <h2 className="text-sm font-semibold text-gray-500 mb-2">Everything else</h2>

          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
            <MdStar className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
            <div className="flex-1 overflow-hidden">
              <h3 className="font-medium text-gray-900 truncate">LinkedIn</h3>
              <p className="text-sm text-gray-600 truncate">New Job Recommendations...</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
            <MdStar className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
            <div className="flex-1 overflow-hidden">
              <h3 className="font-medium text-gray-900 truncate">Netflix</h3>
              <p className="text-sm text-gray-600 truncate">New Shows and Movies...</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
            <MdStar className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
            <div className="flex-1 overflow-hidden">
              <h3 className="font-medium text-gray-900 truncate">Airbnb</h3>
              <p className="text-sm text-gray-600 truncate">Plan Your Next Getaway...</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
            <MdStar className="text-gray-400 hover:text-yellow-400 cursor-pointer" />
            <div className="flex-1 overflow-hidden">
              <h3 className="font-medium text-gray-900 truncate">Apple</h3>
              <p className="text-sm text-gray-600 truncate">Important Update to Your Account...</p>
            </div>
          </div>
        </section>

        {/* Reading Pane Section */}
        <article className="flex-1 bg-white/80 backdrop-blur-md p-6">
          <h2 className="text-lg font-bold mb-2">Exciting Updates to Your Google Account</h2>
          <p className="text-sm text-gray-600 mb-4">From: Google</p>
          <p className="text-gray-800">
            Hi King!, <br /><br />
            We’re excited to share some updates to your Google Account:
            <br /><br />
            1. Improved Privacy Controls<br />
            2. Enhanced Security<br />
            3. New User Interface<br />
            4. Personalized Recommendations<br /><br />
            Thank you for being a valued Google user!
          </p>
        </article>
      </div>
    </div>
  )
}

export default App

