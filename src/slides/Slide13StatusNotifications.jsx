import Eyebrow from "../components/Eyebrow";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import { SlackBotHeader, SlackCardShell } from "../components/SlackCard";
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
      className="mr-1 inline h-5 w-5 shrink-0 rounded-md"
      loading="lazy"
      decoding="async"
    />
  );
}

function FlowArrow() {
  return (
    <span
      aria-hidden="true"
      className="flex shrink-0 items-center text-2xl font-bold text-text-muted"
    >
      →
    </span>
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
        <p className="text-[1.1rem] font-normal mt-2">
          Every time a ticket is completed, the AI Bot informs engineers on the
          Slack channel and re-notifies them if the status changes again,
          keeping everyone up-to-date.
        </p>
      </SlideHeading>

      <div className="w-full flex flex-col gap-3">
        <SectionLabel>
          <AIBotEscalationPostLabel /> Post to AI Bot Channel
        </SectionLabel>

        <div className="flex w-full items-stretch gap-3">
          <Reveal step={1} className="flex min-w-0 flex-1">
            <SlackCardShell className="flex-1">
              <SlackBotHeader name="AI Bot" time="11:33 AM" />
              <div className="text-[#d1d2d3]">
                <p className="mb-2 flex items-start font-bold text-white">
                  <img
                    src={`${import.meta.env.BASE_URL}david-clode.jpg`}
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
                      <span className="font-bold text-[#ececed]">
                        Reporter:
                      </span>{" "}
                      Reporter Name (reporter@onecompany.com)
                    </p>
                  </li>
                </ul>
                [...]
              </div>
            </SlackCardShell>
          </Reveal>

          <Reveal step={2} className="flex min-w-0 flex-1 items-stretch gap-3">
            <FlowArrow />
            <SlackCardShell className="flex-1">
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
          </Reveal>

          <Reveal step={3} className="flex min-w-0 flex-1 items-stretch gap-3">
            <FlowArrow />
            <SlackCardShell className="flex-1">
              <SlackBotHeader name="AI Bot" time="2:33 PM" />
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
                  was marked as WILL NOT DO ☑️
                </p>
                <p className="mt-1 text-[0.8rem]">
                  @Engineer Notify stakeholders about the updated status
                </p>
              </div>
            </SlackCardShell>
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}
