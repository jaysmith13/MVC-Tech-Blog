const { Comment } = require('../models');

const commentData = [{
        comment_text: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Proin eu mi. Nulla ac enim",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);






















































module.exports = seedComments;