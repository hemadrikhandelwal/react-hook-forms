# React Hook Form + Zod Demo

A lightweight React + Vite example app that demonstrates form validation using `react-hook-form` and `zod`. The project includes a polished contact form UI and a separate login-form example that can be reused or adapted for other applications.

## Overview

This repo is designed to showcase a practical form-validation workflow in React:

- `react-hook-form` handles form state, submission, and field registration
- `zod` defines the validation schema
- `@hookform/resolvers` connects the two libraries
- Tailwind CSS is used for styling
- Vite provides a fast development and build setup

The current app renders a message/contact form in `src/App.jsx` and validates fields such as name, email, subject, and message before submission.

## Features

- Client-side form validation with schema-based rules
- Required field validation and custom error messages
- Email validation
- Minimum-length validation for name/message fields
- Responsive modern form layout
- Simple React app structure for learning or reuse

## Tech Stack

- React 19
- Vite 8
- react-hook-form
- Zod
- @hookform/resolvers
- Tailwind CSS 4

## Project Structure

```text
react-hook-forms-zod/
├── public/
├── src/
│   ├── App.jsx
│   ├── Login.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

This will start the Vite app in development mode. Open the local URL shown in the terminal (usually `http://localhost:5173`) to view the form.

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # start the local Vite app
npm run build    # create a production build
npm run preview  # preview the built project locally
npm run lint     # run ESLint checks
```

## Form Example

The current app uses this validation model:

```jsx
const messageSchema = z.object({
  name: z.string().min(1, 'Name is required').min(3, 'Name must be at least 3 characters'),
  email: z.email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please enter subject'),
  message: z.string().min(1, 'Please enter message'),
});
```

This is passed to `useForm` using `zodResolver`, which ensures errors are automatically mapped to the form fields.

## Login Example

A second example exists in `src/Login.jsx`. It demonstrates a simpler login form using `react-hook-form` without Zod. You can swap this component into the app by updating the render in `src/main.jsx` or by importing it into `src/App.jsx`.

## Notes

- This repo is best suited for learning form validation patterns in React
- It is intentionally small and easy to understand
- You can extend the validation schema or add backend submission logic as needed

## License

This project does not include a custom license file and is intended for educational/demo use.
