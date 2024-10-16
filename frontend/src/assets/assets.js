// Export categories and reviews using named exports

// categories
import carpenters_category from './Categories/carpenters.png';
import cleaners_category from './Categories/cleaners.png';
import dentist_category from './Categories/dentist.png';
import doctors_category from './Categories/doctors.png';
import painters_category from './Categories/Painters.png';
import plumbers_category from './Categories/plumbers.png';
import roofers_category from './Categories/roofers.png';
import tutors_category from './Categories/tutors.png';
import web_dev_category from './Categories/web-developer.png';
import photographers_category from './Categories/photographer.png';
import physical_category from './Categories/Physical Therapist.png';
import electricians_category from './Categories/electricians.png';
import graphic_category from './Categories/graphic designers.png';
import hvac_technician_category from './Categories/hvac-technicians.png';
import event_planners_category from './Categories/event planners.png';

// reviews
import review1 from './Reviews/review (1).jpg';
import review2 from './Reviews/review (2).jpg';
import review3 from './Reviews/review (3).jpg';
import review4 from './Reviews/review (4).jpg';

// Category Data
export const categories = [
    {
        category: 'Plumbers',
        category_image: plumbers_category
    },
    {
        category: 'Carpenters',
        category_image: carpenters_category
    },
    {
        category: 'Cleaners',
        category_image: cleaners_category
    },
    {
        category: 'Dentists',
        category_image: dentist_category
    },
    {
        category: 'Doctors',
        category_image: doctors_category
    },
    {
        category: 'Painters',
        category_image: painters_category
    },
    {
        category: 'Roofers',
        category_image: roofers_category
    },
    {
        category: 'Tutors',
        category_image: tutors_category
    },
    {
        category: 'Web Developers',
        category_image: web_dev_category
    },
    {
        category: 'Photographers',
        category_image: photographers_category
    },
    {
        category: 'Physical Therapists',
        category_image: physical_category
    },
    {
        category: 'Electricians',
        category_image: electricians_category
    },
    {
        category: 'Graphic Designers',
        category_image: graphic_category
    },
    {
        category: 'HVAC Technicians',
        category_image: hvac_technician_category
    },
    {
        category: 'Event Planners',
        category_image: event_planners_category
    }
];

// Review Data
export const reviews = [
    {
        reviewer_image: review1,
        reviewer_name: 'John Williams',
        reviewer_city: 'Colombo',
        review_about: "I’ve used this platform multiple times now, and it’s been a fantastic experience every time. The interface is user-friendly, and finding service providers in my area is quick and easy. I love that I can compare reviews and get instant quotes before booking. Every professional I've hired so far has been reliable and skilled. Highly recommend this app for anyone looking to get things done around the house!" 
    },
    {
        reviewer_image: review2,
        reviewer_name: 'Thalapathy Vijay',
        reviewer_city: 'Chennai',
        review_about: "I’ve used this platform multiple times now, and it’s been a fantastic experience every time. The interface is user-friendly, and finding service providers in my area is quick and easy. I love that I can compare reviews and get instant quotes before booking. Every professional I've hired so far has been reliable and skilled. Highly recommend this app for anyone looking to get things done around the house!" 
    },
    {
        reviewer_image: review3,
        reviewer_name: 'Brock Lesnar',
        reviewer_city: 'Washington',
        review_about: "I’ve used this platform multiple times now, and it’s been a fantastic experience every time. The interface is user-friendly, and finding service providers in my area is quick and easy. I love that I can compare reviews and get instant quotes before booking. Every professional I've hired so far has been reliable and skilled. Highly recommend this app for anyone looking to get things done around the house!" 
    },
    {
        reviewer_image: review4,
        reviewer_name: 'Kevin Arnold',
        reviewer_city: 'Sydney',
        review_about: "I’ve used this platform multiple times now, and it’s been a fantastic experience every time. The interface is user-friendly, and finding service providers in my area is quick and easy. I love that I can compare reviews and get instant quotes before booking. Every professional I've hired so far has been reliable and skilled. Highly recommend this app for anyone looking to get things done around the house!" 
    }
];

