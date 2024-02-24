import React, { useEffect, useRef, useState } from 'react';

const Sortable = () => {
    const [data, setData] = useState<any>(JSON.parse(localStorage.getItem("person")) || [
        {
            id: 1, name: "Jhon don", ref: "1kobul"
        },
        {
            id: 2, name: "Abbas", ref: "2none"
        },
        {
            id: 3, name: "Sattar", ref: "1rafik",
        }
    ])
    const dragPeople = useRef<number>(0)
    const dragChangePeople = useRef<number>(0)
    async function handleDrag() {
        const person = [...data];
        let temp = person[dragPeople.current];
        person[dragPeople.current] = person[dragChangePeople.current];
        person[dragChangePeople.current] = temp;
        localStorage.setItem("person", JSON.stringify(person))
        setData(person)

    }
    return (
        <div className='flex justify-center flex-col  '>
            {
                data.map((user, index) => <div draggable
                    onDragStart={() => dragPeople.current = index}
                    onDragEnter={() => dragChangePeople.current = index}
                    onDragEnd={handleDrag}
                    onDragOver={e => e.preventDefault()}
                    key={index} className='bg-gray-700 m-3 p-5 rounded-md hover:bg-red-400 cursor-pointer'>{user?.name}</div>)
            }
        </div>
    );
};

export default Sortable;