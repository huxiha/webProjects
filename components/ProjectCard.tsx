import { IProject } from "@/type";
import { FunctionComponent} from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animation";

const ProjectCard:FunctionComponent<{
    project:IProject;
    showDetails:number|null;
    setShowDetails: (id:number | null)=>void;
}> = ({project:{name, description, deployed_url, github_url, image_path, category, key_techs, id},showDetails,setShowDetails}) => {

    return ( 
    <div>
        <Image src={image_path} alt={name} className="cursor-pointer " onClick={() => setShowDetails(id)} width="300" height="150"/>
        <p className="my-2 text-center">{name}</p>
        {
            showDetails === id && <div className="absolute top-0 left-0 grid text-black bg-gray-100 md:grid-cols-2 gap-x-2 dark:text-white dark:bg-dark-100">
                <motion.div variants={stagger} initial="initial" animate="animate">
                    <motion.div variants={fadeInUp}><img src={image_path} alt={name}></img></motion.div>
                    <motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
                        <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                            <AiFillGithub /><span>Github</span>
                        </a>
                        <a href={deployed_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                            <AiFillProject /><span>Project</span>
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div variants={stagger} initial="initial" animate="animate">
                    <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
                    <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
                    <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                        {
                            key_techs.map((tech) => (
                                <span className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200" key={tech}>{tech}</span>
                            ))
                        }
                    </motion.div>
                </motion.div>
                
                <button onClick={() => setShowDetails(null)} className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
                    <MdClose size={30}/>
                </button>
            </div>
        }
        

    </div> );
}
 
export default ProjectCard;