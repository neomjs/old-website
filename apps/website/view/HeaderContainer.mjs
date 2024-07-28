import Container from '../../../node_modules/neo.mjs/src/container/Base.mjs';

/**
 * @class Website.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends Container {
    static config = {
        /**
         * @member {String} className='Website.view.HeaderContainer'
         * @protected
         */
        className: 'Website.view.HeaderContainer',
        /**
         * @member {String[]} baseCls=['website-header-container']
         */
        baseCls: ['website-header-container'],
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'fit'},
        /**
         * @member {Array} items
         */
        items: [{
            ntype    : 'component',
            reference: 'logo',

            vdom:
            {cn: [
                {cls: ['neo-full-size', 'neo-logo']},
                {cls: ['neo-relative'], cn: [
                    {cls: ['neo-absolute', 'neo-item-bottom-position'], cn: [
                        {cls: ['neo-title'], html: 'neo.mjs'},
                        {cls: ['neo-inner-content'], cn: [
                            {cls : ['neo-inner-details'], html: 'Create multithreaded Web Apps'}
                        ]}
                    ]}
                ]}
            ]}
        }, {
            ntype : 'container',
            cls   : ['website-header-buttons'],
            layout: {ntype: 'hbox', align: 'stretch'},

            itemDefaults: {
                ntype: 'button'
            },

            items: [{
                handler: 'onSwitchThemeButtonClick',
                iconCls: 'fa fa-moon'
            }, {
                iconCls: 'fab fa-github',
                url    : 'https://github.com/neo.mjs/neo'
            }, {
                iconCls: 'fab fa-facebook-f',
                url    : 'https://www.facebook.com/Neomjs-101788847886539/'
            }, {
                iconCls: 'fab fa-linkedin-in',
                url    : 'https://www.linkedin.com/company/26254666/'
            }, {
                iconCls: 'fab fa-twitter',
                url    : 'https://twitter.com/UhligTobias'
            }]
        }]
    }
}

Neo.setupClass(HeaderContainer);

export default HeaderContainer;
