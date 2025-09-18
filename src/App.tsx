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
  MdChevronRight,
} from "react-icons/md";
import { useState } from "react";

// Import images
import GmailLogo from "./assets/Gmail_Logo.svg";
import UserAvatar from "./assets/kingbuwa.jpg";
import GoogleLogo from "./assets/google.svg";
import SpotifyLogo from "./assets/spotify.png";
import AmazonLogo from "./assets/amazon.png";
import LinkedInLogo from "./assets/linkedin.png";
import NetflixLogo from "./assets/netflix.png";
import AirbnbLogo from "./assets/airbnb.png";
import AppleLogo from "./assets/apple.png";

// Mock email data
const unreadEmails = [
  {
    id: 1,
    sender: "Google",
    subject: "Exciting Updates to Your Google Account",
    preview: "We’re excited to share some updates...",
    body: `Hi King!,

We’re excited to share some updates to your Google Account:

1. Improved Privacy Controls
2. Enhanced Security
3. New User Interface
4. Personalized Recommendations

Thank you for being a valued Google user!

Best regards,
The Google Team`,
    logo: GoogleLogo,
  },
  {
    id: 2,
    sender: "Spotify",
    subject: "Discover Your Personalized Playlist",
    preview: "Your new mix is ready just for you...",
    body: `Hi King!,

We've created a new personalized playlist based on your listening habits.

Enjoy the music! 🎵

– Spotify`,
    logo: SpotifyLogo,
  },
];

const otherEmails = [
  {
    id: 3,
    sender: "Amazon",
    subject: "Your Order Has Shipped!",
    preview: "Your recent order is on its way...",
    body: `Hello King,

Your recent Amazon order has shipped and is on the way!

– Amazon`,
    logo: AmazonLogo,
  },
  {
    id: 4,
    sender: "LinkedIn",
    subject: "New Job Recommendations",
    preview: "Check out these new opportunities...",
    body: `Hi King,

We found some job recommendations tailored to you. Explore them now!

– LinkedIn`,
    logo: LinkedInLogo,
  },
  {
    id: 5,
    sender: "Netflix",
    subject: "New Shows and Movies",
    preview: "Don’t miss the latest releases...",
    body: `Hey King,

Check out the hottest new shows and movies on Netflix this week!

– Netflix`,
    logo: NetflixLogo,
  },
  {
    id: 6,
    sender: "Airbnb",
    subject: "Plan Your Next Getaway",
    preview: "Exclusive fall discounts available...",
    body: `Hi King,

Looking for your next trip? Discover unique stays and adventures.

– Airbnb`,
    logo: AirbnbLogo,
  },
  {
    id: 7,
    sender: "Apple",
    subject: "Important Update to Your Account",
    preview: "Security updates you need to know...",
    body: `Dear King,

We've made important updates to your Apple ID security.

– Apple`,
    logo: AppleLogo,
  },
];

