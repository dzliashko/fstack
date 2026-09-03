# STUDY_PLAN.md — Backend-Oriented Full-Stack Learning Roadmap

## Goal

This document contains the roadmap for becoming a **backend-oriented full-stack developer** by building one substantial application:

# Inoreader-like Feed Reader

Target stack:

- JavaScript;
- Node.js;
- Fastify — only after a complete framework-free Node.js backend has been built and understood;
- PostgreSQL;
- React;
- REST / JSON;
- Git;
- automated testing;
- Docker;
- deployment.

The project is not a final assignment that begins after the theory.

It is the main learning vehicle throughout the roadmap.

Every major technical concept should eventually be applied to this project when appropriate.

Codex should adapt this roadmap based on actual progress.

Topics can be:

- added;
- removed;
- reordered;
- expanded;
- revisited.

Do not mark a topic as mastered merely because it was explained once.

Do not skip fundamentals merely to make the project look more professional sooner.

---

# Current learning goal

Primary language:

`JavaScript`

Backend runtime:

`Node.js`

Backend framework:

`Fastify — introduced only after the framework-free Node.js backend is complete and understood`

Database:

`PostgreSQL`

Frontend:

`React`

Main goal:

`Become a qualified backend-oriented full-stack JavaScript developer capable of independently building, testing, deploying, and maintaining real applications.`

Current level:

`Beginner / guided — initial assessment completed on 2026-08-14; exact strengths and weaknesses are tracked in PROGRESS.md.`

Approximate study time:

`Mastery-based, with an approximately 20-week control horizon. Calendar checkpoints detect drift but never override understanding.`

---

# Learning priorities

This is not a 50/50 frontend/backend curriculum. Backend depth has priority; React is learned to make complete products and freelance client applications.

Approximate emphasis:

- backend programming, Node.js, HTTP/API design, and application logic — very high;
- SQL and databases — high;
- frontend — moderate and practical;
- Git/testing/debugging — continuous;
- deployment/operations — simple deployment introduced early; deeper production work later;
- algorithms/data structures — enough to become a competent developer, without turning the course into interview-puzzle training.

The goal is to become capable of building complete products while developing deeper backend skill.

## 20-week control route

The next approximately 20 weeks are a **control horizon**, not a promise to rush through material. Mastery gates still apply. If a prerequisite is weak, fix it; do not pretend a phase is complete because a calendar week ended. The 20-week target is a strong, deployed **core full-stack v1** and readiness to start taking realistic work — not completion of every advanced phase and not proof of senior-level expertise.

Expected direction:

- **Weeks 1–4:** JavaScript fundamentals, Git, terminal, browser/HTML/CSS essentials, small deployed static page;
- **Weeks 5–8:** Node.js, async programming, raw HTTP, REST, first in-memory Feed Reader API, first deployed Node.js API;
- **Weeks 9–12:** PostgreSQL, SQL, direct Node.js database access, framework-free Feed Reader backend, backend tests, deployed API + database;
- **Weeks 13–15:** finish and explain the framework-free backend, migrate it deliberately to Fastify, introduce authentication/security fundamentals;
- **Weeks 16–18:** React fundamentals and full-stack integration with the existing Fastify backend;
- **Weeks 19–20:** production hardening, deployment, portfolio polish, and readiness for real paid work. A small client-style delivery exercise is a stretch goal only if the Inoreader-like core v1 is already stable; it must not displace the main project.

These checkpoints are used to detect drift early. They do not override understanding.

## Parallel web-delivery track

Backend remains the primary specialization, but a full-stack freelancer must be able to deliver visible, usable web products. Therefore basic browser skills are introduced early instead of being postponed until the React phase.

Learn gradually, in parallel with the main backend path:

- semantic HTML;
- forms;
- CSS fundamentals;
- Flexbox and Grid;
- responsive layouts;
- browser developer tools;
- accessibility basics;
- basic SEO/page metadata for ordinary client sites;
- domains, DNS, HTTPS, and deployment concepts as they become relevant.

Do not allow this parallel track to turn into a separate frontend curriculum.

## Continuous deployment rule

Deployment is not postponed until Phase 11. Phase 11 teaches **deeper production skills**, but earlier milestones should be deployed when feasible:

- first static page → public URL;
- first Node.js API → public endpoint;
- PostgreSQL-backed API → deployed service + database;
- React + Fastify application → complete public application.

Every deployment should be understood at the current level rather than performed as unexplained vendor-specific clicking.

**Safety rule for early deployments:** before SSRF protections are implemented, do not expose an unrestricted public endpoint that makes server-side requests to arbitrary user-supplied URLs. Early deployed feed-fetch demos should use known/allowlisted feeds or otherwise keep that capability non-public until the security checkpoint is complete.

---

# Course guardrails

These constraints are intentional and should not be silently changed by Codex or by a generated exercise:

- primary goal: become a **qualified backend-oriented full-stack JavaScript developer**, not merely learn enough to assemble simple sites;
- main project: **Inoreader-like RSS/Atom Feed Reader**;
- current language: **plain JavaScript** — do not reintroduce TypeScript into this roadmap unless the course is explicitly changed later;
- backend sequence: **Node.js core / framework-free backend first → Fastify only after the backend is working and understood**;
- database sequence: learn **SQL/PostgreSQL directly** before allowing an ORM to hide database fundamentals;
- React is necessary for full-stack delivery but remains secondary to backend depth;
- the approximately 20-week route is a control horizon toward a deployable core v1, not a justification for skipping weak prerequisites and not the end of the full roadmap;
- small freelance/client projects are supplementary and must not replace the Inoreader-like main project;
- Go is intentionally paused and outside this roadmap; it remains a possible future return point after the current JavaScript/full-stack goal is achieved or consciously revised.

