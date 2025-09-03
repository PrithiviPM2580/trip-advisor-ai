import React from 'react'
import DestAutocomplete from './DestAutoComplete'
import { Input } from '../ui/input'

const CreateTrip = () => {
    return (
        <div className='w-full pt-10'>
            <div className='flex flex-col gap-2'>
                <h2>Create Your Trip</h2>
                <p className='w-[80%] sm:w-[70%]'>Plan your next adventure with ease. Fill in the details to customize your trip and choose your destinations, dates, and preferences.</p>
            </div>
            <div className='mt-5 flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[16px]'>Choose your destination</h2>
                    <DestAutocomplete />
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[16px]'>How many days are you planning your trip?</h2>
                    <Input placeholder="Ex.3" type="number" className="w-full px-3 py-1 text-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
            </div>
        </div>
    )
}

export default CreateTrip