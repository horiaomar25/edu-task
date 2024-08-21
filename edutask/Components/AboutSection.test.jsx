// AboutSection.test.jsx
import information from "../assets/information.png";
import AboutSection from "./AboutSection";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('About Section Component', () => {
  test('renders the component', () => {
    render(<AboutSection />);
    expect(information).toBeDefined();
  });

  test('displays the correct content', () => {
    render(<AboutSection />);
    
    // Example assertions, adjust according to your component's content
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByAltText(/information graphic about teaching assistants/i)).toBeInTheDocument();
  });
});