---

# Main project vision

The main project is an **Inoreader-like RSS/Atom feed reader**.

Its purpose is twofold:

1. teach backend engineering through a domain with real asynchronous I/O, persistence, data consistency, scheduling, deduplication, authentication, search/filtering, and concurrency problems;
2. become a complete full-stack portfolio application that I can deploy, demonstrate, maintain, and explain independently.

Possible long-term capabilities:

- user accounts;
- RSS/Atom feeds;
- subscriptions;
- folders/categories;
- articles/entries;
- unread/read state;
- starred/saved state;
- feed discovery and validation;
- periodic feed refresh;
- RSS/Atom parsing;
- article deduplication;
- filtering and search;
- OPML import/export;
- background jobs and retries;
- basic notifications;
- administration/health information where justified.

This is the long-term vision, **not the initial scope**.

The application starts extremely small and grows with the curriculum. Do not add features simply because Inoreader has them. Each feature must serve the current learning goal.

The **main project must not be replaced** by a simpler freelance website or by another technology experiment. Small client-style exercises may exist in parallel, but the Inoreader-like Feed Reader remains the central project.

---

# Phase 0 — Assessment and development environment

## 0.1 Initial programming assessment

Assess practical understanding of:

- variables;
- primitive values;
- conditions;
- loops;
- functions;
- arrays;
- objects;
- basic debugging;
- basic decomposition;
- basic understanding of asynchronous code if any.

Goal:

Identify the earliest weak prerequisite.

Do not spend weeks repeating material that is already understood, but verify understanding with code rather than self-report alone.

Status:

`Completed — initial assessment completed on 2026-08-14; exact starting point recorded in PROGRESS.md.`

---

## 0.2 Development environment

Learn enough to work independently with:

- terminal basics;
- Node.js installation/runtime;
- version discipline: use an active LTS release for the course rather than chasing Current releases; at this roadmap revision (2026-08-27), Node.js 24 is the primary LTS baseline;
- npm;
- project directories;
- VS Code or another editor;
- running JavaScript scripts;
- `package.json` and npm scripts;
- reading command-line errors.

Understand at a simple level:

```text
JavaScript source
      ↓
Node.js runtime
      ↓
Program output / server behavior
```

Practice:

- create a minimal project;
- run JavaScript code with Node.js;
- add npm scripts;
- deliberately create and diagnose a simple syntax/runtime error.

Status:

`Not started`

---

# Phase 1 — JavaScript programming fundamentals

Learn JavaScript runtime behavior deeply enough that frameworks do not hide the language fundamentals.

Because this roadmap uses plain JavaScript, pay special attention to runtime data validation, object shapes, coercion, and debugging.

## 1.1 Variables, values, and basic types

Learn:

- `const` and `let`;
- strings;
- numbers;
- booleans;
- `null` and `undefined`;
- operators;
- expressions;
- template strings;
- basic input/output patterns for small Node.js exercises.

JavaScript specifics:

- dynamic typing;
- `typeof` and its limitations;
- implicit coercion and when to avoid it;
- why consistent object/data shapes matter without a static type system.

Project connection:

Represent simple feed-reader values such as feed URL, feed title, article title, published date, and read/starred flags without creating a full domain model yet.

Status:

`Completed — reassessed on 2026-09-02 through type/coercion prediction and correct explanations; revisit runtime validation and data shapes in Phase 1.7.`

---

## 1.2 Conditions and boolean logic

Learn:

- comparisons;
- `if` / `else`;
- logical operators;
- truthy/falsy behavior;
- early returns;
- practical validation logic.

Practice with business rules such as:

- whether a feed URL is present and valid enough to attempt fetching;
- whether an article is unread;
- whether a subscription is active.

Status:

`Completed at a basic level during the initial assessment on 2026-08-14; schedule later repetition using Feed Reader validation exercises.`

---

## 1.3 Loops and iteration

Learn:

- `for`;
- `while` when appropriate;
- `for...of`;
- counters;
- accumulators;
- `break` / `continue`;
- when NOT to use a loop.

Practice:

- counts such as unread articles;
- searches;
- filtering;
- collecting articles from subscriptions.

Status:

`Completed — reassessed independently on 2026-09-02 using for...of, numeric for, counters, accumulators, break/continue, and while-loop reasoning.`

---

## 1.4 Functions

Learn deeply:

- function purpose;
- parameters and arguments;
- return values;
- local scope;
- pure vs impure behavior at a practical level;
- decomposition;
- default parameters when useful;
- arrow functions after normal functions are understood.

Project connection:

Create small functions such as:

- count unread articles;
- determine whether an article matches a filter;
- normalize a simple feed URL input at a beginner level;
- validate basic feed/subscription input.

Do not turn these examples into a full application yet.

Status:

`Completed — checkpoint passed independently on 2026-09-02; continue revisiting scope, purity, and boundaries when mutable arrays/objects are introduced.`

---

## 1.5 Arrays

Learn:

- creation/access/modification;
- iteration;
- searching;
- `push`;
- `find`;
- `some`;
- `every`;
- `map`;
- `filter`;
- `reduce` after simpler iteration is comfortable.

Understand mutation vs returning a new array.

Project connection:

Work with collections of feeds, subscriptions, articles, and user article states in memory.

Status:

`Completed independently on 2026-09-03 — array creation/access/mutation, iteration, search, find/some/every, map/filter/reduce, empty-array behavior, reference identity, and method selection were practiced and checked. Revisit find versus filter and strict runtime-state checks through spaced repetition.`

---

## 1.6 Objects

Learn:

- object literals;
- properties;
- nested data;
- destructuring;
- copying/spreading;
- reference behavior;
- optional properties when appropriate.

