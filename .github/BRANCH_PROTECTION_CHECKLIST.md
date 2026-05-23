# Branch Protection Checklist

Use this checklist to verify that branch protection is properly configured on your repository.

## Repository Configuration

- [ ] Repository is set to private (if sensitive) or public (if appropriate)
- [ ] Repository has clear README with contribution guidelines
- [ ] Repository has LICENSE file
- [ ] Repository has CONTRIBUTING.md (if applicable)

## Branch Protection Setup - `main` Branch

### Basic Protection
- [ ] Branch protection rule exists for `main`
- [ ] Pull request reviews required: YES
- [ ] Number of approvals required: 1+
- [ ] Dismiss stale review approvals: YES
- [ ] Require code owner reviews: YES (if CODEOWNERS exists)

### Merge Requirements
- [ ] Require status checks to pass before merging: YES
- [ ] Require branches to be up to date before merging: YES
- [ ] Status checks configured for CI/CD pipelines

### Access Control
- [ ] Restrict who can push to this branch: YES
- [ ] Only administrators can push: YES
- [ ] Include administrators in restrictions: YES

### Safety Features
- [ ] Allow deletion: NO (Prevent deletion enabled)
- [ ] Allow force pushes: NO (Prevent force pushes enabled)
- [ ] Require conversation resolution: YES (if applicable)

## Branch Protection Setup - `develop` Branch

- [ ] Branch protection rule exists for `develop`
- [ ] Pull request reviews required: YES
- [ ] Number of approvals required: 1
- [ ] Dismiss stale review approvals: YES
- [ ] Require status checks to pass before merging: YES
- [ ] Require branches to be up to date before merging: YES
- [ ] Prevent deletion: YES
- [ ] Prevent force pushes: YES

## Workflow & Process

- [ ] CODEOWNERS file created (if team has code ownership)
- [ ] Pull request template created (.github/pull_request_template.md)
- [ ] Issue template created (if applicable)
- [ ] Contributing guide updated with branch protection info
- [ ] Team members are aware of branch protection rules

## CI/CD Integration

- [ ] GitHub Actions workflows configured (if applicable)
- [ ] Required status checks are clearly defined
- [ ] CI/CD pipelines are reliable and don't have false positives
- [ ] Build/test results are visible in pull requests

## Documentation

- [ ] BRANCH_PROTECTION.md created and accessible
- [ ] README includes link to branch protection policy
- [ ] Contributing guide explains PR process
- [ ] Troubleshooting guide for common branch protection issues

## Monitoring & Maintenance

- [ ] Branch protection rules reviewed quarterly
- [ ] Team trained on branch protection workflow
- [ ] Approval history reviewed for compliance
- [ ] Exceptions logged and documented (if any)

## Troubleshooting

### If PR can't be merged even after approval:
- [ ] Verify status checks pass (check CI/CD results)
- [ ] Verify branch is up to date (sync with main)
- [ ] Verify approval from qualified reviewer (not the author)
- [ ] Check that no required reviewers are blocking

### If unable to push to main:
- [ ] Remember: All changes must be through pull requests
- [ ] Create a feature branch instead
- [ ] Open a pull request from your branch
- [ ] Wait for reviews and approvals

### If branch can't be deleted:
- [ ] This is expected for protected branches
- [ ] Use the GitHub UI to archive the branch if needed
- [ ] Contact administrator if special deletion is needed

## Additional Resources

- [GitHub: Protected Branches Documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [GitHub: About Code Owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [GitHub: Pull Request Best Practices](https://docs.github.com/en/pull-requests)
