# PROGRESS.md — Learning Progress

## Student profile

Primary language:

`TypeScript`

Runtime / frontend:

`Node.js + React`

Primary goal:

`Become a backend-oriented full-stack developer capable of building real business applications independently.`

Main learning project:

`Financial / Business Management System`

Starting level:

`Beginner. Exact TypeScript / JavaScript / web-development level still needs an initial assessment.`

Study start:

`2026-08-14`

Study pace:

`Mastery-based. Weekly study time is not fixed in this file yet.`

---

# Current status

## Current phase

`Phase 1 — JavaScript and TypeScript programming fundamentals`

## Current topic

`Begin Phase 1.4 — Functions, while continuing to reinforce precise boolean reasoning and TypeScript types.`

## Current exercise

`Exercise 000 — Initial assessment and boolean-logic reinforcement — completed with guidance.`

## Recommended next action

Start a focused lesson on Phase 1.4 functions:

- parameters vs arguments;
- return values vs console output;
- local scope;
- early returns;
- decomposing one business rule into small functions.

Continue checking boolean negation and boundary conditions in later exercises. Verify the Phase 0.2 development-environment skills separately rather than assuming they are mastered.

---

# Learning direction

The course is **backend-oriented full-stack**.

Priority order:

1. programming and TypeScript fundamentals;
2. Node.js and asynchronous programming;
3. HTTP and REST APIs;
4. SQL and PostgreSQL;
5. backend application structure;
6. business logic and correctness;
7. testing and debugging;
8. React and frontend integration;
9. authentication and authorization;
10. Docker, deployment, and production fundamentals;
11. more advanced backend topics when justified.

The main project should grow throughout the roadmap rather than being postponed until the end.

---

# Main project status

## Financial / Business Management System

**Goal:**  
Build a realistic full-stack business application while learning software development.

**Stack target:**

- TypeScript;
- Node.js;
- NestJS after Node.js / HTTP fundamentals;
- PostgreSQL;
- React;
- REST / JSON;
- Git;
- testing;
- Docker;
- deployment.

**Current status:**  
`Planned — implementation has not started.`

**Initial domain scope:**

- users;
- companies;
- customers;
- suppliers;
- invoices;
- invoice items;
- payments;
- basic reporting.

Later modules may include:

- products/services;
- bank accounts;
- financial transactions;
- accounts receivable/payable;
- budgets;
- audit history;
- imports;
- background jobs.

Do not build later modules before the learning plan reaches the necessary concepts.

---

# Project milestones

## Milestone 0 — Domain exercises without a web server

Status:

`Not started`

Expected learning:

- TypeScript basics;
- functions;
- objects;
- arrays;
- type aliases/interfaces;
- modules;
- validation logic;
- simple financial/business rules.

Possible project fragments:

- represent a customer;
- represent an invoice;
- calculate invoice totals;
- determine invoice status;
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
- project structure.

---

## Milestone 2 — First HTTP API

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

- customers;
- invoices.

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

## Milestone 4 — Structured backend application

Status:

`Not started`

Expected learning:

- NestJS;
- modules;
- controllers;
- services/providers;
- dependency injection;
- DTO/validation concepts;
- configuration;
- separation of concerns;
- backend tests.

---

## Milestone 5 — Financial business rules

Status:

`Not started`

Expected learning:

- invoice lifecycle;
- partial and full payments;
- monetary correctness;
- database transactions;
- validation;
- idempotency concepts;
- auditability concepts.

---

## Milestone 6 — React frontend

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
- business tables and filters.

Initial screens:

- customers;
- invoices;
- payments.

---

## Milestone 7 — Authentication and authorization

Status:

`Not started`

Expected learning:

- password hashing;
- login/logout;
- sessions or token-based authentication as selected later;
- roles;
- permissions;
- protected API routes;
- protected frontend routes;
- basic web security.

---

## Milestone 8 — Production fundamentals

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

## Milestone 9 — Advanced backend features

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
Invoice status, outstanding balance, and payment-validation rules.

**Result:**
Completed with help.

**What I understood:**
Basic value copying vs object references, condition evaluation, early returns, typed function parameters/results, `for...of` accumulation, and validation of whether a payment may be recorded.

**Problems encountered:**
Initially used `any` for a numeric array, confused a condition with a concrete function input, and added an unstated overpayment restriction. Needed repeated practice to state the logical complement of `<` precisely.

**Hints required:**
Significant progressive hints; no full implementation was supplied.

**Important mistake:**
The original payment check compared the post-payment total with the invoice total even though the requirement only asked whether the invoice was already paid before the new payment.

**Needs repetition:**
Yes — boolean negation, boundary values, and translating requirements into exactly the requested conditions.

For completed exercises, use this format:

## Exercise XXX — Exercise name

**Topic:**  
Topic name

**Project connection:**  
None / Financial-Business project feature

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
- Simple typed functions returning `number`, `string`, or `boolean`.
- Basic `for...of` loop with an accumulator.

---

# Concepts needing practice

- Precise boolean negation and describing the remaining branch after earlier conditions fail.
- Boundary conditions such as `< 0` versus `<= 0`.
- Function invocation, return values, and console output as distinct concepts.
- Array typing without falling back to `any`.
- Explaining decomposition and control flow in precise words.
- Async execution order; current awareness is intuitive rather than systematic.

---

# Recurring mistakes

None recorded yet.

Only add a recurring mistake after a pattern appears more than once.

Potential categories to track include:

- TypeScript type confusion;
- using `any` to avoid understanding a type problem;
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

- reading TypeScript compiler errors;
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

- Boolean negation and complementary comparisons — required several attempts during Exercise 000; last practiced 2026-08-14; revisit through a different validation exercise during the functions topic.
- Boundary-value validation — `< 0` versus `<= 0`; last practiced 2026-08-14; revisit with zero and negative business inputs.

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
Understands basic control flow, object-reference behavior, typed function structure, and simple loops. Correctly predicted the introductory promise example as `A`, `C`, `B`, while explicitly noting low confidence.

**Weaknesses:**
Precise boolean reasoning, boundary conditions, distinguishing return values from output, avoiding `any`, and translating requirements without adding extra rules.

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