export const posts = [
    {
        _id: "001",
        provider_name: 'Asjad Ahamed',
        provider_image: review1,
        category: 'Web Developers',
        time: '08:30 PM',
        date: '28 Aug 2024',
        images: [web_dev_category, graphic_category,plumbers_category],
        post_description: 'This social marketing platform simplifies managing and optimizing online presence across multiple social media platforms. It offers tools for scheduling posts, tracking engagement, and running targeted ad campaigns.'
    },
    {
        _id: "002",
        provider_name: 'Rasmy Mohamed',
        provider_image: review2,
        category: 'Graphic Designers',
        time: '08:30 PM',
        date: '28 Aug 2024',
        images: [ graphic_category,plumbers_category],
        post_description: 'This social marketing platform simplifies managing and optimizing online presence across multiple social media platforms. It offers tools for scheduling posts, tracking engagement, and running targeted ad campaigns.'
    },
    {
        _id: "003",
        provider_name: 'Sujair Ibrahim',
        provider_image: review2,
        category: 'Graphic Designers',
        time: '08:30 PM',
        date: '28 Aug 2024',
        images: [plumbers_category],
        post_description: 'This social marketing platform simplifies managing and optimizing online presence across multiple social media platforms. It offers tools for scheduling posts, tracking engagement, and running targeted ad campaigns.'
    },
    {
        _id: "004",
        provider_name: 'Asloof',
        provider_image: review4,
        category: 'Graphic Designers',
        time: '08:30 PM',
        date: '28 Aug 2024',
        images: [carpenters_category],
        post_description: 'This social marketing platform simplifies managing and optimizing online presence across multiple social media platforms. It offers tools for scheduling posts, tracking engagement, and running targeted ad campaigns.'
    },
    {
        _id: "005",
        provider_name: 'Fashan',
        provider_image: review2,
        category: 'Graphic Designers',
        time: '08:30 PM',
        date: '28 Aug 2024',
        images: [plumbers_category],
        post_description: 'This social marketing platform simplifies managing and optimizing online presence across multiple social media platforms. It offers tools for scheduling posts, tracking engagement, and running targeted ad campaigns.'
    },
    {
        _id: "006",
        provider_name: 'Mohamed Afran',
        provider_image: review4,
        category: 'Graphic Designers',
        time: '08:30 PM',
        date: '28 Aug 2024',
        images: [painters_category,web_dev_category, graphic_category,plumbers_category],
        post_description: 'This social marketing platform simplifies managing and optimizing online presence across multiple social media platforms. It offers tools for scheduling posts, tracking engagement, and running targeted ad campaigns.'
    },
    {
        _id: "006",
        provider_name: 'Mohamed Afran',
        provider_image: review4,
        category: 'Graphic Designers',
        time: '08:30 PM',
        date: '28 Aug 2024',
        images: [painters_category,web_dev_category, graphic_category,plumbers_category],
        post_description: 'This social marketing platform simplifies managing and optimizing online presence across multiple social media platforms. It offers tools for scheduling posts, tracking engagement, and running targeted ad campaigns.'
    },
    {
        _id: "006",
        provider_name: 'Mohamed Afran',
        provider_image: review4,
        category: 'Graphic Designers',
        time: '08:30 PM',
        date: '28 Aug 2024',
        images: [painters_category,web_dev_category, graphic_category,plumbers_category],
        post_description: 'This social marketing platform simplifies managing and optimizing online presence across multiple social media platforms. It offers tools for scheduling posts, tracking engagement, and running targeted ad campaigns.'
    },
    {
        _id: "007",
        provider_name: 'Fasha Jiffry',
        provider_image: review4,
        category: 'Graphic Designers',
        time: '08:30 PM',
        date: '28 Aug 2024',
        images: [graphic_category],
        post_description: 'This social marketing platform simplifies managing and optimizing online presence across multiple social media platforms. It offers tools for scheduling posts, tracking engagement, and running targeted ad campaigns.'
    },
]

export const providerData = [
    {
        provider_name : 'Asjad Ahamed',
        provider_image: review2,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Web Developers',
        provider_email: 'asjad2001@icloud.com',
        provider_phone: '761257751',
        available: true
    }
]

export const providers = [
    {
        _id: "001",
        provider_name: 'Asjad Ahamed',
        provider_image: review2,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Web Developers',
        provider_email: 'asjad2001@icloud.com',
        provider_phone: '761257751',
        available: true
    },
    {
        _id: "002",
        provider_name: 'Rasmy Mohamed',
        provider_image: review1,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Graphic Designers',
        provider_email: 'rasmy2001@icloud.com',
        provider_phone: '761257751',
        available: true
    },
    {
        _id: "003",
        provider_name: 'Sujair Ibrahim',
        provider_image: review3,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Event Planners',
        provider_email: 'rasmy2001@icloud.com',
        provider_phone: '761257751',
        available: true
    },
    {
        _id: "004",
        provider_name: 'Asloof',
        provider_image: review1,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Painters',
        provider_email: 'rasmy2001@icloud.com',
        provider_phone: '761257751',
        available: true
    },
    {
        _id: "005",
        provider_name: 'Fashan',
        provider_image: review4,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Plumbers',
        provider_email: 'rasmy2001@icloud.com',
        provider_phone: '761257751',
        available: true
    },
    {
        _id: "006",
        provider_name: 'Mohamed Afran',
        provider_image: review2,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Web Developers',
        provider_email: 'asjad2001@icloud.com',
        provider_phone: '761257751',
        available: true
    },
    {
        _id: "007",
        provider_name: 'Fasha Jiffry',
        provider_image: review1,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Graphic Designers',
        provider_email: 'rasmy2001@icloud.com',
        provider_phone: '761257751',
        available: true
    },
    {
        _id: "008",
        provider_name: 'Haya Maryam',
        provider_image: review3,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Event Planners',
        provider_email: 'rasmy2001@icloud.com',
        provider_phone: '761257751',
        available: true
    },
    {
        _id: "009",
        provider_name: 'Ahyan Ahamed',
        provider_image: review1,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Painters',
        provider_email: 'rasmy2001@icloud.com',
        provider_phone: '761257751',
        available: true
    },
    {
        _id: "010",
        provider_name: 'Shareefa Dhatha',
        provider_image: review4,
        provider_bio: 'I am Asjad Ahamed. I have 04 years experience in Full Stack Developer. I expert in ReactJs, NextJs, NodeJs, ExpressJs and Firebase.',
        category: 'Plumbers',
        provider_email: 'rasmy2001@icloud.com',
        provider_phone: '761257751',
        available: true
    },
]