Project connection:

Represent:

- Feed;
- Subscription;
- Article;
- ArticleState.

Status:

`Not started`

---

## 1.7 JavaScript data modeling and runtime validation

Learn:

- consistent object shapes by convention;
- required vs optional fields;
- validating unknown input at runtime;
- finite status values using constants/sets rather than arbitrary strings;
- defensive checks at application boundaries;
- `Object.freeze` only when it solves a concrete problem.

Project connection:

Model and validate feed refresh status or article state as a finite set of allowed values rather than accepting arbitrary strings.

Status:

`Not started`

---

## 1.8 Strings, dates, and parsing

Learn:

- string operations;
- parsing;
- formatting;
- date/time basics;
- why dates/timezones become difficult in real systems.

Project connection:

Use feed URLs, article URLs, titles, publication timestamps, and refresh timestamps.

Do not introduce complicated date libraries before the problem is understood.

Status:

`Not started`

---

## 1.9 Errors and debugging fundamentals

Learn:

- JavaScript syntax errors;
- runtime errors;
- logic errors;
- stack traces;
- `throw` / `Error`;
- systematic debugging.

Practice with intentionally broken code.

Status:

`Not started`

---

## Phase 1 checkpoint

Before continuing, verify that I can independently:

- write small JavaScript programs;
- use functions and arrays;
- model and validate simple data with objects;
- break a problem into functions;
- read common syntax/runtime errors;
- debug simple logic;
- explain my own code.

Project milestone:

Build a small in-memory **Feed Reader Domain Prototype** without a web server or database.

It should be small enough that I understand every line.

Status:

`Not started`

---

# Phase 2 — Core JavaScript and program structure

## 2.1 Modules

Learn:

- `import` / `export`;
- file boundaries;
- separating domain data, validation, and functions;
- avoiding circular/confusing dependencies.

Refactor the in-memory prototype into a few understandable modules.

Status:

`Not started`

---

## 2.2 Scope, references, and immutability

Deepen understanding of:

- block/function/module scope;
- object references;
- shallow copying;
- mutation;
- why accidental mutation causes bugs.

Status:

`Not started`

---

## 2.3 Data contracts and runtime validation — practical introduction

Learn how plain JavaScript applications keep data predictable without static types.

Understand:

- defining expected object shapes in documentation and tests;
- validating data at HTTP, file, and database boundaries;
- distinguishing trusted internal data from unknown external input;
- writing reusable validation helpers;
- introducing a validation library only when the manual approach is understood.

Do not turn validation into a framework exercise too early.

Status:

`Not started`

---

## 2.4 Classes and OOP — practical level

Learn:

- classes;
- constructors;
- methods;
- encapsulation;
- composition;
- contracts between modules/components;
- inheritance only enough to understand it and use it when justified.

Compare object-oriented and function-oriented approaches.

Do not force classes into every problem.

Status:

`Not started`

---

## 2.5 Problem solving and basic complexity

Practice:

- requirements → smaller steps;
- pseudocode;
- choosing data structures;
- searching/counting/grouping;
- Big-O intuition for common operations;
- edge cases.

Do not over-focus on advanced algorithms yet.

Status:

`Not started`

---

## 2.6 Git fundamentals

Learn:

- repository;
- working tree;
- staging;
- commit;
- `status`;
- `diff`;
- `log`;
- branches;
- merge concepts;
- `.gitignore`.

Begin using Git consistently for the main project.

Status:

`Not started`

---

## Phase 2 checkpoint

Project milestone:

The Feed Reader Domain Prototype should now be:

- split into sensible modules;
- validated consistently;
- stored in Git;
- understandable without framework abstractions.

Status:

`Not started`

---

# Phase 3 — Asynchronous JavaScript and Node.js

This phase is essential for backend development.

Do not move into framework-heavy backend code while async behavior is still mysterious.

## 3.1 Node.js runtime mental model

Learn conceptually:

- what Node.js is;
- process;
- single JavaScript thread at a practical level;
- event loop intuition;
- blocking vs non-blocking work;
- why I/O-heavy servers can handle many operations.

Avoid overly deep event-loop internals at first.

Status:

`Not started`

---

## 3.2 Callbacks, promises, and async/await

Learn progressively:

- synchronous vs asynchronous execution;
- callback concept;
- promises;
- pending/fulfilled/rejected;
- `then` / `catch` enough to understand promises;
- `async` / `await`;
- `try` / `catch` with async code;
- sequential vs concurrent async work;
- `Promise.all` when appropriate.

Practice prediction exercises before running code.

Status:

`Not started`

---

## 3.3 Node.js filesystem and process basics

Learn:

- reading/writing files;
- paths;
- environment variables;
- process exit/status;
- configuration basics.

Project mini-feature:

Temporarily import/export simple feed/subscription/article data as JSON/CSV-style files for learning purposes.

This is temporary persistence, not the final architecture.

Status:

`Not started`

---

## 3.4 npm and dependencies

Learn:

- `package.json`;
- scripts;
- dependencies vs devDependencies;
- semantic versioning at a basic level;
- lock files;
- why adding a dependency has a cost.

Status:

`Not started`

---

## 3.5 External HTTP requests and RSS/Atom parsing basics

This topic is part of the core Inoreader-like backend and must be learned before the framework-free backend checkpoint.

Learn:

