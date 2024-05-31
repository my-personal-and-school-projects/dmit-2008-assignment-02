
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

// import ApplicationDataTable from '@/components/ApplicationDataTable';
import ApplicationDataTable from '@/components/ApplicationDataTable';


test('ApplicationDataTable has correct elements and props', ()=> {
    const TEST_DATA = [
        {
          "id": 14,
          "company": "Dans Super Company",
          "position": "Professional Cat Sitter",
          "applied": "2024-06-01",
          "response": "responded",
          "interview": "scheduled"
        },
        {
          "id": 15,
          "company": "Ricks Meme Company",
          "position": "Professional Meme Maker",
          "applied": "2024-06-05",
          "response": "rejected",
          "interview": "-"
        }
    ]
  
    // render the DashboardCard component
    const { container } = render(<ApplicationDataTable data={TEST_DATA} />)   
    
    // check that there are multiple rows in the table.
    expect(container.querySelectorAll("tr").length).toBe(3)
    // one for the header, and two for the rows of data

    // check to see if using MUI table, table head and table body elements
    expect(container.querySelector(".MuiTable-root")).toBeInTheDocument()
    expect(container.querySelector(".MuiTableHead-root")).toBeInTheDocument()
    expect(container.querySelector(".MuiTableBody-root")).toBeInTheDocument()

    // check to see if the rows are using the right component
    expect(container.querySelector(".MuiTableRow-root")).toBeInTheDocument()
    expect(container.querySelectorAll(".MuiTableRow-root").length).toBe(3)

    // check to see if data is present in the table
    // first row
    expect(container.textContent).toContain("Dans Super Company")
    expect(container.textContent).toContain("Professional Cat Sitter")
    expect(container.textContent).toContain("2024-06-01")
    expect(container.textContent).toContain("responded")
    expect(container.textContent).toContain("scheduled")
    // second
    expect(container.textContent).toContain("Ricks Meme Company")
    expect(container.textContent).toContain("Professional Meme Maker")
    expect(container.textContent).toContain("2024-06-05")
    expect(container.textContent).toContain("rejected")
    expect(container.textContent).toContain("-")



})
