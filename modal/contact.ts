import mongoose, { Schema } from "mongoose";

interface IContact extends Document {
    email:string,
    code:string,
}

const contactSchema = new Schema<IContact>(
    {
        email:{type:String, required:true},
        code:{type:String, required:true},
    },
    {
        timestamps:true,
    }
)

const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact Form", contactSchema)

export default Contact;