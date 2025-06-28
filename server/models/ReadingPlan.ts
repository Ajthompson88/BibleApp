import mongoose, { Schema, Document } from 'mongoose';

interface DayEntry {
  day: number;
  passage: string;
  completed: boolean;
}

export interface ReadingPlanDoc extends Document {
  userId: string;
  plan: DayEntry[];
}

const ReadingPlanSchema = new Schema<ReadingPlanDoc>({
  userId: { type: String, required: true, unique: true },
  plan: [
    {
      day: { type: Number, required: true },
      passage: { type: String, required: true },
      completed: { type: Boolean, default: false },
    },
  ],
});

export default mongoose.model<ReadingPlanDoc>('ReadingPlan', ReadingPlanSchema);
