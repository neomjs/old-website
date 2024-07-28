import BlogPost from '../model/BlogPost.mjs';
import Store    from '../../../node_modules/neo.mjs/src/data/Store.mjs';

/**
 * @class Website.store.BlogPosts
 * @extends Neo.data.Store
 */
class BlogPosts extends Store {
    static config = {
        /**
         * @member {String} className='Website.store.BlogPosts'
         * @protected
         */
        className: 'Website.store.BlogPosts',
        /**
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=BlogPost
         */
        model: BlogPost,
        /**
         * @member {Object[]} sorters=[{property: 'id', direction: 'DESC'}]
         */
        sorters: [{
            property : 'id',
            direction: 'DESC'
        }],
        /**
         * @member {String} url='../../apps/website/data/blog.json'
         */
        url: '../../apps/website/data/blog.json'
    }
}

Neo.setupClass(BlogPosts);

export default BlogPosts;
