const mongoose = require("mongoose");

// Like schema
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",  // Reference to the Post model
    },
    user: {
        type: String,
        required: true,
    },
});

// Export
module.exports = mongoose.model("Like", likeSchema);
