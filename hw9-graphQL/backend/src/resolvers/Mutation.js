///utilities

const makeName = (name1, name2) => {
    return [name1, name2].sort().join('_');
};

const checkUser = (db, name, errFunc) => {
    if (!name) 
        throw new Error("Missing user name for " + errFunc);
    return db.UserModel.findOne({ name });
};

const checkChatBox = (db, chatBoxName, errFunc) => {
    if(!chatBoxName)
        throw new Error("Missing chatBox name for " + errFunc);
    return db.ChatBoxModel.findOne({ name: chatBoxName });
};

const checkMessage = async (db, from, to, message, errFunc) => {
    const chatBoxName = makeName(from, to);
    return {
        chatBox: await checkChatBox(db, chatBoxName, errFunc),
        sender: await checkUser(db, from, errFunc),
        to: await checkUser(db, to, errFunc),
    };
};

const newUser = (db, name) => {
    return new db.UserModel({ name }).save();
};

const newMessage = (db, sender, body) => {
    return new db.MessageModel({ sender, body }).save();
};

const newChatBox = (db, chatBoxName) => {
    return new db.ChatBoxModel({ name: chatBoxName }).save();
};

///

const Mutation = {
    async createChatBox(parent, { name1, name2 }, { db }, info) {
        if(!name1 || !name2)
            throw new Error("Missing chatBox name for CreateChatBox");
        
        if(!(await checkUser(db, name1, "createChatBox"))) {
            console.log("User does not exist for CreateChatBox: " + name1);
            await newUser(db, name1);
        }

        if(!(await checkUser(db, name2, "createChatBox"))) {
            console.log("User does not exist for CreateChatBox: " + name2);
            await newUser(db, name2);
        }

        const chatBoxName = makeName(name1, name2);

        let chatBox = await checkChatBox(db, chatBoxName, "createChatBox");
        if (!chatBox) 
            chatBox = await newChatBox(db, chatBoxName);

        return chatBox;
    },

    async createMessage(parent, { from, to, message }, { db, pubsub }, info) {
        const { chatBox, sender } = await checkMessage(
            db, from, to, message, "createMessage"
        );
        if(!chatBox) throw new Error("ChatBox not found for createMesaage");
        if(!sender) throw new Error("sender User not found: ", from);
        // if(!to) throw new Error("to User not found: ", to);

        const chatBoxName = makeName(from, to);
        const newMsg = await newMessage(db, sender, message);
        chatBox.messages.push(newMsg);
        await chatBox.save();

        pubsub.publish(`chatBox ${chatBoxName}`,{
            message: { mutation: "CREATED", message: newMsg },
        });

        return newMsg;
    }
};

export { Mutation as default };

// import uuidv4 from 'uuid/v4';

// const Mutation = {
//   createUser(parent, args, { db }, info) {
//     const emailTaken = db.users.some((user) => user.email === args.data.email);

//     if (emailTaken) {
//       throw new Error('Email taken');
//     }

//     const user = {
//       id: uuidv4(),
//       ...args.data,
//     };

//     db.users.push(user);

//     return user;
//   },
//   deleteUser(parent, args, { db }, info) {
//     const userIndex = db.users.findIndex((user) => user.id === args.id);

//     if (userIndex === -1) {
//       throw new Error('User not found');
//     }

//     const deletedUsers = db.users.splice(userIndex, 1);

//     db.posts = db.posts.filter((post) => {
//       const match = post.author === args.id;

//       if (match) {
//         db.comments = db.comments.filter((comment) => comment.post !== post.id);
//       }

//       return !match;
//     });
//     db.comments = db.comments.filter((comment) => comment.author !== args.id);

//     return deletedUsers[0];
//   },
//   updateUser(parent, args, { db }, info) {
//     const { id, data } = args;
//     const user = db.users.find((user) => user.id === id);

//     if (!user) {
//       throw new Error('User not found');
//     }

//     if (typeof data.email === 'string') {
//       const emailTaken = db.users.some((user) => user.email === data.email);

