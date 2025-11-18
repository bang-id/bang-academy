# Contributing to Bang Academy

Thank you for your interest in contributing! Here's how to get started.

## Development Setup

1. **Fork & Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bang-academy.git
   cd bang-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start the dev server**
   ```bash
   npm run dev
   ```

## Code Standards

- **TypeScript** - Always use TypeScript, no plain JavaScript
- **Components** - Use React functional components with hooks
- **Styling** - Use CSS Modules, one per component
- **Linting** - Run `npm run lint` before committing
- **Type Checking** - Run `npm run type-check` to verify types

## Before Submitting a PR

1. **Run all checks**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

2. **Test your changes**
   - Test locally with `npm run dev`
   - Verify the production build works with `npm run build`

3. **Update documentation** if your changes affect user-facing features

4. **Create a clear commit message**
   ```
   feat: add new animation component
   fix: resolve layout issue on mobile
   docs: update deployment instructions
   ```

## Pull Request Process

1. Update the README.md if needed
2. Ensure all tests pass and no linting errors
3. Reference related issues in your PR description
4. Request review from maintainers

## Code Style

- Use Prettier for formatting: `npx prettier --write .`
- Follow the naming conventions in existing code
- Add comments for complex logic
- Keep components small and focused

## Questions?

- Check existing issues and discussions
- Create a new issue for bugs or feature requests
- Be respectful and constructive in all interactions

Thank you for contributing! 🚀