- making outbound HTTP requests from Node.js with the platform `fetch` API or another deliberately chosen low-level approach;
- checking status codes and relevant headers;
- timeouts/cancellation with `AbortController`;
- treating remote content as untrusted input;
- distinguishing network failures, HTTP failures, and parsing failures;
- RSS versus Atom at a practical level;
- parsing XML with a focused library rather than attempting to write an XML parser from scratch;
- extracting a small normalized `Feed` and `Article` shape from imperfect external data;
- basic feed URL validation and redirect awareness;
- SSRF awareness: understand why server-side fetching of arbitrary user URLs can reach private/local services and why redirects must be re-checked;
- timeouts and practical response-size limits so a remote server cannot hold the application indefinitely or return unbounded content;
- retry concepts, without implementing a production retry system yet.

Project milestone:

Fetch one or more real RSS/Atom feeds, parse them, normalize a small set of fields, and print/store the resulting feed/article objects in memory. I must be able to explain each transformation.

**Framework-free does not mean dependency-free.** The learning requirement is to avoid a web framework before understanding HTTP routing/server responsibilities. Focused libraries for hard standards such as XML parsing are allowed when their role is understood.

Status:

`Not started`

---

## Phase 3 checkpoint

Verify I can:

- explain what `await` is waiting for;
- handle rejected promises;
- predict common async execution behavior;
- read/write data asynchronously;
- fetch a remote resource and distinguish network/HTTP/parsing failures;
- parse a simple RSS/Atom feed into normalized in-memory objects;
- understand what Node.js is doing at a practical level.

Status:

`Not started`

---

# Phase 4 — HTTP and REST API fundamentals

Learn HTTP and build the backend WITHOUT Fastify first. Fastify must not hide the mechanics that need to be understood.

## 4.1 HTTP mental model

Learn:

- client and server;
- request and response;
- URL;
- path;
- query string;
- headers;
- body;
- content type;
- HTTP methods;
- status codes.

Core methods:

- GET;
- POST;
- PUT;
- PATCH;
- DELETE.

Core status groups and common statuses:

- 2xx;
- 4xx;
- 5xx;
- 200;
- 201;
- 204;
- 400;
- 401;
- 403;
- 404;
- 409;
- 422 when relevant;
- 500.

Status:

`Not started`

---

## 4.2 Raw Node.js HTTP server

Build a deliberately small server using Node.js HTTP facilities.

Goal:

Understand what a framework later automates.

Learn:

- receiving a request;
- reading method/path;
- parsing a body at a basic level;
- returning JSON;
- setting status codes and headers.

Start deliberately small, then keep growing this raw Node.js server through Phases 4–6 into a complete framework-free backend. Do not introduce Fastify yet.

Status:

`Not started`

---

## 4.3 REST API design

Learn:

- resources;
- resource identifiers;
- collections;
- CRUD;
- route design;
- query parameters;
- validation;
- consistent error responses;
- idempotency concept at a basic level.

Project milestone:

Create an in-memory API for a small subset such as:

```text
GET    /subscriptions
POST   /subscriptions
GET    /subscriptions/:id
DELETE /subscriptions/:id

GET    /articles
GET    /articles/:id
PATCH  /articles/:id/state
```

Keep the scope small.

Status:

`Not started`

---

## 4.4 API testing tools

Learn to inspect APIs with tools such as:

- curl;
- an API client if desired;
- browser developer tools later.

Practice reading:

- request;
- response;
- headers;
- JSON;
- status.

Status:

`Not started`

---

## Phase 4 checkpoint

I should be able to explain an HTTP exchange without framework terminology.

Status:

`Not started`

---

# Phase 5 — SQL and PostgreSQL

This is a major phase, not a side topic.

Do not introduce an ORM until I can work with SQL directly.

## 5.1 Relational database fundamentals

Learn:

- database;
- schema;
- table;
- row;
- column;
- data type;
- NULL;
- primary key;
- foreign key;
- constraints;
- relationships.

Project modeling:

Start with a minimal schema such as:

```text
feeds
subscriptions
articles
article_states
```

The first framework-free backend is intentionally single-user. Do not invent login/session behavior yet. Multi-user ownership (`users`, `user_id`, ownership constraints, and related migrations) is introduced deliberately in Phase 8.

Status:

`Not started`

---

## 5.2 SQL CRUD

Learn and practice:

- SELECT;
- INSERT;
- UPDATE;
- DELETE;
- WHERE;
- ORDER BY;
- LIMIT;
- aliases.

Use realistic project data.

Status:

`Not started`

---

## 5.3 Joins and aggregation

Learn:

- INNER JOIN;
- LEFT JOIN;
- GROUP BY;
- aggregate functions;
- HAVING;
- practical reporting queries.

Project questions:

- latest articles for one subscription;
- unread counts per feed/folder;
- feeds with no successful refresh recently;
- starred articles for one user.

Status:

`Not started`

---

## 5.4 Subqueries, CTEs, and useful SQL patterns

Learn after joins are comfortable:

- subqueries;
- CTEs;
- CASE;
- date operations;
- basic window functions later in this phase if appropriate.

Status:

`Not started`

---

## 5.5 Data modeling and normalization

Learn practically:

- one-to-many;
- many-to-many;
- duplication problems;
- normalization intuition;
- constraints as correctness tools.

Design parts of the project schema myself and explain the choices.

Status:

`Not started`

---

## 5.6 External identifiers, URLs, timestamps, and article data

Learn using the Feed Reader domain:

- canonical/normalized URLs and why URL identity can be tricky;
- RSS/Atom GUID/id versus article URL;
- timestamps and time zones;
- text/content storage tradeoffs;
- nullable fields from imperfect external feeds;
- why data from external feeds must never be trusted blindly;
- practical deduplication keys and their limitations.

Do not over-engineer feed canonicalization before real duplicate cases exist.

Status:

`Not started`

---

## 5.7 Indexes and query performance — introduction

Learn:

- what an index solves;
- basic tradeoffs;
- why not every column should be indexed;
- `EXPLAIN` concept later when useful.

