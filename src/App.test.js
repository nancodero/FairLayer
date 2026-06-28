// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FairLayer title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FairLayer/i);
    expect(titleElement).toBeInTheDocument();
});
