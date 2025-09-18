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

// Import images from src/assets
import GmailLogo from "./assets/Gmail_Logo.svg";
import UserAvatar from "./assets/kingbuwa.jpg";
import GoogleLogo from "./assets/google.svg";
import SpotifyLogo from "./assets/spotify.png";
import AmazonLogo from "./assets/amazon.png";
import LinkedInLogo from "./assets/linkedin.png";
import NetflixLogo from "./assets/netflix.png";
import AirbnbLogo from "./assets/airbnb.png";
import AppleLogo from "./assets/apple.png";

// Mock email data with timestamps
const unreadEmails = [
  {
    id: 1,
    sender: "Google",
    subject: "Exciting Updates to Your Google Account",
    preview: "Hi King, we’re excited to share some updates to your Google Account...",
    body: `Hi King,

We’re excited to share some updates to your Google Account:

1. Improved Privacy Controls – Easily manage your data with new settings.  
2. Enhanced Security – Better protection against online threats.  
3. A Refreshed User Interface – A simpler, more intuitive Gmail experience.  
4. Personalized Recommendations – More relevant content tailored to you.  

Please review these updates in your account settings. If you need help, visit our Help Center at support.google.com.  

Thanks for choosing Google.  

– The Google Account Team`,
    logo: GoogleLogo,
    time: "2h ago",
  },
  {
    id: 2,
    sender: "Spotify",
    subject: "Discover Your Personalized Playlist",
    preview: "Hi King, based on your listening habits we’ve built a new playlist just for you...",
    body: `Hi King,

We've created a new personalized playlist based on your listening habits.

Enjoy the music! 🎵

– Spotify`,
    logo: SpotifyLogo,
    time: "5h ago",
  },
];

const otherEmails = [
  {
    id: 3,
    sender: "Amazon",
    subject: "Your Order Has Shipped!",
    preview: "Hello King, your Amazon order #112-9983224 has been shipped...",
    body: `Hello King,

Your Amazon order **#112-9983224** has been shipped and is on the way to you.  

Estimated Delivery: **Friday, Sept 20**  
Carrier: DHL Express  

You can track your package here: https://amazon.com/track  

Thank you for shopping with us.  

– Amazon Customer Service`,
    logo: AmazonLogo,
    time: "Yesterday",
  },
  {
    id: 4,
    sender: "LinkedIn",
    subject: "New Job Recommendations",
    preview: "Hi King, we’ve found some new job opportunities that match your profile...",
    body: `Hi King,

We’ve found some new opportunities that match your profile:  

- **UX Designer – Google** (Lagos, Nigeria)  
- **Frontend Engineer – Microsoft** (Remote)  
- **Product Designer – Flutterwave** (Hybrid)  

Visit LinkedIn Jobs to see the full list: https://linkedin.com/jobs  

Best of luck in your career search!  
– The LinkedIn Jobs Team`,
    logo: LinkedInLogo,
    time: "Yesterday",
  },
  {
    id: 5,
    sender: "Netflix",
    subject: "New Shows and Movies Added This Week",
    preview: "Hey King, we’ve added new titles like Money Heist: Final Chapter and Stranger Things...",
    body: `Hey King,

We’ve added new titles to Netflix this week:  

- **Money Heist: The Final Chapter**  
- **Stranger Things Season 5**  
- **Avengers: Endgame**  

Watch them anytime on your phone, TV, or laptop. Start streaming at: https://netflix.com  

Grab your popcorn 🍿,  
– Your friends at Netflix`,
    logo: NetflixLogo,
    time: "2 days ago",
  },
  {
    id: 6,
    sender: "Airbnb",
    subject: "Plan Your Next Getaway",
    preview: "Hi King, looking for your next trip? Check out exclusive fall discounts...",
    body: `Hi King,

Looking for your next trip? We’ve got you covered:  

🏖️ Beach houses in Zanzibar – starting at $75/night  
🏔️ Mountain cabins in Switzerland – starting at $120/night  
🏙️ City apartments in London – starting at $95/night  

Book before **Sept 30** to enjoy special discounts.  

Explore more: https://airbnb.com  

Safe travels,  
– The Airbnb Team`,
    logo: AirbnbLogo,
    time: "Sep 12",
  },
  {
    id: 7,
    sender: "Apple",
    subject: "Important Update to Your Account",
    preview: "Dear King, we’ve made important updates to your Apple ID security...",
    body: `Dear King,

We’ve made some important updates to your Apple ID security.  

✔️ Two-factor authentication is now required for all users.  
✔️ Stronger password requirements have been introduced.  
✔️ New privacy dashboard available in Settings.  

Please log in to your account to review these updates.  

For more details, visit: https://appleid.apple.com  

– Apple Support`,
    logo: AppleLogo,
    time: "Sep 10",
  },
];

function App() {
  const [selectedEmail, setSelectedEmail] = useState(unreadEmails[0]);
  const [showUnread, setShowUnread] = useState(true);
  const [showOthers, setShowOthers] = useState(true);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 py-2 bg-gray-100">
        <div className="flex items-center gap-6">
          <MdMenu className="text-2xl cursor-pointer" />
          <div className="flex items-center gap-2">
            <img src={GmailLogo} alt="Gmail Logo" className="w-7 h-7" />
            <span className="text-xl font-bold text-gray-800">Gmail</span>
          </div>
        </div>

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

      {/* Main */}
      <div className="flex flex-1 p-4">
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
                  {unreadEmails.length + otherEmails.length}
                </span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <MdStar className="text-gray-600 text-xl" />
                <span>Starred</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <MdAccessTime className="text-gray-600 text-xl" />
                <span>Snoozed</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <MdLabelImportant className="text-gray-600 text-xl" />
                <span>Important</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <MdSend className="text-gray-600 text-xl" />
                <span>Sent</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                <MdDrafts className="text-gray-600 text-xl" />
                <span>Drafts</span>
              </div>
            </div>
          </aside>

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
                  <span className="text-xs text-gray-500">{email.time}</span>
                </div>
              ))}

            <div className="border-t border-gray-200 my-3"></div>

            {/* Everything else */}
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
                  <span className="text-xs text-gray-500">{email.time}</span>
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

