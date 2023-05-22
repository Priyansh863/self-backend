import mongoose, { Date, Schema } from "mongoose";

// Interface for user education
interface IUserEducation {
    _id?: string | undefined,
    user_id: string | undefined,
    institute_name: string | undefined,
    course: string | undefined,
    start_date: Date | undefined,
    end_date: Date | undefined,
    description: string | undefined;
}

const userEducationSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    institute_name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const UserEducation = mongoose.model<IUserEducation>("user_educations", userEducationSchema);

export { UserEducation, IUserEducation };