//       if (emailTaken) {
//         throw new Error('Email taken');
//       }

//       user.email = data.email;
//     }

//     if (typeof data.name === 'string') {
//       user.name = data.name;
//     }

//     if (typeof data.age !== 'undefined') {
//       user.age = data.age;
//     }

//     return user;
//   },
//   createPost(parent, args, { db, pubsub }, info) {
//     const userExists = db.users.some((user) => user.id === args.data.author);

//     if (!userExists) {
//       throw new Error('User not found');
//     }

//     const post = {
//       id: uuidv4(),
//       ...args.data,
//     };

//     db.posts.unshift(post);

//     if (args.data.published) {
//       pubsub.publish('post', {
//         post: {
//           mutation: 'CREATED',
//           data: post,
//         },
//       });
//     }

//     return post;
//   },
//   deletePost(parent, args, { db, pubsub }, info) {
//     const postIndex = db.posts.findIndex((post) => post.id === args.id);

//     if (postIndex === -1) {
//       throw new Error('Post not found');
//     }

//     const [post] = db.posts.splice(postIndex, 1);

//     db.comments = db.comments.filter((comment) => comment.post !== args.id);

//     if (post.published) {
//       pubsub.publish('post', {
//         post: {
//           mutation: 'DELETED',
//           data: post,
//         },
//       });
//     }

//     return post;
//   },
//   updatePost(parent, args, { db, pubsub }, info) {
//     const { id, data } = args;
//     const post = db.posts.find((post) => post.id === id);
//     const originalPost = { ...post };

//     if (!post) {
//       throw new Error('Post not found');
//     }

//     if (typeof data.title === 'string') {
//       post.title = data.title;
//     }

//     if (typeof data.body === 'string') {
//       post.body = data.body;
//     }

//     if (typeof data.published === 'boolean') {
//       post.published = data.published;

//       if (originalPost.published && !post.published) {
//         pubsub.publish('post', {
//           post: {
//             mutation: 'DELETED',
//             data: originalPost,
//           },
//         });
//       } else if (!originalPost.published && post.published) {
//         pubsub.publish('post', {
//           post: {
//             mutation: 'CREATED',
//             data: post,
//           },
//         });
//       }
//     } else if (post.published) {
//       pubsub.publish('post', {
//         post: {
//           mutation: 'UPDATED',
//           data: post,
//         },
//       });
//     }

//     return post;
//   },
//   createComment(parent, args, { db, pubsub }, info) {
//     const userExists = db.users.some((user) => user.id === args.data.author);
//     const postExists = db.posts.some(
//       (post) => post.id === args.data.post && post.published,
//     );

//     if (!userExists || !postExists) {
//       throw new Error('Unable to find user and post');
//     }

//     const comment = {
//       id: uuidv4(),
//       ...args.data,
//     };

//     db.comments.push(comment);
//     pubsub.publish(`comment ${args.data.post}`, {
//       comment: {
//         mutation: 'CREATED',
//         data: comment,
//       },
//     });

//     return comment;
//   },
//   deleteComment(parent, args, { db, pubsub }, info) {
//     const commentIndex = db.comments.findIndex(
//       (comment) => comment.id === args.id,
//     );

//     if (commentIndex === -1) {
//       throw new Error('Comment not found');
//     }

//     const [deletedComment] = db.comments.splice(commentIndex, 1);
//     pubsub.publish(`comment ${deletedComment.post}`, {
//       comment: {
//         mutation: 'DELETED',
//         data: deletedComment,
//       },
//     });

//     return deletedComment;
//   },
//   updateComment(parent, args, { db, pubsub }, info) {
//     const { id, data } = args;
//     const comment = db.comments.find((comment) => comment.id === id);

//     if (!comment) {
//       throw new Error('Comment not found');
//     }

//     if (typeof data.text === 'string') {
//       comment.text = data.text;
//     }

//     pubsub.publish(`comment ${comment.post}`, {
//       comment: {
//         mutation: 'UPDATED',
//         data: comment,
//       },
//     });

//     return comment;
//   },
// };

// export { Mutation as default };
