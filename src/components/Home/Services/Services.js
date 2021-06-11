import React from 'react';

const Services = () => {
    return (
        <div className="content px-10 md:px-20 py-10">
            <div className="w-full my-4 pl-4 sm:pr-4">
                <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">Student Sections</h2>
            </div>
            <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
                <div className="flex flex-col">
                    <div className=" bg-green-50 shadow-md  rounded-3xl p-4">
                        <div className="">
                            <h3 className="text-lg font-medium text-center">Primary School Level</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ipsa earum deleniti quas quidem enim illum sunt ipsum ut consequatur!</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-red-50 shadow-md  rounded-3xl p-4">
                        <div className="">
                            <h3 className="text-lg font-medium text-center">Primary School Level</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ipsa earum deleniti quas quidem enim illum sunt ipsum ut consequatur!</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-blue-50 shadow-md  rounded-3xl p-4">
                        <div className="">
                            <h3 className="text-lg font-medium text-center">Primary School Level</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ipsa earum deleniti quas quidem enim illum sunt ipsum ut consequatur!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;