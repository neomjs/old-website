import Model  from '../../../node_modules/neo.mjs/src/data/Model.mjs';

/**
 * @class Website.model.BlogPost
 * @extends Neo.data.Model
 */
class BlogPost extends Model {
    static config = {
        /**
         * @member {String} className='Website.model.BlogPost'
         * @protected
         */
        className: 'BlogPost.model.BlogPost',
        /**
         * @member {Object[]} fields
         * @protected
         */
        fields: [{
            name: 'author',
            type: 'String'
        }, {
            name: 'authorImage',
            type: 'String'
        }, {
            name: 'backgroundColor',
            type: 'String'
        }, {
            name: 'date',
            type: 'String'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'image',
            type: 'String'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'provider',
            type: 'String'
        },{
            name: 'publisher',
            type: 'String'
        }, {
            name: 'selectedInto',
            type: 'Array'
        }, {
            name: 'type',
            type: 'String'
        }, {
            name: 'url',
            type: 'String'
        }]
    }
}

Neo.setupClass(BlogPost);

export default BlogPost;