Keep this introductory.

Status:

`Not started`

---

## 5.8 Database transactions

Learn deeply enough to understand business correctness:

- atomicity;
- commit;
- rollback;
- why multi-step operations that update related feed/subscription/article state may need a transaction;
- race-condition intuition;
- isolation/locking introduced gradually.

Project example:

Creating/updating related feed, subscription, and article-state records may require several database changes that must succeed or fail together.

Status:

`Not started`

---

## 5.9 Node.js + PostgreSQL without ORM

Connect the backend to PostgreSQL using a database driver/query library.

Practice:

- parameterized SQL;
- mapping database rows to application objects;
- handling database errors;
- connection management concepts.

Refactor the in-memory API to real persistence.

Status:

`Not started`

---

## Phase 5 checkpoint

I should be able to:

- design a small relational schema;
- write normal CRUD and join queries;
- explain constraints;
- use transactions for a simple multi-step business operation;
- access PostgreSQL from Node.js without an ORM hiding the fundamentals;
- run a working REST API backed by PostgreSQL using JavaScript, Node.js core HTTP facilities, and a PostgreSQL driver — with no web framework.

Status:

`Not started`

---

# Phase 6 — Testing and reliable backend code

Testing starts earlier in small doses, but this phase makes it systematic.

## 6.1 Testing fundamentals

Learn:

- purpose of tests;
- test case;
- assertion;
- arrange/act/assert;
- unit vs integration tests;
- happy path vs edge cases;
- deterministic tests.

Status:

`Not started`

---

## 6.2 Unit testing domain logic

Test functions such as:

- feed/subscription validation rules;
- article filtering/state rules;
- unread-count calculations;
- deduplication decisions.

Status:

`Not started`

---

## 6.3 Integration testing APIs and databases

Learn:

- testing endpoint behavior;
- test database concepts;
- isolation between tests;
- verifying both response and persistent state.

Status:

`Not started`

---

## 6.4 Refactoring

Practice:

- removing duplication;
- improving naming;
- extracting functions/modules;
- separating concerns;
- preserving behavior with tests.

Do not refactor merely to imitate a pattern.

Status:

`Not started`

---

## 6.5 Framework-free backend completion

Before using any web framework, finish a complete **single-user core backend v1** for the current project scope in plain JavaScript on Node.js. Authentication/multi-user isolation is added later; the backend must otherwise be coherent and usable through its API. At this stage, 'single-user' means one explicit local/demo user context with no login, session, token, or fake authorization layer. Do not pretend authentication exists before Phase 8.

The purpose is not to imitate every feature of a framework. The purpose is to understand the responsibilities a framework will later take over. Framework-free means **no web framework**; focused dependencies such as a PostgreSQL driver and XML parser are allowed and should be understood.

For this course, “complete framework-free backend” at this stage means it must include:

- routing for the initial REST resources;
- request parsing and JSON responses;
- status-code handling;
- query/path/body validation at a practical level;
- centralized error-to-HTTP-response handling that I can explain;
- separation between HTTP transport, business logic, and database access;
- outbound feed fetching and RSS/Atom parsing into normalized application data;
- basic outbound-request safety: timeouts, bounded responses, redirect handling, and no unrestricted public arbitrary-URL fetching before SSRF controls exist;
- PostgreSQL persistence using direct SQL / a driver;
- transactions for operations that require atomicity;
- configuration through environment variables;
- deliberate logging;
- unit tests for business rules;
- integration tests for API + database behavior;
- a coherent Feed Reader workflow: Add Feed URL → Create Subscription → Refresh/Parse Feed → Persist Articles → List Unread → Mark Read/Starred.

I must be able to explain, without framework terminology:

- how a request reaches the correct handler;
- where and why input is validated;
- where business rules execute;
- how database errors are handled;
- how an HTTP response is produced;
- what code is repetitive or awkward and therefore a candidate for framework support.

Do not begin Fastify until this checkpoint is complete.

Status:

`Not started`

---

# Phase 7 — Fastify and structured backend development

Only begin after the Phase 6.5 framework-free backend is complete and I can explain how it works. Fastify is introduced as an abstraction over concepts already learned, not as the first way to build a backend.

## 7.1 Why use a backend framework

Compare the completed framework-free Node.js backend with what Fastify provides.

Understand the tradeoff:

- less repetitive HTTP plumbing;
- stronger conventions and lifecycle hooks;
- schema-based validation/serialization;
- plugin-based composition and encapsulation;
- more abstraction that must still be understood.

Status:

`Not started`

---

## 7.2 Fastify fundamentals

Learn:

- Fastify instance;
- route definitions and handlers;
- request/reply objects;
- plugins;
- hooks;
- encapsulation;
- request lifecycle at a practical level;
- centralized error handling.

Refactor the already-working framework-free backend into Fastify gradually. Do not add unrelated features during the migration. Existing integration tests should continue to describe the expected API behavior.

Status:

`Not started`

---

## 7.3 Request schemas, validation, and serialization

Learn:

- transport data vs domain/database data;
- Fastify route schemas using JSON Schema as the default learning path;
- runtime validation of request bodies, params, and query strings;
- response serialization;
- invalid requests;
- consistent error handling;
- the difference between transport validation and business-rule validation.

Status:

`Not started`

---

## 7.4 Application structure

Gradually organize by business feature/module, for example:

```text
src/
  feeds/
  subscriptions/
  articles/
  refresh/
  users/
  common/
  config/
```

Exact structure should be justified by current complexity.

Status:

`Not started`

---

## 7.5 ORM introduction

Only now introduce an ORM if useful.

Before selecting/using it, compare:

- raw SQL;
- query builder;
- ORM.

Possible tool:

