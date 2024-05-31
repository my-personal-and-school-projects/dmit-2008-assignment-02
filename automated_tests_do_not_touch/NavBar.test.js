import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import NavBar from '@/components/NavBar.js'


test('NavBar has correct elements', async ()=> {
  // render the NavBar component
  const { container } = render(<NavBar />)   
  
  // check to see if the title 
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
  
  // check to see if the title 
  expect(screen.getByText(/responses/i)).toBeInTheDocument()
  
  // check to see if the title 
  expect(screen.getByText(/interviews/i)).toBeInTheDocument()

  // expected icon to be present
  expect(screen.getByTestId("AccountCircleIcon")).toBeInTheDocument()

  // expect that the AppBar has been used
  expect(container.querySelector(".MuiAppBar-root")).toBeInTheDocument()
})
