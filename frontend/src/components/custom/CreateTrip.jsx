import React, { useState, useMemo } from 'react'
import DestAutocomplete from './DestAutoComplete'
import { Input } from '../ui/input'
import { budgetList, selectTravelList } from '@/constants'
import { Button } from '../ui/button'

const CreateTrip = () => {
    // Form state for the four inputs
    const [destination, setDestination] = useState('') // will store the selected place object or string
    const [days, setDays] = useState('')
    const [budget, setBudget] = useState(null) // store selected budget object
    const [travelWith, setTravelWith] = useState(null) // store selected travelWith object

    // Derived details array to pass around or send to backend
    const detailsArray = useMemo(() => {
        return [
            { key: 'destination', value: destination },
            { key: 'days', value: days },
            { key: 'budget', value: budget },
            { key: 'travelWith', value: travelWith },
        ]
    }, [destination, days, budget, travelWith])

    const handleGenerate = () => {
        // You can replace this with an API call or further processing
        console.log('Generate trip with details:', detailsArray)
        // Example: send detailsArray to the backend or lift up to parent
    }

    return (
        <div className='w-full py-10'>
            <div className='flex flex-col gap-2'>
                <h2>Create Your Trip ✈️</h2>
                <p className='w-[80%] sm:w-[70%]'>Plan your next adventure with ease. Fill in the details to customize your trip and choose your destinations, dates, and preferences.</p>
            </div>
            <div className='mt-5 flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[16px]'>Choose your destination</h2>
                    <DestAutocomplete
                        value={destination}
                        onChange={(val) => {
                            // when user types, we keep the string in destination
                            setDestination(val)
                        }}
                        onSelect={(place) => {
                            // when user selects a place from the list, store the full object
                            setDestination(place)
                        }}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-[16px]'>How many days are you planning your trip?</h2>
                    <Input
                        placeholder="Ex.3"
                        type="number"
                        value={days}
                        onChange={(e) => setDays(e.target.value)}
                        className="w-full sm:w-[65%] px-3 py-1 text-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <h2>What is your budget?</h2>
                    <p>Enter your estimated budget so we can suggest the best trip options for you.</p>
                    <div className="cards flex flex-wrap gap-4">
                        {budgetList.map((b, index) => {
                            const selected = budget?.title === b.title
                            return (
                                <div
                                    key={index}
                                    onClick={() => setBudget(b)}
                                    className={`card shadow-sm border px-3 py-2 rounded-xl flex flex-col gap-2 flex-1 min-w-[200px] cursor-pointer ${selected ? 'ring-2 ring-blue-400' : ''}`}
                                >
                                    <span>{b.icon}</span>
                                    <h2 className="font-semibold text-[14px]">{b.title}</h2>
                                    <p className="text-gray-600 text-[10px]">{b.price}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className='flex flex-col gap-2'>
                    <h2>Who do you want to travel with?</h2>
                    <div className="cards flex flex-wrap gap-4">
                        {selectTravelList.map((t, index) => {
                            const selected = travelWith?.title === t.title
                            return (
                                <div
                                    key={index}
                                    onClick={() => setTravelWith(t)}
                                    className={`card shadow-sm border px-3 py-2 rounded-xl flex flex-col gap-2 flex-1 min-w-[200px] cursor-pointer ${selected ? 'ring-2 ring-blue-400' : ''}`}
                                >
                                    <span>{t.icon}</span>
                                    <h2 className="font-semibold text-[14px]">{t.title}</h2>
                                    <p className="text-gray-600 text-[10px]">{t.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
            <div className='mt-5 sm:flex sm:justify-end'>
                <Button onClick={handleGenerate} className="cursor-pointer text-[12px] sm:text-sm">Generate Trip</Button>
            </div>
        </div>
    )
}

export default CreateTrip