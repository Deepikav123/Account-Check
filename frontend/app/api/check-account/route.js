
const socialMediaObject = [
    {
        platform: "Facebook",
        category: "Social Media",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"
    },
    {
        platform: "Instagram",
        category: "Social Media",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    },
    {
        platform: "WhatsApp",
        category: "Social Media",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    }
]
const eCommerceObject = [
    {
        platform: "Amazon",
        category: "E-commerce",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    },
    {
        platform: "Flipkart",
        category: "E-commerce",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    },
    {
        platform: "Myntra",
        category: "E-commerce",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    }

]
const foodDeliveryObject = [
    {
        platform: "Swiggy",
        category: "Food Delivery",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    },
    {
        platform: "Zomato",
        category: "Food Delivery",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    },
    {
        platform: "Domino's",
        category: "Food Delivery",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    }
]
const travelObject = [
    {
        platform: "MakeMyTrip",
        category: "Travel",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    },
    {
        platform: "Booking.com",
        category: "Travel",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    },
    {
        platform: "Goibibo",
        category: "Travel",
        status: Math.random() > 0.5 ? "Registered" : "Not-registered"

    }

]


export async function POST(req) {
    try {
        const body = await req.json();
        const data = body.mobile;
        const valid = /^[6-9]\d{9}$/;
        if (!valid.test(data)) {
            return Response.json({
                message: "Invalid Mobile Number"
            },
                { status: 400 });
        }
        const result = {
            socialMediaCategory: socialMediaObject,
            eCommerceCategory: eCommerceObject,
            foodDeliveryCategory: foodDeliveryObject,
            travelCategory: travelObject,
            message: "Mobile number received successfully"
        }

        return Response.json(result, {
            status: 200
        })

    }
    catch {
        return Response.json({ message: "Something went wrong" },
            { status: 500 })
    }
}