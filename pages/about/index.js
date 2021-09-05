import Image from 'next/image';
import AxiomLab from '../../public/Images/AboutUs.png'


const About = () => {
    return ( 
        <>
        <div className="container mx-auto px-2">
            <div className="flex h-auto">
                <Image className="w-full" src={AxiomLab} alt="AxiomLab"/>
            </div>
            <div className="my-8">
                <p className="text-lg text-gray-600 text-justify mb-5">
                            is to set up with years of expertise in the safety industry with a sole purpose
                    of delivering safe environment, both at home and workplace.
                    We majorly deal with wet and slip floor safety, with products that are user friendly and
                    eco friendly.
                    </p>

                 <p className="text-lg text-gray-600 text-justify mb-5">    
                    Accident prone zones that arise at home and work area are; bathrooms, staircase, tiled
                    open area, etc. These accidents generally are crippling and in some cases, life
                    threatening, due to slip &amp; fall and ignorance. The victims end up with twisted and
                    damaged limbs, fractures, and many cases head and impact injuries.
                    </p>

                    <p className="text-lg text-gray-600 text-justify mb-5">
                    Awareness in this area are generally lean and not on focus, but gradually growing as
                    one of the growing manufacturing industry in India. 
                    At the onset, our core objective is to manufacture quality outcome in consideration
                    with merits &amp; demerits of the resulting products. Our experienced research team have
                    rendered maxim efforts, time and utilise best possible formulating techniques in
                    diligent working environment. Their dissertation in formulation of resulting products
                    and passes-on remarkable ideas to improve the quality of our products, productivity
                    along with range of innovative solutions to help &amp; solve according to the merit of
                    demand that could reach to satisfy our patron, client and customer.
                    </p>
                    
                    <p className="text-lg text-gray-600 text-justify ">
                    Our establishment is ideally characterized by care, performance and perseverance in
                    carrying out tasks by well experienced &amp; qualified professionals.
                </p>
            </div>
        </div>
        </>
     );
}
 
export default About;