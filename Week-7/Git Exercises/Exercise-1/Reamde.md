# Week 7 - Exercise 1

# Git Hands-On Lab - Git Basics

## Objective

The objective of this exercise is to become familiar with the basic Git workflow by configuring Git, creating a local repository, tracking files, committing changes, and synchronizing with a remote repository.

---

# Introduction

Git is a Distributed Version Control System (DVCS) used to track changes in source code during software development. It enables developers to collaborate efficiently, maintain version history, and restore previous versions of a project whenever required.

Git has become the industry standard version control system and is used in almost every software project.

---

# Topics Covered

- Git Installation
- Git Configuration
- Git Repository Initialization
- Working Directory
- Staging Area
- Local Repository
- Remote Repository
- Git Status
- Git Add
- Git Commit
- Git Push
- Git Pull

---

# Common Git Commands

## Check Git Version

```bash
git --version
```

Displays the installed Git version.

---

## Configure Username

```bash
git config --global user.name "Your Name"
```

Sets the global username used in commits.

---

## Configure Email

```bash
git config --global user.email "you@example.com"
```

Sets the email associated with commits.

---

## Initialize Repository

```bash
git init
```

Creates a new Git repository.

---

## Check Repository Status

```bash
git status
```

Displays the current state of the working directory.

---

## Add Files

```bash
git add .
```

Stages all modified files for the next commit.

---

## Commit Changes

```bash
git commit -m "Initial Commit"
```

Creates a snapshot of the staged changes.

---

## Push Changes

```bash
git push origin main
```

Uploads local commits to the remote repository.

---

## Pull Changes

```bash
git pull origin main
```

Downloads the latest changes from the remote repository.

---

# Git Workflow

```

Working Directory
↓

git add

↓

Staging Area

↓

git commit

↓

Local Repository

↓

git push

↓

Remote Repository

```

---

# Real-World Applications

Git is used for:

- Version Control
- Team Collaboration
- Branch Management
- Code Review
- Release Management
- Continuous Integration (CI/CD)

---

# Key Takeaways

- Git maintains complete version history.
- Every commit acts as a project checkpoint.
- Git enables safe collaboration among developers.
- Feature branches allow isolated development.
- Remote repositories keep projects synchronized.

---

# Conclusion

This exercise introduced the fundamental Git workflow that forms the foundation of modern software development.