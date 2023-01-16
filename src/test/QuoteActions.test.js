import React from 'react'
import { render, screen } from '@testing-library/react'
import ActionsContainer from '../components/ActionsContainer'

it('should render a disabled button', () => {
    render(<ActionsContainer />)

    expect(screen.getByRole('button', { name: 'Previous' })).toHaveAttribute('disabled')
    expect(screen.getByRole('button', { name: 'Next' })).not.toBeDisabled()

    // expect(screen.getByTestId('button')).not.toHaveAttribute('disabled')
    // expect(screen.getByTestId('button')).not.toBeDisabled()
})