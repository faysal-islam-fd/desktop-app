

const Projects = () => {
    return (
        <div>
            <div className=" flex justify-end items-center ">
                    <button className="px-6 py-2 bg-stone-950 text-white font-semibold rounded-md hover:scale-95 hover:bg-stone-800 transition-all">Add Projects</button>
            </div>
            <div className="grid grid-cols-3 mt-10 gap-3">
               
                <div className=" bg-white max-w-[400px]  rounded-lg border border-blue-300 ">
                    <img className=" border-b w-full  border-blue-400  rounded-lg" src="https://cdn.hackr.io/uploads/posts/attachments/1683704157c2lIUSQChl.png" alt="" />
                        <div className="mt-4 p-4 pl-6">
                        <h2 className="text-stone-950 font-semibold text-2xl py-1  ">Project name</h2>
                        <p className="text-slate-800">Description</p>
                        <button className="px-6 py-2 bg-stone-950 text-white font-semibold rounded-md hover:scale-95 hover:bg-stone-800 transition-all mt-2">Visit</button>
                     </div>
                </div>
                <div className=" bg-white max-w-[400px]  rounded-lg border border-blue-300 ">
                    <img className=" border-b w-full  border-blue-400  rounded-lg" src="https://cdn.hackr.io/uploads/posts/attachments/1683704157c2lIUSQChl.png" alt="" />
                        <div className="mt-4 p-4 pl-6">
                        <h2 className="text-stone-950 font-semibold text-2xl py-1  ">Project name</h2>
                        <p className="text-slate-800">Description</p>
                        <button className="px-6 py-2 bg-stone-950 text-white font-semibold rounded-md hover:scale-95 hover:bg-stone-800 transition-all mt-2">Visit</button>
                     </div>
                </div>

                <div className=" bg-white max-w-[400px]  rounded-lg border border-blue-300 ">
                    <img className=" border-b w-full  border-blue-400  rounded-lg" src="https://cdn.hackr.io/uploads/posts/attachments/1683704157c2lIUSQChl.png" alt="" />
                        <div className="mt-4 p-4 pl-6">
                        <h2 className="text-stone-950 font-semibold text-2xl py-1  ">Project name</h2>
                        <p className="text-slate-800">Description</p>
                        <button className="px-6 py-2 bg-stone-950 text-white font-semibold rounded-md hover:scale-95 hover:bg-stone-800 transition-all mt-2">Visit</button>
                     </div>
                </div>
                        
            </div>
        </div>
    );
};

export default Projects;