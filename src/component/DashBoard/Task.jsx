

const Task = () => {
    return (
        <div>
             <div className=" flex justify-end items-center ">
                    <button className="px-6 py-2 bg-stone-950 text-white font-semibold rounded-md hover:scale-95 hover:bg-stone-800 transition-all">Add Task</button>
            </div>

            <div className="grid mt-10 grid-cols-3 gap-6">
                <div className="border border-stone-400 rounded-lg p-6 flex flex-col gap-2">
                    <h1 className="text-stone-950 font-semibold text-2xl">Task name</h1>
                    <p className="text-stone-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi suscipit eos repudiandae ab non quia sint porro et earum magnam?</p>
                    <div className="flex text-slate-700 gap-2">
                        <span>Start time</span>
                        <span>End time</span>
                    </div>
                </div>
                <div className="border border-stone-400 rounded-lg p-6 flex flex-col gap-2">
                    <h1 className="text-stone-950 font-semibold text-2xl">Task name</h1>
                    <p className="text-stone-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi suscipit eos repudiandae ab non quia sint porro et earum magnam?</p>
                    <div className="flex text-slate-700 gap-2">
                        <span>Start time</span>
                        <span>End time</span>
                    </div>
                </div>
                <div className="border border-stone-400 rounded-lg p-6 flex flex-col gap-2">
                    <h1 className="text-stone-950 font-semibold text-2xl">Task name</h1>
                    <p className="text-stone-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi suscipit eos repudiandae ab non quia sint porro et earum magnam?</p>
                    <div className="flex text-slate-700 gap-2">
                        <span>Start time</span>
                        <span>End time</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;