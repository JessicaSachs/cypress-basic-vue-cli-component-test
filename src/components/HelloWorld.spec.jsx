import HelloWorld from './HelloWorld.vue'
import { mount } from 'cypress-vue-unit-test'

// TODO: figure out the correct require string to use manualInject vue-style-loader
require('../App.vue') // auto-load styles via vue-style-loader

describe('JSX HelloWorld with parent styles', () => {
    beforeEach(() => {
        mount({
            render: h => (<div id="app"><HelloWorld/></div>),
            components: { HelloWorld }
        })
    })
    it('CLI documentation link is correct', () => {
        cy.get('[data-testid=cli-docs-link]')
            .and('have.attr', 'href')
            .and('include', 'cli.vuejs.org')
    })
})