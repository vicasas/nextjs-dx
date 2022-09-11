import { render as ReactTestingLibraryRender } from '@testing-library/react'

const Providers = ({ children }) => children

export const render = (ui, options) =>
  ReactTestingLibraryRender(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
