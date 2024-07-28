import Example from '../model/Example.mjs';
import Store   from '../../../node_modules/neo.mjs/src/data/Store.mjs';

/**
 * @class Website.store.Examples
 * @extends Neo.data.Store
 */
class Examples extends Store {
    static config = {
        /**
         * @member {String} className='Website.store.Examples'
         * @protected
         */
        className: 'Website.store.Examples',
        /**
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=Example
         */
        model: Example,
        /**
         * @member {Object[]} sorters=[{property: 'id', direction: 'ASC'}]
         */
        sorters: [{
            property : 'id',
            direction: 'DESC'
        }]
    }
}

Neo.setupClass(Examples);

export default Examples;
