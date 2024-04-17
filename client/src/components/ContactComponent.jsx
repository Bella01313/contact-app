import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";

const ContactComponent = (props) => {
    const { contact } = props;

    return (
        <div className="flex flex-col gap-3 w-full bg-green-300 rounded-lg p-4">
            <div className="flex justify-between">
                <p className="text-xl">{contact.fullName}</p>
                <Link to={`/more/${contact._id}`}><IoIosMore /></Link>
            </div>
            <div className="flex justify-between">
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            </div>
        </div>
    )
}

export default ContactComponent