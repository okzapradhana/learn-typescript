interface Starks{
    name: "Jon" | "Ben";
    age?: number; //use question mark to set the property to be optional
    city: string;
}

function test(props: Starks){
    console.log(props.name)
}

test({name: "Jon", city: "San Fransisco"})
test({name: "Jon"}) //will throw error because the city parameter is missing
test({name: "Okza"}) //will throw error because the allowed value is Jon or Ben