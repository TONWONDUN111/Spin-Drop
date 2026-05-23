# Branch Protection Policy

This document outlines the branch protection rules for the `drop` repository to ensure code quality, security, and maintainability of our important branches.

## Protected Branches

The following branches are protected with strict rules:

- `main` - Primary production branch
- `develop` - Development/staging branch

## Branch Protection Rules

### For `main` branch

The `main` branch requires the following protection rules:

#### 1. **Pull Request Reviews**
   - ✅ Require pull request reviews before merging
   - Minimum number of reviews: **1**
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require review from code owners (if CODEOWNERS file exists)

#### 2. **Status Checks**
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - Status checks required:
     - All CI/CD workflows must pass
     - Any automated security scans must pass

#### 3. **Branch Restrictions**
   - ✅ Restrict who can push to matching branches
   - ✅ Allow push access to: Repository administrators only
   - ✅ Include administrators in restrictions

#### 4. **Deletion Prevention**
   - ✅ Prevent deletion of the branch
   - ✅ Prevent force pushes to the branch

#### 5. **Additional Security**
   - ✅ Require conversation resolution before merging (when applicable)
   - ✅ Automatically dismiss approvals when push occurs

### For `develop` branch

The `develop` branch requires the following protection rules:

#### 1. **Pull Request Reviews**
   - ✅ Require pull request reviews before merging
   - Minimum number of reviews: **1**
   - ✅ Dismiss stale pull request approvals when new commits are pushed

#### 2. **Status Checks**
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging

#### 3. **Deletion Prevention**
   - ✅ Prevent deletion of the branch

## How to Configure Branch Protection

### Step 1: Access Repository Settings
1. Navigate to your repository on GitHub
2. Click **Settings** (gear icon)
3. In the left sidebar, click **Branches**

### Step 2: Add Branch Protection Rule
1. Click **Add rule**
2. Enter the branch name pattern: `main`
3. Configure the following options:

#### General Settings
- [x] **Require a pull request before merging**
  - Require approvals: `1`
  - [x] Dismiss stale pull request approvals when new commits are pushed
  - [x] Require review from code owners
- [x] **Require status checks to pass before merging**
  - [x] Require branches to be up to date before merging
  - [x] Include administrators in restrictions
- [x] **Restrict who can push to matching branches**
  - Allow specified actors to bypass required pull requests: *(leave empty for administrators only)*
  - [x] Include administrators in restrictions
- [x] **Prevent deletion of the branch**
- [x] **Allow force pushes**
  - ⭕ Do not allow force pushes
- [x] **Require conversation resolution before merging**

### Step 3: Repeat for Other Protected Branches
Repeat the process for the `develop` branch with the same or slightly relaxed rules as needed.

## Enforcement

These branch protection rules are enforced automatically by GitHub. The following scenarios will be prevented:

1. **Direct pushes to protected branches** - All changes must go through pull requests
2. **Merging without reviews** - All pull requests require approval before merging
3. **Merging failing checks** - CI/CD checks must pass before merging
4. **Stale reviews** - New commits invalidate previous approvals
5. **Deleting protected branches** - Branch deletion is prevented
6. **Force pushing** - Non-fast-forward updates are prevented

## Best Practices

1. **Always use feature branches** - Create descriptive branch names for new features
2. **Write clear PR descriptions** - Explain what, why, and how of your changes
3. **Request reviews** - Assign reviewers to pull requests
4. **Run checks locally** - Test your code before pushing to avoid failed checks
5. **Keep branches updated** - Sync with main branch to avoid merge conflicts
6. **Close stale PRs** - Don't leave PRs open indefinitely

## Exceptions

In case of critical security issues or production emergencies:

1. Contact the repository maintainers
2. Request temporary exception (if allowed by GitHub settings)
3. Document the reason for the exception
4. Complete normal review process as soon as possible after the emergency

## Disabling Branch Protection

To modify or disable branch protection rules:

1. Go to **Settings** > **Branches**
2. Click **Edit** next to the protected branch rule
3. Make necessary changes or click **Delete** to remove protection
4. Click **Save changes**

**Note:** Only repository administrators can modify branch protection rules.

## References

- [GitHub: Protecting important branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
- [GitHub: Branch protection rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule)
