# PROGRESS.md — Learning Progress

## Student profile

Primary language:

`JavaScript`

Runtime / frontend:

`Node.js + React`

Primary goal:

`Become a qualified backend-oriented full-stack JavaScript developer capable of independently designing, building, testing, deploying, and maintaining real applications.`

Main learning project:

`Inoreader-like Feed Reader`

Starting level:

`Beginner / guided. Initial programming assessment completed on 2026-08-14; detailed strengths and weak areas are tracked below.`

Study start:

`2026-08-14`

Study pace:

`Mastery-based, with an approximately 20-week control horizon toward a deployed core full-stack v1. The full roadmap continues beyond that horizon when deeper backend/professional topics remain.`

---

# Current status

## Current phase

`Phase 1 — JavaScript programming fundamentals`

## Current topic

`Begin Phase 1.4 — Functions, while continuing to reinforce precise boolean reasoning and JavaScript fundamentals.`

## Current exercise

`Exercise 002 — Feed title normalization and refresh status — completed after one hint about local variable declaration.`

## Recommended next action

Continue Phase 1.4 functions with pure vs impure behavior, then cover default parameters and introduce arrow functions only after normal function declarations are secure. Continue checking boolean negation and boundary conditions in later exercises. Verify the Phase 0.2 development-environment skills separately rather than assuming they are mastered.

---

# Learning direction

The course is **backend-oriented full-stack**, with backend depth taking priority over frontend breadth.

Priority order:

1. programming and JavaScript fundamentals;
2. Node.js and asynchronous programming;
3. HTTP and REST APIs;
4. SQL and PostgreSQL;
5. business logic and correctness;
6. testing and debugging;
7. complete framework-free backend structure and behavior;
8. Fastify after the framework-free backend is understood;
9. authentication, authorization, and security;
10. React and frontend integration;
11. Docker, deployment, and production fundamentals;
12. more advanced backend topics when justified.

The main project should grow throughout the roadmap rather than being postponed until the end.

Control horizon: approximately **20 weeks** for the current intensive learning period. The target is a strong deployed core full-stack v1 and readiness for realistic work, not completion of every advanced phase and not permission to skip weak prerequisites.

Early-delivery rule:

- basic HTML/CSS/browser skills begin in parallel after the JavaScript foundation starts;
- first simple static page should be deployed early;
- first Node.js API should be deployed when it becomes coherent;
- the PostgreSQL-backed API should be deployed before the course reaches the deep production phase;
- React remains secondary to backend depth but must arrive early enough to produce a complete full-stack application within the control horizon.

The main project is fixed as the **Inoreader-like Feed Reader**. Small freelance/client-style exercises may be added, but must not replace the main project or weaken the backend-first sequence.

---

# Main project status

## Inoreader-like Feed Reader

**Goal:**  
Build a realistic Inoreader-like RSS/Atom feed reader while learning software development, with backend depth as the primary specialization.

**Stack target:**

- JavaScript;
- Node.js;
- Fastify — only after a complete framework-free Node.js backend has been built and understood;
- PostgreSQL;
- React;
- REST / JSON;
- Git;
- testing;
- Docker;
- deployment.

**Current status:**  
`Planned — implementation has not started.`

**Initial single-user domain scope:**

- feeds;
- subscriptions;
- articles;
- unread/read state;
- starred state;
- manual/basic feed refresh.

Authentication and real multi-user ownership are deliberately introduced later, after the framework-free backend has been understood and migrated to Fastify.

Later modules may include:

- folders/categories;
- RSS/Atom discovery and parsing hardening;
- scheduled refresh;
- retries/backoff;
- OPML import/export;
- filtering/search;
- notifications/digests;
- background jobs;
- Redis/queues only when justified;
- observability/health information.

Do not build later modules before the learning plan reaches the necessary concepts.

---

# Project milestones

## Milestone 0 — Domain exercises without a web server

Status:

`Not started`

Expected learning:

- JavaScript basics;
- functions;
- objects;
- arrays;
- data modeling and runtime validation;
- modules;
- validation logic;
- simple feed-reader/domain rules.

