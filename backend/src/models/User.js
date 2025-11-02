import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: [3, "user's name can not be less than 3 characters"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minLength: [6, 'Password can not be less than 6 characters']
  },
  isVerified: {
      type: Boolean,
      default: false,
    },
    profilePic: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    forgot_password_otp: {
      type: String,
      default: null,
    },
    forgot_password_expiry: {
      type: Date,
      default: null,
    },
}, { timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;
