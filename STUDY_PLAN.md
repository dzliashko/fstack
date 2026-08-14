# STUDY_PLAN.md — Backend-Oriented Full-Stack Learning Roadmap

## Goal

This document contains the roadmap for becoming a **backend-oriented full-stack developer** by building one substantial application:

# Financial / Business Management System

Target stack:

- TypeScript;
- Node.js;
- NestJS after Node.js / HTTP fundamentals;
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

`TypeScript`

Backend runtime:

`Node.js`

Backend framework:

`NestJS — introduced only after Node.js and HTTP fundamentals`

Database:

`PostgreSQL`

Frontend:

`React`

Main goal:

`Backend-oriented full-stack web development`

Current level:

`Beginner — exact starting point must be established by an initial assessment.`

Approximate study time:

`Not fixed. Progress by mastery rather than calendar deadlines.`

---

# Learning priorities

This is not a 50/50 frontend/backend curriculum.

Approximate emphasis:

- backend programming and application logic — high;
- SQL and databases — high;
- frontend — moderate;
- Git/testing/debugging — continuous;
- deployment/operations — introduced when the application is ready;
- algorithms/data structures — enough to become a competent developer, without turning the course into interview-puzzle training.

The goal is to become capable of building complete products while developing deeper backend skill.

---

# Main project vision

The Financial / Business Management System is a business application for managing core operational and financial information.

Possible long-term capabilities:

- user accounts;
- companies;
- customers;
- suppliers;
- products and services;
- invoices and invoice items;
- payments;
- bank accounts;
- financial transactions;
- accounts receivable / payable;
- budgets;
- basic financial and operational reports;
- audit history;
- imports and exports;
- notifications/background jobs.

This is the long-term vision, NOT the initial scope.

The application should begin extremely small and grow with the curriculum.

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
- npm;
- project directories;
- VS Code or another editor;
- running scripts;
- TypeScript compiler/tooling;
- reading command-line errors.

Understand at a simple level:

```text
TypeScript source
      ↓
Type checking / transpilation
      ↓
JavaScript
      ↓
Node.js runtime
```

Practice:

- create a minimal project;
- run TypeScript code;
- add npm scripts;
- deliberately create and diagnose a simple compiler/runtime error.

Status:

`Not started`

---

# Phase 1 — JavaScript and TypeScript programming fundamentals

Do not treat TypeScript as only "JavaScript with type annotations".

Learn JavaScript runtime behavior and TypeScript's type system together, in a beginner-friendly order.

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

TypeScript:

- type inference;
- explicit annotations when useful;
- why `any` is dangerous as a default escape hatch.

Project connection:

Represent simple financial values and customer/invoice fields without creating a full domain model yet.

Status:

`Not started`

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

- whether an invoice can be paid;
- whether an amount is valid;
- whether a customer is active.

Status:

`Completed at a basic level — reinforced with invoice/payment validation exercises on 2026-08-14; schedule later repetition.`

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

- totals;
- searches;
- filtering;
- invoice-item calculations.

Status:

`Not started`

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

- calculate invoice subtotal;
- calculate outstanding balance;
- determine simple invoice status;
- validate basic domain input.

Do not turn these examples into a full application yet.

Status:

`Not started`

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

Work with collections of customers, invoices, invoice items, and payments in memory.

Status:

`Not started`

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

- Customer;
- Invoice;
- InvoiceItem;
- Payment.

Status:

`Not started`

---

## 1.7 TypeScript object modeling

Learn:

- type aliases;
- interfaces;
- union types;
- literal types;
- optional fields;
- narrowing;
- enums only if there is a good reason;
- readonly concepts where useful.

Project connection:

Model invoice status safely, for example as a finite set of valid values rather than arbitrary strings.

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

Use invoice numbers, customer names, issue dates, and due dates.

Do not introduce complicated date libraries before the problem is understood.

Status:

`Not started`

---

## 1.9 Errors and debugging fundamentals

Learn:

- syntax errors;
- TypeScript compiler errors;
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

- write small TypeScript programs;
- use functions and arrays;
- model simple data with types;
- break a problem into functions;
- read common compiler/runtime errors;
- debug simple logic;
- explain my own code.

Project milestone:

Build a small in-memory **Invoice Domain Prototype** without a web server or database.

It should be small enough that I understand every line.

Status:

`Not started`

---

# Phase 2 — Core TypeScript and program structure

## 2.1 Modules

