import mongoose from "mongoose";
import shortid from "shortid";

const { String, Number, ObjectId } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sku: {
    type: String,
    unique: true,
    default: shortid.generate()
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  },
  comments: [
    {
      user: {
        type: ObjectId,
        ref: 'User'
      },
      header: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
    }, {
      timestamps: true
    }
  ]
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
