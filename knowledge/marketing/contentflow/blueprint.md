# ContentFlow - Project Blueprint

## Overview
ContentFlow is a multi-project content management dashboard built with Angular v20+ and Firebase, designed to manage AI-generated social media content across multiple platforms.

## Architecture Summary

### Technology Stack
- **Frontend**: Angular v20+ with standalone components
- **State Management**: Signals and computed values
- **UI Framework**: Angular Material v18+
- **Backend**: Firebase (Firestore, Auth, Storage)
- **External Integration**: N8N workflows for content generation and publishing

### Key Architectural Decisions
1. **Zoneless Operation**: Using `provideExperimentalZonelessChangeDetection()` for better performance
2. **Router-First Architecture**: All data loading happens in route resolvers (CS-R01-R04)
3. **Standalone Components**: 100% standalone architecture, no NgModules
4. **Signal-Based State**: Using Angular signals for reactive state management
5. **Modern Control Flow**: Using @if, @for, @switch instead of structural directives

## Project Structure

```
src/app/
├── pages/                    # Route-based page components
│   ├── projects/            # Project list and management
│   ├── project-detail/      # Individual project dashboard
│   ├── topics/              # Topic review and approval
│   └── content/             # Content editing and scheduling
├── features/                # Feature-specific components
│   ├── topic-management/    # Topic approval workflows
│   ├── content-editor/      # Rich text editing
│   └── media-gallery/       # Media upload and management
├── shared/                  # Cross-cutting concerns (3+ features)
│   ├── ui/                  # Reusable UI components
│   ├── services/            # Core services
│   ├── guards/              # Route guards
│   └── pipes/               # Custom pipes
├── core/                    # Application core
│   └── guards/              # Auth guards
└── app.config.ts            # Application configuration
```

## Data Flow

1. **Content Discovery** (External)
   - N8N workflows discover trending topics
   - Topics saved to Firestore as 'pending'

2. **Topic Approval** (ContentFlow)
   - Users review pending topics
   - Approved topics trigger content generation

3. **Content Generation** (External)
   - N8N generates platform-specific content
   - Content saved as drafts in Firestore

4. **Content Management** (ContentFlow)
   - Users edit and schedule content
   - Rich text editing with platform validation

5. **Publishing** (External)
   - N8N publishes content at scheduled times
   - Updates status in Firestore

## Configuration Status

### ✅ Completed
- Angular v20 configuration with zoneless change detection
- Router configuration with component input binding (CS-R01)
- Firebase integration setup
- Build optimization settings
- Removed zone.js polyfills for better performance

### ⚠️ Required User Actions
1. **Firebase Configuration**: Update `firebaseConfig` in `app.config.ts` with actual Firebase project credentials
2. **Environment Setup**: Set `isDevelopment` flag based on deployment environment
3. **Firebase Emulators**: Configure emulator ports if using local development

### 🚀 Next Steps
1. Implement authentication flow with Firebase Auth
2. Create project management components
3. Build topic approval workflow
4. Integrate rich text editor for content management
5. Set up real-time Firestore listeners

## Development Guidelines

### Component Standards
- Always use `ChangeDetectionStrategy.OnPush`
- Use `input()` and `output()` functions, not decorators
- Implement `inject()` for dependency injection
- Keep templates inline for components < 15 lines

### State Management
- Use signals for reactive state
- Implement computed() for derived values
- Avoid manual change detection triggers
- Use effect() sparingly and only for side effects

### Routing
- All routes must use resolvers for data loading
- Leverage `withComponentInputBinding()` for automatic binding
- Keep components free of data fetching logic
- Use functional resolvers with `inject()`

### Security
- Implement proper Firebase Security Rules
- Use Firebase Auth for all protected routes
- Validate all user inputs
- Sanitize HTML content before storage

## Performance Targets
- Initial bundle size < 750KB
- Component styles < 8KB each
- Lazy load all feature modules
- Use virtual scrolling for large lists
- Implement image optimization with NgOptimizedImage