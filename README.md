# Learn backend-oriented full-stack JavaScript with ChatGPT

Primary goal: become a qualified **backend-oriented full-stack JavaScript developer** who can independently design, build, test, deploy, and maintain real applications.

Main project: **Inoreader-like RSS/Atom Feed Reader**.

Core stack: **JavaScript + Node.js + PostgreSQL + Fastify + React**.

Learning rule: build and understand a complete backend in plain JavaScript on Node.js first; introduce **Fastify only after the framework-free backend is working, tested, persisted in PostgreSQL, and understood**.

React is practical and secondary to backend depth. Basic HTML/CSS/browser skills and deployment begin early enough to support complete products and future freelance work.

The approximately 20-week route is a control horizon toward a strong deployed core full-stack v1, not the end of the full roadmap and not a reason to skip fundamentals. The Inoreader-like Feed Reader remains the central project throughout the course; smaller client-style projects are supplementary only.

Scope guardrails: no TypeScript in the current roadmap; no Fastify before the framework-free Node.js backend checkpoint; SQL/PostgreSQL before ORM abstractions; Go is paused and intentionally outside this course for now.

Version policy: use an active Node.js LTS release (Node.js 24 LTS at the 2026-08-27 roadmap revision) and a current compatible Fastify v5 release; avoid chasing Node.js Current during the course.

Security rule: because the Feed Reader fetches user-supplied URLs, SSRF/outbound-request controls and safe handling of untrusted XML/article content are mandatory before unrestricted public feed fetching.
