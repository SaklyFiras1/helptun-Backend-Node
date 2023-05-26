const mongoose = require('mongoose')
const pubschema = new mongoose.Schema({
    posterid: {
        type: String,
        required: true,
    },
    statut: {
        type: String,
        maxlength:500

    },
    image: {
        type: String

    },
    video: {
        type: String

    }, commentaires: {
        type: [
            {
                id_comment: String,
                usernamecomment: String,
                commentaire: String,
                likers: { type: Number }

            },
            {
                timestamps: true
            }

        ],
        required: true
    },
    likers: {
        type: [String],
        required: true
    }
},
    {
        timestamps: true
    }

)
const publicationmodel = mongoose.model('publication', pubschema)
module.exports = publicationmodel