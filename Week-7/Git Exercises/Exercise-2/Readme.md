# Week 7 - Exercise 2

# Git Hands-On Lab - .gitignore

## Objective

Learn how to prevent unnecessary files and folders from being tracked by Git using the `.gitignore` file.

---

# Introduction

During development, projects generate many temporary files such as log files, build outputs, IDE settings, and dependency folders. These files should not be committed to version control because they increase repository size and are often machine-specific.

Git provides the `.gitignore` file to specify which files and folders should be ignored.

---

# Topics Covered

- .gitignore
- Ignoring Files
- Ignoring Directories
- Wildcards
- Pattern Matching
- Best Practices

---

# Example .gitignore

```gitignore
# Ignore log files
*.log

# Ignore log directory
log/

# Ignore Node dependencies
node_modules/

# Ignore Java build output
target/

# Ignore IDE settings
.idea/

# Ignore environment files
.env
```

---

# Common Commands

## Check Status

```bash
git status
```

Displays tracked and untracked files.

---

## Stage Files

```bash
git add .
```

Stages all files except those ignored by `.gitignore`.

---

## Commit

```bash
git commit -m "Add .gitignore"
```

Creates a commit excluding ignored files.

---

# Why .gitignore is Important

Using `.gitignore` helps to:

- Keep repositories clean.
- Avoid committing unnecessary files.
- Protect sensitive information.
- Reduce repository size.
- Improve collaboration.

---

# Common Files Ignored

- Log Files
- Build Files
- Temporary Files
- IDE Configuration
- Dependency Folders
- Environment Variables

---

# Best Practices

- Create `.gitignore` at the beginning of a project.
- Never commit secret keys or passwords.
- Ignore generated files.
- Keep only source code under version control.

---

# Conclusion

The `.gitignore` file is an essential part of every Git project and helps maintain a clean and efficient repository.