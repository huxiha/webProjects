import { fadeInUp, routeAnimation, stagger } from "@/animation";
import ProjectCard from "@/components/ProjectCard";
import ProjectsNavBar from "@/components/ProjectsNavBar";
import { Projects as projectData } from "@/data";
import { Category } from "@/type";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useState } from "react";

const Projects = () => {

    const [showProjects, setShowProjects] = useState(projectData);
    const [active, setActive] = useState("all");
    const handlerFilterCategory = (category:Category | "all") => {
        if(category === "all"){
            setShowProjects(projectData);
            setActive("all");
            return;
        } 
        
        const newPro = projectData.filter((project) => project.category.includes(category));
        setShowProjects(newPro);
        setActive(category);
    }

    const [showDetails, setShowDetails] = useState<number | null>(null);

    return ( 
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-5 py-2 overflow-y-scroll" style={{height: '65vh'}}>
            <ProjectsNavBar handlerFilterCategory={handlerFilterCategory} active={active}/>

            <motion.div className="relative grid grid-cols-12 gap-4 my-3" variants={stagger} initial="initial" animate="animate">
                {
                    showProjects.map((project) => (
                    <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" key={project.name} 
                    variants={fadeInUp}>
                        <ProjectCard project={project} showDetails={showDetails} setShowDetails={setShowDetails}/>
                    </motion.div>))
                }
            </motion.div>
        </motion.div>
     );
}
 
export default Projects;