Learn:

- `import` / `export`;
- file boundaries;
- separating domain types and functions;
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

## 2.3 Generics — practical introduction

Learn only after normal types are comfortable.

Understand:

- the problem generics solve;
- simple generic functions/types;
- reading generic library types.

Do not over-focus on advanced type-level programming.

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
- interfaces/contracts;
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

The Invoice Domain Prototype should now be:

- split into sensible modules;
- typed;
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

Temporarily import/export simple business data as JSON/CSV-style files for learning purposes.

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

## Phase 3 checkpoint

Verify I can:

- explain what `await` is waiting for;
- handle rejected promises;
- predict common async execution behavior;
- read/write data asynchronously;
- understand what Node.js is doing at a practical level.

Status:

`Not started`

---

# Phase 4 — HTTP and REST API fundamentals

Learn HTTP BEFORE depending on NestJS abstractions.

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

Do NOT build the full application this way.

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
GET    /customers
POST   /customers
GET    /customers/:id
PATCH  /customers/:id
DELETE /customers/:id

GET    /invoices
POST   /invoices
GET    /invoices/:id
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
customers
invoices
invoice_items
payments
```

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

- invoices by customer;
- total invoiced amount;
- outstanding balances;
- payments per invoice.

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

## 5.6 Money and financial data

Learn:

- why binary floating-point can be dangerous for money;
- PostgreSQL numeric/decimal concepts;
- TypeScript/JavaScript number limitations;
- rounding rules;
- currency as explicit data;
- where domain rules belong.

Do not oversimplify financial calculations.

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
- why multi-step financial operations may need a transaction;
- race-condition intuition;
- isolation/locking introduced gradually.

Project example:

Applying a payment may require several related database changes that must succeed or fail together.

Status:

`Not started`

---

## 5.9 Node.js + PostgreSQL without ORM

Connect the backend to PostgreSQL using a database driver/query library.

Practice:

- parameterized SQL;
- mapping database rows to application types;
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
- access PostgreSQL from Node.js without an ORM hiding the fundamentals.

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

- invoice total calculations;
- status calculations;
- validation rules;
- payment allocation rules.

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

# Phase 7 — NestJS and structured backend development

Only begin after TypeScript, Node.js, HTTP, async programming, and basic PostgreSQL are reasonably solid.

## 7.1 Why use a backend framework

Compare what was painful in the raw Node.js application with what a framework provides.

Understand the tradeoff:

- more structure and conventions;
- more abstraction that must be understood.

Status:

`Not started`

---

## 7.2 NestJS fundamentals

Learn:

- modules;
- controllers;
- providers/services;
- dependency injection;
- decorators;
- request lifecycle at a practical level.

Rebuild/refactor a small part of the API rather than generating the whole app at once.

Status:

`Not started`

---

## 7.3 DTOs and validation

Learn:

- transport data vs domain/database data;
- validation;
- invalid requests;
- consistent error handling.

Status:

`Not started`

---

## 7.4 Application structure

Gradually organize by business feature/module, for example:

```text
src/
  customers/
  invoices/
  payments/
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

Backend should now support a coherent initial workflow, such as:

```text
Customer
  ↓
Invoice
  ↓
Invoice Items
  ↓
Payment
  ↓
Outstanding Balance
```

The goal is correctness and understanding, not feature count.

Status:

`Not started`

---

# Phase 8 — React and frontend fundamentals

The frontend is learned after the backend/API foundation is strong enough to give it a real server to use.

## 8.1 Browser/web fundamentals

Learn enough HTML/CSS/browser concepts to understand React output:

- semantic HTML;
- forms;
- basic CSS layout;
- browser events;
- network requests;
- developer tools.

Status:

`Not started`

---

## 8.2 React mental model

Learn:

- component;
- JSX/TSX;
- props;
- rendering;
- component composition;
- state;
- events.

Avoid adding state libraries at the beginning.

Status:

`Not started`

---

## 8.3 Forms

Learn:

- controlled inputs;
- form state;
- validation;
- submission;
- displaying server errors.

Project screens:

- create/edit customer;
- create invoice.

Status:

`Not started`

---

## 8.4 Calling the backend

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

## 8.5 Routing

Learn client-side routing when multiple screens exist.

Possible screens:

- Customers;
- Customer Details;
- Invoices;
- Invoice Details;
- Payments.

Status:

`Not started`

---

## 8.6 Business tables

