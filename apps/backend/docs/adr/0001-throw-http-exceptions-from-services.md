# 1. Throw HTTP exceptions from services

- Status: accepted
- Date: 2026-09-10

## Context

Controllers were mapping service errors to HTTP status codes in several different ways.

## Decision

Services throw Nest HTTP exceptions directly; controllers only delegate.

## Consequences

Access rules (e.g. Draft models are owner-only, returned as 403) live in services. Clients only see
the status code and message.
