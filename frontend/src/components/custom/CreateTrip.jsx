import React from 'react'
import DestAutocomplete from './DestAutoComplete'
import { Input } from '../ui/input'
import { budgetList, selectTravelList } from '@/constants'
import { Button } from '../ui/button'

const CreateTrip = () => {
    return (
        <div className='w-full py-10'>
            <div className='flex flex-col gap-2'>
                <h2>Create Your Trip</h2>
                <p className='w-[80%] sm:w-[70%]'>Plan your next adventure with ease. Fill in the details to customize your trip and choose your destinations, dates, and preferences.</p>
            </div>
            <div className='mt-5 flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[16px]'>Choose your destination</h2>
                    <DestAutocomplete />
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[16px]'>How many days are you planning your trip?</h2>
                    <Input placeholder="Ex.3" type="number" className="w-full sm:w-[65%] px-3 py-1 text-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>

                <div className='flex flex-col gap-2'>
                    <h2>What is your budget?</h2>
                    <p>Enter your estimated budget so we can suggest the best trip options for you.</p>
                    <div className="cards flex flex-wrap gap-4">
                        {budgetList.map((budget, index) => (
                            <div
                                key={index}
                                className="card shadow-sm border px-3 py-2 rounded-xl flex flex-col gap-2 flex-1 min-w-[200px]"
                            >
                                <span>{budget.icon}</span>
                                <h2 className="font-semibold text-[14px]">{budget.title}</h2>
                                <p className="text-gray-600 text-[10px]">{budget.price}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='flex flex-col gap-2'>
                    <h2>Who do you want to travel with?</h2>
                    <div className="cards flex flex-wrap gap-4">
                        {selectTravelList.map((travel, index) => (
                            <div
                                key={index}
                                className="card shadow-sm border px-3 py-2 rounded-xl flex flex-col gap-2 flex-1 min-w-[200px]"
                            >
                                <span>{travel.icon}</span>
                                <h2 className="font-semibold text-[14px]">{travel.title}</h2>
                                <p className="text-gray-600 text-[10px]">{travel.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <div className='mt-5 sm:flex sm:justify-end'>
                <Button className="cursor-pointer text-[12px] sm:text-sm">Generate Trip</Button>
            </div>
        </div>
    )
}

export default CreateTrip