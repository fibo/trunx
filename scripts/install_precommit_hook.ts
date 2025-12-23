import { chmod, copyFile } from "node:fs/promises"

// Install Git pre-commit hook.
const preCommitHook = ".git/hooks/pre-commit"
await copyFile("scripts/pre-commit.sh", preCommitHook)
await chmod(preCommitHook, 0o755)
