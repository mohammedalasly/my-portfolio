import { HiLocationMarker } from "react-icons/hi"
import { EXPERIENCES } from "../constants"

const COMPANY_LOGOS = {
  "Circular Design": "./circular-design.png",
  "Na'amal Agency": "./naamal.jpeg",
  BookVoice: "./bookvoice.png",
}

const ExperienceTimeline = () => (
  <div className="space-y-8 pb-40 max-w-7xl mx-auto px-4">

    <div className="reveal">
      <h2 className="section-title">Journey So Far</h2>
      <p className="section-subtitle mt-2">
        A journey through innovative companies and impactful projects
      </p>
    </div>

    {/* STACKED CARDS (mobile → large laptop) */}
    <div className="flex flex-col gap-4 xl:hidden">
      {EXPERIENCES.map((exp) => (
        <div key={exp.id} className="reveal">
          <div
            className="bg-(--bg-surface) rounded border-4 border-(--color-border)
            neo-shadow p-5 hover:-translate-y-1 transition-transform"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">

              <div className="shrink-0 w-12 h-12 border-2 border-(--color-border) rounded overflow-hidden neo-shadow">
                <img
                  src={COMPANY_LOGOS[exp.company] ?? `${exp.id}`}
                  alt={exp.company}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-black uppercase tracking-tight text-(--color-typography)">
                  {exp.company}
                </h3>

                <p className="text-sm font-bold mt-0.5 text-(--color-typography) opacity-70">
                  {exp.role}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 mb-2 text-sm font-bold text-(--color-typography) opacity-60">
              <HiLocationMarker
                size={15}
                className="shrink-0"
                style={{ color: exp.color }}
              />
              <span>{exp.location}</span>
            </div>

            {/* Badge under location */}
            <div
              className="inline-block mb-3 px-3 py-1 rounded border-2 border-(--color-border)
              text-white font-bold text-xs uppercase neo-shadow whitespace-nowrap"
              style={{ backgroundColor: exp.color }}
            >
              {exp.period}
            </div>

            <p className="text-sm leading-relaxed font-medium text-(--color-typography) opacity-80">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* TIMELINE (xl screens only) */}
    <div
      className="hidden xl:block"
    >
      {EXPERIENCES.map((exp, index) => (
        <div
          key={exp.id}
          className={`relative flex items-center
          ${index % 2 === 0 ? "flex-row-reverse reveal-left" : "flex-row reveal-right"}`}
        >
          

          <div className="w-1/2" />

          {/* card */}
          <div className="w-7xl py-8">
            <div
              className="bg-(--bg-surface) rounded border-4 border-(--color-border)
              neo-shadow-lg p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-start gap-3 mb-4">

                <div className="w-14 h-14 border-2 border-(--color-border) rounded overflow-hidden neo-shadow">
                  <img
                    src={COMPANY_LOGOS[exp.company] ?? `${exp.id}`}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-black uppercase tracking-tight text-(--color-typography)">
                    {exp.company}
                  </h3>

                  <p className="text-sm font-bold mt-0.5 text-(--color-typography) opacity-70">
                    {exp.role}
                  </p>
                </div>

                {/* badge right */}
                <div
                  className="shrink-0 px-3 py-1 rounded border-2 border-(--color-border)
                  text-white font-bold text-xs uppercase neo-shadow whitespace-nowrap"
                  style={{ backgroundColor: exp.color }}
                >
                  {exp.period}
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3 text-sm font-bold text-(--color-typography) opacity-60">
                <HiLocationMarker
                  size={16}
                  className="shrink-0"
                  style={{ color: exp.color }}
                />
                <span>{exp.location}</span>
              </div>

              <p className="text-sm leading-relaxed font-medium text-(--color-typography) opacity-80">
                {exp.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
)

export default ExperienceTimeline