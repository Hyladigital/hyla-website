import { SectionHeading } from "./SectionHeading"

export function HowItWorks() {
  return (
    <section className="py-10 bg-black text-white mb-10">
      <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>How it works</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl">
              From idea to execution, we guide every project with a clear, structured process— turning vision into
              strategy, strategy into creation, and creation into impact.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-black p-[3px] mb-4">
                <div
                  className="w-full h-full rounded-full bg-black flex items-center justify-center"
                  style={{ background: "linear-gradient(to right, #ff4d4d, #ffb84d)" }}
                >
                  <span className="text-sm text-center bg-black rounded-full w-[calc(100%-6px)] h-[calc(100%-6px)] flex items-center justify-center">
                    Strategy & Context
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-black p-[3px] mb-4">
                <div
                  className="w-full h-full rounded-full bg-black flex items-center justify-center"
                  style={{ background: "linear-gradient(to right, #ffb84d, #4dff4d)" }}
                >
                  <span className="text-sm text-center bg-black rounded-full w-[calc(100%-6px)] h-[calc(100%-6px)] flex items-center justify-center">
                    Content Planning
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-black p-[3px] mb-4">
                <div
                  className="w-full h-full rounded-full bg-black flex items-center justify-center"
                  style={{ background: "linear-gradient(to right, #4dff4d, #4dffb8)" }}
                >
                  <span className="text-sm text-center bg-black rounded-full w-[calc(100%-6px)] h-[calc(100%-6px)] flex items-center justify-center">
                    Execution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

