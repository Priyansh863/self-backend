import mongoose, { Model, Schema } from "mongoose";


enum AccountType{
    Individual="individual",
    Company="company",
}

const userSchema=new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    stripe_customer_id: {
        type: String,
        required: false
    },
    connected_stripe_account_id: {
        type: String,
        required: false
    },
    connected_stripe_email: {
        type: String,
        required: false
    },
    stripe_detail_verified: {
        type: Boolean,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    is_verified: {
        type: Number,
        required: true
    },
    is_active: {
        type: Number,
        required: true
    },
    account_type: {
        type: String,
        enum: Object.values(AccountType),
        required: true
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: "country",
        required: false
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: "city",
        required: false
    },
    zip: {
        type: Number,
        required: false
    },
    phone: {
        type: Number,
        required: false
    },
    avg_rating: {
        type: Number,
        required: true
    },
    total_reviews: {
        type: Number,
        required: true
    },
    cover_image: {
        type: String,
        required: false,
        default: ""
    },
    resume: {
        type: String,
        required: false,
        default: ""
    },
    apple_sub: {
        type: String,
        required: false,
    },
    profile_image: {
        type: String,
        required: false,
        default: ""
    },
    address: {
        type: String,
        required: false,
        default: ""
    },
    company_id: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    company_designation: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    associated_individual_account: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    biography: {
        type: String,
        required: false,
        default: ""
    },
    designation: {
        type: String,
        required: false,
        default: ""
    },
    company_name: {
        type: String,
        required: false,
        default: ""
    },
    promotional_notification: {
        type: Number,
        required: false,
        default: 0
    },
    verification_badge: {
        type: Boolean,
        required: false,
        default: false
    },
    email_notification: {
        type: Number,
        required: false,
        default: 0,
    },
    sms_notification: {
        type: Number,
        required: false,
        default: 0,
    },
    created_ts: {
        type: Number,
        required: true,
    },
    updated_ts: {
        type: Number,
        required: true,
    },
    file_size: {
        type: Object,
        required: false,
    },
    last_active: {
        type: Number,
        required: false
    }  
})

const User = mongoose.model<any>("user", userSchema);

export { User };