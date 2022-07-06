import React from 'react'

function HeroSection() {
  return (
    <div> 
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
            <div>
              <div class="relative">
                <div class="absolute inset-0">
                  <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1573462843633-7718e364be5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="bg"/>
                </div>
                <div class="relative top-24 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 class="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span class="block font-normal text-gray-50">EXOTIC CARS</span>
                  </h1>
                  <p class="max-w-lg text-left text-xl sm:text-yellow-500 text-yellow-500 sm:max-w-3xl">TAKE CONTROL</p>
                <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection