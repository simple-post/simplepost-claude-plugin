---
name: post-review
description: Reviews exact SimplePost payloads and resolves missing details before a write. Use for post review, preview, publishing checks, scheduling checks, or an ambiguous posting request.
---

Use this review when the user requests it or when essential posting details are ambiguous. An explicit request to publish or schedule exact content to named accounts is sufficient authorization; do not add another confirmation step in that case. A request to draft, adapt, validate, or preview content is not authorization to publish.

1. Confirm the target accounts using real IDs from `list_accounts`; call it now if the current conversation does not contain a fresh result. Stop if an account is missing or ambiguous.
2. If media is involved, pass a user-supplied public URL directly in `media`. Use `upload_media` only for a file attached in this conversation, since it requires a chat-provided file reference and cannot read a local path, and carry its returned `filename` and `size` into `media` so platform file-size checks apply. If media is required and neither is available, stop and ask for a public URL. Attach each item only to the variants that need it.
3. Call `preview_post` for each distinct final payload. Prefer `show_post_preview` when the user wants a rendered view. Do not call `validate_post` as routine preflight; use it only when the user explicitly asks for validation-only feedback.
4. Show the exact content that will go out and state this checklist when review is needed:
   - correct account for every platform;
   - expected media is attached;
   - links are intact;
   - mentions use the intended handles;
   - the schedule time and its timezone are correct.
5. If the current conversation does not already contain an explicit posting instruction for this exact payload, ask for approval of the displayed content, accounts, media, and timing. If anything changes, preview the changed payload again and request approval again.
6. Once the exact payload is authorized, call `create_post` with a stable `idempotencyKey` for that payload. If the call times out or fails ambiguously, reuse the same key on any retry so the post cannot publish twice. Do not silently add platforms or alter the time.
7. Report each result as published, scheduled, draft, or failed. For scheduled posts, note that future scheduled records remain editable with `update_scheduled_post`; already-published posts cannot be edited or deleted through SimplePost tools.
