import Eyebrow from "../components/Eyebrow";
import Pill from "../components/Pill";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import Reveal from "../presentation/Reveal";

function groupDescriptionRows(rows) {
  const groups = [];
  let i = 0;
  while (i < rows.length) {
    if (rows[i].listItem) {
      const items = [];
      while (i < rows.length && rows[i].listItem) items.push(rows[i++]);
      groups.push({ type: "list", items });
    } else {
      groups.push({ type: "paragraph", row: rows[i++] });
    }
  }
  return groups;
}

function JiraDetailRow({ label, value, valueClass = "text-[#172b4d]" }) {
  return (
    <div className="py-1.5 border-b border-[#ebecf0] last:border-0">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#6b778c]">
        {label}
      </p>
      <p className={`mt-0.5 text-[0.72rem] leading-[1.4] ${valueClass}`}>
        {value}
      </p>
    </div>
  );
}

function JiraTicket({
  issueKey,
  summary,
  descriptionRows,
  details,
  labelId,
  parent,
}) {
  return (
    <article
      aria-labelledby={labelId}
      className="h-full w-full min-w-full overflow-hidden rounded bg-white text-[#172b4d]"
      style={{
        boxShadow: "0 1px 3px rgb(9 30 66/.12), 0 0 0 1px rgb(9 30 66/.1)",
      }}
    >
      {/* Breadcrumb header */}
      <div className="flex items-center gap-1.5 border-b border-[#ebecf0] bg-[#f4f5f7] px-3 py-1.5">
        <span className="text-sm text-[#0052cc]">{parent}</span>
        <span className="text-sm text-[#5e6c84]">/</span>
        <span className="text-sm font-semibold text-[#5e6c84]">{issueKey}</span>
      </div>

      <div className="flex h-full">
        {/* Left: title + description */}
        <div className="flex-1 overflow-auto border-r border-[#ebecf0] px-3 py-2.5">
          <h3
            id={labelId}
            className="mb-2 text-[0.82rem] font-semibold leading-[1.35] text-[#172b4d]"
          >
            {summary}
          </h3>
          <p className="mb-1 text-xs font-semibold text-[#6b778c] uppercase tracking-wide">
            Description
          </p>
          <div className="space-y-0.5 text-[0.7rem] leading-[1.55] text-[#172b4d]">
            {groupDescriptionRows(descriptionRows).map((group, i) =>
              group.type === "list" ? (
                <ul key={i} className="list-disc pl-4 space-y-0.5 my-0">
                  {group.items.map((item, j) => (
                    <li key={j} className={item.muted ? "text-[#6b778c]" : ""}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  key={i}
                  className={
                    group.row.muted
                      ? "text-[#6b778c]"
                      : group.row.mono
                        ? "font-mono text-xs text-[#888]"
                        : ""
                  }
                >
                  {group.row.text}
                </p>
              ),
            )}
          </div>
        </div>

        {/* Right: details panel */}
        <div className="w-[140px] shrink-0 bg-[#f4f5f7] px-2.5 py-2">
          {details.map(({ label, value, valueClass }) => (
            <JiraDetailRow
              key={label}
              label={label}
              value={value}
              valueClass={valueClass}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

const BEFORE_DESC = [
  { text: "**User:** user@onecompany.com", mono: true },
  { text: "**Platform:** NAME", mono: true },
  { text: "**Created:** 2026-08-25T19:59:40Z", mono: true },
  { text: "" },
  { text: "**AI Triage Reasoning:**", mono: true },
  { text: "Manually escalated by engineer @SLACK_USER", mono: true },
  { text: "" },
  { text: "**Conversation Transcript:**", mono: true },
  { text: "[2026-08-25T19:59:40Z] BOT:", mono: true },
  { text: "<https://TEAM-stage.company.com/|*TEAM Link*>", mono: true },
  { text: "*User report:* Can't access the schedule page", mono: true },
  { text: "*On Call:* @SLACK_USER", mono: true },
  { text: "" },
  {
    text: "**Slack Thread:** https://company.slack.com/archives/C0ALK2GKDB8/p1787...",
    mono: true,
  },
];

const BEFORE_DETAILS = [
  { label: "Status", value: "To Do" },
  {
    label: "Assignee",
    value: "Unassigned",
    valueClass: "text-[#6b778c] italic",
  },
  { label: "Reporter", value: "AI Bot" },
  { label: "Priority", value: "Medium" },
  { label: "Labels", value: "(none)", valueClass: "text-[#6b778c] italic" },
];

const AFTER_DESC = [
  { text: "Bug report" },
  { text: "" },
  { text: "Report details", muted: true, listItem: false },
  {
    text: "Datadog RUM Link · Created Sep 10, 2026 11:41 am",
    muted: true,
    listItem: true,
  },
  { text: "Original #TEAM-bug-reports report", muted: true, listItem: true },
  { text: "" },
  { text: "User: @Reporter (stakeholder@company.com)", listItem: true },
  {
    text: "Engineer on-call: @Juliana Brito (juliana.brito@company.com)",
    listItem: true,
  },
  {
    text: "Manually escalated by: @Juliana Brito (juliana.brito@company.com)",
    listItem: true,
  },
  { text: "" },
  { text: "Issue reported", muted: true },
  { text: "Path: /", listItem: true },
  { text: "Environment: PRODUCTION", listItem: true },
  { text: "Current vs. expected: TEST prod ignore", listItem: true },
  { text: "Stakeholders: Media Streaming", listItem: true },
  { text: "Recurrence: Is happening repeatedly", listItem: true },
];

const AFTER_DETAILS = [
  { label: "Status", value: "To Do" },
  { label: "Assignee", value: "On-Call" },
  { label: "Reporter", value: "AI Bot" },
  {
    label: "Priority",
    value: "High",
    valueClass: "font-semibold text-orange-600",
  },
  { label: "Labels", value: "AI Bot-escalation", valueClass: "text-[#0052cc]" },
];

const IMPROVEMENTS = [
  "AI generated summary as the title",
  "Structured sections",
  "Full bug context",
  "Report details",
  "Bugs EPIC as parent",
  "Labels to support automations",
  "Reporter assigned",
];

export default function Slide12TicketQuality() {
  return (
    <SlideShell ariaLabel="AI Bot Jira ticket quality improvement">
      <Eyebrow>AI Bot: Ticket Quality</Eyebrow>
      <SlideHeading accent="teal">
        From raw Slack markup
        <br />
        <em>to readable Jira tickets</em>
      </SlideHeading>

      <div className="grid w-full items-stretch gap-x-4 grid-cols-[1fr_auto_1fr_1px_auto]">
        <Reveal step={1} className="flex flex-col gap-1.5">
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-pink">
            Before — JIRA-3437
          </p>
          <div className="h-full">
            <JiraTicket
              issueKey="JIRA-3437"
              summary="[TEAM] @U0AM4H9CEA1"
              descriptionRows={BEFORE_DESC}
              details={BEFORE_DETAILS}
              labelId="s11-before"
              parent="Add Parent EPIC"
            />
          </div>
        </Reveal>

        <Reveal
          step={2}
          className="flex items-center justify-center text-[2.5rem] font-bold text-text-muted"
        >
          <span aria-hidden="true">→</span>
        </Reveal>

        <Reveal step={3} className="flex flex-col gap-1.5">
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-teal">
            After — JIRA-3508
          </p>
          <div className="h-full">
            <JiraTicket
              issueKey="JIRA-3508"
              summary="[on-call] AI summary of the bug"
              descriptionRows={AFTER_DESC}
              details={AFTER_DETAILS}
              labelId="s11-after"
              parent="🎯 Bug Reports EPIC"
            />
          </div>
        </Reveal>

        <div aria-hidden="true" className="self-stretch" />

        <Reveal step={4} className="self-start">
          <p
            aria-hidden="true"
            className="opacity-0 mb-2 text-[0.78rem] font-bold uppercase tracking-[0.1em]"
          >
            What improved
          </p>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {IMPROVEMENTS.map((label) => (
              <li key={label}>
                <Pill dotColor="var(--color-teal)" padding="p-1 px-2">
                  {label}
                </Pill>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SlideShell>
  );
}
