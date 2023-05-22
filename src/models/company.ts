import mongoose, { Schema } from "mongoose";

// Interface for company schema
interface ICompany {
    _id?: string;
    name: string;
    owner_user_id: string;
    category: string;
    logo: string;
    description: string;
    website: string;
    hr_policy_link: string;
    nda_link: string;
    is_active: number;
    created_ts: number;
    updated_ts: number;
    followers_count: number;
    file_size: object;
}

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner_user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    logo: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    hr_policy_link: {
        type: String,
        required: false
    },
    nda_link: {
        type: String,
        required: false
    },
    is_active: {
        type: Number,
        required: true
    },
    file_size: {
        type: Object,
        required: false
    },
    followers_count: {
        type: Number,
        required: false,
        default: 0
    }
},
{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Company = mongoose.model<ICompany>("company", companySchema);

export { Company, ICompany };
