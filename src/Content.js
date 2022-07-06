import React from 'react'

const imgList  =[
    {image: 'https://images.unsplash.com/photo-1597090442229-c506cfdafb69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {image: 'https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
    {image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'},
    {image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGNhcnMlMjB3YWxscGFwZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'},
];

function Content() {
  return (
<div>
    <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="md:flex md:items-center md:justify-between">
                <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">SOME OF OUR PRODUCTS</h2>
                <a href="#" class="hidden text-sm font-medium text-yellow-600 hover:text-yellow-500 md:block">MORE<span aria-hidden="true"> &rarr;</span></a>
            </div>
            <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                {imgList.map((imgList => (
                <div class="group relative">
                    <div class="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                        <img 
                        key={imgList.id} 
                        src={imgList.image}  
                        alt="cars" 
                        class="w-full h-full object-center object-cover"
                        />
                    </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                AVALABLE
                            </a>
                        </h3>
                        <p class="mt-1 text-sm font-medium text-gray-900">$200 000</p>
                </div>
                )))}
            </div>
            <div class="mt-8 text-sm md:hidden">
                <a href="#" class="font-medium text-yellow-600 hover:text-yellow-500">MORE<span aria-hidden="true"> &rarr;</span></a>
            </div>
        </div>
        <div class="bg-white">
            <div class="max-w-2xl mx-auto px-4 sm:py-12 sm:px-6 lg:max-w-7xl">
                <div class="relative rounded-lg overflow-hidden lg:h-96">
                    <div class="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2183&q=80"/>
                    </div>
                    <div aria-hidden="true" class="relative w-full h-96 lg:hidden"></div>
                        <div aria-hidden="true" class="relative w-full h-32 lg:hidden"></div>
                        <div class="absolute inset-x-0 bottom-0 bg-yellow-600 bg-opacity-50 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
                        <div>
                            <h2 class="text-xl font-bold text-white">OUR NEW CAR COLLECTION</h2>
                            <p class="mt-1 text-sm text-gray-50">Duis vel est et purus hendrerit commodo. In hac habitasse platea dictumst. Aliquam consequat tempus efficitur.</p>
                        </div>
                        <a href="#" class="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full">View the collection</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


  )
}

export default Content