import React from 'react'

function Contentwo() {
  return (
    <div>
      <div>
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-baseline sm:justify-between">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">MERCEDES BENZ CATEGORIE</h2>
              <a href="#" class="hidden text-sm font-semibold text-yellow-600 hover:text-yellow-500 sm:block">MORE INFO<span aria-hidden="true"> &rarr;</span></a>
          </div>
          <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <img src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt="MB" class="object-center object-cover group-hover:opacity-75"/>
                <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50"></div>
                  <div class="p-6 flex items-end">
                    <div>
                        <h3 class="font-semibold text-white">
                          <a href="#">
                            <span class="absolute inset-0"></span>
                            New Arrivals
                          </a>
                        </h3>
                        <p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
                    </div>
                  </div>
                </div>
                <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                    <img src="https://images.unsplash.com/photo-1617363938610-9a44f81445ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" alt="MB" class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"/>
                    <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
                      <div class="p-6 flex items-end sm:absolute sm:inset-0">
                      <div>
                        <h3 class="font-semibold text-white">
                        <a href="#">
                            <span class="absolute inset-0"></span>
                            ORDER NOW
                        </a>
                        </h3>
                    </div>
                  </div>
                </div>
                <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                    <img src="https://images.unsplash.com/photo-1555953329-ee23a6c53a06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="MB" class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"/>
                    <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
                      <div class="p-6 flex items-end sm:absolute sm:inset-0">
                        <div>
                          <h3 class="font-semibold text-white">
                            <a href="#">
                              <span class="absolute inset-0"></span>
                              ORDER NOW
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="sm:hidden">
                  <a href="#" class="block text-sm font-semibold text-yellow-600 hover:text-yellow-500">BROWSE CATEGORIE<span aria-hidden="true"> &rarr;</span></a>
                </div>
              </div>
            </div>

        <div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2">

            <div class="relative flex py-56">
                <img src="https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="" class="absolute inset-0 w-full h-full object-center object-cover"/>
                <div class="relative w-full flex flex-col items-start justify-end bg-yellow-600 bg-opacity-40 p-8 sm:p-12">
                  <h2 class="text-lg font-medium text-white text-opacity-75">Polishing</h2>
                  <p class="mt-1 text-2xl font-medium text-white">Fusce est sapien, posuere eu pharetra at</p>
                  <a href="#" class="mt-4 text-sm font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50">Book</a>
                </div>
            </div>

            <div class="relative flex py-56">
                <img src="https://images.unsplash.com/photo-1608259243654-70c070e0f6ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" class="absolute inset-0 w-full h-full object-center object-cover"/>
                <div class="relative w-full flex flex-col items-start justify-end bg-yellow-600 bg-opacity-40 p-8 sm:p-12">
                  <h2 class="text-lg font-medium text-white text-opacity-75">Cleaning</h2>
                  <p class="mt-1 text-2xl font-medium text-white">Donec sagittis quam sapien, id blandit mauriss</p>
                  <a href="#" class="mt-4 text-sm font-medium text-gray-900 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50">Book</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contentwo