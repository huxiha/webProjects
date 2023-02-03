import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animation";
import { NextPage } from "next";

const resume:NextPage = () => {


    return ( 
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-4 py-2">
            <div className="grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h5 className="my-3 text-2xl font-bold">Education</h5>
                <div>
                    <h5 className="my-2 text-xl font-bold">Computer Science Engeneering</h5>
                    <p className="font-semibold ">Academy of Technology(2012-2016)</p>
                    <p className="my-3">I am currently pursuing B.tech in Computer Science Engineering
                        from Academy of Technology
                    </p>
                </div>
            </motion.div>
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <h5 className="my-3 text-2xl font-bold">Experience</h5>
                <div>
                    <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
                    <p className="font-semibold ">Tcs(2016-on)</p>
                    <p className="my-3">I do not kown why I am doing this job</p>
                </div>
            </motion.div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold ">Languages & Frameworks</h5>
                    <div className="my-2 ">
                        {
                            languages.map((language) => (
                                <Bar data={language} key={language.name}/>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold ">Tools & Software</h5>
                    <div className="my-2 ">
                        {
                            tools.map((tool) => (
                                <Bar data={tool} key={tool.name}/>
                            ))
                        }
                    </div>
                </div>
            </div>

        </motion.div>
     );
}
 
export default resume;