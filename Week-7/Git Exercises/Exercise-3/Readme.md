# Week 7 - Exercise 3

# Git Hands-On Lab - Branching and Merging

## Objective

The objective of this exercise is to understand how Git branches work, how independent development can take place without affecting the main codebase, and how changes from different branches can be merged safely.

---

# Introduction

In software development, multiple developers often work on different features, bug fixes, or experiments simultaneously. If everyone modified the main branch directly, it would quickly become unstable and difficult to maintain.

Git solves this problem using **branches**, allowing developers to work independently while preserving the stability of the main branch. Once a feature is complete and tested, it can be merged back into the main branch.

Branching is one of Git's most powerful features and is widely used in professional software development workflows.

---

# Topics Covered

- Git Branches
- Creating Branches
- Switching Branches
- Listing Branches
- Comparing Branches
- Merging Branches
- Commit History
- Deleting Branches

---

# Understanding Git Branches

A branch is an independent line of development.

Instead of modifying the main branch directly, developers create feature branches where they can work safely without impacting the stable version of the project.

Example workflow:

```

main
│
├── feature/login
│
├── feature/payment
│
└── feature/dashboard

```

Each branch contains its own commits until it is merged back into the main branch.

---

# Common Git Commands

## Create a New Branch

```bash
git branch feature/new-feature
```

Creates a new branch without switching to it.

---

## Create and Switch to a Branch

```bash
git checkout -b feature/new-feature
```

or

```bash
git switch -c feature/new-feature
```

Creates and immediately switches to the new branch.

---

## List Available Branches

```bash
git branch
```

Displays all local branches.

The current branch is indicated using:

```

*

```

---

## Switch Branches

```bash
git checkout main
```

or

```bash
git switch main
```

Moves from the current branch to another branch.

---

## Compare Branches

```bash
git diff main feature/new-feature
```

Shows differences between two branches.

---

## Merge Branch

```bash
git merge feature/new-feature
```

Combines changes from the specified branch into the current branch.

---

## View Commit History

```bash
git log --oneline --graph --decorate
```

Displays a graphical representation of the commit history.

---

## Delete Branch

```bash
git branch -d feature/new-feature
```

Deletes the branch after it has been merged successfully.

---

# Branching Workflow

```

main
│
├───────────────┐
│               │
│      feature/login
│               │
│          Commit A
│               │
│          Commit B
│               │
└────────Merge──┘

```

---

# Real-World Applications

Git branches are commonly used for:

- Feature Development
- Bug Fixes
- Release Preparation
- Hotfixes
- Experimental Development
- Team Collaboration

---

# Best Practices

- Never develop directly on the main branch.
- Use descriptive branch names.
- Commit changes regularly.
- Merge only after testing.
- Delete merged branches to keep the repository clean.

---

# Key Takeaways

- Branches allow isolated development.
- Merging combines completed work into the main branch.
- Git preserves complete branch history.
- Feature branches improve collaboration and code quality.

---

# Conclusion

Branching enables multiple developers to work simultaneously without interfering with each other's work. Combined with merging, it forms the foundation of modern collaborative software development workflows.