`Prisma or another justified choice`

The choice may be revised later.

Continue to inspect the generated/executed database behavior conceptually.

Status:

`Not started`

---

## 7.6 Configuration and logging

Learn:

- environment-based configuration;
- secrets concept;
- structured logs;
- avoiding secret leakage;
- development vs production configuration.

Status:

`Not started`

---

## Phase 7 project milestone

The same coherent backend workflow that worked without a framework should now run on Fastify, with behavior preserved by tests:



```text
Add Feed URL
  ↓
Subscription
  ↓
Feed Refresh / Parse
  ↓
Article Persistence
  ↓
Unread / Starred State
```

The goal is correctness and understanding, not feature count.

Status:

`Not started`

---

# Phase 8 — Authentication, authorization, and security basics

Complete the protected multi-user backend before the dedicated React phase so the frontend integrates with a realistic authenticated API.

## 8.1 Authentication concepts

Learn:

- identity;
- authentication;
- authorization;
- password hashing;
- login/logout;
- session vs token concepts;
- cookies;
- basic OAuth awareness later.

Do not treat JWT as automatically superior.

Status:

`Not started`

---

## 8.2 Roles and permissions

Authorization scope for the Feed Reader should focus first on ownership rather than artificial enterprise roles:

- a user may access only their own subscriptions, folders, and article state;
- shared feed/article records may exist globally while user-specific state remains isolated;
- an Admin/operations role may be introduced later only if a concrete maintenance feature needs it.

Learn to answer:

- who may perform an action;
- where authorization is enforced;
- why hiding a button in React is not backend authorization.

Project migration:

- introduce `users` deliberately now;
- migrate subscriptions and article state from the single-user model to per-user ownership;
- add database constraints/indexes that support ownership and prevent accidental duplicate subscriptions.

Status:

`Not started`

---

## 8.3 Security fundamentals

Learn practical awareness of:

- password storage;
- injection;
- parameterized SQL;
- XSS;
- CSRF when relevant;
- CORS;
- authentication leaks;
- secrets;
- authorization bugs;
- rate limiting concept;
- sensitive logging;
- **SSRF** from user-supplied feed URLs, including private/local/metadata targets and redirects to them;
- request timeout and response-size limits for outbound feed fetching;
- safe XML parsing and rejection of parser features/configurations that could make untrusted XML dangerous;
- safe rendering/sanitization decisions for untrusted article HTML/content to prevent XSS.

Do not turn this into a security-specialist curriculum, but do not ignore basic web security. The unrestricted user-supplied feed-fetch endpoint must not be exposed publicly until the relevant SSRF/outbound-request controls are understood and implemented.

Status:

`Not started`

---

---

# Phase 9 — React and frontend fundamentals

The dedicated React phase begins after the backend/API foundation is strong enough to give it a real server to use. Basic HTML/CSS/browser skills have already been practiced in the parallel web-delivery track.

## 9.1 Browser/web integration checkpoint

The HTML/CSS/browser fundamentals were introduced earlier in the parallel web-delivery track. Before React, verify rather than restart them:

- semantic HTML and forms;
- practical responsive CSS layout;
- browser events;
- network requests and the browser security model at a basic level;
- developer tools and inspection of frontend/backend HTTP traffic.

Fill specific gaps only. Do not turn this checkpoint into a second HTML/CSS course.

Status:

`Ongoing from the parallel web-delivery track — verify before React`

---

## 9.2 React mental model

Learn:

- component;
- JSX;
- props;
- rendering;
- component composition;
- state;
- events.

Avoid adding state libraries at the beginning.

Status:

`Not started`

---

## 9.3 Forms

Learn:

- controlled inputs;
- form state;
- validation;
- submission;
- displaying server errors.

Project screens:

- add/edit a feed subscription;
- edit folders/tags or subscription settings at a practical level.

Status:

`Not started`

---

## 9.4 Calling the backend

Learn:

- `fetch` or selected HTTP client;
- JSON;
- loading states;
- error states;
- retry decisions;
- separating API code from UI code at a practical level.

Status:

`Not started`

---

## 9.5 Routing

Learn client-side routing when multiple screens exist.

Possible screens:

- Subscriptions / Feeds;
- Article List;
- Article Details;
- Starred Articles;
- Settings / Folders when justified.

Status:

`Not started`

---

## 9.6 Reader lists, filters, and pagination

Learn practical UI patterns:

- article/feed lists;
- sorting where useful;
- unread/starred/feed/folder filters;
- pagination or incremental loading;
- empty states;
- loading states;
- simple tables only where the product actually needs tabular data.

Usable information-dense interfaces are more important for this course than advanced visual effects.

Status:

`Not started`

---

## 9.7 React effects and derived state

Learn `useEffect` carefully:

- what an effect is for;
- dependency behavior;
- common infinite-loop/stale-data mistakes;
- avoiding effects when simple derived values are enough.

Status:

`Not started`

---

## 9.8 Frontend testing — practical level

Learn:

- testing user-visible behavior;
- component tests;
- avoiding tests that only mirror implementation details.

Status:

`Not started`

---

## Phase 9 project milestone

Create a usable React interface for the existing backend.

Minimum coherent workflow:

```text
Subscribe to Feed → Refresh/List Articles → Open Article → Mark Read/Starred
```

Status:

`Not started`

---

---

# Phase 10 — Deeper Feed Reader backend logic

Use the Inoreader-like domain to learn harder backend engineering.

## 10.1 Feed refresh lifecycle

Model and reason about states such as:

```text
Pending
Refreshing
Healthy
Failed
Disabled
```

Learn:

