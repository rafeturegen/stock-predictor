import connectMongoDB from "@/lib/mongodb";
import Contact from "@/modal/contact";

export default async function sendContactForm(formData:FormData){

    const data = Object.fromEntries(formData.entries());

    await connectMongoDB();

    const newContactForm = await Contact.create(data);

    return {
        newContactForm,
    }
}