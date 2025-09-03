import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';

const DestAutocomplete = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    // Fetch suggestions when query changes (debounced)
    useEffect(() => {
        if (query.length < 2) {
            setSuggestions([]);
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
                );
                const data = await res.json();

                // Only render actual results, max 5
                setSuggestions(data.slice(0, 5));
            } catch (error) {
                console.error('Error fetching suggestions:', error);
                setSuggestions([]);
            }
        }, 300); // wait 300ms after typing

        // Cleanup previous timeout if query changes
        return () => clearTimeout(timeout);
    }, [query]);

    const handleSelect = (place) => {
        setQuery(place.display_name);
        setSuggestions([]);
    };

    return (
        <div className="relative w-full sm:w-[65%]">
            <Input
                type="text"
                placeholder="Enter your destination"
                id="destination"
                value={query}
                onChange={handleChange}
                className="w-full px-3 py-1 text-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {suggestions.length > 0 && (
                <ul className="absolute border border-gray-300 w-full mt-1 rounded-md z-10 h-auto bg-white max-h-60 overflow-auto">
                    {suggestions.map((place) => (
                        <li
                            key={place.place_id}
                            onClick={() => handleSelect(place)}
                            className="p-2 cursor-pointer text-[12px] hover:bg-gray-100"
                        >
                            {place.display_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DestAutocomplete;