- state transitions;
- last successful refresh;
- next refresh time;
- retry/error metadata;
- HTTP conditional requests with `ETag` / `Last-Modified` and handling `304 Not Modified` when feeds support them;
- why a temporary fetch failure should not automatically destroy a subscription.

Status:

`Not started`

---

## 10.2 RSS/Atom ingestion and article deduplication

Handle cases such as:

- valid RSS feeds;
- valid Atom feeds;
- malformed XML;
- missing optional fields;
- duplicate GUIDs/URLs;
- feeds that change entry ordering;
- old entries appearing again;
- changed titles/content for an existing article;
- network timeout or non-200 response.

Do not attempt to support every broken feed on the internet at once.

Status:

`Not started`

---

## 10.3 Transactions and consistency

Deepen database transaction knowledge using real project operations.

Learn to protect invariants such as:

- one user must not accidentally receive duplicate subscriptions to the same feed;
- one refresh must not create duplicate article rows for the same external entry;
- user-specific read/starred state must remain associated with the correct user and article;
- a multi-step operation must not leave partial inconsistent state.

Status:

`Not started`

---

## 10.4 Idempotency and safe retries

Learn why retrying a feed refresh or import can accidentally perform the same logical operation twice.

Design idempotent ingestion/retry behavior when the current skill level is ready.

Status:

`Not started`

---

## 10.5 User article state and unread semantics

Model:

- unread/read;
- starred/saved;
- mark one article read;
- mark many articles read;
- unread counts;
- how newly fetched articles affect counts;
- ownership/isolation between users.

Use this to learn correctness across API, business logic, and database layers.

Status:

`Not started`

---

## 10.6 Search, filtering, and useful queries

Build queries/features such as:

- latest unread articles;
- articles by feed/folder;
- starred articles;
- unread counts per feed/folder;
- feeds that have not refreshed successfully recently;
- simple text search when justified.

Use SQL first. Introduce specialized search infrastructure only if the project actually needs it.

Status:

`Not started`

---

# Phase 11 — Deeper production: Docker, Linux, and deployment

Earlier milestones have already been deployed at a simple level. This phase deepens production understanding and makes deployment reproducible and maintainable.

## 11.1 Linux/server basics

Learn practical commands and concepts:

- filesystem;
- processes;
- environment variables;
- permissions at a basic level;
- ports;
- logs;
- SSH concept.

Status:

`Not started`

---

## 11.2 Docker fundamentals

Learn:

- image;
- container;
- Dockerfile;
- volumes;
- networks;
- environment configuration;
- Docker Compose.

Project target:

Run backend + PostgreSQL in a reproducible environment, and later the frontend as appropriate.

Status:

`Not started`

---

## 11.3 Database migrations and production data

Learn:

- why schema changes need migration history;
- development vs production database differences;
- backup/restore awareness;
- safe migration thinking.

Status:

`Not started`

---

## 11.4 Deployment

Deploy the application to a real environment.

Understand the path:

```text
Git repository
      ↓
Build/test
      ↓
Application runtime
      ↓
PostgreSQL
      ↓
Public HTTPS endpoint
```

Learn enough DNS/HTTPS/reverse-proxy/cloud concepts to understand the deployment used.

Do not memorize vendor-specific clicks without understanding the components.

Status:

`Not started`

---

## 11.5 CI fundamentals

Automate at least:

- linting/static checks;
- tests;
- build.

Deployment automation may be added after the basics are understood.

Status:

`Not started`

---

# Phase 12 — Advanced backend topics

Only begin these when the core application is solid.

Do not use advanced topics to avoid mastering basic backend work.

## 12.1 Background jobs and scheduled tasks

Possible project uses:

- refresh feeds on a schedule;
- retry failed fetches with limits/backoff;
- OPML import processing;
- send optional notifications/digests later.

Status:

`Not started`

---

## 12.2 Redis and caching

Learn:

- what problem caching solves;
- cache hit/miss;
- invalidation difficulty;
- when caching is unnecessary.

Add Redis only if there is a concrete project use case.

Status:

`Not started`

---

## 12.3 Queues

Learn conceptually and practically:

- producer;
- consumer/worker;
- retry;
- dead-letter/error handling concept;
- at-least-once delivery intuition;
- idempotent consumers.

Possible project use:

feed-refresh jobs and OPML/import processing.

Status:

`Not started`

---

## 12.4 Advanced PostgreSQL

Possible topics:

- deeper indexing;
- query plans;
- window functions;
- locking;
- transaction isolation;
- performance troubleshooting.

Status:

`Not started`

---

## 12.5 Concurrency and race conditions

Study using concrete examples, especially:

- two workers refreshing the same feed at nearly the same time;
- duplicate article ingestion;
- concurrent subscription changes;
- marking article state while new feed data is being inserted.

Status:

`Not started`

---

## 12.6 Observability

Learn:

- useful logging;
- metrics concept;
- tracing concept;
- health checks;
- diagnosing production failures.

Status:

`Not started`

---

# Phase 13 — Architecture and professional engineering skills

Only after enough code exists to make architectural tradeoffs real.

## 13.1 Modular monolith

Understand:

- business modules;
- boundaries;
- dependencies;
- shared code;
- coupling/cohesion.

Use the current project to identify real architectural pain.

Status:

`Not started`

---

## 13.2 API evolution

Learn:

- backward compatibility concept;
- versioning tradeoffs;
- database/API migrations;
- client/server coordination.

Status:

`Not started`

---

## 13.3 Design principles

Learn principles through actual code problems:

- separation of concerns;
- dependency direction;
- composition;
- DRY without premature abstraction;
- YAGNI;
- appropriate module/API contracts;
- selected SOLID concepts when there is a concrete example.

Status:

`Not started`

---

## 13.4 Microservices — conceptual comparison only at first

Understand:

