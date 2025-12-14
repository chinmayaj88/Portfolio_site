# Branch Protection Guidelines

## Branch Strategy

### `prod` Branch
- **Purpose**: Production deployment branch
- **Protection**: Should be protected in GitHub settings
- **Deployment**: **Automatically deploys to OCI Compute Instance on push**
- **Merge Policy**: Only merge after thorough testing

### `main` Branch
- **Purpose**: Main development branch
- **CI**: Runs build and test pipeline (no deployment)
- **Merge Policy**: Merge from feature branches after review

### `develop` Branch
- **Purpose**: Development integration branch
- **CI**: Runs build and test pipeline (no deployment)
- **Merge Policy**: Merge feature branches here first

### `feature/**` Branches
- **Purpose**: Feature development
- **CI**: Runs build and test pipeline (no deployment)
- **Merge Policy**: Merge to `develop` or `main` after review

## Recommended GitHub Branch Protection Rules

### For `prod` Branch:
1. **Require pull request reviews** before merging
2. **Require status checks** to pass before merging
3. **Require branches to be up to date** before merging
4. **Do not allow force pushes**
5. **Do not allow deletions**

### Setup Instructions:
1. Go to repository **Settings** > **Branches**
2. Click **Add rule** for `prod` branch
3. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (at least 1)
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Do not allow bypassing the above settings

## Deployment Flow

```
feature/xyz → develop → main → prod (DEPLOYS TO OCI)
```

**Important**: Only pushes to `prod` trigger production deployment!

