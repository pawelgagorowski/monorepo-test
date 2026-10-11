# Glossary

Shared domain language. Mirror of the copy in `BE-clone-test` — keep both in sync.

## Model

A named portfolio allocation with a risk level (`low` / `medium` / `high`) and a status
(`ModelStatusCode`: Active, Inactive, Draft).

## Request

An advisor's request to change a model. Lifecycle: Requested → Assigned → In Progress → Completed.

### Assigned

An advisor has taken ownership of the request, but work has not started yet. An Assigned request
can still be reassigned. (Product decision, 2026-09: "Assigned" no longer implies work in progress.)

### Scheduled

Read-only status derived by the BE for a Requested request whose `requestDate` is in the future.
