import React from 'react';
import ListItem from '../ListItem.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('ListItem', function()
{
	const renderedComp = TestUtils.createRenderer()
	const compRendered = renderedComp.render(<ListItem />)
	const result_tag = renderedComp.getRenderOutput()

	it('renders the tag', function() {
		expect(result_tag.type).toBe('div')
	})

	it('verify the className', function(){
		expect(result_tag.props.className). toBe('list-item')
	})

})