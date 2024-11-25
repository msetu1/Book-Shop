import { model, Schema } from 'mongoose';
import { IProduct } from './book.interface';

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: {
      values: [
        'Fiction',
        ' Science',
        ' SelfDevelopment',
        ' Poetry',
        ' Religious',
      ],
      message: '{VALUE} is not a valid gender',
    },
  },
  
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: true },

},
{
  timestamps: true,
},
)


export const BookModel = model<IProduct>('Product', productSchema);
