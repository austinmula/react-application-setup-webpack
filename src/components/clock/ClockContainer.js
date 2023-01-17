import React from "react";
import Clock from "./Clock";


export const ClockContainer = () => {
    const cities = [
        {
            city: 'Nairobi',
            static: true,
            image: "https://i.ytimg.com/vi/Cgb6bOJ1DLY/maxresdefault.jpg",
            continent: "Africa"

        },
        {
            continent: "Europe",
            static: false,
            image: "https://www.royalautomobileclub.co.uk/wp-content/uploads/2021/01/https___www.history.com_.image_MTYyNDg1MjE3MTI1Mjc5Mzk4_topic-london-gettyimages-760251843-promo.jpg",
            city: 'London'

        },
        {
            city: 'Sydney',
            static: true,
            image: "https://lp-cms-production.imgix.net/2019-06/65830387.jpg",
            continent: "Australia"

        },
        {

            city: 'New York',
            static: false,
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg",
            continent: "North_America"

        },


    ]

    return (
        <div className="clock-container">
            {cities.map((city) => (
                <Clock city={city.city} continent={city.continent} image={city.image} key={city.city} />
            ))
            }
        </div>
    );
}



export default ClockContainer;