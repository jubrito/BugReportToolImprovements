import Eyebrow from "../components/Eyebrow";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import {
  SlackBotHeader,
  SlackCardShell,
  SlackThreadDivider,
} from "../components/SlackCard";
import Reveal from "../presentation/Reveal";

function AIBotEscalationPostLabel() {
  return (
    <span className="inline-block rounded bg-amber-softer px-1.5 py-0.5 text-sm font-bold uppercase tracking-wide text-amber">
      AI Bot escalation post
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#9b9da0]">
      {children}
    </p>
  );
}

function AstronautImg() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}astronaut.gif`}
      alt=""
      aria-hidden="true"
      width={20}
      height={20}
      className="h-5 w-5 mr-1 shrink-0 rounded-md inline"
      loading="lazy"
      decoding="async"
    />
  );
}

export default function Slide13StatusNotifications() {
  return (
    <SlideShell ariaLabel="AI Bot ticket status change notifications">
      <Eyebrow>AI Bot Slack Messages</Eyebrow>
      <SlideHeading accent="amber">
        Notifying when a ticket
        <br />
        <em>status changes</em>
      </SlideHeading>

      <div className="flex max-w-2xl flex-col gap-3">
        <SectionLabel>
          <AIBotEscalationPostLabel /> Post to AI Bot AI Channel
        </SectionLabel>

        <Reveal step={1}>
          <SlackCardShell>
            <SlackBotHeader name="AI Bot" time="11:33 AM" />
            <div className="text-[#d1d2d3]">
              <p className="mb-2 flex items-start font-bold text-white">
                <img
                  src={`${import.meta.env.BASE_URL}astronaut.gif`}
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="mr-1 inline h-5 w-5 shrink-0 rounded-md"
                  loading="lazy"
                  decoding="async"
                />
                New Escalation:{" "}
                <span className="ml-1 text-teal underline">JIRA-3585</span>
                <span className="ml-1">[prod]</span>
              </p>
              <ul className="flex list-disc flex-col gap-2">
                <li className="ml-4">
                  <p className="text-[0.82rem]">
                    <span className="font-bold text-[#ececed]">Reporter:</span>{" "}
                    Reporter Name (reporter@onecompany.com)
                  </p>
                </li>
                <li className="ml-4">
                  <p className="text-[0.82rem]">
                    <span className="font-bold text-[#ececed]">
                      AI Bot slack thread:
                    </span>{" "}
                    <span className="text-teal underline">
                      Bug report details
                    </span>
                  </p>
                </li>
                <li className="ml-4">
                  <p className="text-[0.82rem]">
                    <span className="font-bold text-[#ececed]">
                      AI assessment:
                    </span>{" "}
                    Ride details page is possibly checking the image size
                    instead of the image requirements and throwing an error
                    notification that don't align with the actual requirements.
                  </p>
                </li>
                <li className="ml-4">
                  <p className="mt-1 text-[0.78rem]">
                    <span className="font-bold">Manually escalated </span>by
                    @Engineer
                  </p>
                </li>
              </ul>
            </div>
          </SlackCardShell>
        </Reveal>

        <Reveal step={2}>
          <div className="flex flex-col gap-2">
            <SlackThreadDivider replyCount={1} />
            <SlackCardShell>
              <SlackBotHeader name="AI Bot" time="2:18 PM" />
              <div className="text-[#d1d2d3]">
                <p className="mb-1 flex items-center text-white">
                  <AstronautImg />
                  <span className="font-bold">
                    [stage] The ticket was closed!
                  </span>
                </p>
                <p className="text-[0.8rem]">
                  <span className="font-bold text-teal underline">
                    JIRA-3585
                  </span>{" "}
                  was completed and marked as DONE ✅
                </p>
                <p className="mt-1 text-[0.8rem]">
                  @Engineer Notify stakeholders the bug has been fixed
                </p>
              </div>
            </SlackCardShell>
          </div>
        </Reveal>

        <Reveal step={3}>
          <SlackCardShell>
            <SlackBotHeader name="AI Bot" time="2:33 PM" />
            <div className="text-[#d1d2d3]">
              <p className="mb-1 flex items-center text-white">
                <AstronautImg />
                <span className="font-bold">
                  [stage] The ticket was closed!
                </span>
              </p>
              <p className="text-[0.8rem]">
                <span className="font-bold text-teal underline">JIRA-3585</span>{" "}
                was marked as WILL NOT DO ☑️
              </p>
              <p className="mt-1 text-[0.8rem]">
                @Engineer Notify stakeholders about the updated status
              </p>
            </div>
          </SlackCardShell>
        </Reveal>
      </div>
    </SlideShell>
  );
}
