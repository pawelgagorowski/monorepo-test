# Glossary

Shared domain language. Mirror of the copy in `fe-clone-test` — keep both in sync.

## Model

A named portfolio allocation with a risk level and a status (`ModelStatusCode`:
Draft → Approved → Active → Inactive). Draft models are visible only to their owner.

## Request

An advisor's request to change a model. Lifecycle: Requested → In Process → Completed, or Rejected.

### Assigned

Legacy alias of In Process — the request is being worked on.
