import React from 'react'


export default function About(){
    return(
        <about className="flex font-sans text-wrap text-gray-500">
            <navi className="container m-auto px-6 text-gary-600 md:gap-6 lg:items-center lg:gap-12 ">
                <div className='md:5/12 lg:w-5/12'>
                <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                </div>
                <div className='md:7/12 lg:w-6/12'>
                <h2 className='font-2xl text-gary-900 font-bold md:text-4xl'>
                React development is carried out by passionate developers

                </h2>
                <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>

                </div>
            </navi>
        </about>
    )
}
