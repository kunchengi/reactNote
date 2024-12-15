import { render, screen } from '@testing-library/react';
import App from './App';
// 这个文件是用于做测试的
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