Possible project fragments:

- represent a feed;
- represent a subscription;
- represent an article;
- count/filter unread articles;
- search/filter collections.

---

## Milestone 1 — Node.js application fundamentals

Status:

`Not started`

Expected learning:

- Node.js runtime;
- npm;
- package.json;
- modules;
- filesystem/process basics;
- async/await;
- promises;
- environment variables;
- outbound HTTP requests;
- RSS/Atom parsing basics;
- project structure.

---

## Milestone 2 — First framework-free HTTP API

Status:

`Not started`

Expected learning:

- HTTP;
- request/response;
- methods;
- headers;
- status codes;
- JSON;
- basic routing;
- REST concepts;
- validation;
- API error handling.

Initial resource candidates:

- subscriptions;
- articles.

---

## Milestone 3 — PostgreSQL persistence

Status:

`Not started`

Expected learning:

- relational modeling;
- SQL CRUD;
- primary/foreign keys;
- constraints;
- joins;
- transactions;
- connecting Node.js to PostgreSQL.

---

## Milestone 4 — Feed Reader domain rules on framework-free Node.js

Status:

`Not started`

Expected learning:

- feed/subscription lifecycle;
- RSS/Atom ingestion rules;
- article deduplication;
- unread/read and starred-state correctness;
- database transactions;
- runtime validation;
- idempotent refresh/retry concepts;
- keeping domain rules independent from HTTP/framework code.

---

## Milestone 5 — Complete framework-free single-user core backend

Status:

`Not started`

Expected learning:

- plain JavaScript + Node.js core HTTP backend;
- routing without a web framework;
- request/body/path/query parsing;
- runtime validation;
- consistent HTTP error handling;
- separation of HTTP, business, and database concerns;
- outbound feed fetching + RSS/Atom parsing;
- PostgreSQL with direct SQL / driver;
- business transactions;
- configuration and logging;
- unit and integration tests;
- explaining the full request → business logic → database → response path in my own words;
- using one explicit local/demo user context without pretending login/auth exists yet;
- basic outbound-request safety and no unrestricted public arbitrary-URL feed-fetch endpoint before SSRF controls are implemented.

Required project workflow:

`Add Feed URL → Subscription → Refresh/Parse → Persist Articles → List Unread → Mark Read/Starred`

Fastify is forbidden until this milestone is complete and I can explain the implementation without framework terminology. Focused libraries such as the PostgreSQL driver and XML parser are allowed; a web framework is not.

---

## Milestone 6 — Fastify migration and structured backend

Status:

`Not started`

Expected learning:

- Fastify instance;
- routes and handlers;
- plugins;
- hooks;
- encapsulation;
- request/reply lifecycle;
- route schemas;
- validation and serialization;
- centralized error handling;
- configuration;
- separation of concerns;
- preserving API behavior with existing tests while migrating from framework-free Node.js.

Do not redesign the application during the first migration. First reproduce the same behavior in Fastify; improvements come after the comparison is understood.

---

## Milestone 7 — Authentication and authorization

Status:

`Not started`

Expected learning:

- password hashing;
- login/logout;
- sessions or token-based authentication as selected later;
- ownership and per-user data isolation;
- migration from the single-user database model to `users` / `user_id` ownership;
- permissions where justified;
- protected API routes;
- SSRF/outbound feed-fetch protections and safe handling of untrusted feed/article content;
- basic web security.

---

---

## Milestone 8 — React frontend

Status:

`Not started`

Expected learning:

- components;
- props;
- state;
- events;
- forms;
- routing;
- API calls;
- loading/error states;
- article/feed lists, filters, and pagination;
- protected frontend routes/screens after backend authentication exists.

Initial screens:

- subscriptions/feeds;
- article list/details;
- starred/unread state.

---

---

## Milestone 9 — Production fundamentals

Status:

`Not started`

Expected learning:

- Docker;
- configuration/secrets;
- logging;
- migrations;
- deployment;
- CI basics;
- production database considerations.

---

## Milestone 10 — Advanced backend features

Status:

`Not started`

