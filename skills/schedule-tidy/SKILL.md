---
name: schedule-tidy
description: Audits the SimplePost queue for cadence and content hygiene. Use for schedule tidy, queue gaps, duplicate angles, stale posts, or reschedule.
---

1. Call `get_schedule` for the relevant upcoming window and timezone. Call `inspect_posts` for recent and scheduled SimplePost records that provide useful content context.
2. Analyze only cadence and content hygiene. Report:
   - posts to the same platform clustered too closely;
   - unexplained gaps relative to the user's stated cadence;
   - repeated topics, hooks, or calls to action;
   - scheduled copy with dates, offers, events, or references that may be stale by publish time.
3. Do not claim engagement, reach, clicks, or performance analysis. `inspect_posts` returns SimplePost record content and status metadata, not social-network engagement metrics.
4. Propose precise fixes, identifying each post ID and the intended `update_scheduled_post` or `discard_scheduled_post` payload. Already-published posts are read-only through these tools.
5. Obtain explicit confirmation for each proposed fix, or for an explicitly enumerated batch, before making any write call. Reconfirm if the payload changes.
6. Execute only approved calls, then call `show_schedule` once the writes finish. Report any failures without silently retrying.