- why companies use them;
- deployment independence;
- network failure;
- distributed transactions;
- observability complexity;
- operational cost.

Do not split the learning project into microservices merely to claim microservice experience.

A separate later experiment may be created if there is a genuine learning reason.

Status:

`Not started`

---

# Phase 14 — Portfolio and second project

The Inoreader-like Feed Reader should become the main portfolio project and the primary learning vehicle throughout the course. A smaller second project is used only to prove transfer of knowledge and practical freelance readiness.

## 14.1 Main project portfolio polish

Prepare:

- clear README;
- problem/domain description;
- stack;
- architecture overview;
- database diagram;
- API documentation;
- screenshots;
- setup instructions;
- tests;
- deployment link if appropriate;
- explanation of important engineering decisions.

Do not hide limitations. Document known tradeoffs.

Status:

`Not started`

---

## 14.2 Second independent project

Build a smaller but distinct application with significantly less Codex guidance.

Possible domain:

`Small-business service website + lead/admin application`

Potential concepts:

- public pages and responsive layout;
- services/catalog;
- contact/lead form;
- simple admin area;
- PostgreSQL persistence;
- authentication where justified;
- deployment, domain/DNS/HTTPS;
- basic analytics/SEO integration.

This project is intentionally smaller than the Inoreader-like Feed Reader. Its purpose is to prove that the same JavaScript/Node/Fastify/React skills transfer beyond the main project and into realistic freelance work. It should be built only after the core Feed Reader v1 is stable enough that the second project does not become an escape from harder backend work.

Status:

`Not started`

---

# Practical freelance and client-delivery readiness

This track supports the economic goal without replacing the main engineering goal or the Inoreader-like project.

Practice gradually:

- convert a vague client request into concrete requirements;
- define scope and identify what is explicitly out of scope;
- estimate small features conservatively;
- build responsive public pages and forms;
- connect forms to a backend and persist leads/data;
- configure domain, DNS, HTTPS, and hosting;
- understand basic analytics and SEO needs;
- manage environment variables and secrets;
- make backups and understand restore basics;
- document handoff/deployment instructions;
- maintain and update an already deployed project;
- explain tradeoffs to a non-technical client.

Do not spend weeks studying freelancing theory. Learn these skills around real delivered projects.

---

# Continuous topics throughout the roadmap

These are not one-time chapters.

## Debugging

Repeatedly practice:

- reading errors;
- reproducing bugs;
- using logs;
- using debugger/breakpoints;
- inspecting HTTP traffic;
- inspecting database state;
- forming and testing hypotheses.

---

## Git

Use Git during real project work.

Progress from basic commits to:

- branches;
- merge/rebase concepts;
- resolving conflicts;
- reviewing diffs;
- sensible commit history.

---

## Documentation

Practice reading official documentation for:

- JavaScript;
- Node.js;
- PostgreSQL;
- React;
- Fastify;
- selected libraries.

The goal is to reduce dependence on AI for normal technical questions.

---

## Code quality

Gradually improve:

- naming;
- function size;
- module boundaries;
- data contracts and validation;
- error handling;
- validation;
- tests;
- documentation;
- removing duplication;
- avoiding premature abstractions.

---

## Problem solving

Frequently practice tasks that are not direct copies of previous examples.

Require me to:

- restate requirements;
- identify unknowns;
- define inputs/outputs;
- break the problem down;
- identify edge cases;
- explain a plan before implementation when appropriate.

---

# Review checkpoints

After every major phase:

1. give a short knowledge assessment;
2. give several practical exercises without telling me exactly which earlier topic each one tests;
3. include at least one debugging or code-reading task;
4. include at least one task connected to the Inoreader-like Feed Reader when appropriate;
5. identify weak areas;
6. update `PROGRESS.md`;
7. revisit weak prerequisites before continuing.

Do not pass a phase solely because the planned calendar time has elapsed.

---

# Graduation criteria — junior backend-oriented full-stack level

Do not consider the roadmap complete until I can independently perform most of the following at an appropriate junior level.

## Programming

- write JavaScript without relying on generated solutions;
- model and validate data reliably without depending on generated code;
- structure code into understandable modules;
- use async/await correctly;
- handle errors;
- reason about arrays, objects, references, and common data transformations.

## Backend

- explain Node.js at a practical level;
- explain HTTP requests/responses;
- design a normal REST API;
- implement API endpoints;
- validate input;
- handle errors consistently;
- implement business rules;
- fetch and parse untrusted external feed data with appropriate failure handling and basic outbound-request security;
- use authentication/authorization correctly at a basic level;
- explain what Fastify is doing for routing, validation, lifecycle, and error handling because the same API was first built without it;
- write backend tests.

## Database

- design a relational schema;
- write useful SQL directly;
- use joins and aggregation;
- use constraints;
- understand indexes at a basic level;
- use transactions where correctness requires them;
- debug common database problems.

## Frontend

- build React components;
- manage normal state/forms;
- call APIs;
- handle loading/errors;
- implement routing;
- build practical lists, filters, forms, and reader/client UI flows;
- debug frontend/backend integration.

## Engineering workflow

- use Git confidently for normal work;
- read documentation;
- debug systematically;
- write tests;
- run the project locally;
- use Docker at a basic level;
- deploy an application;
- explain the architecture and major tradeoffs in my own words.

## Independence

- implement a medium-sized feature from requirements with limited hints;
- break a feature into tasks;
- ask useful technical questions;
- research unfamiliar APIs/documentation;
- recognize when I do not understand generated code and stop to learn it;
- complete a second project without AI generating most of the implementation.

The final goal is not memorizing JavaScript syntax or finishing a checklist.

The final goal is being able to solve real software-development problems independently.
