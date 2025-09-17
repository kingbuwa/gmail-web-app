import { MdInbox, MdStar, MdAccessTime, MdLabelImportant, MdSend, MdDrafts } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-100 border-r flex flex-col">
      {/* Top: Logo */}
      <div className="p-4 text-2xl font-bold text-red-600">
        Gmail
      </div>

      {/* Menu Section */}
      <nav className="flex-1">
        <ul className="space-y-1">
          <li className="flex items-center gap-3 px-4 py-2 bg-gray-300 rounded-r-full cursor-pointer">
            <MdInbox className="text-xl" />
            <span>Inbox</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-r-full cursor-pointer">
            <MdStar className="text-xl" />
            <span>Starred</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-r-full cursor-pointer">
            <MdAccessTime className="text-xl" />
            <span>Snoozed</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-r-full cursor-pointer">
            <MdLabelImportant className="text-xl" />
            <span>Important</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-r-full cursor-pointer">
            <MdSend className="text-xl" />
            <span>Sent</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 rounded-r-full cursor-pointer">
            <MdDrafts className="text-xl" />
            <span>Drafts</span>
          </li>
        </ul>
      </nav>

      {/* Bottom (future use: settings/help) */}
      <div className="p-4 text-sm text-gray-500">
        Footer Section
      </div>
    </div>
  )
}

