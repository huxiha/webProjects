import { IService } from "@/type";
import { FunctionComponent } from "react";

const ServiceCard: FunctionComponent<{service:IService}> = ({ service: {about, title, Icon} }) => {

    const createMarkup = () => {
        return {
            __html: about,
        }
    }

    return ( 
        <div className="flex items-center p-2 space-x-4">
            <Icon className="w-12 h-12 text-green"/>
            <div>
                <h4 className="font-bold ">
                    {title}
                </h4>
                <p dangerouslySetInnerHTML={createMarkup()}></p>
            </div>

        </div>
     );
}
 
export default ServiceCard;