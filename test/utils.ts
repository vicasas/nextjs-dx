import {
  render as ReactTestingLibraryRender,
  RenderOptions,
} from '@testing-library/react'
import React from 'react'

const Providers = ({ children }: { children: React.ReactElement }) => children

export const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => ReactTestingLibraryRender(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
