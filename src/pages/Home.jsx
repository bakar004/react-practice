import Card from "./Card";
function Home(){
    // Array of objects
    const services=[
        {
            title : 'Web Development',
            desc : 'javascript fullstack services',
            btn : 'Add to Cart'
        },
         {
            title : 'Web Development',
            desc : 'javascript fullstack services',
            btn : 'Add to Cart'
        },
         {
            title : 'Web Development',
            desc : 'javascript fullstack services',
            btn : 'Add to Cart'
        },
         {
            title : 'Web Development',
            desc : 'javascript fullstack services',
            btn : 'Add to Cart'
        }
    ]

    return(
        <>
        <main>
            <section>
                <div>
                    <h1></h1>
                    <p></p>
                 </div>
            {/* //     <div className="grid grid-cols-3">
            //     <Card title='Card 1 Title' btn='Card 1 btn' />
            //     <Card title='Card 2 Title' btn='Card 1 btn' />
            //     <Card title='Card 3 Title' btn='Card 1 btn' />
            //     </div>  */}

        {/* efficient approach to use props */}
        <div className="grid grid-cols-4 ">
            {services.map((service) => (
                <Card
                key = {service.id}
                {...service}
                
                
                />


           ))}
        </div>
            </section>
        </main>
        </>
    )
    
}

export default Home;