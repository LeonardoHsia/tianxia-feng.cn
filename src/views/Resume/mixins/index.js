/**
 * slots in the SectionBox share the same mixins
 * those exported as an Array
*/
import props from './propsMixin'
import inject from './injectMixin'
import created from './createdMixin'

export default [
    props, inject, created
]
