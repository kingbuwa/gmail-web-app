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
  MdDrafts,
  MdRefresh,
  MdExpandMore,
} from "react-icons/md";

// Import images from src/assets
import GmailLogo from "./assets/Gmail_Logo.svg";
import UserAvatar from "./assets/kingbuwa.jpg";
import GoogleLogo from "./assets/google.svg";

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 py-2 bg-gray-100">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-6">
          <MdMenu className="text-2xl cursor-pointer" />
          <div className="flex items-center gap-2">
            <img src={GmailLogo} alt="Gmail Logo" className="w-7 h-7" />
            <span className="text-xl font-bold text-gray-800">Gmail</span>
          </div>
        </div>

        {/* Middle: Search */}
        <div className="flex flex-1 justify-start ml-12">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md w-[500px]">
            <MdSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search mail"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
            <MdTune className="text-gray-500 text-xl cursor-pointer" />
          </div>
        </div>

        {/* Right: Settings + Apps + Avatar */}
        <div className="flex items-center gap-4">
          <MdSettings className="text-2xl cursor-pointer text-gray-600 hover:text-black" />
          <MdApps className="text-2xl cursor-pointer text-gray-600 hover:text-black" />
          <img
            src={UserAvatar}
            alt="User"
            className="w-9 h-9 rounded-full object-cover border border-gray-300"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 p-4">
        {/* ONE big rounded box with section dividers */}
        <div className="flex flex-1 rounded-xl bg-white/70 backdrop-blur-md shadow-md overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 flex flex-col border-r border-gray-200 p-3">
            <button className="mb-4 flex items-center gap-3 bg-gradient-to-r from-pink-300 to-yellow-200 hover:from-pink-200 hover:to-yellow-100 text-black font-medium py-3 px-6 rounded-[12px] shadow-md transition">
              <MdEdit className="text-xl" />
              Compose
            </button>

            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-100 to-green-200 cursor-pointer">
                <div className="flex items-center gap-3">
                  <MdInbox className="text-gray-700 text-xl" />
                  <span className="text-gray-900 font-medium">Inbox</span>
                </div>
                <span className="text-sm font-semibold text-gray-800 bg-white/50 px-2 py-0.5 rounded-md">
                  7
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

          {/* Email List */}
          <section className="flex-1 border-r border-gray-200 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MdExpandMore className="text-gray-600 cursor-pointer" />
                <h2 className="text-sm font-semibold text-gray-500">Unread</h2>
              </div>
              <MdRefresh className="text-gray-600 cursor-pointer" />
            </div>

            {/* First email highlighted */}
            <div className="flex items-center gap-3 px-3 py-2 border-t border-b border-gray-200 bg-gradient-to-r from-yellow-100 to-green-100 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" />
              <MdStar className="text-gray-400 hover:text-yellow-400" />
              <MdLabelImportant className="text-gray-400 hover:text-red-400" />
              <div className="flex-1 overflow-hidden">
                <h3 className="font-medium text-gray-900 truncate">Google</h3>
                <p className="text-sm text-gray-600 truncate">
                  Exciting Updates to Your Google Account...
                </p>
              </div>
            </div>

            {/* Other emails */}
            <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" />
              <MdStar className="text-gray-400 hover:text-yellow-400" />
              <MdLabelImportant className="text-gray-400 hover:text-red-400" />
              <div className="flex-1 overflow-hidden">
                <h3 className="font-medium text-gray-900 truncate">Spotify</h3>
                <p className="text-sm text-gray-600 truncate">
                  Discover Your Personalized Playlist...
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" />
              <MdStar className="text-gray-400 hover:text-yellow-400" />
              <MdLabelImportant className="text-gray-400 hover:text-red-400" />
              <div className="flex-1 overflow-hidden">
                <h3 className="font-medium text-gray-900 truncate">Amazon</h3>
                <p className="text-sm text-gray-600 truncate">
                  Your Order Has Shipped...
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            <div className="flex items-center gap-2 mb-2">
              <MdExpandMore className="text-gray-600 cursor-pointer" />
              <h2 className="text-sm font-semibold text-gray-500">Everything else</h2>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border-t border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" />
              <MdStar className="text-gray-400 hover:text-yellow-400" />
              <MdLabelImportant className="text-gray-400 hover:text-red-400" />
              <div className="flex-1 overflow-hidden">
                <h3 className="font-medium text-gray-900 truncate">LinkedIn</h3>
                <p className="text-sm text-gray-600 truncate">
                  New Job Recommendations...
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" />
              <MdStar className="text-gray-400 hover:text-yellow-400" />
              <MdLabelImportant className="text-gray-400 hover:text-red-400" />
              <div className="flex-1 overflow-hidden">
                <h3 className="font-medium text-gray-900 truncate">Netflix</h3>
                <p className="text-sm text-gray-600 truncate">
                  New Shows and Movies...
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" />
              <MdStar className="text-gray-400 hover:text-yellow-400" />
              <MdLabelImportant className="text-gray-400 hover:text-red-400" />
              <div className="flex-1 overflow-hidden">
                <h3 className="font-medium text-gray-900 truncate">Airbnb</h3>
                <p className="text-sm text-gray-600 truncate">
                  Plan Your Next Getaway...
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
              <input type="checkbox" />
              <MdStar className="text-gray-400 hover:text-yellow-400" />
              <MdLabelImportant className="text-gray-400 hover:text-red-400" />
              <div className="flex-1 overflow-hidden">
                <h3 className="font-medium text-gray-900 truncate">Apple</h3>
                <p className="text-sm text-gray-600 truncate">
                  Important Update to Your Account...
                </p>
              </div>
            </div>
          </section>

          {/* Reading Pane */}
          <article className="flex-1 p-6 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">
              Exciting Updates to Your Google Account
            </h2>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={GoogleLogo}
                alt="Google"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">Google</p>
                <p className="text-sm text-gray-500">To: Me</p>
              </div>
            </div>

            <p className="text-gray-800 mb-4">Hi King!,</p>
            <p className="text-gray-800 mb-4">
              We’re excited to share some updates to your Google Account:
            </p>

            <ol className="list-decimal list-inside text-gray-800 space-y-1 mb-4">
              <li>
                Improved Privacy Controls: Easily manage your data with our new
                settings.
              </li>
              <li>Enhanced Security: Better protection against online threats.</li>
              <li>New User Interface: A more user-friendly experience.</li>
              <li>
                Personalized Recommendations: More relevant content tailored to
                you.
              </li>
            </ol>

            <p className="text-gray-800 mb-4">
              Log in to your account to explore these features. For assistance,
              contact our support team at{" "}
              <a
                href="mailto:support@googl.com"
                className="text-blue-600 underline"
              >
                support@googl.com
              </a>{" "}
              or visit our Help Center [
              <a href="#" className="text-blue-600 underline">
                Click Here
              </a>
              ].
            </p>

            <p className="text-gray-800 mb-4">
              Thank you for being a valued Google user!
            </p>

            <p className="text-gray-800 mb-1">Best regards,</p>
            <p className="text-gray-800 font-semibold">The Google Team</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;

