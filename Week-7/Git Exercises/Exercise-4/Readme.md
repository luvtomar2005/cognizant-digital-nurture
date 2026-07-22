# Week 7 - Exercise 4

# Git Hands-On Lab - Merge Conflict Resolution

## Objective

The objective of this exercise is to understand why merge conflicts occur, how Git identifies conflicting changes, and how to resolve conflicts safely while preserving the intended code.

---

# Introduction

A merge conflict occurs when Git cannot automatically combine changes from two branches because the same part of a file has been modified differently.

Git stops the merge process and asks the developer to manually resolve the conflict before completing the merge.

Understanding merge conflicts is an essential skill for collaborative software development.

---

# Topics Covered

- Merge Conflicts
- Conflict Detection
- Conflict Markers
- Conflict Resolution
- Three-Way Merge
- Commiting Resolved Changes

---

# Why Merge Conflicts Occur

Example:

Developer A modifies:

```
Hello World
```

Developer B modifies the same line:

```
Welcome World
```

Git cannot determine which version should be kept.

Instead of making assumptions, Git requests manual intervention.

---

# Conflict Markers

Git inserts conflict markers into the affected file:

```text
<<<<<<< HEAD
Current Branch Code
=======
Incoming Branch Code
>>>>>>> feature-branch
```

Meaning:

- `<<<<<<< HEAD` → Current branch changes
- `=======` → Separator
- `>>>>>>> feature-branch` → Incoming branch changes

The developer must edit the file, remove the markers, and keep the correct content.

---

# Common Git Commands

## Check Repository Status

```bash
git status
```

Displays files containing merge conflicts.

---

## Compare Branches

```bash
git diff
```

Shows conflicting changes.

---

## Resolve Conflict

Edit the conflicting file manually or use a merge tool.

---

## Stage Resolved Files

```bash
git add .
```

Marks the conflict as resolved.

---

## Complete Merge

```bash
git commit
```

Creates the merge commit.

---

# Three-Way Merge

Git uses a three-way merge strategy involving:

- Common Ancestor
- Current Branch
- Incoming Branch

If automatic merging is not possible, a conflict is generated.

---

# Best Practices

- Pull the latest changes before starting new work.
- Keep commits small and focused.
- Merge frequently.
- Communicate with team members.
- Resolve conflicts carefully.

---

# Real-World Applications

Merge conflicts commonly occur during:

- Team Development
- Code Reviews
- Feature Integration
- Release Preparation

Understanding conflict resolution ensures smooth collaboration among developers.

---

# Key Takeaways

- Merge conflicts are normal.
- Git never deletes code automatically during a conflict.
- Developers must resolve conflicts manually.
- Proper Git workflow minimizes merge conflicts.

---

# Conclusion

Merge conflicts are an expected part of collaborative development. Learning to identify, understand, and resolve conflicts is an essential Git skill for every software engineer.