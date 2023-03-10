type Person2 = {
    name: string;
}

type Email = {
    email: string;
}

type Phone = {
    phone: string;
}


type ContactDetails = 
& Person2
& Email
& Phone;

function contact(details: ContactDetails) {
    console.log(`Dear ${details.name} .
    I hope you have received our email at ${details.email}.
    We will call you at ${details.phone} shortly ,`) ;
}
