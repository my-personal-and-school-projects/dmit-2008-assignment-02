
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import DashboardCard from '@/components/DashboardCard.js'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

test('DashboardCard has correct elements and props', async ()=> {
    const TITLE = "TITLE OF THE CARD"
    const DESCRIPTION = "AWESOME DESCRIPTION"
    const SUB_DESCRIPTION = "A LITTLE MORE INFO"
  
    // render the DashboardCard component
    const { container } = render(<DashboardCard
      icon={<MailOutlineIcon fontSize="small" />}
      title={TITLE}
      description={DESCRIPTION}
      subDescription={SUB_DESCRIPTION}
    />)   
    
    // check to see if the mail outline icon is present
    expect(screen.getByTestId("MailOutlineIcon")).toBeInTheDocument()

    // check to see if the title is present
    expect(container.textContent).toContain(TITLE)

    // check to see if the description is present
    expect(container.textContent).toContain(DESCRIPTION)

    // check to see if the sub description is present
    expect(container.textContent).toContain(SUB_DESCRIPTION)
})
