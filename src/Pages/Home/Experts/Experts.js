import React from 'react';
import Expert from '../Expert/Expert';
const expertsData = [
    {
        "img": "https://www.mastermechanic.ca/img/GettyImages-467694482-MasterMechanicDec2017.jpg",
        "name": "John Anderson",
        "expertize": "Engine Repair"
    },
    {
        "img": "https://www.cashcarsbuyer.com/wp-content/uploads/2020/04/Ask-A-Mechanic.jpg",
        "name": "Benjamin Lucas",
        "expertize": "Engine Binding"
    },
    {
        "img": "https://www.ridetime.ca/wp-content/uploads/2017/04/Car-Mechanic.jpg",
        "name": "Howard Wolwidtz",
        "expertize": "Engine Wiring"
    },
    {
        "img": "https://www.autotrainingcentre.com/wp-content/uploads/2018/10/mechanic-school.jpg",
        "name": "Raj Kuthrapoli",
        "expertize": "Break Warehouse"
    },
    {
        "img": "https://www.floridacareercollege.edu/wp-content/uploads/sites/4/2020/06/3-Reasons-Why-Being-a-Mechanic-Could-Be-An-Amazing-Career-Florida-Career-College.jpeg",
        "name": "Bert Cooper",
        "expertize": "Car Wash expart"
    }
]
const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary pt-5">Our exparts</h2>
            <div className="row pt-5">
                {
                    expertsData.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;