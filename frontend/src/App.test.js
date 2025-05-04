// This is a test file for the App component in a React application.
// It uses the React Testing Library to render the App component and check if a specific text is present in the document.
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