Only introduce when earlier milestones are solid.

Possible topics:

- background jobs;
- scheduled tasks;
- Redis caching;
- queues;
- file imports;
- reporting;
- performance profiling;
- advanced PostgreSQL;
- concurrency/race-condition reasoning;
- observability.

---

# Completed topics

- Phase 0.1 — Initial programming assessment.
- Phase 1.2 — Conditions and boolean logic at a basic level.

---

# Topics in progress

- Phase 1.4 — Functions.
- Precise reasoning about boolean expressions and boundary conditions.

---

# Exercises

## Exercise 000 — Initial assessment and boolean-logic reinforcement

**Topic:**
Variables, conditions, functions, arrays, objects/references, debugging, decomposition, and introductory async-code reading.

**Project connection:**
General business-rule validation used only for the initial programming assessment; these concepts now transfer to Feed Reader domain rules.

**Result:**
Completed with help.

**What I understood:**
Basic value copying vs object references, condition evaluation, early returns, function parameters/results, `for...of` accumulation, and validation of a small business rule.

**Problems encountered:**
Initially handled a numeric array too loosely, confused a condition with a concrete function input, and added an unstated restriction. Needed repeated practice to state the logical complement of `<` precisely.

**Hints required:**
Significant progressive hints; no full implementation was supplied.

**Important mistake:**
The original validation added behavior not requested by the requirement. This remains an important lesson: implement exactly the stated rule before adding assumptions.

**Needs repetition:**
Yes — boolean negation, boundary values, and translating requirements into exactly the requested conditions.

## Exercise 001 — Subscription eligibility decomposition

**Topic:**
Functions, return values, early returns, boundary conditions, and decomposition.

**Project connection:**
Inoreader-like Feed Reader subscription rule.

**Result:**
Completed after one boundary-condition hint.

**What I understood:**
Can split a subscription decision into small functions and return booleans without confusing return values with console output.

**Problems encountered:**
Initially treated only equality with the subscription limit as full and missed the case where the current count already exceeds the limit.

**Hints required:**
Small.

**Important mistake:**
The available-slot condition must reject both equality and values above the maximum.

**Needs repetition:**
Yes — continue checking boundary comparisons in later exercises.

## Exercise 002 — Feed title normalization and refresh status

**Topic:**
Parameters and arguments, return values, local scope, early returns, and decomposition.

**Project connection:**
Inoreader-like Feed Reader title normalization and refresh-state decision.

**Result:**
Completed after one local-scope hint.

**What I understood:**
Can call a helper function, store its return value locally, order early-return conditions, and return formatted status strings.

**Problems encountered:**
Initially assigned to `result` without declaring it, which could create a global variable outside strict mode.

**Hints required:**
Small.

**Important mistake:**
Local intermediate values must be declared explicitly with `const` or `let`; also prefer strict equality when coercion is not intended.

**Needs repetition:**
Yes — reinforce explicit declarations and scope in later exercises.

For completed exercises, use this format:

## Exercise XXX — Exercise name

**Topic:**  
Topic name

**Project connection:**  
None / Inoreader-like Feed Reader project feature

**Result:**  
Completed / Completed with help / Needs revision

**What I understood:**  
Short note.

**Problems encountered:**  
Short note.

**Hints required:**  
None / Small / Significant / Full solution

**Important mistake:**  
Short note if relevant.

**Needs repetition:**  
Yes / No

---

# Concepts understood well

- Primitive values are copied by value in the assessed examples.
- Object variables can reference the same object.
- Basic `if`/`else`, comparisons, `&&`, `||`, and early-return control flow.
- Simple functions returning numbers, strings, or booleans.
- Basic `for...of` loop with an accumulator.

---

# Concepts needing practice

- Precise boolean negation and describing the remaining branch after earlier conditions fail.
- Boundary conditions such as `< 0` versus `<= 0`.
- Function invocation, return values, and console output as distinct concepts.
- Explaining decomposition and control flow in precise words.
- Async execution order; current awareness is intuitive rather than systematic.

---

# Recurring mistakes

None recorded yet.

