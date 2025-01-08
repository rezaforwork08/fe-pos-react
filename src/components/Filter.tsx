import { RiFilter2Fill } from "@remixicon/react";
import { useState } from "react";

const Filter = ({ onFilter }: any) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        {
            id: 1, name: 'Drink'
        },
        {
            id: 2, name: 'Food'
        },
        {
            id: 3, name: 'Ice Cream'
        },
    ]

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <div className="flex flex-col">
                <div className="bg-white rounded-full h-12 w-12 flex justify-center items-center mx-3 mt-2 p-2 shadow-md" onClick={toogleMenu}>
                    <RiFilter2Fill
                        size={36}
                        className="my-icon mt-3 text-blue-500 cursor-pointer"
                    />
                </div>
                <div>
                    {isMenuOpen && (
                        <div className="mt-4 bg-gray-100 rounded-lg p-4 shadow-lg fixed">
                            <h3 className="text-lg font-bold mb-3">Select Menu Items</h3>
                            <ul>
                                {menuItems.map((item) => (
                                    <li key={item.id} className="flex items-center gap-2 mb-2">
                                        <input
                                            type="checkbox"
                                            id={`menu-item-${item.id}`}
                                            className="cursor-pointer"
                                        />
                                        <label
                                            htmlFor={`menu-item-${item.id}`}
                                            className="cursor-pointer"
                                        >
                                            {item.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>


    );
}

export default Filter;