Learn practical UI patterns:

- tables;
- sorting;
- filters;
- pagination;
- empty states;
- loading states.

This is more important for this course than advanced visual effects.

Status:

`Not started`

---

## 8.7 React effects and derived state

Learn `useEffect` carefully:

- what an effect is for;
- dependency behavior;
- common infinite-loop/stale-data mistakes;
- avoiding effects when simple derived values are enough.

Status:

`Not started`

---

## 8.8 Frontend testing — practical level

Learn:

- testing user-visible behavior;
- component tests;
- avoiding tests that only mirror implementation details.

Status:

`Not started`

---

## Phase 8 project milestone

Create a usable React interface for the existing backend.

Minimum coherent workflow:

```text
Customers → Create Invoice → Record Payment → View Balance
```

Status:

`Not started`

---

# Phase 9 — Authentication, authorization, and security basics

## 9.1 Authentication concepts

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

## 9.2 Roles and permissions

Project roles may eventually include:

- Admin;
- Accountant;
- Manager;
- Viewer.

Learn to answer:

- who may perform an action;
- where authorization is enforced;
- why hiding a button in React is not backend authorization.

Status:

`Not started`

---

## 9.3 Security fundamentals

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
- sensitive logging.

Do not turn this into a security-specialist curriculum, but do not ignore basic web security.

Status:

`Not started`

---

# Phase 10 — Deeper financial/business backend logic

Use the project domain to learn harder backend engineering.

## 10.1 Invoice lifecycle

Possible states:

```text
Draft
Issued
PartiallyPaid
Paid
Overdue
Cancelled
```

Design allowed transitions rather than assigning arbitrary states everywhere.

Learn state-transition reasoning.

Status:

`Not started`

---

## 10.2 Payments

Handle cases such as:

- full payment;
- partial payment;
- multiple payments;
- invalid negative amount;
- overpayment policy;
- duplicate request;
- cancelled invoice;
- concurrent attempts later.

Status:

`Not started`

---

## 10.3 Transactions and consistency

Deepen database transaction knowledge using real project operations.

Learn to identify invariants such as:

- applied payment totals must agree with stored payment records;
- an operation must not partially update several related records.

Status:

`Not started`

---

## 10.4 Idempotency

Learn why retrying a request can accidentally perform a financial operation twice.

Design a small idempotency mechanism when the current skill level is ready.

Status:

`Not started`

---

## 10.5 Audit history

Learn why important business systems may need a historical record of changes.

Explore approaches without building an enterprise audit platform unnecessarily.

Status:

`Not started`

---

## 10.6 Reporting queries

Build reports such as:

- revenue/invoiced totals over a period;
- outstanding receivables;
- overdue invoices;
- payments by period;
- top customers;
- aging buckets later.

Use SQL first.

Status:

`Not started`

---

# Phase 11 — Docker, Linux, and deployment

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

- type checking;
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

- mark invoices overdue;
- send reminders;
- import data;
- generate reports.

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

notifications or document processing.

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

- two payments applied at nearly the same time;
- duplicate submissions;
- concurrent updates.

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
- appropriate interfaces;
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

The Financial / Business Management System should become the main portfolio project, but it must not be the only evidence of skill.

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

`Subscription / SaaS billing and organization management`

Potential concepts:

- organizations;
- users;
- plans;
- subscriptions;
- usage;
- billing;
- notifications.

The purpose is to prove that knowledge transfers beyond the first project.

Status:

`Not started`

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

- TypeScript;
- Node.js;
- PostgreSQL;
- React;
- NestJS;
- selected libraries.

The goal is to reduce dependence on AI for normal technical questions.

---

## Code quality

Gradually improve:

- naming;
- function size;
- module boundaries;
- types;
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
4. include at least one task connected to the Financial / Business Management System when appropriate;
5. identify weak areas;
6. update `PROGRESS.md`;
7. revisit weak prerequisites before continuing.

Do not pass a phase solely because the planned calendar time has elapsed.

---

# Graduation criteria — junior backend-oriented full-stack level

Do not consider the roadmap complete until I can independently perform most of the following at an appropriate junior level.

## Programming

- write TypeScript without relying on generated solutions;
- use types meaningfully;
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
- use authentication/authorization correctly at a basic level;
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
- build practical tables/forms for a business application;
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

The final goal is not memorizing TypeScript syntax or finishing a checklist.

The final goal is being able to solve real software-development problems independently.
