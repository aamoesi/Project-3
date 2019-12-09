const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String
  },
  duration: {
    type: String
  },
  severity: {
    type: String
  },
  status: {
    type: String
    // required: true
  },
  symptoms: {
    type: [String]
    // required: true
  },
  goals: {
    type: String
  },
  experience: [
    {
      specialist: {
        type: String
        // required: true
      },
      symptoms: {
        type: String
        // required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date
        // required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      game: {
        type: String
        // required: true
      },
      observations: {
        type: String
        // required: true
      },
      treatmentgoals: {
        type: String
        // required: true
      },
      from: {
        type: Date
        // required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
