import mongoose from 'mongoose';

const { Schema } = mongoose;

const SongsSchema = new Schema({
  title: String,
  genre: String,
  artist: [String],
  features: [String],
  youtubeLink: String,
  emotionName: String,
  emotionReleted: [String],
});

const Songs = mongoose.model('Song', SongsSchema);

export default Songs;
