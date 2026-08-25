---
name: post-review
description: Gates every SimplePost publish or schedule write. Use for create post, publish, schedule, post now, or post-review.
---

This is the mandatory write gate for every new post.

1. Confirm the target accounts using real IDs from `list_accounts`; call it now if the current conversation does not contain a fresh result. Stop if an account is missing or ambiguous.
2. If local or new media is involved, call `upload_media`. Record the returned media reference and confirm it is attached to every variant that needs it. Do not attach media to other variants by assumption.
3. Call `preview_post` for each distinct final payload. Prefer `show_post_preview` when the user wants a rendered view. Do not call `validate_post` as routine preflight; use it only when the user explicitly asks for validation-only feedback.
4. Show the exact content that will go out and state this checklist explicitly:
   - correct account for every platform;
   - expected media is attached;
   - links are intact;
   - mentions use the intended handles;
   - the schedule time and its timezone are correct.
5. Ask for explicit approval of the displayed content, accounts, media, and timing. A prior request to draft or preview is not approval to publish. If anything changes, preview the changed payload again and request approval again.
6. Only after explicit approval, call `create_post` with the approved payload. Do not silently add platforms or alter the time.
7. Report each result as published, scheduled, draft, or failed. For scheduled posts, note that future scheduled records remain editable with `update_scheduled_post`; already-published posts cannot be edited or deleted through SimplePost tools.