function App() {
  // State for selected email
  const [selectedEmail, setSelectedEmail] = useState(unreadEmails[0]);

  // State for collapsible sections
  const [showUnread, setShowUnread] = useState(true);
  const [showOthers, setShowOthers] = useState(true);

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
      <div className="flex flex-1 p-4 gap-4">
        {/* LEFT RAIL */}
        <div className="w-64 shrink-0 flex flex-col">
          {/* Compose button */}
          <button className="w-full mb-3 flex items-center gap-3 bg-gradient-to-r from-pink-300 to-yellow-200 hover:from-pink-200 hover:to-yellow-100 text-black font-medium py-3 px-6 rounded-[12px] shadow-md transition">
            <MdEdit className="text-xl" />
            Compose
          </button>

          {/* Sidebar card */}
          <aside className="flex-1 rounded-xl bg-white/70 backdrop-blur-md shadow-md p-3 h-full">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-100 to-green-200 cursor-pointer">
                <div className="flex items-center gap-3">
                  <MdInbox className="text-gray-700 text-xl" />
                  <span className="text-gray-900 font-medium">Inbox</span>
                </div>
                <span className="text-sm font-semibold text-gray-800 bg-white/50 px-2 py-0.5 rounded-md">
                  {unreadEmails.length + otherEmails.length}
                </span>
              </div>
              {/* Sidebar Items */}
              <div className="flex flex-col mt-2">
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <MdStar className="text-gray-600 text-xl" />
                  <span>Starred</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <MdAccessTime className="text-gray-600 text-xl" />
                  <span>Snoozed</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <MdLabelImportant className="text-gray-600 text-xl" />
                  <span>Important</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <MdSend className="text-gray-600 text-xl" />
                  <span>Sent</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <MdDrafts className="text-gray-600 text-xl" />
                  <span>Drafts</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* EMAIL LIST + READING PANE */}
        <div className="flex flex-1 rounded-xl bg-white/70 backdrop-blur-md shadow-md overflow-hidden">
          {/* Email List */}
          <section className="w-1/3 border-r border-gray-200 p-4 overflow-y-auto">
            {/* Unread header */}
            <div
              className="flex items-center justify-between mb-2 cursor-pointer"
              onClick={() => setShowUnread(!showUnread)}
            >
              <div className="flex items-center gap-2">
                {showUnread ? (
                  <MdExpandMore className="text-gray-600" />
                ) : (
                  <MdChevronRight className="text-gray-600" />
                )}
                <h2 className="text-sm font-semibold text-gray-500">Unread</h2>
              </div>
              <MdRefresh className="text-gray-600 cursor-pointer" />
            </div>

            {/* Unread emails */}
            {showUnread &&
              unreadEmails.map((email) => (
                <div
                  key={email.id}
                  onClick={() => setSelectedEmail(email)}
                  className={`flex items-center gap-3 px-3 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
                    selectedEmail.id === email.id
                      ? "bg-gradient-to-r from-yellow-100 to-green-100"
                      : ""
                  }`}
                >
                  <input type="checkbox" />
                  <MdStar className="text-gray-400 hover:text-yellow-400" />
                  <MdLabelImportant className="text-gray-400 hover:text-red-400" />
                  <div className="flex-1 overflow-hidden">
                    <h3 className="font-medium text-gray-900 truncate">
                      {email.sender}
                    </h3>
                    <p className="text-sm text-gray-600 truncate">
                      {email.preview}
                    </p>
                  </div>
                </div>
              ))}

            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* Everything else header */}
            <div
              className="flex items-center gap-2 mb-2 cursor-pointer"
              onClick={() => setShowOthers(!showOthers)}
            >
              {showOthers ? (
                <MdExpandMore className="text-gray-600" />
              ) : (
                <MdChevronRight className="text-gray-600" />
              )}
              <h2 className="text-sm font-semibold text-gray-500">
                Everything else
              </h2>
            </div>

            {/* Everything else emails */}
            {showOthers &&
              otherEmails.map((email) => (
                <div
                  key={email.id}
                  onClick={() => setSelectedEmail(email)}
                  className={`flex items-center gap-3 px-3 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
                    selectedEmail.id === email.id
                      ? "bg-gradient-to-r from-yellow-100 to-green-100"
                      : ""
                  }`}
                >
                  <input type="checkbox" />
                  <MdStar className="text-gray-400 hover:text-yellow-400" />
                  <MdLabelImportant className="text-gray-400 hover:text-red-400" />
                  <div className="flex-1 overflow-hidden">
                    <h3 className="font-medium text-gray-900 truncate">
                      {email.sender}
                    </h3>
                    <p className="text-sm text-gray-600 truncate">
                      {email.preview}
                    </p>
                  </div>
                </div>
              ))}
          </section>

          {/* Reading Pane */}
          <article className="flex-1 p-6 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">{selectedEmail.subject}</h2>

            <div className="flex items-center gap-3 mb-4">
              <img
                src={selectedEmail.logo}
                alt={selectedEmail.sender}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  {selectedEmail.sender}
                </p>
                <p className="text-sm text-gray-500">To: Me</p>
              </div>
            </div>

            <pre className="whitespace-pre-wrap text-gray-800">
              {selectedEmail.body}
            </pre>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;

