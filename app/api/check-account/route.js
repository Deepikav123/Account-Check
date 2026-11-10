export async function POST(req) {
    const socialMediaObject = [
        {
            platform: "Facebook",
            category: "Social Media",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"
        },
        {
            platform: "Instagram",
            category: "Social Media",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        },
        {
            platform: "WhatsApp",
            category: "Social Media",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        }
    ]
    const eCommerceObject = [
        {
            platform: "Amazon",
            category: "E-commerce",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        },
        {
            platform: "Flipkart",
            category: "E-commerce",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        },
        {
            platform: "Myntra",
            category: "E-commerce",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        }

    ]
    const foodDeliveryObject = [
        {
            platform: "Swiggy",
            category: "Food Delivery",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        },
        {
            platform: "Zomato",
            category: "Food Delivery",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        },
        {
            platform: "Domino's",
            category: "Food Delivery",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        }
    ]
    const travelObject = [
        {
            platform: "MakeMyTrip",
            category: "Travel",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        },
        {
            platform: "Booking.com",
            category: "Travel",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        },
        {
            platform: "Goibibo",
            category: "Travel",
            status: Math.random() < 0.5 ? "Registered" : "Not registered"

        }

    ]

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
        await new Promise((resolve) => {
            setTimeout(resolve, Math.random() * 1000 + 1000);
        })
        const allPlatforms = [
            ...socialMediaObject,
            ...eCommerceObject,
            ...foodDeliveryObject,
            ...travelObject
        ];
        const failedCheckIndex = Math.floor(Math.random() * allPlatforms.length);
        allPlatforms[failedCheckIndex].status = "Check failed"
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

export async function PUT(req) {
    try {
        const body = await req.json();
        const data = body.failedData;
        const validate = data.filter((d) => d.status != "Check failed");
        if (validate.length>0) {
            return Response.json(
                { message: "Incorrect data" },
                { status: 400 }
            )
        }
        await new Promise((resolve) => {
            setTimeout(resolve, Math.random() * 1000 + 1000);
        })
        const updatedData = data.map((d) =>({
            ...d,
            status :Math.random() < 0.5 ? "Registered" : "Not registered"
        }) 

        );
        const result={
            updatedData:updatedData
        }
        return Response.json(
            result,{
                status:200
            }
        )
    }
     catch {
        return Response.json({ message: "Something went wrong" },
            { status: 500 })
    }
}