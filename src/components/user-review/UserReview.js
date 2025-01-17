import React from 'react';
import './UserReview.css';

function UserReview() {

  const revs = [
    {
      stars: 5,
      date: '2 days ago',
      location: 'New York, NY',
      rev: '"Good app and very helpful to customer as customer can book online health check up and book hospitalization as customer',
      name: 'John Doe'
    },
    {

      stars: 4,
      date: '2 days ago',
      location: 'Los Angeles, CA',
      rev: '"Good app and very helpful to customer as customer can book online health check up and book hospitalization as customer',
      name: 'Jane Doe'
    },
    {
      stars: 3,
      date: '2 days ago',
      location: 'Chicago, IL',
      rev: '"Good app and very helpful to customer as customer can book online health check up and book hospitalization as customer',
      name: 'John Smith'
    },
    {
      stars: 2,
      date: '2 days ago',
      location: 'Houston, TX',
      rev: '"Good app and very helpful to customer as customer can book online health check up and book hospitalization as customer',
      name: 'Jane Smith'
    },
    {
      stars: 1,
      date: '2 days ago',
      location: 'Phoenix, AZ',
      rev: '"Good app and very helpful to customer as customer can book online health check up and book hospitalization as customer',
      name: 'John Johnson'
    }
  ]


  return (
    <div className='Reviews-MAIN'>

      <h1 className='Reviews-Title'>What our User say</h1>

      <div className='Reviews-Container'>

        <div className='Reviews-slider'>

          {revs.map((rev, index) => {
            return (

              <div key={index} className='Reviews-Card'>

                <div className='Reviews-Card-Top'>
                  <div className='Reviews-Card-Top-1'>
                    <div className='Reviews-Card-Stars'>
                      {Array.from({ length: rev.stars }, (_, index) => {
                        return <i key={index} className="star"><img src='/assets/icons/rating-star.svg' alt='star' /></i>
                      })}
                    </div>
                    <div className='Reviews-Card-Date'>{rev.date}</div>
                  </div>
                  <div className='Reviews-Card-Top-2'>
                  <img className='Reviews-Card-Img' src='/assets/icons/location-light.svg' alt='location' />
                  <div className='Reviews-Card-Location'>{rev.location}</div>
                  </div>
                </div>
                <div className='Reviews-Card-Rev'><h1 className='Reviews-Card-h1'>{rev.rev}</h1></div>
                <hr></hr>
                <div className='Reviews-Card-Bottom'>
                <img className='Reviews-Card-Img' src='./assets/icons/avatar-2.svg' alt='name' />
                <div className='Reviews-Card-Name'>{rev.name}</div>
                </div>

              </div>
            )
          }
          )}
        </div>

      </div>


    </div>
  );

}

export default UserReview;