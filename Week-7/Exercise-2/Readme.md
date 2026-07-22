# Week 7 – Exercise 2

## Git Hands-On Lab – .gitignore

### Objective

Learn how to ignore unwanted files and folders using the `.gitignore` file.

## Files Created

```
GitDemo/
│
├── .gitignore
├── app.log
├── log/
│   └── error.log
└── src/
    └── sample.txt
```

## .gitignore Rules

```gitignore
*.log
log/
```

## Verification

- `app.log` is ignored.
- The `log` directory is ignored.
- `src/sample.txt` is tracked.
- `git status` confirms only intended files are staged.

## Note

The original Cognizant exercise demonstrates `.gitignore` using a standalone Git repository. The repository was recreated locally for practice, and the nested `.git` directory was removed before committing to avoid embedding one Git repository inside another.