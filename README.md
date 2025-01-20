# Food Front - React + TypeScript + Vite Starter Template

Welcome to the Food Front project! This setup provides a robust foundation for building modern, high-performance React applications with TypeScript and Vite, integrated with Material-UI (MUI), React Router, and Context API.

## Features

- **Fast Development**: Powered by Vite for lightning-fast Hot Module Replacement (HMR).
- **Type Safety**: Comprehensive TypeScript integration ensures type safety across your codebase.
- **ESLint Configuration**: Pre-configured ESLint with recommended rules for maintaining code quality.
- **React Plugins**: Support for both Babel and SWC-based Fast Refresh with the following plugins:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) (uses Babel)
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) (uses SWC)
- **Material-UI Integration**: Pre-configured with MUI for building beautiful UIs.
- **React Router**: Set up for client-side routing.
- **Context API**: Integrated for state management.

## Getting Started

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/food-front.git
   cd food-front
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Building for Production

To create an optimized production build:
```bash
npm run build
# or
yarn build
```

### Previewing the Production Build

To preview the production build locally:
```bash
npm run preview
# or
yarn preview
```

## Project Structure

```plaintext
food-front/
├── src/
│   ├── assets/               # Static assets (images, icons, etc.)
│   ├── components/           # Reusable components
│   ├── pages/                # Page components
│   ├── styles/               # Global and component-specific styles
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── vite-env.d.ts         # Vite environment types
├── .gitignore                # Git ignore file
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # TypeScript configuration for the app
├── tsconfig.node.json        # TypeScript configuration for Node
├── vite.config.ts            # Vite configuration
└── README.md                 # Project documentation
```

## Expanding ESLint Configuration

For production-grade applications, enhancing your ESLint configuration to include type-aware linting rules is recommended.

### Steps to Enable Type-Aware Linting

1. **Update `parserOptions`**
   
   Configure the top-level `parserOptions` in your ESLint configuration:
   ```javascript
   export default tseslint.config({
     languageOptions: {
       // other options...
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

2. **Modify ESLint Configurations**
   
   Replace `tseslint.configs.recommended` with either:
   - `tseslint.configs.recommendedTypeChecked`
   - `tseslint.configs.strictTypeChecked`

3. **Optional: Add Stylistic Rules**
   
   To enforce consistent styling, you can optionally add:
   ```javascript
   ...tseslint.configs.stylisticTypeChecked
   ```

4. **Install `eslint-plugin-react`**
   
   ```bash
   npm install eslint-plugin-react --save-dev
   # or
   yarn add eslint-plugin-react --dev
   ```

5. **Update ESLint Configuration**
   
   Modify your `eslint.config.js` as follows:
   ```javascript
   // eslint.config.js
   import react from 'eslint-plugin-react';
   
   export default tseslint.config({
     // Set the React version
     settings: { react: { version: '18.3' } },
     plugins: {
       // Add the React plugin
       react,
     },
     rules: {
       // other rules...
       // Enable recommended React rules
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   });
   ```

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Material-UI (MUI) Documentation](https://mui.com/)
- [ESLint Documentation](https://eslint.org/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