Only add a recurring mistake after a pattern appears more than once.

Potential categories to track include:

- inconsistent object/data shapes;
- missing runtime input validation;
- incorrect async/await usage;
- forgetting to handle rejected promises;
- misunderstanding object/reference behavior;
- poor function decomposition;
- incorrect SQL joins;
- missing database constraints;
- incorrect HTTP status/method choices;
- weak validation;
- React state/effect mistakes;
- trying to solve bugs by random changes rather than evidence.

---

# Debugging skills

## Current level

`Beginner — can compare actual and expected results using a truth table after guidance; needs more practice identifying concrete failing inputs and describing return behavior precisely.`

Track progress in:

- reading JavaScript syntax and runtime errors;
- reading Node.js stack traces;
- locating runtime errors;
- inspecting variable values;
- testing hypotheses;
- using logs deliberately;
- using debugger/breakpoints;
- inspecting HTTP requests/responses;
- reading PostgreSQL errors;
- using browser developer tools;
- debugging frontend/backend integration.

---

# Problem-solving skills

## Current level

`Beginner / guided — can implement small business rules and revise them from counterexamples, but needs help avoiding unstated requirements and explaining the logic precisely.`

Track:

- understanding requirements;
- identifying inputs/outputs;
- breaking problems into steps;
- designing functions before coding;
- choosing data structures;
- designing API boundaries;
- designing database relationships;
- identifying edge cases;
- reasoning about business rules;
- solving without AI implementation assistance.

---

# Independence

Track how much assistance I require.

### Level 1 — Heavy assistance

Needs detailed instructions and substantial hints.

### Level 2 — Guided

Can solve problems with several hints.

### Level 3 — Mostly independent

Usually solves normal tasks alone but occasionally needs conceptual hints.

### Level 4 — Independent

Can design, implement, debug, test, and explain normal full-stack tasks independently.

### Level 5 — Strong independence

Can approach unfamiliar problems, read documentation, design solutions, evaluate tradeoffs, and debug across the stack independently.

Current independence level:

`Level 2 — Guided (provisional, based on the initial assessment).`

---

# Topics to repeat

- Boolean negation and complementary comparisons — required several attempts during Exercise 000; last practiced 2026-08-14; revisit through a Feed Reader validation exercise during the functions topic.
- Boundary-value validation — `< 0` versus `<= 0`; last practiced 2026-08-14; revisit with concrete boundary-value inputs in a Feed Reader exercise.

For each topic record:

- topic;
- why it needs repetition;
- when it was last practiced;
- suggested future exercise.

---

# Assessments

## Initial programming assessment — 2026-08-14

**Topics tested:**
Variables, primitive values, conditions, loops, functions, arrays, objects/references, basic debugging, decomposition, and basic async awareness.

**Strengths:**
Understands basic control flow, object-reference behavior, function structure, and simple loops. Correctly predicted the introductory promise example as `A`, `C`, `B`, while explicitly noting low confidence.

**Weaknesses:**
Precise boolean reasoning, boundary conditions, distinguishing return values from output, validating data shapes, and translating requirements without adding extra rules.

**Independence:**
Required several progressive hints and corrected the work successfully without receiving a full solution.

**Recommended next step:**
Phase 1.4 functions, with spaced repetition of boolean logic and validation boundaries.

Use assessments periodically rather than after every lesson.

Record:

- topics tested;
- strengths;
- weaknesses;
- exercises solved independently;
- exercises requiring hints;
- recommended next steps.

---

# Learning observations

- The student responds well to concrete counterexamples and truth tables.
- Written explanations currently reveal gaps that correct-looking code alone can hide; continue requiring short reasoning notes.
- Do not restart all fundamentals from zero; verify remaining Phase 1 topics with focused exercises.

Keep this section concise.

Record only observations useful for future teaching.

---

# Next milestone

Complete Phase 1.4 functions with an independently implemented exercise that demonstrates parameters, returns, local scope, early returns, and decomposition. Then reassess whether Phase 1.1 and Phase 1.3 need focused reinforcement before continuing to arrays and objects.
