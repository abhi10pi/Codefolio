import { useState } from "react";

export default function AchievementsSection() {
  const [showAllBadges, setShowAllBadges] = useState(false);

  const achievements = [
    {
      title: "💡 200-day LeetCode streak with monthly badges",
      badges: [
        "/100Days.png",
        "/Hund1.png",
        "/FIFTY1.png",
        "/FIFTY.png",
        "/JAN.png",
        "/FEB.png",
        "/MAR.png",
        "/SEP.png",
        "/OCT.png",
        "/NOV.png",
        "/DEC.png",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Achievements
        </h2>

        <div className="relative border-l-2 border-purple-600/30 pl-6 space-y-14">
          {achievements.map((item, i) => (
            <div key={i} className="relative">
              {/* Dot marker */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-md" />

              {/* Achievement Text */}
              <p className="text-lg text-gray-300 leading-snug mb-3">{item.title}</p>

              {/* Badge Section */}
              {item.badges && (
                <>
                  <div className="grid grid-cols-5 gap-2">
                    {(showAllBadges ? item.badges : item.badges.slice(0, 5)).map((badge, index) => (
                      <div
                        key={index}
                        className="w-16 h-24 rounded-md overflow-hidden bg-slate-800 shadow-sm"
                      >
                        <img
                          src={badge}
                          alt={`Badge ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Toggle Button */}
                  {item.badges.length > 5 && (
                    <div className="mt-3">
                      <button
                        className="text-sm text-purple-400 hover:underline"
                        onClick={() => setShowAllBadges(!showAllBadges)}
                      >
                        {showAllBadges ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
