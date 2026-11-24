import Eyebrow from "../components/Eyebrow";
import {
  AIBotEscalationPostLabel,
  SectionLabel,
} from "../components/SlackLabels";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import {
  SlackBotHeader,
  SlackCardShell,
  SlackThreadDivider,
} from "../components/SlackCard";
import Reveal from "../presentation/Reveal";

function EscalationRequestLabel() {
  return (
    <span className="inline-block rounded bg-amber-softer px-1.5 py-0.5 text-sm font-bold uppercase tracking-wide text-amber">
      Escalation Request
    </span>
  );
}

function AIBotHeader() {
  return <SlackBotHeader name="AI Bot" time="11:33 AM" />;
}

export default function Slide13SlackReplies() {
  return (
    <SlideShell ariaLabel="AI Bot Slack notification improvements">
      <Eyebrow>AI Bot Slack Messages</Eyebrow>
      <SlideHeading accent="amber">
        Improving Slack notifications during
        <br />
        <em>bug report escalation</em>
      </SlideHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Thread messages column */}
        <div className="flex flex-col gap-3">
          <Reveal step={1}>
            <SectionLabel>
              <EscalationRequestLabel /> Reply to AI Bot Channel post
            </SectionLabel>
          </Reveal>

          {/* After thread */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              {/* Ack (new) */}
              <Reveal step={1}>
                <SlackCardShell>
                  <AIBotHeader />
                  <div className="text-[#d1d2d3]">
                    <p className="text-white mb-2 flex items-start">
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
                      <span className="font-bold text-md">
                        [prod] Ticket creation request received!
                      </span>
                    </p>
                    <ul className="list-disc flex flex-col gap-2">
                      <li className="ml-4">
                        <p className="text-[0.8rem]">
                          <span className="font-semibold text-[#ececed]">
                            Assessment:
                          </span>{" "}
                          <span>Bug report detected 🐛</span>
                          <span className="block">
                            Creating a Jira ticket with the data reported. The
                            ticket will be shared when it's ready.
                          </span>
                        </p>
                      </li>
                      <li className="ml-4">
                        <p className="text-[0.8rem]">
                          <span className="font-semibold text-[#ececed]">
                            Reasoning:
                          </span>{" "}
                          Content team is blocked because users can't change
                          item images. When uploading an image with the correct
                          requirements, they still encounter an error that
                          prevents the item thumbnail upload.
                        </p>
                      </li>
                      <li className="ml-4">
                        <p className="text-[0.8rem]">
                          <span className="font-semibold text-[#ececed]">
                            Confidence:
                          </span>{" "}
                          80%
                        </p>
                      </li>
                    </ul>
                  </div>
                </SlackCardShell>
              </Reveal>

              <Reveal step={2}>
                <SlackThreadDivider replyCount={1} />
              </Reveal>
              <Reveal step={2}>
                {/* Success reply */}
                <SlackCardShell>
                  <AIBotHeader />
                  <div className="text-[#d1d2d3] flex flex-col gap-1">
                    <p className="text-white flex items-start">
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
                      <span className="font-bold">
                        [prod] Ticket creation request succeeded ✅
                      </span>
                    </p>
                    <ul className="list-disc flex flex-col gap-2">
                      <li className="ml-4">
                        <p className="text-[0.8rem]">
                          New ticket:{" "}
                          <span className="font-bold text-teal underline">
                            JIRA-3585
                          </span>
                        </p>
                      </li>
                      <li className="ml-4">
                        <p className="text-[0.8rem]">
                          <span className="font-bold text-teal underline">
                            AI Bot escalation post
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </SlackCardShell>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Eng channel post column */}
        <Reveal step={3}>
          <div className="flex flex-col gap-3">
            <SectionLabel>
              <AIBotEscalationPostLabel /> Post to AI Bot Channel
            </SectionLabel>

            {/* After eng post */}
            <div className="flex flex-col gap-2">
              <SlackCardShell>
                <AIBotHeader />
                <div className="text-[#d1d2d3]">
                  <p className="mb-2 font-bold text-white flex items-start">
                    <span className="mr-1">[prod]</span>
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
                    New Escalation:{" "}
                    <span className="ml-1 text-teal underline">JIRA-3585</span>
                  </p>
                  <ul className="list-disc flex flex-col gap-2">
                    <li className="ml-4">
                      <p className="text-[0.82rem]">
                        <span className="font-bold text-[#ececed]">
                          Reporter:
                        </span>{" "}
                        Reporter Name (reporter@example.com)
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
                        Item details page is possibly checking the image size
                        instead of the image requirements and throwing an error
                        notification that don't align with the actual
                        requirements.
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
            </div>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
