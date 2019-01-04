import React from "react"
import renderer from "react-test-renderer"

import IndexPage from '../src/pages/index.js'


describe("Index Page", ()=> {
  it('The index page should render the exact same way every time', () => {
    const index = renderer.create(<IndexPage/>).toJSON()
    expect(index).toMatchSnapshot()
  })
})
