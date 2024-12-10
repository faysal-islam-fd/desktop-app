

const LogIn_Section = () => {

    

    return (
        <div className="flex  mt-28">
            <div className="  lg:h-[500px] w-[1100px]">
                <div className=" lg:flex lg:flex-row-reverse">
                    <div className="text-center bg-pink-100 w-1/3  h-[374px] ">
                        <h1 className="text-5xl font-poppins italic mt-20 text-rose-400 font-bold"> <strong>Welcome To</strong> </h1>
                        <p className="text-sx italic mt-5">
                            Provident cupiditate voluptatem <br /> et in. Quaerat  fugiat ut assumenda <br /> excepturi exercitationem
                            quasi. <br /> In deleniti eaque aut <br /> repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className=" bg-base-100 w-1/2  max-w-sm  shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-outline italic btn-secondary">LogIn</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn_Section;